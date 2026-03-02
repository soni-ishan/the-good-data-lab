import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Good Data Lab",
  description: "Code. Data. Community. A beginner-friendly space for students to explore Data Science & AI.",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23818cf8%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%224 17 10 11 4 5%22/><line x1=%2212%22 x2=%2220%22 y1=%2219%22 y2=%2219%22/></svg>`
  },
  openGraph: {
    title: "The Good Data Lab",
    description: "A beginner-friendly space for undergrads to explore Data Science & AI. We build projects that do good.",
    url: "https://the-good-data-lab.vercel.app",
    siteName: "The Good Data Lab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Good Data Lab",
    description: "A beginner-friendly space for undergrads to explore Data Science & AI. We build projects that do good.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
