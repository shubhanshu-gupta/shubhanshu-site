import AnimateIn from "./AnimateIn";

export default function Build() {
  return (
    <section id="build" className="bg-white py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        {/* CHANGE 5: updated headline + subparagraph */}
        <AnimateIn>
          <p className="section-label mb-4">02 · Side Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Products born from genuine gaps.<br className="hidden md:block" /> Built AI-native, from day one.
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-20">
            Each project here started with a real problem, was scoped with full product rigour,
            and was built AI-native from the ground up. Feelfit reached 200+ users and
            ~$8K SGD in monthly recurring revenue within months of launch. Stablecoin Atlas
            is becoming the definitive intelligence layer for anyone serious about the stablecoin economy.
            These are not experiments — they are products with adoption, revenue, and real-world impact.
          </p>
        </AnimateIn>

        {/* ── Feelfit — CHANGE 6: story-first rewrite ── */}
        <AnimateIn className="mb-10">
          <div className="rounded-3xl border border-cream-200 overflow-hidden">
            {/* Card header */}
            <div className="bg-ink-900 px-8 md:px-12 pt-10 pb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-live-bg text-live-green font-medium">
                      Live
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-mrr-bg text-mrr-gold font-medium">
                      MRR ✦
                    </span>
                    <span className="text-xs font-mono text-white/40 tracking-widest">
                      feelfit.app
                    </span>
                  </div>
                  <h3 className="font-display font-semibold italic text-3xl md:text-4xl text-white mb-3">
                    Feelfit
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl italic">
                    &ldquo;What started as a WhatsApp group became a product with 200 users,
                    ~600 classes, and 5,000 student enrolments — in six months.&rdquo;
                  </p>
                </div>
                <a
                  href="https://feelfit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full transition-all duration-200 shrink-0"
                >
                  Visit
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card body */}
            <div className="p-8 md:p-12 bg-cream-50">
              {/* Story: problem + what it became */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-4">
                    The problem
                  </h4>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    A fitness instructor managing bookings through WhatsApp voice notes and Excel sheets.
                    Students dropping out because payments were a mess. Waitlists were manual.
                    No way to know who&apos;d actually show up. This was the real world — and it needed a real product.
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-4">
                    What it became
                  </h4>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    Feelfit is a full-featured fitness class platform — think ClassPass, but built for
                    independent instructors. Real-time slot booking, FIFO waitlists, PayNow-integrated payment
                    packages (8, 12, or Unlimited classes), WhatsApp notifications, an instructor dashboard,
                    and a student portal. Built in months. Used every week.
                  </p>
                </div>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { number: "~200", label: "Active users" },
                  { number: "~600", label: "Classes hosted" },
                  { number: "5,000+", label: "Student enrolments" },
                  { number: "~$8K SGD", label: "Monthly recurring revenue" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-ink-900 rounded-2xl p-5 text-center">
                    <p className="font-display text-2xl font-semibold text-copper-500 mb-1">
                      {stat.number}
                    </p>
                    <p className="text-xs text-white/40 font-mono leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* PRD callout */}
              <div>
                <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-5">
                  Product decision spotlight
                </h4>
                <div className="prd-callout">
                  <p className="mb-2 text-white/40">// From: Payment Package System PRD</p>
                  <p>
                    &quot;Credits are deducted only when the instructor marks attendance —
                    not when the student books. This shifts the trust model:
                    the instructor becomes the source of truth,
                    and students are never penalised for a class
                    they didn&apos;t actually attend.&quot;
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {["Supabase", "PayNow", "Next.js", "Billing-cycle logic", "Optimistic locking", "FIFO waitlist"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-cream-100 text-ink-500 border border-cream-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* ── Stablecoin Atlas — CHANGE 7: story-first rewrite ── */}
        <AnimateIn className="mb-20">
          <div className="rounded-3xl border border-cream-200 overflow-hidden">
            {/* Card header */}
            <div className="bg-hero px-8 md:px-12 pt-10 pb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-live-bg text-live-green font-medium">
                      Live
                    </span>
                    <span className="text-xs font-mono text-white/40 tracking-widest">
                      stablecoinatlas.app
                    </span>
                  </div>
                  <h3 className="font-display font-semibold italic text-3xl md:text-4xl text-white mb-3">
                    Stablecoin Atlas
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl italic">
                    &ldquo;One platform to learn, track, discover careers, and understand the stablecoin economy.&rdquo;
                  </p>
                </div>
                <a
                  href="https://stablecoinatlas.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full transition-all duration-200 shrink-0"
                >
                  Visit
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card body */}
            <div className="p-8 md:p-12 bg-cream-50">
              {/* Story */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-4">
                    The gap I saw
                  </h4>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    Stablecoins were growing fast — but there was no single, trustworthy resource for
                    someone who wanted to actually understand the space. Not a news aggregator. Not a price ticker.
                    Something that could teach you the regulatory landscape, show you real market data,
                    help you find a job in the industry, and make sense of what MiCA or the GENIUS Act actually means
                    for the products people are building. So I built it.
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-4">
                    What Stablecoin Atlas is
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Bloomberg-lite market dashboard · live supply data via DeFiLlama API",
                      "Learning hub · 4-stage curriculum from Beginner to Expert",
                      "Regulatory tracker · MAS, MiCA, GENIUS Act, FCA, HKMA",
                      "Entity pages · structured directory of issuers, custodians, protocols",
                      "Careers hub · roles, job aggregation, pathway maps",
                      "Weekly newsletter · published on Substack + Beehiiv",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="text-copper-500 mt-0.5 shrink-0">→</span>
                        <span className="text-ink-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="rounded-xl border border-cream-200 bg-white p-6 mb-10">
                <p className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-2">Newsletter</p>
                <p className="text-sm font-medium text-ink-900 mb-1">
                  📰 &nbsp;Read the Stablecoin Atlas Weekly
                </p>
                <p className="text-sm text-ink-500 mb-4">
                  The newsletter that tracks regulation, market moves, and what&apos;s being built in stablecoin.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://stablecoinatlas.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200"
                  >
                    Read on Substack →
                  </a>
                  <a
                    href="https://stablecoinatlas.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200"
                  >
                    Subscribe on Beehiiv →
                  </a>
                </div>
              </div>

              {/* PRD callout */}
              <div className="mb-8">
                <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-5">
                  Product decision spotlight
                </h4>
                <div className="prd-callout">
                  <p className="mb-2 text-white/40">// From: Entity Pages PRD · Phase 2</p>
                  <p>
                    &quot;We sequenced entity pages before the comparison tool — not because
                    one matters more, but because you cannot compare data you
                    haven&apos;t structured.&quot;
                  </p>
                </div>
              </div>

              {/* Meta strip */}
              <div className="pt-8 border-t border-cream-200 flex flex-wrap gap-8">
                <div>
                  <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-1">Phases</p>
                  <p className="text-sm font-medium text-ink-700">Phase 1 live · Phase 2 in build · Phase 3 planned</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-1">Built with</p>
                  <p className="text-sm font-medium text-ink-700">Antigravity</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "Beehiiv", "DeFiLlama API", "MAS · MiCA · GENIUS Act", "SEO-first", "Regulated-first"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-cream-100 text-ink-500 border border-cream-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* CHANGE 8: upgraded advising signal */}
        <AnimateIn>
          <div className="rounded-2xl bg-hero text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <p className="font-mono text-xs text-copper-500 tracking-widest uppercase mb-3">
                Open for select work
              </p>
              <h3 className="font-display font-semibold italic text-2xl md:text-3xl text-white mb-2">
                Have an interesting problem?
              </h3>
              <p className="text-white/55 text-sm leading-relaxed max-w-lg">
                I advise and, occasionally, build. Particularly in fintech, regulated AI,
                and cross-border payments. If you&apos;re working on something at the intersection
                of these things and want a PM who ships — bring the problem, not just the brief.
              </p>
            </div>
            <a
              href="mailto:shubhanshu.gupta93@gmail.com"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-copper-500 text-white text-sm font-medium rounded-full hover:bg-copper-700 transition-colors duration-200"
            >
              Get in touch →
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
