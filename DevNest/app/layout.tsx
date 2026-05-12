import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://devnest-waitlist.vercel.app/"; // 🔁 change to your actual domain

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────
  metadataBase: new URL(BASE_URL),
  title: {
    default: "DevNest — Learn. Build. Earn.",
    template: "%s | DevNest",           // subpages: "Bounties | DevNest"
  },
  description:
    "DevNest is a creator-economy platform for developers. Climb ranks, unlock bounties, and get rewarded in real money for the skills you bring to the community.",
  keywords: [
    "developer platform",
    "earn as a developer",
    "coding bounties",
    "developer community",
    "learn to code",
    "developer rewards",
    "EXP system",
    "gold tokens",
    "devnest",
    "developer creator economy",
  ],
  authors: [{ name: "DevNest Team", url: BASE_URL }],
  creator: "DevNest",
  publisher: "DevNest",
  category: "technology",

  // ── Canonical & indexing ──────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph (Facebook, LinkedIn, WhatsApp, Discord) ────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "DevNest",
    title: "DevNest — Learn. Build. Earn.",
    description:
      "Climb ranks, unlock bounties, and get rewarded in real money for the skills you bring to the developer community.",
    images: [
      {
        url: "/opengraph-image",   // 1200×630px — add this to /public
        width: 1200,
        height: 630,
        alt: "DevNest — Learn. Build. Earn.",
      },
    ],
  },

  // ── Twitter / X card ─────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "DevNest — Learn. Build. Earn.",
    description:
      "A creator-economy platform for developers. Earn real money for your skills.",
    images: ["/opengraph-image"],
    creator: "@devnest",       // 🔁 change to your actual handle if you have one
  },

  // ── Icons ─────────────────────────────────────────────────────────────
  icons: {
    icon: '/favicon.ico',
  },

  // ── Manifest (PWA, "Add to Home Screen") ─────────────────────────────
  // manifest: "/site.webmanifest",   // uncomment if you add one
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DevNest",
            "url": "https://devnest-waitlist.vercel.app/",
            "logo": "https://devnest-waitlist.vercel.app//opengraph-image",
            "sameAs": [
              "https://x.com/OfficialDevNest",
              
            ],
            "description": "DevNest is a creator-economy platform for developers. Climb ranks, unlock bounties, and get rewarded in real money for the skills you bring to the community.",
            "founder": { "@type": "Person", "name": "DevNest Team" },
            "publisher": { "@type": "Organization", "name": "DevNest" }
          }) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
