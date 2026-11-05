import { NextResponse } from "next/server";
import { site, westRyde } from "@/content/siteContent";
import { buildLandingView } from "@/lib/static-page";

/** Serves static landing content from content/siteContent.ts (Strapi disabled). */
export async function GET() {
  const view = buildLandingView(westRyde);

  return NextResponse.json({
    ok: true,
    source: "static",
    brand: site.brand,
    data: {
      seo: westRyde.seo,
      location: westRyde.location,
      hero: view.hero,
      whatWeDo: view.whatWeDo,
      weComeToYou: view.weComeToYou,
      howItWorks: view.howItWorks,
      partners: view.partners,
      reviews: view.reviews,
      findOnGoogle: view.findOnGoogle,
      localArea: view.localArea,
      faq: view.faq,
      finalCta: view.finalCta,
    },
  });
}
