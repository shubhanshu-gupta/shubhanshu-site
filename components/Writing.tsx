import AnimateIn from "./AnimateIn";

const CATEGORIES = [
  {
    label: "AI & Payments",
    color: "bg-copper-100 text-copper-700",
    posts: [
      {
        title: "Data Visualization for AI Prototyping: How Product Managers Validate Hypotheses Quickly",
        date: "Jan 2025",
        url: "https://shubhanshugupta.com/ai-prototyping-data-visualization/",
      },
    ],
  },
  {
    label: "Product Management",
    color: "bg-cream-100 text-ink-700",
    posts: [
      {
        title: "AI Prototyping for Product Managers",
        date: "Ongoing series",
        url: "https://shubhanshugupta.com/ai-prototyping/",
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
        url: "https://shubhanshugupta.com/scratch-bootcamp/",
      },
      {
        title: "Machine Learning Roadmap: An Effective Guidebook",
        date: "Reference guide",
        url: "https://shubhanshugupta.com/machine-learning-roadmap/",
      },
    ],
  },
];

const RECENT = [
  {
    title: "Data Visualization for AI Prototyping",
    category: "AI & Payments",
    date: "Jan 2025",
    url: "https://shubhanshugupta.com/ai-prototyping-data-visualization/",
  },
  {
    title: "From Code in the Community to My Own Scratch Bootcamp",
    category: "Teaching",
    date: "May 2025",
    url: "https://shubhanshugupta.com/scratch-bootcamp/",
  },
  {
    title: "Book Recommendation: The Hard Thing About Hard Things",
    category: "Books",
    date: "Jan 2025",
    url: "https://shubhanshugupta.com/book-recommendation-ben-horowitz/",
  },
  {
    title: "Book Recommendation: The Money Trap",
    category: "Books",
    date: "Jan 2025",
    url: "https://shubhanshugupta.com/book-recommendation-money-trap/",
  },
];

export default function Writing() {
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
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Recent posts list */}
        <AnimateIn>
          <h3 className="font-display font-semibold text-2xl text-ink-900 mb-6">Recent posts</h3>
          <div className="divide-y divide-cream-200">
            {RECENT.map((post) => (
              <a
                key={post.title}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-5 hover:bg-cream-50 -mx-4 px-4 rounded-xl transition-colors duration-150"
              >
                <div>
                  <span className="text-xs font-mono text-ink-300 mb-1 block">{post.category}</span>
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
              </a>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="mt-10">
            <a
              href="https://shubhanshugupta.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-copper-500 hover:text-copper-700 transition-colors"
            >
              All posts on the blog
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
