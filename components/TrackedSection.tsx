"use client";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedSectionProps {
  children: React.ReactNode;
  eventName: string;
  properties?: Record<string, string>;
  className?: string;
  threshold?: number; // 0–1, default 0.35
}

export default function TrackedSection({
  children,
  eventName,
  properties = {},
  className = "",
  threshold = 0.35,
}: TrackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          trackEvent(eventName, properties);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eventName, properties, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
