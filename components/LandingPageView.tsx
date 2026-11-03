import HeroSection from "@/components/sections/HeroSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import WeComeToYouSection from "@/components/sections/WeComeToYouSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PartnersSection from "@/components/sections/PartnersSection";
import LocalAreaSection from "@/components/sections/LocalAreaSection";
import FaqSection from "@/components/sections/FaqSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import MobileStickyBar from "@/components/MobileStickyBar";
import {
  activePage,
  buildLandingView,
  type StaticLandingPage,
} from "@/lib/static-page";

export default function LandingPageView({
  page = activePage,
}: {
  page?: StaticLandingPage;
}) {
  const {
    hero,
    whatWeDo,
    weComeToYou,
    howItWorks,
    partners,
    reviews,
    findOnGoogle,
    localArea,
    faq,
    finalCta,
    businessSchema,
    faqSchema,
  } = buildLandingView(page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection hero={hero} />
      <WhatWeDoSection data={whatWeDo} />
      <WeComeToYouSection data={weComeToYou} />
      <HowItWorksSection data={howItWorks} />
      <PartnersSection data={partners} />
      <ReviewsSection reviews={reviews} findOnGoogle={findOnGoogle} />
      <LocalAreaSection data={localArea} />
      <FaqSection faq={faq} />
      <FinalCtaSection data={finalCta} />
      <MobileStickyBar />
    </>
  );
}
