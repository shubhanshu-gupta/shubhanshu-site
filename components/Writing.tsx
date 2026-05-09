import Link from "next/link";
import AnimateIn from "./AnimateIn";
import type { PostMeta } from "@/lib/posts";

const CATEGORIES = [
  {
    label: "AI & Payments",
    color: "bg-copper-100 text-copper-700",
    posts: [
      {
        title: "Data Visualization for AI Prototyping: How Product Managers Validate Hypotheses Quickly",
        date: "Jan 2025",
        url: "/blog/ai-prototyping-data-visualization",
      },
    ],
  },
  {
    label: "Product Management",
    color: "bg-cream-100 text-ink-700",
    posts: [
      {
        title: "Journey of Launching Cross Border Instant Payments",
        date: "Jul 2024",
        url: "/blog/cross-border-instant-payments",
      },
      {
        title: "Driving Revenue Growth: How to Estimate Projected Revenue for New Features",
        date: "Feb 2023",
        url: "/blog/how-to-estimate-revenue-for-new-features",
      },
    ],
  },
  {
    label: "Stablecoin & Fintech",
    color: "bg-live-bg text-live-green",
    posts: [
      {
        title: "Stablecoin Atlas Weekly",
        date: "Weekly digest",
        url: "https://stablecoinatlas.app",
        external: true,
      },
    ],
  },
  {
    label: "Teaching & Mentoring",
    color: "bg-mrr-bg text-mrr-gold",
    posts: [
      {
        title: "From Code in the Community to My Own Scratch Bootcamp",
        date: "May 2025",
        url: "/blog/scratch-bootcamp",
      },
      {
        title: "Machine Learning Roadmap: An Effective Guidebook",
        date: "Apr 2021",
        url: "/blog/machine-learning-roadmap",
      },
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
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Thinking in public
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-16">
            Essays, guides, and notes across product, AI, payments, and the things I&apos;m
            curious about. The Stablecoin Atlas newsletter is where I write most
            consistently on fintech — everything else lives here.
          </p>
        </AnimateIn>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CATEGORIES.map((cat, i) => (
            <AnimateIn key={cat.label} delay={i * 70}>
              <div className="p-7 rounded-2xl border border-cream-200 bg-cream-50 h-full">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${cat.color} mb-5 inline-block`}>
                  {cat.label}
                </span>
                <ul className="space-y-4">
                  {cat.posts.map((post) => (
                    <li key={post.title}>
                      {"external" in post && post.external ? (
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
                            <span className="text-xs text-ink-300 font-mono mt-1 block">{post.date}</span>
                          </span>
                        </a>
                      ) : (
                        <Link href={post.url} className="group flex items-start gap-3">
                          <span className="text-copper-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
                          <span>
                            <span className="font-medium text-ink-900 text-sm group-hover:text-copper-500 transition-colors leading-snug block">
                              {post.title}
                            </span>
                            <span className="text-xs text-ink-300 font-mono mt-1 block">{post.date}</span>
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

        {/* Recent posts — driven from actual MDX content */}
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
              All {recentPosts.length > 0 ? `${recentPosts.length > 4 ? "30" : recentPosts.length} ` : ""}posts on the blog
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
