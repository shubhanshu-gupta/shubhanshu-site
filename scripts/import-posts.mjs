/**
 * Converts WordPress posts.json export → MDX files in content/posts/
 * Usage: node scripts/import-posts.mjs <path-to-posts.json>
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import TurndownService from "turndown";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "content", "posts");

// --- Turndown setup ---
const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  hr: "---",
});

// Keep raw HTML tables (Markdown tables are fragile)
td.addRule("table", {
  filter: ["table"],
  replacement: (_, node) => `\n\n${node.outerHTML}\n\n`,
});

// Convert <figure> with <img> to Markdown image + optional caption
td.addRule("figure", {
  filter: "figure",
  replacement: (_, node) => {
    const img = node.querySelector("img");
    const caption = node.querySelector("figcaption");
    if (!img) return "";
    const src = img.getAttribute("src") || "";
    const alt = (img.getAttribute("alt") || "").replace(/"/g, "'");
    const cap = caption ? `\n*${caption.textContent.trim()}*` : "";
    return `\n\n![${alt}](${src})${cap}\n\n`;
  },
});

// Strip table-of-contents and custom plugin blocks entirely
td.addRule("dropCustomBlocks", {
  filter: (node) => {
    const cls = node.className || "";
    return (
      cls.includes("rank-math") ||
      cls.includes("wp-block-rank-math") ||
      cls.includes("ub-table-of-contents") ||
      cls.includes("qubely-") ||
      node.tagName === "STYLE" ||
      node.tagName === "SCRIPT"
    );
  },
  replacement: () => "",
});

// --- Helpers ---

function stripGutenbergComments(html) {
  // Remove opening block comments: <!-- wp:whatever {...} -->
  // Remove closing block comments: <!-- /wp:whatever -->
  return html
    .replace(/<!--\s*wp:[^\n]*?-->/g, "")
    .replace(/<!--\s*\/wp:[^\s]*\s*-->/g, "")
    .trim();
}

function extractDescription(html) {
  // Grab first plain-text sentence for meta description
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const sentence = text.split(/[.!?]/)[0];
  return sentence.slice(0, 160).replace(/"/g, "'");
}

function slugToCategory(slug) {
  const bookSlugs = ["book-recommendation-money-trap", "book-recommendation-ben-horowitz"];
  const foodSlugs = ["cheese-cake-osaka", "salads"];
  const pmSlugs = ["autonomy-at-workplace", "how-to-estimate-revenue-for-new-features",
    "3-months-of-product-management-7-learnings", "cross-border-instant-payments",
    "ai-prototyping-data-visualization"];
  const mlSlugs = ["topic-modeling-nlp", "machine-learning-roadmap", "machine-learning-crash-course",
    "speed-up-apply-function-pandas-dataframe", "collocations-in-nlp-using-nltk-library",
    "time-series-analysis-using-pandas", "handling-imbalanced-datasets-with-smote-in-python",
    "multi-class-classification", "emotions-in-ted-talks", "data-preprocessing-r",
    "engineering-streaming-concurrent-json-data", "a-survey-of-api-management-platforms"];

  if (bookSlugs.includes(slug)) return "books";
  if (foodSlugs.includes(slug)) return "food";
  if (pmSlugs.includes(slug)) return "product";
  if (mlSlugs.includes(slug)) return "technical";
  return "personal";
}

function convertPost(post) {
  const { post_title, post_name, post_date, post_content } = post;

  const date = post_date.split(" ")[0];
  const description = extractDescription(post_content);
  const category = slugToCategory(post_name);

  const stripped = stripGutenbergComments(post_content);
  const markdown = td.turndown(stripped);

  // Escape any quotes in title for YAML safety
  const safeTitle = post_title.replace(/"/g, '\\"');

  const frontmatter = `---
title: "${safeTitle}"
date: "${date}"
slug: "${post_name}"
category: "${category}"
description: "${description}"
---

`;

  return frontmatter + markdown;
}

// --- Main ---

const inputFile = process.argv[2] || path.join(ROOT, "posts.json");

if (!fs.existsSync(inputFile)) {
  console.error(`File not found: ${inputFile}`);
  console.error(`Usage: node scripts/import-posts.mjs <path-to-posts.json>`);
  process.exit(1);
}

const posts = JSON.parse(fs.readFileSync(inputFile, "utf-8"));

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

let converted = 0;
for (const post of posts) {
  try {
    const mdx = convertPost(post);
    const filename = `${post.post_name}.mdx`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), mdx, "utf-8");
    console.log(`✓  ${filename}`);
    converted++;
  } catch (err) {
    console.error(`✗  ${post.post_name}: ${err.message}`);
  }
}

console.log(`\n✅ Converted ${converted}/${posts.length} posts → content/posts/`);
