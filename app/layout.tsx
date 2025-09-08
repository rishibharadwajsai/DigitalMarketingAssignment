import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kunti Rolls - Premium Indian Food Delivery | Order Fresh Meals Online",
  description:
    "Order fresh and authentic Indian meals online with Kunti Rolls. Fast delivery, rich flavors, and eco-friendly packaging.",
  keywords:
    "food delivery, Indian food, online ordering, fresh meals, authentic cuisine, Kunti Rolls, Restaurant, takeout, delivery service, dine-in, catering, meal prep, gourmet food, spices, vegetarian options, non-vegetarian options, traditional recipes, modern twists, family meals, quick bites, healthy options, comfort food, snacks, beverages, desserts, specials, promotions, loyalty program, customer reviews, contactless delivery, safety measures, local ingredients, seasonal menu, chef's specials, catering services, group orders, meal deals",
  authors: [{ name: "Kunti Rolls" }],
  creator: "Kunti Rolls",
  publisher: "Kunti Rolls",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kuntirolls.vercel.app"),
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "en-US": "/" },
  },
  openGraph: {
    title: "Kunti Rolls - Premium Indian Food Delivery",
    description:
      "Order delicious Indian cuisine from Kunti Rolls. Fresh ingredients, authentic flavors, and fast delivery.",
    url: "https://kuntirolls.vercel.app",
    siteName: "Kunti Rolls",
    images: [
      {
        url: "/kuntirolls.png",
        width: 1200,
        height: 630,
        alt: "Kunti Rolls - Delicious Indian Cuisine",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunti Rolls - Premium Indian Food Delivery",
    description:
      "Order delicious Indian cuisine from Kunti Rolls. Fresh ingredients, authentic flavors, and fast delivery.",
    images: ["/kuntirolls.png"],
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
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ff6600",
  other: {
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Kunti Rolls",
      image: "https://kuntirolls.vercel.app/kuntirolls.png",
      url: "https://kuntirolls.vercel.app",
      telephone: "+91-9876543210",
      servesCuisine: "Indian",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "IN",
      },
    } as any,
    socialProfiles: [
      "https://twitter.com/kuntirolls",
      "https://instagram.com/kuntirolls",
      "https://facebook.com/kuntirolls",
    ],
  } as any,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
