/**
 * Matches remaining WP image URLs in MDX files against the extracted
 * wp-uploads archive and copies them to public/images/posts/<slug>/
 * Usage: node scripts/migrate-images-local.mjs <path-to-extracted-uploads>
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "content", "posts");
const PUBLIC_IMG = path.join(ROOT, "public", "images", "posts");

const UPLOADS_DIR =
  process.argv[2] ?? "/tmp/bitnami/wordpress/wp-content/uploads";

// Build a filename → full local path index from the archive
console.log("Indexing local archive...");
const localIndex = new Map(); // filename → absolute path
function indexDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) indexDir(full);
    else localIndex.set(entry.name, full);
  }
}
indexDir(UPLOADS_DIR);
console.log(`Indexed ${localIndex.size} files.\n`);

const IMAGE_RE = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;
const WP_HOSTS = ["new.shubhanshugupta.com", "shubhanshugupta.com", "i0.wp.com", "i1.wp.com", "i2.wp.com"];

function isWpImage(url) {
  try {
    const host = new URL(url).hostname;
    return WP_HOSTS.some((h) => host === h);
  } catch { return false; }
}

function filenameFromUrl(url) {
  return url.split("?")[0].split("/").pop() ?? "";
}

let copied = 0, missing = 0;

for (const fname of fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".mdx"))) {
  const slug = fname.replace(/\.mdx$/, "");
  const filePath = path.join(POSTS_DIR, fname);
  let content = fs.readFileSync(filePath, "utf-8");
  let changed = false;

  for (const match of [...content.matchAll(IMAGE_RE)]) {
    const [full, alt, url] = match;
    if (!isWpImage(url)) continue;

    const filename = filenameFromUrl(url);
    if (!filename) continue;

    const localSrc = localIndex.get(filename);
    if (!localSrc) {
      console.warn(`  ✗ not in archive: ${filename} (${slug})`);
      missing++;
      continue;
    }

    const imgDir = path.join(PUBLIC_IMG, slug);
    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

    const dest = path.join(imgDir, filename);
    if (!fs.existsSync(dest)) fs.copyFileSync(localSrc, dest);

    const publicPath = `/images/posts/${slug}/${filename}`;
    content = content.replace(full, `![${alt}](${publicPath})`);
    changed = true;
    copied++;
    console.log(`  ✓ ${slug}/${filename}`);
  }

  if (changed) fs.writeFileSync(filePath, content, "utf-8");
}

// Also copy the xlsx for machine-learning-roadmap
const xlsxSrc = path.join(UPLOADS_DIR, "2021", "04", "Machine-Learning-Roadmap.xlsx");
if (fs.existsSync(xlsxSrc)) {
  const xlsxDest = path.join(ROOT, "public", "Machine-Learning-Roadmap.xlsx");
  fs.copyFileSync(xlsxSrc, xlsxDest);
  // Rewrite the two links in machine-learning-roadmap.mdx
  const mlPath = path.join(POSTS_DIR, "machine-learning-roadmap.mdx");
  let mlContent = fs.readFileSync(mlPath, "utf-8");
  mlContent = mlContent.replaceAll(
    "http://new.shubhanshugupta.com/wp-content/uploads/2021/04/Machine-Learning-Roadmap.xlsx",
    "/Machine-Learning-Roadmap.xlsx"
  );
  fs.writeFileSync(mlPath, mlContent, "utf-8");
  console.log("  ✓ Machine-Learning-Roadmap.xlsx");
}

console.log(`\n✅ Done — copied: ${copied}, not found in archive: ${missing}`);
