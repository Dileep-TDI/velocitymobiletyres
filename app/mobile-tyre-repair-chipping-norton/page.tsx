import type { Metadata } from "next";
import { site, chippingNorton } from "@/content/siteContent";
import LandingPageView from "@/components/LandingPageView";

export const metadata: Metadata = {
  title: chippingNorton.seo.metaTitle,
  description: chippingNorton.seo.metaDescription,
  alternates: { canonical: chippingNorton.seo.canonicalUrl },
  openGraph: {
    title: chippingNorton.seo.metaTitle,
    description: chippingNorton.seo.metaDescription,
    url: chippingNorton.seo.canonicalUrl,
    siteName: site.brand,
    locale: "en_AU",
    type: "website",
  },
};

export default function ChippingNortonPage() {
  return <LandingPageView page={chippingNorton} />;
}
