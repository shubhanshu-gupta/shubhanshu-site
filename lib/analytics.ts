// Centralised PostHog event names and property types.
// Import trackEvent() and EVENTS wherever you need to fire events.
// This utility calls posthog directly — safe to use in any "use client" module.

import posthog from "posthog-js";

export const EVENTS = {
  // Navigation
  NAV_LOGO_CLICKED:          "nav_logo_clicked",
  NAV_LINK_CLICKED:          "nav_link_clicked",
  NAV_CTA_CLICKED:           "nav_cta_clicked",
  NAV_MOBILE_OPENED:         "nav_mobile_opened",
  NAV_RESUME_CLICKED:        "nav_resume_clicked",

  // Hero
  HERO_CTA_CLICKED:          "hero_cta_clicked",

  // Work
  WORK_RESUME_CLICKED:       "work_resume_clicked",

  // Build
  BUILD_PROJECT_VISITED:     "build_project_visited",
  BUILD_NEWSLETTER_CLICKED:  "build_newsletter_clicked",
  BUILD_CTA_SECTION_VIEWED:  "build_cta_section_viewed",
  BUILD_CTA_CLICKED:         "build_cta_clicked",

  // Research
  RESEARCH_ITEM_CLICKED:     "research_item_clicked",
  RESEARCH_SPEAKING_CLICKED: "research_speaking_clicked",

  // Writing
  WRITING_FEATURED_CLICKED:  "writing_featured_post_clicked",
  WRITING_CATEGORY_CLICKED:  "writing_category_post_clicked",
  WRITING_RECENT_CLICKED:    "writing_recent_post_clicked",
  WRITING_ALL_POSTS_CLICKED: "writing_all_posts_clicked",

  // Personal
  PERSONAL_LINK_CLICKED:     "personal_link_clicked",

  // Footer / CTA
  FOOTER_CTA_CLICKED:        "footer_cta_clicked",
  FOOTER_SOCIAL_CLICKED:     "footer_social_clicked",
  FOOTER_RESUME_CLICKED:     "footer_resume_clicked",
} as const;

export function trackEvent(
  event: string,
  properties: Record<string, string | boolean | number> = {}
) {
  try {
    posthog.capture(event, properties);
  } catch {
    // Silently fail — never break the UI for an analytics error
  }
}
