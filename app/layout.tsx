import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubhanshu Gupta — VP PM · Fintech · AI Builder",
  description:
    "VP Product Management at Citibank. Building AI-first products at the intersection of payments, regulation, and real human behaviour. Founder of Stablecoin Atlas and Feelfit.",
  keywords: [
    "Product Management",
    "Payments",
    "Fintech",
    "Stablecoin",
    "AI",
    "Cross-border payments",
    "Singapore",
  ],
  authors: [{ name: "Shubhanshu Gupta" }],
  openGraph: {
    title: "Shubhanshu Gupta — VP PM · Fintech · AI Builder",
    description:
      "VP PM at Citibank. Building AI-first products at the intersection of payments and regulation.",
    url: "https://shubhanshugupta.com",
    siteName: "Shubhanshu Gupta",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Shubhanshugupta",
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
      <body>{children}</body>
    </html>
  );
}
