import type { Metadata } from "next";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhanshugupta.com"),

  title: {
    default: "Shubhanshu Gupta | VP Product Manager — Payments, Fintech & AI | Singapore",
    template: "%s — Shubhanshu Gupta",
  },

  description:
    "Shubhanshu Gupta is VP of Product Management at Citibank Singapore with 9+ years building payments products. Expert in cross-border payments, instant payment rails (IMPS, FAST, FPS, PromptPay, RTR), ISO 20022, AI-native fintech products, and regulatory product design. NUS alumni. Founder of Stablecoin Atlas and Feelfit.",

  keywords: [
    "Product Manager Payments",
    "VP Product Management Singapore",
    "Fintech Product Manager Singapore",
    "Cross-border Payments Product Manager",
    "Instant Payments Product Manager",
    "Payments Product Manager Asia",
    "Senior Product Manager Fintech",
    "AI Product Manager",
    "ISO 20022 Product Manager",
    "Citibank Product Manager",
    "NUS Product Manager",
    "FAST SG Product Manager",
    "Cross-border Instant Payments",
    "FX Pricing Product Manager",
    "Regulatory Product Design",
    "Stablecoin Product Manager",
    "Consumer Fintech Singapore",
    "Product Manager Banking",
    "Shubhanshu Gupta",
    "Payments VP Singapore",
  ],

  authors: [{ name: "Shubhanshu Gupta", url: "https://shubhanshugupta.com" }],

  creator: "Shubhanshu Gupta",

  alternates: {
    canonical: "https://shubhanshugupta.com",
  },

  openGraph: {
    title: "Shubhanshu Gupta | VP Product Manager — Payments, Fintech & AI | Singapore",
    description:
      "VP Product Manager at Citibank Singapore. 9+ years shipping cross-border payments, instant rails, AI products, and fintech platforms. Founder of Stablecoin Atlas. NUS alumni.",
    url: "https://shubhanshugupta.com",
    siteName: "Shubhanshu Gupta",
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubhanshu Gupta — VP Product Manager, Payments & Fintech, Singapore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Shubhanshugupta",
    creator: "@Shubhanshugupta",
    title: "Shubhanshu Gupta | VP PM — Payments, Fintech & AI",
    description:
      "VP Product Manager at Citibank Singapore. Cross-border payments, instant rails, AI products. Founder of Stablecoin Atlas.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
