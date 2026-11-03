import type { Metadata } from "next";
import { site, campbelltown } from "@/content/siteContent";
import LandingPageView from "@/components/LandingPageView";

export const metadata: Metadata = {
  title: campbelltown.seo.metaTitle,
  description: campbelltown.seo.metaDescription,
  alternates: { canonical: campbelltown.seo.canonicalUrl },
  openGraph: {
    title: campbelltown.seo.metaTitle,
    description: campbelltown.seo.metaDescription,
    url: campbelltown.seo.canonicalUrl,
    siteName: site.brand,
    locale: "en_AU",
    type: "website",
  },
};

export default function CampbelltownPage() {
  return <LandingPageView page={campbelltown} />;
}
