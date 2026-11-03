import { NextResponse } from "next/server";
import {
  googleBusinessMeta,
  googleReviews,
  type GoogleReview,
} from "@/content/googleReviews";

type PlacesFindResponse = {
  candidates?: Array<{ place_id?: string }>;
  status?: string;
  error_message?: string;
};

type PlacesDetailsResponse = {
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: Array<{
      author_name?: string;
      rating?: number;
      text?: string;
      relative_time_description?: string;
      profile_photo_url?: string;
    }>;
  };
  status?: string;
  error_message?: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function mapReviews(
  raw: NonNullable<PlacesDetailsResponse["result"]>["reviews"],
): GoogleReview[] {
  if (!raw?.length) return [];

  return raw
    .filter((r) => r.author_name && r.text?.trim())
    .map((r) => ({
      id: slugify(
        `${r.author_name}-${r.relative_time_description ?? "review"}`,
      ),
      author: r.author_name!,
      rating: Math.min(5, Math.max(1, Math.round(r.rating ?? 5))) as
        | 5
        | 4
        | 3
        | 2
        | 1,
      text: r.text!.trim(),
      relativeTime: r.relative_time_description ?? "recently",
      source: "Google" as const,
      location: "Campbelltown",
      profilePhotoUrl: r.profile_photo_url ?? null,
    }));
}

async function resolvePlaceId(apiKey: string): Promise<string | null> {
  const configured = process.env.GOOGLE_PLACE_ID?.trim();
  if (configured) return configured;

  const params = new URLSearchParams({
    input: googleBusinessMeta.searchQuery,
    inputtype: "textquery",
    fields: "place_id,name",
    key: apiKey,
  });

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${params}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    console.error("Place Find failed", res.status, await res.text());
    return null;
  }

  const data = (await res.json()) as PlacesFindResponse;
  if (data.status && data.status !== "OK") {
    console.error("Place Find status", data.status, data.error_message);
    return null;
  }

  return data.candidates?.[0]?.place_id ?? null;
}

async function fetchPlaceDetails(apiKey: string, placeId: string) {
  const params = new URLSearchParams({
    place_id: placeId,
    fields: "name,rating,user_ratings_total,url,reviews",
    reviews_sort: "newest",
    language: "en",
    key: apiKey,
  });

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    console.error("Place Details failed", res.status, await res.text());
    return null;
  }

  const data = (await res.json()) as PlacesDetailsResponse;
  if (data.status && data.status !== "OK") {
    console.error("Place Details status", data.status, data.error_message);
    return null;
  }

  return data.result ?? null;
}

async function fetchLiveGoogleReviews(): Promise<{
  reviews: GoogleReview[];
  rating: number;
  reviewCount: number;
  source: "places-api";
  mapsUrl: string;
  placeId: string;
} | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY?.trim();
  if (!apiKey) return null;

  const placeId = await resolvePlaceId(apiKey);
  if (!placeId) return null;

  const place = await fetchPlaceDetails(apiKey, placeId);
  if (!place) return null;

  const reviews = mapReviews(place.reviews);
  if (!reviews.length) return null;

  return {
    reviews,
    rating: place.rating ?? googleBusinessMeta.rating,
    reviewCount: place.user_ratings_total ?? reviews.length,
    source: "places-api",
    mapsUrl: place.url ?? googleBusinessMeta.mapsUrl,
    placeId,
  };
}

function staticPayload() {
  return {
    ok: true as const,
    reviews: googleReviews,
    rating: googleBusinessMeta.rating,
    reviewCount: googleBusinessMeta.reviewCount,
    source: "static" as const,
    mapsUrl: googleBusinessMeta.mapsUrl,
    name: googleBusinessMeta.name,
    address: googleBusinessMeta.address,
  };
}

/** GOOGLE_MAPS_API_KEY is optional — without it, curated static reviews are returned. */
export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY?.trim();

  if (!apiKey) {
    return NextResponse.json(staticPayload());
  }

  try {
    const live = await fetchLiveGoogleReviews();
    if (live) {
      return NextResponse.json({
        ok: true,
        ...live,
        name: googleBusinessMeta.name,
        address: googleBusinessMeta.address,
      });
    }
  } catch (error) {
    console.error("google-reviews route error", error);
  }

  // Key present but API failed — still succeed with static fallback
  return NextResponse.json(staticPayload());
}
