import Link from "next/link";
import AnimateIn from "./AnimateIn";
import type { PostMeta } from "@/lib/posts";

// CHANGE 11: 6-category structure, all internal links use /blog/SLUG
const CATEGORIES = [
  {
    label: "AI & Product",
    color: "bg-copper-100 text-copper-700",
    posts: [
      { title: "Data Visualization for AI Prototyping", date: "Jan 2025", url: "/blog/ai-prototyping-data-visualization", external: false },
      { title: "AI Prototyping for Product Managers — Full Series", date: "Ongoing", url: "https://www.youtube.com/playlist?list=PLUFVOl7WhQovfwvTaNRraW_Ox0iCZ0IbN", external: true },
    ],
  },
  {
    label: "Payments & Fintech",
    color: "bg-live-bg text-live-green",
    posts: [
      { title: "Stablecoin Atlas Weekly — Substack", date: "Weekly", url: "https://stablecoinatlas.substack.com", external: true },
      { title: "Stablecoin Atlas — Beehiiv Newsletter", date: "Weekly", url: "https://stablecoinatlas.beehiiv.com", external: true },
    ],
  },
  {
    label: "Data Science & Engineering",
    color: "bg-cream-100 text-ink-700",
    posts: [
      { title: "Machine Learning Roadmap: An Effective Guidebook", date: "Reference", url: "/blog/machine-learning-roadmap", external: false },
      { title: "Speed Up Pandas Apply Function", date: "May 2020", url: "/blog/speed-up-apply-function-pandas-dataframe", external: false },
    ],
  },
  {
    label: "Teaching & Mentoring",
    color: "bg-mrr-bg text-mrr-gold",
    posts: [
      { title: "From Code in the Community to My Own Scratch Bootcamp", date: "May 2025", url: "/blog/scratch-bootcamp", external: false },
      { title: "Evaluating Effectiveness of Mentorship", date: "Jun 2020", url: "/blog/evaluating-effectiveness-of-mentorship", external: false },
    ],
  },
  {
    label: "Books",
    color: "bg-cream-100 text-ink-700",
    posts: [
      { title: "The Hard Thing About Hard Things — Ben Horowitz", date: "Jan 2025", url: "/blog/book-recommendation-ben-horowitz", external: false },
      { title: "The Money Trap", date: "Jan 2025", url: "/blog/book-recommendation-money-trap", external: false },
    ],
  },
  {
    label: "Food & Travel",
    color: "bg-cream-100 text-ink-700",
    posts: [
      { title: "Cheese Cake at Rikuro Daimaru Umeda, Osaka", date: "Feb 2025", url: "/blog/cheese-cake-osaka", external: false },
      { title: "Salad notes", date: "Nov 2019", url: "/blog/salads", external: false },
    ],
  },
];

type Props = { recentPosts: PostMeta[] };

export default function Writing({ recentPosts }: Props) {
  return (
    <section id="writing" className="bg-white py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-4">04 · Writing</p>
          {/* CHANGE 11: updated headline */}
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Writing — across product,<br className="hidden md:block" /> payments, and everything in between
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-16">
            Essays, guides, and notes across product, AI, payments, and the things I&apos;m
            curious about. The Stablecoin Atlas newsletter is where I write most
            consistently on fintech — everything else lives here.
          </p>
        </AnimateIn>

        {/* 6-category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CATEGORIES.map((cat, i) => (
            <AnimateIn key={cat.label} delay={i * 60}>
              <div className="p-7 rounded-2xl border border-cream-200 bg-cream-50 h-full">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${cat.color} mb-5 inline-block`}>
                  {cat.label}
                </span>
                <ul className="space-y-4">
                  {cat.posts.map((post) => (
                    <li key={post.title}>
                      {post.external ? (
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-3"
                        >
                          <span className="text-copper-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
                          <span>
                            <span className="font-medium text-ink-900 text-sm group-hover:text-copper-500 transition-colors leading-snug block">
                              {post.title}
                            </span>
                            {post.date && <span className="text-xs text-ink-300 font-mono mt-1 block">{post.date}</span>}
                          </span>
                        </a>
                      ) : (
                        <Link href={post.url} className="group flex items-start gap-3">
                          <span className="text-copper-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
                          <span>
                            <span className="font-medium text-ink-900 text-sm group-hover:text-copper-500 transition-colors leading-snug block">
                              {post.title}
                            </span>
                            {post.date && <span className="text-xs text-ink-300 font-mono mt-1 block">{post.date}</span>}
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Recent posts — dynamic from MDX content */}
        <AnimateIn>
          <h3 className="font-display font-semibold text-2xl text-ink-900 mb-6">Recent posts</h3>
          <div className="divide-y divide-cream-200">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center justify-between gap-6 py-5 hover:bg-cream-50 -mx-4 px-4 rounded-xl transition-colors duration-150"
              >
                <div>
                  <span className="text-xs font-mono text-ink-300 mb-1 block capitalize">{post.category}</span>
                  <span className="font-medium text-ink-900 group-hover:text-copper-500 transition-colors text-sm leading-snug">
                    {post.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono text-ink-300">
                    {new Date(post.date).toLocaleDateString("en-SG", { month: "short", year: "numeric" })}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-ink-300 group-hover:text-copper-500 transition-colors" aria-hidden="true">
                    <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-500 hover:text-copper-700 transition-colors"
            >
              All 30 posts on the blog
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
