import type {
    StrapiHomepageResponse,
    HomepageData,
    RichContentSection,
    FaqSection,
    SeoSection,
    RichContentBlock,
    RichContentInline,
    HomepageHero,
    RichSectionData,
    WhatWeDoData,
    WeComeToYouData,
    HowItWorksData,
    HowItWorksStep,
    PartnersData,
    LocalAreaData,
    ReviewsData,
    FindOnGoogleData,
    FinalCtaData,
    CtaLink,
} from "./types";
import { site } from "@/content/siteContent";

/* ============================================================
   STATIC SITE CONTENT
   ============================================================ */
export const siteContent = {
    business: {
        name: site.brand,
        phone: site.phone,
        phoneTel: site.phoneTel,
        hours: site.hours,
        location: "West Ryde, Sydney NSW",
    },
    nav: { ctaLabel: site.nav.ctaLabel },
    buttons: {
        callPrimary: `Call ${site.phone}`,
        callSecondary: "Get Mobile Tyre Assistance",
    },
} as const;

/* ============================================================
   HELPERS
   ============================================================ */

/** Flatten inline nodes → plain text */
export function inlineToText(children?: RichContentInline[]): string {
    if (!children || !Array.isArray(children)) return "";
    return children
        .map((child) => {
            if (child.type === "text") return child.text;
            if (child.type === "link") return inlineToText(child.children);
            return "";
        })
        .join("");
}

/** Extract all inline links from a block's children */
export function extractInlineLinks(
    children?: RichContentInline[]
): CtaLink[] {
    if (!children || !Array.isArray(children)) return [];
    const links: CtaLink[] = [];

    for (const child of children) {
        if (child.type === "link") {
            links.push({
                label: inlineToText(child.children),
                url: child.url,
                type: child.url.startsWith("tel:") ? "tel" : "link",
            });
        }
    }
    return links;
}

export function isHeadingBlock(
    block: RichContentBlock
): block is RichContentBlock & { type: "heading"; level: number } {
    return block.type === "heading";
}

export function isParagraphBlock(
    block: RichContentBlock
): block is RichContentBlock & { type: "paragraph" } {
    return block.type === "paragraph";
}

export function isListBlock(
    block: RichContentBlock
): block is RichContentBlock & {
    type: "list";
    format: "ordered" | "unordered";
} {
    return block.type === "list";
}

/** Extract text from the first heading of given level */
export function extractHeadingText(
    blocks: RichContentBlock[],
    level = 2
): string | null {
    for (const b of blocks) {
        if (b.type === "heading" && b.level === level) {
            return inlineToText(b.children).trim();
        }
    }
    return null;
}

/** Extract text from the first paragraph */
export function extractFirstParagraphText(
    blocks: RichContentBlock[]
): string | null {
    for (const b of blocks) {
        if (b.type === "paragraph") {
            return inlineToText(b.children).trim();
        }
    }
    return null;
}

/* ============================================================
   CARD EXTRACTOR FROM NESTED LISTS
   Handles Strapi pattern:
   - list -> item 0 (title), item 1 (nested list -> item 0 description)
   ============================================================ */
export function extractListCards(
    blocks: RichContentBlock[]
): { title: string; description: string }[] {
    const cards: { title: string; description: string }[] = [];

    for (const block of blocks) {
        if (block.type !== "list") continue;

        const children = block.children ?? [];
        let currentTitle = "";
        let currentDesc = "";

        for (const child of children) {
            // Check if top-level list-item -> title
            if ("type" in child && child.type === "list-item") {
                const text = inlineToText(child.children).trim();
                if (text) {
                    if (currentTitle && currentDesc) {
                        cards.push({ title: currentTitle, description: currentDesc });
                        currentDesc = "";
                    }
                    currentTitle = text;
                }
            } else if ("type" in child && child.type === "list") {
                // Nested list -> description
                const nestedItems = child.children ?? [];
                for (const nested of nestedItems) {
                    if ("type" in nested && nested.type === "list-item") {
                        currentDesc = inlineToText(nested.children).trim();
                    }
                }
            }
        }

        if (currentTitle) {
            cards.push({ title: currentTitle, description: currentDesc });
        }
    }

    return cards;
}

/* ============================================================
   SECTION TRANSFORMERS
   ============================================================ */

