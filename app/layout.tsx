import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "N0te — Capture before the thought disappears.",
  description:
    "N0te is a floating note for macOS that sends clean Markdown into Obsidian without pulling you out of flow. Free on the Mac App Store.",
  openGraph: {
    title: "N0te — Capture before the thought disappears.",
    description:
      "A floating note for macOS that sends clean Markdown into Obsidian without pulling you out of flow.",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary",
    title: "N0te — Capture before the thought disappears.",
    description:
      "A floating note for macOS that sends clean Markdown into Obsidian without pulling you out of flow.",
    images: ["/images/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jura.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#111111] text-[#f0f4ff]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
