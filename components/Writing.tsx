"use client";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { trackEvent, EVENTS } from "@/lib/analytics";

// ── Featured strip — 4 curated posts shown first ──────────────────────────
const FEATURED_POSTS = [
  {
    category: "Payments & Fintech",
    categoryColor: "bg-live-bg text-live-green",
    title: "Journey of Launching Cross Border Instant Payments",
    description:
      "A first-hand account of taking instant cross-border payments from concept to live across five corridors — regulatory approvals, Treasury pricing negotiations, and the 2nd/3rd order thinking framework that made it work.",
    url: "/blog/cross-border-instant-payments",
    date: "Jul 2024",
    external: false,
  },
  {
    category: "Product Management",
    categoryColor: "bg-copper-100 text-copper-700",
    title: "Driving Revenue Growth: How to Estimate Projected Revenue for New Features",
    description:
      "A practical, example-driven framework for PMs who need to quantify revenue impact before a feature is built — covering assumptions, proxies, and how to make the number defensible in a planning review.",
    url: "/blog/how-to-estimate-revenue-for-new-features",
    date: "Feb 2023",
    external: false,
  },
  {
    category: "Product Management",
    categoryColor: "bg-copper-100 text-copper-700",
    title: "3 Months of Product Management — 7 Reflective Learnings",
    description:
      "Seven honest observations from the early months of transitioning into a PM role — what changed, what surprised, and what nobody tells you before you make the move from engineering or data science.",
    url: "/blog/3-months-of-product-management-7-learnings",
    date: "Jul 2022",
    external: false,
  },
  {
    category: "Data Science & AI",
    categoryColor: "bg-cream-100 text-ink-700",
    title: "Become a Story Telling Ninja: Presenting Data Science Models to Stakeholders",
    description:
      "How to translate a model's outputs into a narrative that executives understand and trust — the skill that separates data scientists who influence decisions from those who write reports nobody reads.",
    url: "/blog/art-of-story-telling",
    date: "Jul 2021",
    external: false,
  },
];

// ── Category grid — 4 categories (Books & Food moved to Personal section) ──
const CATEGORIES = [
  {
    label: "AI & Product",
    color: "bg-copper-100 text-copper-700",
    posts: [
      { title: "Data Visualization for AI Prototyping",             date: "Jan 2025", url: "/blog/ai-prototyping-data-visualization",                                     external: false },
      { title: "AI Prototyping for Product Managers — Full Series", date: "Ongoing",  url: "https://www.youtube.com/playlist?list=PLUFVOl7WhQovfwvTaNRraW_Ox0iCZ0IbN", external: true  },
    ],
  },
  {
    label: "Payments & Fintech",
    color: "bg-live-bg text-live-green",
    posts: [
      { title: "Stablecoin Atlas Weekly — Substack",    date: "Weekly", url: "https://stablecoinatlas.substack.com", external: true },
      { title: "Stablecoin Atlas — Beehiiv Newsletter", date: "Weekly", url: "https://stablecoinatlas.beehiiv.com",  external: true },
    ],
  },
  {
    label: "Data Science & Engineering",
    color: "bg-cream-100 text-ink-700",
    posts: [
      { title: "Machine Learning Roadmap: An Effective Guidebook", date: "Reference", url: "/blog/machine-learning-roadmap",                  external: false },
      { title: "Speed Up Pandas Apply Function",                   date: "May 2020",  url: "/blog/speed-up-apply-function-pandas-dataframe", external: false },
    ],
  },
  {
    label: "Teaching & Mentoring",
    color: "bg-mrr-bg text-mrr-gold",
    posts: [
      { title: "From Code in the Community to My Own Scratch Bootcamp", date: "May 2025", url: "/blog/scratch-bootcamp",                      external: false },
      { title: "Evaluating Effectiveness of Mentorship",               date: "Jun 2020", url: "/blog/evaluating-effectiveness-of-mentorship", external: false },
    ],
  },
];

