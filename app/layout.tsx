import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { siteImages } from "@/lib/site-images";
import { site, westRyde } from "@/content/siteContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: westRyde.seo.metaTitle,
  description: westRyde.seo.metaDescription,
  icons: {
    icon: [
      {
        url: siteImages.favicon.sm,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: siteImages.favicon.md,
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: siteImages.favicon.apple,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: westRyde.seo.metaTitle,
    description: westRyde.seo.metaDescription,
    siteName: site.brand,
    images: [{ url: siteImages.ogDefault }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <Header />
        <main className="flex flex-col flex-1 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
