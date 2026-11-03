import type { ResolvedImage, SiteImageEntry } from "./types";

const WP_BASE = "https://quickfitmobiletyres.com.au/wp-content/uploads";

/* ============================================================
   STATIC IMAGES
   Build-time constants — used in layout metadata + navbar/footer.
   These rarely change and are needed synchronously in RootLayout.
   ============================================================ */
export const staticImages = {
    // Favicons — used in layout.tsx metadata.icons
    favicon: {
        sm: `${WP_BASE}/2026/04/cropped-continental-tyres-32x32.png`,
        md: `${WP_BASE}/2026/04/cropped-continental-tyres-192x192.png`,
        apple: `${WP_BASE}/2026/04/cropped-continental-tyres-180x180.png`,
    },

    // Default OG image — used in layout.tsx metadata.openGraph
    ogDefault: `${WP_BASE}/2026/04/quickfit-og-default.jpg`,

    // Brand logos — used in Navbar/Footer (frequently rendered, static)
    logo: {
        src: `${WP_BASE}/2026/03/enhanced.png`,
        alt: "Quickfit Mobile Tyres",
        width: 200,
        height: 60,
    },
    logoWhite: {
        src: `${WP_BASE}/2026/03/enhanced.png`,
        alt: "Quickfit Mobile Tyres",
        width: 200,
        height: 60,
    },
} as const;

/** Alias for layout.tsx which imports `siteImages` */
export const siteImages = staticImages;

/* ============================================================
   DYNAMIC IMAGES (Strapi-managed)
   Keyed by `placeName` — resolved at request time from
   `site-image` collection type in Strapi.
   ============================================================ */

/**
 * Runtime image map — populated from Strapi via buildImageMap().
 * Keys are `placeName` (e.g., "homepage.hero.background").
 */
export type ImageMap = Record<string, ResolvedImage>;

/**
 * Transform Strapi site-images array into a `placeName → ResolvedImage` map.
 * Priority: imageUrl (external/WP) > image (Strapi media) > skip.
 */
export function buildImageMap(
    entries: SiteImageEntry[] | null | undefined
): ImageMap {
    const map: ImageMap = {};
    if (!entries) return map;

    for (const entry of entries) {
        const src = entry.imageUrl ?? entry.image?.url;
        if (!src) continue;

        map[entry.placeName] = {
            src,
            alt: entry.alt,
            width: entry.width ?? 0,
            height: entry.height ?? 0,
        };
    }

    return map;
}

/**
 * Get a single image from map. Throws if missing — fails loudly in dev.
 */
export function getImage(

    map: ImageMap,
    placeName: string
): ResolvedImage {
    const image = map[placeName];
    if (!image) {
        throw new Error(
            `Missing site image: "${placeName}". Add it in Strapi → Site Images.`
        );
    }
    return image;
}

/**
 * Optional-safe variant — returns null if missing.
 * Use when image is optional (e.g., decorative hero background).
 */
export function tryGetImage(
    map: ImageMap,
    placeName: string
): ResolvedImage | null {
    return map[placeName] ?? null;
}