// ── Curated recent list ────────────────────────────────────────────────────
const RECENT = [
  { title: "Journey of Launching Cross Border Instant Payments",                          category: "Payments & Fintech",  date: "Jul 2024", url: "/blog/cross-border-instant-payments",                   external: false },
  { title: "Driving Revenue Growth: Estimating Projected Revenue for New Features",       category: "Product Management",  date: "Feb 2023", url: "/blog/how-to-estimate-revenue-for-new-features",         external: false },
  { title: "Become a Story Telling Ninja: Presenting Data Science Models to Stakeholders",category: "Data Science & AI",   date: "Jul 2021", url: "/blog/art-of-story-telling",                            external: false },
  { title: "3 Months of Product Management — 7 Reflective Learnings",                    category: "Product Management",  date: "Jul 2022", url: "/blog/3-months-of-product-management-7-learnings",       external: false },
  { title: "Data Visualization for AI Prototyping",                                       category: "AI & Product",        date: "Jan 2025", url: "/blog/ai-prototyping-data-visualization",                external: false },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function FeaturedCardInner({ post }: { post: (typeof FEATURED_POSTS)[number] }) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${post.categoryColor}`}>
          {post.category}
        </span>
        <span className="text-xs font-mono text-ink-300">{post.date}</span>
      </div>
      <h4 className="font-display font-semibold text-lg text-ink-900 group-hover:text-copper-500 transition-colors mb-2 leading-snug flex-1">
        {post.title}
      </h4>
      <p className="text-sm text-ink-500 leading-relaxed mb-4">{post.description}</p>
      <span className="text-xs font-medium text-copper-500 group-hover:text-copper-700 transition-colors self-start">
        Read →
      </span>
    </>
  );
}

function CategoryPostInner({ post }: { post: { title: string; date?: string } }) {
  return (
    <>
      <span className="text-copper-500 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
      <span>
        <span className="font-medium text-ink-900 text-sm group-hover:text-copper-500 transition-colors leading-snug block">
          {post.title}
        </span>
        {post.date && (
          <span className="text-xs text-ink-300 font-mono mt-1 block">{post.date}</span>
        )}
      </span>
    </>
  );
}

function RecentPostInner({ post }: { post: (typeof RECENT)[number] }) {
  return (
    <>
      <div>
        <span className="text-xs font-mono text-ink-300 mb-1 block capitalize">{post.category}</span>
        <span className="font-medium text-ink-900 group-hover:text-copper-500 transition-colors text-sm leading-snug">
          {post.title}
        </span>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs font-mono text-ink-300">{post.date}</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-ink-300 group-hover:text-copper-500 transition-colors" aria-hidden="true">
          <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Writing() {
  return (
    <section id="writing" className="bg-white py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-4">04 · Writing</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Writing — across product,<br className="hidden md:block" /> payments, and everything in between
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-16">
            Essays and guides across product management, payments, AI, and data science.
            Books, food, and travel notes live in the Personal section.
            The Stablecoin Atlas newsletter is where I write most consistently on fintech.
          </p>
        </AnimateIn>

        {/* ── Featured strip ── */}
        <AnimateIn className="mb-16">
          <p className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-3">
            Start here
          </p>
          <h3 className="font-display font-semibold text-2xl text-ink-900 mb-6">
            The posts worth reading first
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURED_POSTS.map((post, i) => (
              <AnimateIn key={post.title} delay={i * 70}>
                {post.external ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent(EVENTS.WRITING_FEATURED_CLICKED, {
                        title: post.title,
                        category: post.category,
                      })
                    }
                    className="group flex flex-col h-full p-6 rounded-2xl bg-white border border-cream-200 card-lift min-h-[44px]"
                  >
                    <FeaturedCardInner post={post} />
                  </a>
                ) : (
                  <Link
                    href={post.url}
                    onClick={() =>
                      trackEvent(EVENTS.WRITING_FEATURED_CLICKED, {
                        title: post.title,
                        category: post.category,
                      })
                    }
                    className="group flex flex-col h-full p-6 rounded-2xl bg-white border border-cream-200 card-lift min-h-[44px]"
                  >
                    <FeaturedCardInner post={post} />
                  </Link>
                )}
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>

        {/* ── Category grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
                          onClick={() =>
                            trackEvent(EVENTS.WRITING_CATEGORY_CLICKED, {
                              title: post.title,
                              category: cat.label,
                            })
                          }
                          className="group flex items-start gap-3 min-h-[44px]"
                        >
                          <CategoryPostInner post={post} />
                        </a>
                      ) : (
                        <Link
                          href={post.url}
                          onClick={() =>
                            trackEvent(EVENTS.WRITING_CATEGORY_CLICKED, {
                              title: post.title,
                              category: cat.label,
                            })
                          }
                          className="group flex items-start gap-3 min-h-[44px]"
                        >
                          <CategoryPostInner post={post} />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ── Curated recent posts ── */}
        <AnimateIn>
          <h3 className="font-display font-semibold text-2xl text-ink-900 mb-6">Recent posts</h3>
          <div className="divide-y divide-cream-200">
            {RECENT.map((post) =>
              post.external ? (
                <a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(EVENTS.WRITING_RECENT_CLICKED, {
                      title: post.title,
                      category: post.category,
                    })
                  }
                  className="group flex items-center justify-between gap-6 py-5 hover:bg-cream-50 -mx-4 px-4 rounded-xl transition-colors duration-150"
                >
                  <RecentPostInner post={post} />
                </a>
              ) : (
                <Link
                  key={post.url}
                  href={post.url}
                  onClick={() =>
                    trackEvent(EVENTS.WRITING_RECENT_CLICKED, {
                      title: post.title,
                      category: post.category,
                    })
                  }
                  className="group flex items-center justify-between gap-6 py-5 hover:bg-cream-50 -mx-4 px-4 rounded-xl transition-colors duration-150"
                >
                  <RecentPostInner post={post} />
                </Link>
              )
            )}
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="mt-10">
            <Link
              href="/blog"
              onClick={() => trackEvent(EVENTS.WRITING_ALL_POSTS_CLICKED)}
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-500 hover:text-copper-700 transition-colors min-h-[44px]"
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
