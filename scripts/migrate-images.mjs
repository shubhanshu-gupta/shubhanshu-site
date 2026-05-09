/**
 * Downloads WordPress images into public/images/posts/<slug>/
 * and rewrites MDX files to use local paths.
 * Run: node scripts/migrate-images.mjs
 */

import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "content", "posts");
const PUBLIC_IMG = path.join(ROOT, "public", "images", "posts");

// Only download from our own WordPress servers (GCP + CDN variants)
const OWN_HOSTS = [
  "new.shubhanshugupta.com",
  "shubhanshugupta.com",
  "i0.wp.com",
  "i1.wp.com",
  "i2.wp.com",
];

function isOwnImage(url) {
  try {
    const host = new URL(url).hostname;
    return OWN_HOSTS.some((h) => host === h || host.endsWith("." + h));
  } catch { return false; }
}

function safeFilename(url) {
  // Strip query strings, decode, and sanitise
  const raw = url.split("?")[0].split("/").pop() || "image";
  return raw.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    mod.get(url, { timeout: 15000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", (e) => {
      fs.existsSync(dest) && fs.unlinkSync(dest);
      reject(e);
    });
  });
}

const IMAGE_RE = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;

let downloaded = 0, skipped = 0, failed = 0;

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

for (const fname of files) {
  const slug = fname.replace(/\.mdx$/, "");
  const filePath = path.join(POSTS_DIR, fname);
  let content = fs.readFileSync(filePath, "utf-8");
  let changed = false;

  const matches = [...content.matchAll(IMAGE_RE)];
  if (!matches.length) continue;

  const imgDir = path.join(PUBLIC_IMG, slug);

  for (const match of matches) {
    const [full, alt, url] = match;
    if (!isOwnImage(url)) { skipped++; continue; }

    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

    const filename = safeFilename(url);
    const localPath = path.join(imgDir, filename);
    const publicPath = `/images/posts/${slug}/${filename}`;

    if (!fs.existsSync(localPath)) {
      try {
        await download(url, localPath);
        console.log(`  ✓ ${slug}/${filename}`);
        downloaded++;
      } catch (e) {
        console.error(`  ✗ ${url} — ${e.message}`);
        failed++;
        continue;
      }
    }

    content = content.replace(full, `![${alt}](${publicPath})`);
    changed = true;
  }

  if (changed) fs.writeFileSync(filePath, content, "utf-8");
}

console.log(`\n✅ Done — downloaded: ${downloaded}, external (kept): ${skipped}, failed: ${failed}`);
