import type { StrapiHomepageResponse, StrapiSiteImagesResponse } from "./types";

/**
 * Strapi CMS is disabled — all page content comes from content/siteContent.ts.
 * These stubs remain so any leftover imports compile without network calls.
 */
const STRAPI_DISABLED = true;

export async function strapiFetch<T>(_path: string): Promise<T | null> {
  if (STRAPI_DISABLED) return null;
  return null;
}

export async function getHomepage(): Promise<StrapiHomepageResponse | null> {
  return null;
}

export async function getSiteImages(): Promise<StrapiSiteImagesResponse | null> {
  return null;
}
