import AnimateIn from "./AnimateIn";

export default function Build() {
  return (
    <section id="build" className="bg-white py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-4">02 · Side Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Building with the<br className="hidden md:block" /> same rigour as my day job
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-20">
            Every project here starts with a real problem, a proper PRD, and a
            clear user in mind. I work with a development partner (Antigravity) to
            ship what I specify — then iterate based on what actually happens.
          </p>
        </AnimateIn>

        {/* ── Stablecoin Atlas ── */}
        <AnimateIn className="mb-10">
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
                  <h3 className="font-display font-semibold italic text-3xl md:text-4xl text-white">
                    Stablecoin Atlas
                  </h3>
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
              <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                A regulated-first stablecoin intelligence portal — built for the compliance
                professionals, fintech PMs, and curious learners navigating this space.
                Learn, track, discover careers, and execute real stablecoin use cases by corridor.
              </p>
            </div>

            {/* Card body */}
            <div className="p-8 md:p-12 bg-cream-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* What was built */}
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-5">
                    What was built
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { item: "Learning hub", detail: "4-stage progressive curriculum (Beginner → Expert)" },
                      { item: "Market dashboard", detail: "Live stablecoin supply data via DeFiLlama API" },
                      { item: "Newsletter", detail: "Beehiiv integration · 4-email welcome sequence · weekly digest" },
                      { item: "Entity pages", detail: "Phase 2 — structured directory with SEO-first strategy" },
                      { item: "Careers hub", detail: "Role maps, job aggregation, submission pipeline" },
                      { item: "Regulatory tracker", detail: "MAS · MiCA · GENIUS Act · FCA · HKMA" },
                    ].map(({ item, detail }) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="text-copper-500 mt-0.5 shrink-0">→</span>
                        <span>
                          <span className="font-medium text-ink-900">{item}</span>
                          <span className="text-ink-500"> · {detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PRD decision spotlight */}
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-5">
                    Product decision spotlight
                  </h4>
                  <div className="prd-callout mb-6">
                    <p className="mb-2 text-white/40">// From: Entity Pages PRD · Phase 2</p>
                    <p>
                      &quot;We sequenced entity pages before the comparison tool — not because
                      one matters more, but because you cannot compare data you
                      haven&apos;t structured. The data model had to come first.
                      The comparison tool is a thin layer on top of what
                      entity pages will already have built.&quot;
                    </p>
                  </div>
                  <div className="prd-callout">
                    <p className="mb-2 text-white/40">// From: Growth Engine doc</p>
                    <p>
                      &quot;Every feature considered against one question:
                      does this give someone a reason to return tomorrow?
                      Live data does. A static page doesn&apos;t.
                      Entity pages create the data model.
                      The dashboard creates the daily habit.&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* PRD depth indicator */}
              <div className="mt-8 pt-8 border-t border-cream-200 flex flex-wrap gap-8">
                <div>
                  <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-1">PRD depth</p>
                  <p className="text-sm font-medium text-ink-700">5+ versioned documents</p>
                </div>
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

        {/* ── Feelfit ── */}
        <AnimateIn className="mb-20">
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
                  <h3 className="font-display font-semibold italic text-3xl md:text-4xl text-white">
                    Feelfit
                  </h3>
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
              <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                A fitness class booking and payment management platform. Real instructors,
                real students, real recurring revenue. Replaces entirely manual WhatsApp
                and Excel workflows with a proper product system.
              </p>
            </div>

            {/* Card body */}
            <div className="p-8 md:p-12 bg-cream-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* What was built */}
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-5">
                    What was built
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { item: "Reservation system", detail: "Slot booking, FIFO waitlists, auto-promotion on cancellation" },
                      { item: "Payment packages", detail: "8 · 12 · Unlimited class packages with billing-cycle alignment" },
                      { item: "Flexible billing", detail: "Multi-duration packages spanning billing cycle boundaries" },
                      { item: "Instructor dashboard", detail: "Attendance marking, package approval, PayNow screenshot flow" },
                      { item: "Student dashboard", detail: "Package status, booking history, payment reminders" },
                      { item: "Auth & onboarding", detail: "Google OAuth · Magic link · instructor approval gating" },
                    ].map(({ item, detail }) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="text-copper-500 mt-0.5 shrink-0">→</span>
                        <span>
                          <span className="font-medium text-ink-900">{item}</span>
                          <span className="text-ink-500"> · {detail}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PRD decision spotlight */}
                <div>
                  <h4 className="font-mono text-xs text-ink-300 tracking-widest uppercase mb-5">
                    Product decision spotlight
                  </h4>
                  <div className="prd-callout mb-6">
                    <p className="mb-2 text-white/40">// From: Flexible Packages PRD v2</p>
                    <p>
                      &quot;Multi-month packages are a strict superset of the existing
                      monthly system — additive, not disruptive. A multi-month package
                      is a single row with a longer expires_at. No existing triggers,
                      RLS policies, or booking-eligibility RPCs needed modification.
                      One migration. Clean.&quot;
                    </p>
                  </div>
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
              </div>

              {/* Meta strip */}
              <div className="mt-8 pt-8 border-t border-cream-200 flex flex-wrap gap-8">
                <div>
                  <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-1">Status</p>
                  <p className="text-sm font-medium text-ink-700">Live · Monthly recurring revenue</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-1">PRD depth</p>
                  <p className="text-sm font-medium text-ink-700">3+ versioned documents</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-1">Built with</p>
                  <p className="text-sm font-medium text-ink-700">Antigravity · Supabase</p>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Supabase", "PayNow", "Next.js", "Billing-cycle logic", "Optimistic locking", "FIFO waitlist"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-cream-100 text-ink-500 border border-cream-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Open signal */}
        <AnimateIn>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-copper-100 bg-copper-50">
            <span className="text-copper-500 mt-0.5 shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 7v3.5l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <p className="text-sm text-ink-700 leading-relaxed">
              <span className="font-medium text-ink-900">I&apos;m selectively open to advising or building.</span>
              {" "}If you have a pain point in fintech, payments, or AI-first products and want a PM who ships —
              {" "}<a href="mailto:shubhanshu.gupta93@gmail.com" className="text-copper-500 hover:text-copper-700 underline underline-offset-2">reach out</a>.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
