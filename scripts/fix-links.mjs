/**
 * Rewrites internal WordPress links in MDX files to local /blog/SLUG paths.
 * Run: node scripts/fix-links.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "content", "posts");

// All slugs we now host locally
const LOCAL_SLUGS = new Set(
  fs.readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
);

// Pages that existed on WP but have no equivalent — map to best local target
const FALLBACKS = {
  "contact": "/#contact",
  "mentoring": "/#personal",
  "mentoring-career-data": "/#personal",
  "recommendations": "/#personal",
  "blog": "/blog",
  "ai-prototyping": "/blog/ai-prototyping-data-visualization",
};

const WP_HOSTS = [
  "shubhanshugupta.com",
  "new.shubhanshugupta.com",
];

function rewriteUrl(url) {
  let parsed;
  try { parsed = new URL(url); } catch { return null; }

  const isWp = WP_HOSTS.some((h) => parsed.hostname === h);
  if (!isWp) return null;

  // e.g. /scratch-bootcamp/ → scratch-bootcamp
  const slug = parsed.pathname.replace(/^\/|\/$/g, "");

  if (!slug) return "/blog";
  if (LOCAL_SLUGS.has(slug)) return `/blog/${slug}`;
  if (FALLBACKS[slug]) return FALLBACKS[slug];

  // Handle anchor links: /3-months-of-pm/#section → /blog/3-months-of-pm#section
  const baseSlug = slug.split("#")[0];
  const anchor = parsed.hash || "";
  if (LOCAL_SLUGS.has(baseSlug)) return `/blog/${baseSlug}${anchor}`;

  return null; // leave untouched
}

// Match markdown links: [text](url)  — skip image links (those start with !)
const LINK_RE = /(?<!!)\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g;

let totalFixed = 0;
const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

for (const fname of files) {
  const filePath = path.join(POSTS_DIR, fname);
  let content = fs.readFileSync(filePath, "utf-8");
  let fileFixed = 0;

  content = content.replace(LINK_RE, (full, text, url) => {
    const local = rewriteUrl(url);
    if (!local) return full;
    fileFixed++;
    return `[${text}](${local})`;
  });

  if (fileFixed) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`✓ ${fname} — ${fileFixed} link(s) updated`);
    totalFixed += fileFixed;
  }
}

console.log(`\n✅ Done — ${totalFixed} links rewritten across ${files.length} posts`);
