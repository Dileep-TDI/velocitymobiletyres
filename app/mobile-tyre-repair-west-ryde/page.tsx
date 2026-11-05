import type { Metadata } from "next";
import { site, westRyde } from "@/content/siteContent";
import LandingPageView from "@/components/LandingPageView";

export const metadata: Metadata = {
  title: westRyde.seo.metaTitle,
  description: westRyde.seo.metaDescription,
  alternates: { canonical: westRyde.seo.canonicalUrl },
  openGraph: {
    title: westRyde.seo.metaTitle,
    description: westRyde.seo.metaDescription,
    url: westRyde.seo.canonicalUrl,
    siteName: site.brand,
    locale: "en_AU",
    type: "website",
  },
};

export default function WestRydePage() {
  return <LandingPageView page={westRyde} />;
}
