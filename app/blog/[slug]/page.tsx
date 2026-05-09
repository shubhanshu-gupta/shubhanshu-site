import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-white transition-colors mb-12 inline-block"
        >
          ← All writing
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-0.5 rounded-full border border-neutral-700 text-neutral-400 capitalize">
              {post.category}
            </span>
            <time className="text-neutral-500 text-xs">
              {new Date(post.date).toLocaleDateString("en-SG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl leading-tight">{post.title}</h1>
        </header>

        <article
          className="prose prose-invert prose-neutral max-w-none
            prose-headings:font-serif prose-headings:font-normal
            prose-h2:text-2xl prose-h3:text-xl
            prose-a:text-white prose-a:underline prose-a:underline-offset-2 prose-a:decoration-neutral-600 hover:prose-a:decoration-white
            prose-img:rounded-lg prose-img:my-8
            prose-code:text-neutral-300 prose-code:bg-neutral-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800
            prose-blockquote:border-l-neutral-700 prose-blockquote:text-neutral-400
            prose-hr:border-neutral-800
            prose-strong:text-white
            prose-li:text-neutral-300
            prose-p:text-neutral-300 prose-p:leading-relaxed
            prose-table:text-sm prose-td:border prose-td:border-neutral-700 prose-th:border prose-th:border-neutral-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-16 pt-8 border-t border-neutral-800">
          <Link
            href="/blog"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            ← Back to all writing
          </Link>
        </footer>
      </div>
    </main>
  );
}
