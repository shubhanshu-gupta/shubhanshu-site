import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs, CATEGORIES } from "@/lib/posts";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Shubhanshu Gupta`,
    description: post.description,
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  product:   "bg-copper-100 text-copper-700",
  technical: "bg-cream-100 text-ink-700",
  personal:  "bg-live-bg text-live-green",
  books:     "bg-mrr-bg text-mrr-gold",
  food:      "bg-cream-100 text-ink-500",
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const categoryLabel = CATEGORIES[post.category] ?? post.category;
  const categoryColor = CATEGORY_COLORS[post.category] ?? "bg-cream-100 text-ink-500";

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
          <Link
            href="/blog"
            className="font-mono text-xs text-ink-300 hover:text-copper-500 transition-colors flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M9 6H3M5 4L3 6l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All writing
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-16 md:py-20">

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${categoryColor}`}>
              {categoryLabel}
            </span>
            <time
              className="text-xs font-mono text-ink-300"
              dateTime={post.date}
            >
              {new Date(post.date).toLocaleDateString("en-SG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight mb-4">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-ink-500 text-lg leading-relaxed border-l-2 border-copper-200 pl-4">
              {post.description}
            </p>
          )}
        </header>

        {/* Divider */}
        <div className="border-t border-cream-200 mb-12" />

        {/* Body */}
        <div
          className="
            prose prose-lg max-w-none
            prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink-900
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
            prose-p:text-ink-500 prose-p:leading-relaxed
            prose-a:text-copper-500 prose-a:no-underline hover:prose-a:text-copper-700 hover:prose-a:underline
            prose-strong:text-ink-900 prose-strong:font-semibold
            prose-em:text-ink-500
            prose-li:text-ink-500 prose-li:leading-relaxed
            prose-ul:my-4 prose-ol:my-4
            prose-blockquote:border-l-copper-300 prose-blockquote:text-ink-500 prose-blockquote:not-italic
            prose-code:text-copper-700 prose-code:bg-copper-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-ink-900 prose-pre:border prose-pre:border-cream-200 prose-pre:rounded-xl
            prose-pre:text-cream-50
            prose-img:rounded-xl prose-img:my-8 prose-img:border prose-img:border-cream-200
            prose-hr:border-cream-200 prose-hr:my-10
            prose-table:text-sm
            prose-th:text-ink-700 prose-th:font-semibold prose-th:bg-cream-50 prose-th:border prose-th:border-cream-200
            prose-td:text-ink-500 prose-td:border prose-td:border-cream-200
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-cream-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-copper-500 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M11 7H3M5 4L2 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to all writing
            </Link>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://shubhanshugupta.setmore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200"
              >
                Book a chat →
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-500 hover:text-ink-900 border border-cream-200 hover:border-ink-500 px-4 py-2 rounded-full transition-all duration-200"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </footer>
      </article>

    </div>
  );
}