/** 1. HERO (Section 18) */
export function transformHero(
    content: RichContentSection | null
): HomepageHero | null {
    if (!content || !content.content) return null;

    const paragraphs = content.content.filter(isParagraphBlock);

    // Eyebrow = first paragraph
    const eyebrow = paragraphs[0]
        ? inlineToText(paragraphs[0].children).trim()
        : null;

    const descriptions: string[] = [];
    let hours: HomepageHero["hours"] = null;
    let phoneCta: HomepageHero["phoneCta"] = null;
    const secondaryCtas: { label: string; url: string }[] = [];

    for (let i = 1; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        const text = inlineToText(p.children).trim();

        if (/^operating hours/i.test(text)) {
            const match = text.match(/^Operating Hours:\s*(.+)$/i);
            hours = {
                label: "Operating Hours:",
                value: match?.[1]?.trim() ?? text,
                text,
            };
            continue;
        }

        const links = extractInlineLinks(p.children);
        const telLink = links.find((l) => l.type === "tel");

        if (telLink) {
            if (!phoneCta) {
                phoneCta = { label: telLink.label, url: telLink.url, type: "tel" };
            }
            links
                .filter((l) => l.type !== "tel")
                .forEach((l) =>
                    secondaryCtas.push({ label: l.label, url: l.url })
                );
            continue;
        }

        if (text) descriptions.push(text);
    }

    return {
        title: content.heading,
        eyebrow,
        descriptions,
        hours,
        phoneCta,
        secondaryCtas,
    };
}

/** 2. WHAT WE DO (Section 19) */
export function transformWhatWeDo(
    section: RichContentSection
): WhatWeDoData {
    const blocks = section.content ?? [];
    const title = extractHeadingText(blocks, 2);
    const description = extractFirstParagraphText(blocks);
    const cards = extractListCards(blocks);

    return {
        id: section.id,
        eyebrow: section.heading,
        title: title || section.heading,
        description,
        cards,
    };
}

/** 3. WE COME TO YOU (Section 20) */
export function transformWeComeToYou(
    section: RichContentSection
): WeComeToYouData {
    const blocks = section.content ?? [];
    const title = extractHeadingText(blocks, 2);
    const description = extractFirstParagraphText(blocks);
    const cards = extractListCards(blocks);

    return {
        id: section.id,
        eyebrow: section.heading,
        title: title || section.heading,
        description,
        cards,
    };
}

/** 4. HOW IT WORKS (Section 21) */
export function transformHowItWorks(
    section: RichContentSection
): HowItWorksData {
    const blocks = section.content ?? [];
    const title = extractHeadingText(blocks, 2);

    const steps: HowItWorksStep[] = [];
    const orderedList = blocks.find((b) => b.type === "list" && b.format === "ordered");

    if (orderedList && orderedList.children) {
        let stepCount = 0;
        const children = orderedList.children;

        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if ("type" in child && child.type === "list-item") {
                stepCount++;
                const rawTitle = inlineToText(child.children).trim();
                const cleanTitle = rawTitle.replace(/:$/, "").trim();

                // Look ahead for nested list description
                let stepDesc = "";
                let stepPhoneUrl: string | undefined = undefined;
                let stepPhoneLabel: string | undefined = undefined;

                const nextChild = children[i + 1];
                if (nextChild && "type" in nextChild && nextChild.type === "list") {
                    const nestedItems = nextChild.children ?? [];
                    for (const nested of nestedItems) {
                        if ("type" in nested && nested.type === "list-item") {
                            stepDesc = inlineToText(nested.children).trim();
                            const links = extractInlineLinks(nested.children);
                            const tel = links.find((l) => l.type === "tel");
                            if (tel) {
                                stepPhoneUrl = tel.url;
                                stepPhoneLabel = tel.label;
                            }
                        }
                    }
                    i++; // skip next since processed
                }

                steps.push({
                    stepNumber: stepCount,
                    title: cleanTitle,
                    description: stepDesc,
                    phoneUrl: stepPhoneUrl,
                    phoneLabel: stepPhoneLabel,
                });
            }
        }
    }

    return {
        id: section.id,
        eyebrow: section.heading,
        title: title || section.heading,
        steps,
    };
}

