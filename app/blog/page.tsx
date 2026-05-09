import Link from "next/link";
import { getAllPosts, CATEGORIES } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Shubhanshu Gupta",
  description: "Essays on product management, fintech, AI, data science, and life.",
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const active = searchParams?.category ?? "all";
  const allPosts = getAllPosts();
  const posts = active === "all" ? allPosts : allPosts.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-sm text-neutral-500 hover:text-white transition-colors mb-12 inline-block"
      >
        ← Back
      </Link>

      <h1 className="font-serif text-4xl mb-3">Writing</h1>
      <p className="text-neutral-400 mb-10 text-sm">
        {allPosts.length} essays on product, fintech, AI, and life.
      </p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {Object.entries(CATEGORIES).map(([key, label]) => (
          <Link
            key={key}
            href={key === "all" ? "/blog" : `/blog?category=${key}`}
            className={`px-3 py-1 rounded-full text-xs border transition-colors ${
              active === key
                ? "bg-white text-black border-white"
                : "border-neutral-700 text-neutral-400 hover:border-neutral-400 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Post list */}
      <ul className="space-y-0 divide-y divide-neutral-800/60">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-start justify-between gap-6 py-5 hover:bg-white/[0.02] -mx-3 px-3 rounded-lg transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium group-hover:text-neutral-100 leading-snug">
                  {post.title}
                </p>
                <p className="text-neutral-500 text-sm mt-1 line-clamp-2">{post.description}</p>
              </div>
              <time className="text-neutral-600 text-xs whitespace-nowrap pt-1 shrink-0">
                {new Date(post.date).toLocaleDateString("en-SG", {
                  year: "numeric",
                  month: "short",
                })}
              </time>
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="text-neutral-500 text-sm">No posts in this category yet.</p>
      )}
    </main>
  );
}
