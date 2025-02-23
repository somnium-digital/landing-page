import type { Metadata } from "next";
import {Figtree } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
const figtree = Figtree({
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata : Metadata = {
  title: "SomDigi - Digital Agency & Creative Solutions",
  description: "SomDigi adalah digital agency yang membantu bisnis berkembang dengan strategi digital marketing terbaik.",
  keywords: ["digital agency", "digital marketing", "branding", "SomDigi"],
  openGraph: {
    title: "SomDigi - Digital Agency & Creative Solutions",
    description: "SomDigi adalah digital agency yang membantu bisnis berkembang dengan strategi digital marketing terbaik.",
    url: "https://somdigi.my.id",
    siteName: "SomDigi",
    images: [
      {
        url: "https://somdigi.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SomDigi Digital Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SomDigi - Digital Agency",
    description: "SomDigi membantu bisnis berkembang dengan strategi digital terbaik.",
    images: ["https://somdigi.my.id/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${figtree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
