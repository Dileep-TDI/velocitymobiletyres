"use client";

import { useEffect, useState } from "react";
import { googleBusinessMeta, googleReviews } from "@/content/googleReviews";

const FALLBACK_RATING = 5;

function averageFromReviews(reviews: { rating: number }[]) {
  if (!reviews.length) return FALLBACK_RATING;
  const sum = reviews.reduce((total, review) => total + review.rating, 0);
  return sum / reviews.length;
}

function formatRating(value: number) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? rounded.toFixed(1) : String(rounded);
}

export default function GoogleRatingScore() {
  const [rating, setRating] = useState(FALLBACK_RATING);
  const [reviewCount, setReviewCount] = useState(googleBusinessMeta.reviewCount);
  const [source, setSource] = useState<"static" | "places-api">("static");

  useEffect(() => {
    let cancelled = false;

    fetch("/api/google-reviews/")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (cancelled || !json) return;

        const reviews = Array.isArray(json.reviews) ? json.reviews : googleReviews;
        const apiRating =
          typeof json.rating === "number" && !Number.isNaN(json.rating)
            ? json.rating
            : averageFromReviews(reviews);

        setRating(apiRating > 0 ? apiRating : FALLBACK_RATING);
        setReviewCount(
          typeof json.reviewCount === "number" && json.reviewCount > 0
            ? json.reviewCount
            : reviews.length || googleBusinessMeta.reviewCount,
        );
        setSource(json.source === "places-api" ? "places-api" : "static");
      })
      .catch(() => {
        if (cancelled) return;
        setRating(FALLBACK_RATING);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const filledStars = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <div className="flex items-baseline gap-4 mb-4">
      <span className="font-heading font-black text-5xl sm:text-6xl text-primary tracking-tight">
        {formatRating(rating)}
      </span>
      <div>
        <div
          className="flex items-center gap-1 text-primary text-xl"
          aria-label={`${formatRating(rating)} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < filledStars ? "text-primary" : "text-white/20"}>
              ★
            </span>
          ))}
        </div>
        <div className="text-white/60 text-xs font-medium">
          {source === "places-api"
            ? `Based on ${reviewCount} Google review${reviewCount === 1 ? "" : "s"}`
            : `Based on ${reviewCount}+ Google reviews`}
        </div>
      </div>
    </div>
  );
}