/** 5. PARTNERS (Section 22) */
export function transformPartners(
    section: RichContentSection
): PartnersData {
    return {
        id: section.id,
        heading: section.heading ?? "Our Partners :",
    };
}

/** 6. LOCAL AREA / SERVICE AREA (Section 23) */
export function transformLocalArea(
    section: RichContentSection
): LocalAreaData {
    const blocks = section.content ?? [];
    const paragraphs: string[] = [];
    let phoneCta: CtaLink | null = null;
    let hours: string | null = null;

    for (const b of blocks) {
        if (b.type === "paragraph") {
            const text = inlineToText(b.children).trim();
            const links = extractInlineLinks(b.children);
            const tel = links.find((l) => l.type === "tel");
            if (tel) {
                phoneCta = tel;
            } else if (text) {
                paragraphs.push(text);
            }
        } else if (b.type === "list") {
            // Find operating hours in list
            const allListText = inlineToText(
                (b.children ?? []).flatMap((c) =>
                    "type" in c && c.type === "list-item" ? c.children : []
                )
            );
            if (/7\s*am/i.test(allListText)) {
                hours = ".";
            }
        }
    }

    return {
        id: section.id,
        heading: section.heading,
        paragraphs,
        phoneCta,
        hours,
    };
}

/** 7. REVIEWS & TESTIMONIALS (Section 24) */
export function transformReviews(
    section: RichContentSection
): ReviewsData {
    const blocks = section.content ?? [];
    const title = extractHeadingText(blocks, 2);
    const description = extractFirstParagraphText(blocks);

    return {
        id: section.id,
        eyebrow: section.heading,
        title: title || section.heading,
        description,
    };
}

/** 8. FIND ON GOOGLE (Section 25) */
export function transformFindOnGoogle(
    section: RichContentSection
): FindOnGoogleData {
    const blocks = section.content ?? [];
    const title = extractHeadingText(blocks, 2);
    const description = extractFirstParagraphText(blocks);

    return {
        id: section.id,
        eyebrow: section.heading,
        title: title || section.heading,
        description,
    };
}

/** 9. FINAL CTA (Section 26) */
export function transformFinalCta(
    section: RichContentSection
): FinalCtaData {
    const blocks = section.content ?? [];
    const title = extractHeadingText(blocks, 2);

    const paragraphs: string[] = [];
    let phoneCta: CtaLink | null = null;
    let hours: string | null = null;
    let hasForm = false;

    for (const b of blocks) {
        if (b.type === "paragraph") {
            const text = inlineToText(b.children).trim();
            if (text === "{form}") {
                hasForm = true;
            } else if (text) {
                paragraphs.push(text);
            }
        } else if (b.type === "list") {
            const links = (b.children ?? []).flatMap((c) =>
                "type" in c && c.type === "list-item" ? extractInlineLinks(c.children) : []
            );
            const tel = links.find((l) => l.type === "tel");
            if (tel) {
                phoneCta = tel;
            }
            const allText = inlineToText(
                (b.children ?? []).flatMap((c) =>
                    "type" in c && c.type === "list-item" ? c.children : []
                )
            );
            if (/7\s*am/i.test(allText)) {
                hours = "7 am – 9 pm";
            }
        }
    }

    return {
        id: section.id,
        eyebrow: section.heading,
        title: title || section.heading,
        paragraphs,
        phoneCta,
        hours,
        hasForm,
    };
}

/* ============================================================
   FALLBACK TRANSFORMER
   ============================================================ */
export function transformRichSection(section: RichContentSection): RichSectionData {
    const blocks = section.content ?? [];
    const paragraphs: string[] = [];
    const headings: { level: number; text: string }[] = [];
    const lists: { format: "ordered" | "unordered"; items: string[] }[] = [];
    const links: CtaLink[] = [];

    for (const block of blocks) {
        if (block.type === "paragraph") {
            const text = inlineToText(block.children).trim();
            if (text) paragraphs.push(text);
            links.push(...extractInlineLinks(block.children));
        }

        if (block.type === "heading") {
            headings.push({
                level: block.level,
                text: inlineToText(block.children).trim(),
            });
        }

        if (block.type === "list") {
            const items: string[] = [];
            for (const item of block.children) {
                if ("type" in item && item.type === "list-item") {
                    items.push(inlineToText(item.children).trim());
                    links.push(...extractInlineLinks(item.children));
                }
            }
            lists.push({ format: block.format, items });
        }
    }

    return {
        id: section.id,
        heading: section.heading,
        paragraphs,
        headings,
        lists,
        links,
    };
}

