"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#work",     label: "Work" },
  { href: "#build",    label: "Build" },
  { href: "#research", label: "Research" },
  { href: "#writing",  label: "Writing" },
  { href: "#personal", label: "Personal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-frosted border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`font-display font-semibold text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-ink-900" : "text-white"
          }`}
        >
          SG
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-copper-500 ${
                scrolled ? "text-ink-700" : "text-white/75"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1K5GF78uKpTX_b2j9VLyQ7r0YJiGxy30t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors duration-300 hover:text-copper-500 ${
              scrolled ? "text-ink-700" : "text-white/75"
            }`}
          >
            Résumé
          </a>
          <a
            href="mailto:shubhanshu.gupta93@gmail.com"
            className="text-sm font-medium px-5 py-2 rounded-full bg-copper-500 text-white hover:bg-copper-700 transition-colors duration-200"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-ink-900" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-frosted border-t border-cream-200 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-ink-700 hover:text-copper-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1K5GF78uKpTX_b2j9VLyQ7r0YJiGxy30t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink-700 hover:text-copper-500 transition-colors"
          >
            Résumé ↗
          </a>
          <a
            href="mailto:shubhanshu.gupta93@gmail.com"
            className="text-sm font-medium text-center px-5 py-2.5 rounded-full bg-copper-500 text-white"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </nav>
  );
}
