import type { Metadata, Viewport } from "next";
import { Inria_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inriaSerif = Inria_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060d18",
};

function getSiteUrl(): string {
  // Use SITE_URL environment variable, fallback to preview URL
  return process.env.SITE_URL || 'https://deeply-marketing.vercel.app';
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Deeply — listen with intention",
  description:
    "Listen with intention. Care for your curiosity, your time, and your attention.",
  keywords: [
    "podcast app",
    "intentional listening",
    "mindful listening",
    "podcast player",
    "podcast notes",
    "focus listening",
  ],
  authors: [{ name: "Deeply" }],
  creator: "Deeply",
  publisher: "Deeply",
  openGraph: {
    type: "website",
    siteName: "Deeply",
    locale: "en_CA",
    title: "Deeply — listen with intention",
    description:
      "Listen with intention. Care for your curiosity, your time, and your attention.",
    images: [
      {
        url: "/deeply-diver.png",
        width: 1480,
        height: 2564,
        type: "image/png",
        alt: "Deeply — listen with intention",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeply — listen with intention",
    description:
      "Listen with intention. Care for your curiosity, your time, and your attention.",
    images: [
      {
        url: "/deeply-diver.png",
        alt: "Deeply — listen with intention",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inriaSerif.variable} ${dmSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
