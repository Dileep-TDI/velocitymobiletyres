import { NextResponse } from "next/server";
import { site, chippingNorton } from "@/content/siteContent";
import { buildLandingView } from "@/lib/static-page";

/** Serves static landing content from content/siteContent.ts (Strapi disabled). */
export async function GET() {
  const view = buildLandingView(chippingNorton);

  return NextResponse.json({
    ok: true,
    source: "static",
    brand: site.brand,
    data: {
      seo: chippingNorton.seo,
      location: chippingNorton.location,
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
