/**
 * Google Business reviews — West Ryde listing.
 *
 * GOOGLE_MAPS_API_KEY is optional:
 * - With key → /api/google-reviews loads live reviews from Places API
 * - Without key → these curated reviews are used (works in production free)
 * Optional GOOGLE_PLACE_ID skips Find Place when using the API.
 */

export type GoogleReview = {
  id: string;
  author: string;
  rating: 5 | 4 | 3 | 2 | 1;
  text: string;
  relativeTime: string;
  source: "Google";
  location?: string;
  profilePhotoUrl?: string | null;
};

export const googleBusinessMeta = {
  name: "Quickfit Mobile Tyres West Ryde",
  address: "West Ryde NSW 2114, Australia",
  /** Fallback rating when GOOGLE_MAPS_API_KEY is not set */
  rating: 5,
  reviewCount: 4,
  mapsUrl: "https://www.google.com/maps?cid=3491704013674685629",
  searchQuery:
    "Quickfit Mobile Tyres West Ryde NSW 2114",
} as const;

/** Fallback only — real Google reviews if live sources are not configured */
export const googleReviews: GoogleReview[] = [
  {
    id: "ben-acs",
    author: "Ben Acs",
    rating: 5,
    text: "Sam was incredibly quick, mindful & gave amazing advice friendly vendor greatly appreciated, thanks",
    relativeTime: "a month ago",
    source: "Google",
    location: "West Ryde",
  },
  {
    id: "emerald-kollias",
    author: "Emerald Kollias",
    rating: 5,
    text: "Highly recommend Sam, replied instantly, turned up within 45 minutes. Great price replaced my burst tyre, gave me good price on second tyre tread required replacing. Checked air pressure and topped the others up. Very professional service.",
    relativeTime: "a year ago",
    source: "Google",
    location: "West Ryde",
  },
  {
    id: "henry-swisher",
    author: "Henry Swisher",
    rating: 5,
    text: "Sam was responsive and helpful, sorting out a solution and being flexible to help me get back on the road. Highly recommend - thanks again!!",
    relativeTime: "a year ago",
    source: "Google",
    location: "West Ryde",
  },
];
