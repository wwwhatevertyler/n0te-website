import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import { SiteThemeProvider } from "@/components/SiteThemeProvider";
import ThemeBootScript from "@/components/ThemeBootScript";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "N0te — Capture before the thought disappears.",
  description:
    "N0te is a floating note for macOS that sends clean Markdown into Obsidian without pulling you out of flow. Available as an early direct download for macOS.",
  openGraph: {
    title: "N0te — Capture before the thought disappears.",
    description:
      "A floating note for macOS that sends clean Markdown into Obsidian without pulling you out of flow. Available as an early direct download for macOS.",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1024, height: 1024 }],
  },
  twitter: {
    card: "summary",
    title: "N0te — Capture before the thought disappears.",
    description:
      "A floating note for macOS that sends clean Markdown into Obsidian without pulling you out of flow. Available as an early direct download for macOS.",
    images: ["/images/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jura.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full bg-bg text-fg">
        <ThemeBootScript />
        <SiteThemeProvider>
          {children}
        </SiteThemeProvider>
      </body>
    </html>
  );
}
