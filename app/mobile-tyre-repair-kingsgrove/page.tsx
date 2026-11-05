import type { Metadata } from "next";
import { site, kingsgrove } from "@/content/siteContent";
import LandingPageView from "@/components/LandingPageView";

export const metadata: Metadata = {
  title: kingsgrove.seo.metaTitle,
  description: kingsgrove.seo.metaDescription,
  alternates: { canonical: kingsgrove.seo.canonicalUrl },
  openGraph: {
    title: kingsgrove.seo.metaTitle,
    description: kingsgrove.seo.metaDescription,
    url: kingsgrove.seo.canonicalUrl,
    siteName: site.brand,
    locale: "en_AU",
    type: "website",
  },
};

export default function KingsgrovePage() {
  return <LandingPageView page={kingsgrove} />;
}
