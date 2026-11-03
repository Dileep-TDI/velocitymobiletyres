/* ============================================================
   STRAPI RAW TYPES (matches schema.json)
   ============================================================ */

export type RichContentInline =
    | { type: "text"; text: string; bold?: boolean; italic?: boolean; underline?: boolean; code?: boolean }
    | { type: "link"; url: string; children: RichContentInline[] };

export type RichContentBlock =
    | { type: "paragraph"; children: RichContentInline[] }
    | { type: "heading"; level: 1 | 2 | 3 | 4 | 5 | 6; children: RichContentInline[] }
    | { type: "list"; format: "ordered" | "unordered"; indentLevel?: number; children: (RichContentBlock | { type: "list-item"; children: RichContentInline[] })[] }
    | { type: "list-item"; children: RichContentInline[] }
    | { type: "quote"; children: RichContentInline[] }
    | { type: "code"; children: RichContentInline[] };

export type StrapiMedia = {
    id: number;
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
} | null;

export type SeoSection = {
    __component: "shared.seo";
    id: number;
    metaTitle: string | null;
    metaDescription: string | null;
    canonicalUrl: string | null;
    ogImage: StrapiMedia;
    noIndex: boolean;
};

export type RichContentSection = {
    __component: "sections.rich-content";
    id: number;
    heading: string | null;
    content: RichContentBlock[] | null;
};

export type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

export type FaqSection = {
    __component: "sections.faq-section";
    id: number;
    heading: string | null;
    Faq: FaqItem[];
};

export type HomepageSection = SeoSection | RichContentSection | FaqSection;

export type StrapiHomepageResponse = {
    data: {
        id: number;
        documentId: string;
        hero: unknown | null;
        sections: HomepageSection[];
        publishedAt: string;
        createdAt: string;
        updatedAt: string;
    };
    meta: Record<string, unknown>;
};

/* ============================================================
   UI-READY TYPES (used by components)
   ============================================================ */

/** CTA link (phone or URL) */
export type CtaLink = {
    label: string;
    url: string;
    type: "tel" | "link";
};

/** Operating hours extracted from hero paragraphs */
export type HeroHours = {
    label: string;
    value: string;
    text: string;
} | null;

/** Hero section — fully structured (from first rich-content block) */
export type HomepageHero = {
    title: string | null;
    eyebrow: string | null;
    /** Suburb/area to highlight in the H1 (e.g. Campbelltown) */
    highlight?: string | null;
    descriptions: string[];
    hours: HeroHours;
    phoneCta: CtaLink | null;
    secondaryCtas: { label: string; url: string }[];
};

/** What We Do Section */
export type WhatWeDoData = {
    id: number;
    eyebrow: string | null;
    title: string | null;
    description: string | null;
    cards: { title: string; description: string }[];
};

/** We Come To You Section */
export type WeComeToYouData = {
    id: number;
    eyebrow: string | null;
    title: string | null;
    description: string | null;
    cards: { title: string; description: string }[];
};

/** How It Works Section */
export type HowItWorksStep = {
    stepNumber: number;
    title: string;
    description: string;
    phoneUrl?: string;
    phoneLabel?: string;
};

export type HowItWorksData = {
    id: number;
    eyebrow: string | null;
    title: string | null;
    steps: HowItWorksStep[];
};

/** Partners Section */
export type PartnersData = {
    id: number;
    heading: string | null;
};

/** Local Area / Service Area Section */
export type LocalAreaData = {
    id: number;
    heading: string | null;
    paragraphs: string[];
    phoneCta: CtaLink | null;
    hours: string | null;
    mapEmbedUrl?: string | null;
    mapTitle?: string | null;
};

/** FAQ Section */
export type HomepageFaq = {
    heading: string | null;
    items: { id: number; question: string; answer: string }[];
};

/** Reviews & Testimonials Section */
export type ReviewsData = {
    id: number;
    eyebrow: string | null;
    title: string | null;
    description: string | null;
    ctaLabel?: string | null;
    googleReviewsUrl?: string | null;
    locationLabel?: string | null;
};

/** Find Us On Google Section */
export type FindOnGoogleData = {
    id: number;
    eyebrow: string | null;
    title: string | null;
    description: string | null;
    googleSearchUrl?: string | null;
    businessLabel?: string | null;
};

/** Final CTA Section */
export type FinalCtaData = {
    id: number;
    eyebrow: string | null;
    title: string | null;
    paragraphs: string[];
    phoneCta: CtaLink | null;
    hours: string | null;
    hasForm: boolean;
};

/** Rich section — structured fallback */
export type RichSectionData = {
    id: number;
    heading: string | null;
    paragraphs: string[];
    headings: { level: number; text: string }[];
    lists: {
        format: "ordered" | "unordered";
        items: string[];
    }[];
    links: CtaLink[];
};

export type HomepageData = {
    seo: {
        metaTitle: string | null;
        metaDescription: string | null;
        canonicalUrl: string | null;
        ogImage: StrapiMedia;
        noIndex: boolean;
    } | null;
    hero: HomepageHero | null;
    whatWeDo: WhatWeDoData | null;
    weComeToYou: WeComeToYouData | null;
    howItWorks: HowItWorksData | null;
    partners: PartnersData | null;
    localArea: LocalAreaData | null;
    faq: HomepageFaq | null;
    reviews: ReviewsData | null;
    findOnGoogle: FindOnGoogleData | null;
    finalCta: FinalCtaData | null;
    sections: RichSectionData[];
};

/* ============================================================
   SITE IMAGES
   ============================================================ */

export type SiteImageEntry = {
    id: number;
    documentId: string;
    placeName: string;
    label: string;
    imageUrl: string | null;
    image: StrapiMedia;
    alt: string;
    width: number | null;
    height: number | null;
    page: string;
    category: string;
    notes: string | null;
    publishedAt: string | null;
};

export type StrapiSiteImagesResponse = {
    data: SiteImageEntry[];
    meta: Record<string, unknown>;
};

/** Resolved image shape for frontend consumption */
export type ResolvedImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
};
