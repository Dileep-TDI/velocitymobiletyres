import type { Metadata } from "next";
import { site, kirrawee } from "@/content/siteContent";
import LandingPageView from "@/components/LandingPageView";

export const metadata: Metadata = {
  title: kirrawee.seo.metaTitle,
  description: kirrawee.seo.metaDescription,
  alternates: { canonical: kirrawee.seo.canonicalUrl },
  openGraph: {
    title: kirrawee.seo.metaTitle,
    description: kirrawee.seo.metaDescription,
    url: kirrawee.seo.canonicalUrl,
    siteName: site.brand,
    locale: "en_AU",
    type: "website",
  },
};

export default function KirraweePage() {
  return <LandingPageView page={kirrawee} />;
}
