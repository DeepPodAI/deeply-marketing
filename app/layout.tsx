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

export const metadata: Metadata = {
  metadataBase: new URL("https://deeply.ca"),
  title: "Deeply — Podcast App",
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
    title: "Deeply — Podcast App",
    description:
      "Listen with intention. Care for your curiosity, your time, and your attention.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeply — Podcast App",
    description:
      "Listen with intention. Care for your curiosity, your time, and your attention.",
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
