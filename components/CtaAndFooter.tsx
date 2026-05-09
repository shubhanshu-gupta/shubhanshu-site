import AnimateIn from "./AnimateIn";

export function OpenCTA() {
  return (
    <section id="contact" className="bg-hero py-28 md:py-36 overflow-hidden relative">
      {/* Accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-[0.08]"
        style={{ background: "radial-gradient(ellipse, #C87D36, transparent 70%)" }}
      />

      <div className="relative max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-6" style={{ color: "#6E6A62" }}>06 · Open for ideas</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold italic text-white mb-6 leading-tight">
            Have an interesting<br className="hidden md:block" /> problem?
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-12">
            I&apos;m selectively open to advising, collaborating, and in some cases building — particularly
            in fintech, regulated AI, and payments. If you&apos;re working on something at the
            intersection of these things and want a PM who ships, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:shubhanshu.gupta93@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-copper-500 text-white text-sm font-medium rounded-full hover:bg-copper-700 transition-colors duration-200"
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://shubhanshugupta.setmore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white/70 text-sm font-medium rounded-full border border-white/20 hover:border-white/50 hover:text-white transition-all duration-200"
            >
              Book a mentoring session
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-900 py-12">
      <div className="max-w-site mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-white text-lg font-semibold italic mb-1">Shubhanshu Gupta</p>
          <p className="text-xs font-mono text-ink-500">VP PM · Citibank · Singapore</p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", url: "https://www.linkedin.com/in/shubhanshugupta93/" },
            { label: "Twitter", url: "https://twitter.com/Shubhanshugupta" },
            { label: "Stablecoin Atlas", url: "https://stablecoinatlas.app" },
            { label: "Resume", url: "https://shubhanshugupta.com/wp-content/uploads/2025/05/ShubhanshuGupta_Resume.pdf" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-500 hover:text-copper-500 transition-colors font-mono tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 mt-8 pt-6 border-t border-ink-700">
        <p className="text-[11px] font-mono text-ink-500">
          © {new Date().getFullYear()} Shubhanshu Gupta · Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
