"use client";
import { trackEvent } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName: string;
  properties?: Record<string, string>;
  target?: string;
  rel?: string;
  /** Adds min-h/w-[44px] so small links meet touch-target guidelines */
  touchTarget?: boolean;
}

export default function TrackedLink({
  href,
  children,
  className = "",
  eventName,
  properties = {},
  target,
  rel,
  touchTarget = false,
}: TrackedLinkProps) {
  const touchClass = touchTarget
    ? "inline-flex items-center justify-center min-h-[44px] min-w-[44px]"
    : "";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${className} ${touchClass}`.trim()}
      onClick={() => trackEvent(eventName, { destination: href, ...properties })}
    >
      {children}
    </a>
  );
}
