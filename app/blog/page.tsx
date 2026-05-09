import Link from "next/link";
import { getAllPosts, CATEGORIES } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Shubhanshu Gupta",
  description: "Essays on product management, fintech, AI, data science, and life.",
};

const CATEGORY_COLORS: Record<string, string> = {
  product:   "bg-copper-100 text-copper-700",
  technical: "bg-cream-100 text-ink-700",
  personal:  "bg-live-bg text-live-green",
  books:     "bg-mrr-bg text-mrr-gold",
  food:      "bg-cream-100 text-ink-500",
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const active = searchParams?.category ?? "all";
  const allPosts = getAllPosts();
  const filtered =
    active === "all" ? allPosts : allPosts.filter((p) => p.category === active);

  // Category counts for the cloud
  const counts = Object.keys(CATEGORIES).reduce<Record<string, number>>((acc, key) => {
    acc[key] =
      key === "all"
        ? allPosts.length
        : allPosts.filter((p) => p.category === key).length;
    return acc;
  }, {});

  // Featured cards — top 2 most-recent posts only when "all" is active
  const featured = active === "all" ? allPosts.slice(0, 2) : [];
  const listPosts = active === "all" ? allPosts.slice(2) : filtered;

  return (
    <div className="min-h-screen bg-cream-50">

      {/* Sticky top nav */}
      <div className="border-b border-cream-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-site mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-semibold text-ink-900 hover:text-copper-500 transition-colors text-sm"
          >
            Shubhanshu Gupta
          </Link>
          <span className="font-mono text-xs text-ink-300 tracking-widest">WRITING</span>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6">

        {/* Page hero */}
        <div className="py-16 md:py-24 border-b border-cream-200">
          <p className="font-mono text-xs text-copper-500 tracking-widest uppercase mb-4">
            04 · Writing
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink-900 mb-5 leading-tight">
            Writing
          </h1>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl">
            {allPosts.length} essays across product, payments, AI, data science, teaching, and
            life. The Stablecoin Atlas newsletter is where I write most consistently on fintech
            — everything else lives here.
          </p>
        </div>

        {/* Category cloud */}
        <div className="py-7 border-b border-cream-200 flex flex-wrap gap-2 items-center">
          {Object.entries(CATEGORIES).map(([key, label]) => (
            <Link
              key={key}
              href={key === "all" ? "/blog" : `/blog?category=${key}`}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                active === key
                  ? "bg-ink-900 text-white border-ink-900"
                  : "bg-white text-ink-500 border-cream-200 hover:border-ink-500 hover:text-ink-900"
              }`}
            >
              {label}
              <span
                className={`font-mono text-[10px] tabular-nums ${
                  active === key ? "text-white/50" : "text-ink-300"
                }`}
              >
                {counts[key]}
              </span>
            </Link>
          ))}
        </div>

        <div className="py-12 md:py-16">

          {/* Featured cards — "all" view only */}
          {featured.length > 0 && (
            <div className="mb-14">
              <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-6">
                Latest
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group p-7 rounded-2xl bg-white border border-cream-200 card-lift flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${
                          CATEGORY_COLORS[post.category] ?? "bg-cream-100 text-ink-500"
                        }`}
                      >
                        {CATEGORIES[post.category] ?? post.category}
                      </span>
                      <time className="text-xs font-mono text-ink-300">
                        {new Date(post.date).toLocaleDateString("en-SG", {
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="font-display font-semibold text-xl text-ink-900 mb-3 leading-snug group-hover:text-copper-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-5 line-clamp-3">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-500 group-hover:text-copper-700 transition-colors">
                      Read
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M3 7h8M7 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Post list */}
          {listPosts.length > 0 && (
            <div>
              <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-6">
                {active === "all"
                  ? "All posts"
                  : `${CATEGORIES[active] ?? active} · ${listPosts.length} post${listPosts.length !== 1 ? "s" : ""}`}
              </p>
              <div className="divide-y divide-cream-200">
                {listPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-5 py-6 hover:bg-white -mx-4 px-4 rounded-xl transition-colors duration-150"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                            CATEGORY_COLORS[post.category] ?? "bg-cream-100 text-ink-500"
                          }`}
                        >
                          {CATEGORIES[post.category] ?? post.category}
                        </span>
                        <time className="text-[10px] font-mono text-ink-300">
                          {new Date(post.date).toLocaleDateString("en-SG", {
                            month: "short",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-ink-900 mb-1 leading-snug group-hover:text-copper-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-ink-500 leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 mt-1.5 text-ink-300 group-hover:text-copper-500 transition-colors"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-ink-500 text-sm py-8">No posts in this category yet.</p>
          )}

        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-cream-200 bg-white">
        <div className="max-w-site mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link
            href="/"
            className="font-mono text-xs text-ink-300 hover:text-copper-500 transition-colors"
          >
            ← Back to shubhanshugupta.com
          </Link>
          <div className="flex flex-wrap gap-6">
            <a
              href="https://stablecoinatlas.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-300 hover:text-copper-500 transition-colors"
            >
              Stablecoin Atlas Newsletter ↗
            </a>
            <a
              href="https://shubhanshugupta.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-300 hover:text-copper-500 transition-colors"
            >
              Book a chat ↗
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