/* ============================================================
   MAIN HOMEPAGE TRANSFORMER
   ============================================================ */
export function transformHomepage(
    raw: StrapiHomepageResponse | null
): HomepageData {
    if (!raw?.data) {
        return {
            seo: null,
            hero: null,
            whatWeDo: null,
            weComeToYou: null,
            howItWorks: null,
            partners: null,
            localArea: null,
            faq: null,
            reviews: null,
            findOnGoogle: null,
            finalCta: null,
            sections: [],
        };
    }

    const sections = raw.data.sections ?? [];

    const seo = sections.find(
        (s): s is SeoSection => s.__component === "shared.seo"
    );

    const faqSection = sections.find(
        (s): s is FaqSection => s.__component === "sections.faq-section"
    );

    // Rich content sections mapped by ID or heading
    let hero: HomepageHero | null = null;
    let whatWeDo: WhatWeDoData | null = null;
    let weComeToYou: WeComeToYouData | null = null;
    let howItWorks: HowItWorksData | null = null;
    let partners: PartnersData | null = null;
    let localArea: LocalAreaData | null = null;
    let reviews: ReviewsData | null = null;
    let findOnGoogle: FindOnGoogleData | null = null;
    let finalCta: FinalCtaData | null = null;

    const fallbackSections: RichSectionData[] = [];

    for (const s of sections) {
        if (s.__component !== "sections.rich-content") continue;

        const heading = (s.heading ?? "").toLowerCase();

        // 1. Hero: first rich-content section (id: 18 or "mobile tyre repair in west ryde - we come to you")
        if (!hero && (s.id === 18 || heading.includes("we come to you -") || heading.includes("mobile tyre repair in west ryde -"))) {
            hero = transformHero(s);
            continue;
        }

        // 2. What We Do (id: 19 or heading "what we do")
        if (s.id === 19 || heading === "what we do" || heading.includes("services in west ryde")) {
            whatWeDo = transformWhatWeDo(s);
            continue;
        }

        // 3. We Come To You (id: 20 or heading "we come to you")
        if (s.id === 20 || heading === "we come to you" || heading.includes("assistance at your location")) {
            weComeToYou = transformWeComeToYou(s);
            continue;
        }

        // 4. How It Works (id: 21 or heading "how it works")
        if (s.id === 21 || heading.includes("how it works")) {
            howItWorks = transformHowItWorks(s);
            continue;
        }

        // 5. Partners (id: 22 or heading "our partners")
        if (s.id === 22 || heading.includes("partner")) {
            partners = transformPartners(s);
            continue;
        }

        // 6. Local Area / Near You (id: 23 or heading "near you")
        if (s.id === 23 || heading.includes("near you")) {
            localArea = transformLocalArea(s);
            continue;
        }

        // 7. Reviews & Testimonials (id: 24 or heading "testimonials" or "customers say")
        if (s.id === 24 || heading.includes("testimonial") || heading.includes("reviews & testimonials")) {
            reviews = transformReviews(s);
            continue;
        }

        // 8. Find on Google (id: 25 or heading "find us on google")
        if (s.id === 25 || heading.includes("find us on google")) {
            findOnGoogle = transformFindOnGoogle(s);
            continue;
        }

        // 9. Final CTA (id: 26 or heading "get in touch")
        if (s.id === 26 || heading.includes("get in touch") || heading.includes("need mobile tyre repair")) {
            finalCta = transformFinalCta(s);
            continue;
        }

        fallbackSections.push(transformRichSection(s));
    }

    return {
        seo: seo
            ? {
                metaTitle: seo.metaTitle,
                metaDescription: seo.metaDescription,
                canonicalUrl: seo.canonicalUrl,
                ogImage: seo.ogImage,
                noIndex: seo.noIndex,
            }
            : null,
        hero,
        whatWeDo,
        weComeToYou,
        howItWorks,
        partners,
        localArea,
        faq: faqSection
            ? { heading: faqSection.heading, items: faqSection.Faq }
            : null,
        reviews,
        findOnGoogle,
        finalCta,
        sections: fallbackSections,
    };
}
