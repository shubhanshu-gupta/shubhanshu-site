export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero flex flex-col justify-center overflow-hidden">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Warm accent glow top-right */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C87D36, transparent 70%)" }}
      />

      <div className="relative max-w-site mx-auto px-6 pt-24 pb-20">
        {/* Status line */}
        <div className="flex items-center gap-3 mb-10 md:mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-white/40 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-live-green animate-pulse-slow inline-block" />
            Singapore · Available for select collaborations
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-white leading-none tracking-tight mb-5">
          <span className="block text-[clamp(3rem,12vw,7rem)] font-semibold italic">
            Shubhanshu
          </span>
          <span className="block text-[clamp(3rem,12vw,7rem)] font-semibold italic">
            Gupta
          </span>
        </h1>

        {/* Title row — flex-wrap so each token sits on its own line on narrow screens */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-10">
          {[
            "VP, Product Management",
            "Citibank",
            "NUS Alum",
            "Singapore",
          ].map((item, i, arr) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="font-mono text-[0.65rem] text-copper-500 tracking-widest uppercase whitespace-nowrap">
                {item}
              </span>
              {i < arr.length - 1 && (
                <span className="font-mono text-[0.65rem] text-copper-500/40" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>

        {/* UVP */}
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
            I don&apos;t just spec products.{" "}
            <span className="text-white font-medium">I ship them.</span>
          </p>
          <p className="mt-4 text-white/55 text-base md:text-lg leading-relaxed font-light">
            At Citi, I run payments product across Asia, EMEA, and NAM —
            cross-border rails, AI-layered experiences, and the unglamorous governance
            work that actually gets things live. Outside Citi, I build AI-first
            products from scratch, with real users and real MRR.
          </p>
        </div>

        {/* CTAs — primary points to professional work; secondary row for projects + mentoring */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-copper-500 text-white text-sm font-medium rounded-full hover:bg-copper-700 transition-colors duration-200"
          >
            My professional work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#build"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white/80 text-sm font-medium rounded-full border border-white/20 hover:border-white/50 hover:text-white transition-all duration-200"
          >
            Side projects &amp; products
          </a>

          <a
            href="https://shubhanshugupta.setmore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white/80 text-sm font-medium rounded-full border border-white/20 hover:border-white/50 hover:text-white transition-all duration-200"
          >
            Book mentoring
          </a>
        </div>

        {/* Text link to writing — lighter weight, beneath the CTA row */}
        <p className="mt-5">
          <a
            href="#writing"
            className="font-mono text-[0.65rem] text-white/30 tracking-widest uppercase hover:text-white/60 transition-colors"
          >
            Read my writing →
          </a>
        </p>

        {/* Scroll indicator — desktop only */}
        <div className="absolute bottom-10 right-6 hidden md:flex">
          <div className="flex flex-col items-center gap-2 opacity-30">
            <span className="text-white text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <svg width="1" height="40" viewBox="0 0 1 40" fill="none">
              <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="white" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
