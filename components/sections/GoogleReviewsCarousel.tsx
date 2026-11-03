"use client";

import { useEffect, useState } from "react";
import {
  googleBusinessMeta,
  googleReviews as staticReviews,
  type GoogleReview,
} from "@/content/googleReviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-primary" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const initial = review.author.charAt(0).toUpperCase();

  return (
    <article
      className="review-card shrink-0 w-[270px] sm:w-[290px] lg:w-[300px] flex flex-col rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/40 p-5 sm:p-6 transition-colors"
      aria-label={`Google review by ${review.author}`}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5 min-w-0">
          {review.profilePhotoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={review.profilePhotoUrl}
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-heading font-black text-primary text-sm shrink-0"
              aria-hidden="true"
            >
              {initial}
            </div>
          )}
          <div className="min-w-0">
            <p className="font-heading font-bold text-white text-sm truncate">
              {review.author}
            </p>
            <p className="text-white/40 text-[11px]">{review.relativeTime}</p>
          </div>
        </div>
        <GoogleMark />
      </div>

      <Stars rating={review.rating} />

      <p className="mt-3 text-white/75 text-sm leading-relaxed line-clamp-5 flex-1">
        “{review.text}”
      </p>

      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase tracking-wider font-heading font-bold text-white/35">
          Posted on Google
        </span>
        {review.location && (
          <span className="text-[10px] uppercase tracking-wider font-heading font-bold text-primary/80">
            {review.location}
          </span>
        )}
      </div>
    </article>
  );
}

type ReviewsPayload = {
  reviews: GoogleReview[];
  mapsUrl: string;
  source?: string;
};

/** Loads live reviews from Google Places API via /api/google-reviews */
export default function GoogleReviewsCarousel() {
  const [data, setData] = useState<ReviewsPayload>({
    reviews: staticReviews,
    mapsUrl: googleBusinessMeta.mapsUrl,
    source: "static",
  });

  useEffect(() => {
    let cancelled = false;

    fetch("/api/google-reviews/")
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (cancelled || !json?.reviews?.length) return;
        setData({
          reviews: json.reviews,
          mapsUrl: json.mapsUrl ?? googleBusinessMeta.mapsUrl,
          source: json.source,
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  const items =
    data.reviews.length >= 4
      ? [...data.reviews, ...data.reviews]
      : [...data.reviews, ...data.reviews, ...data.reviews, ...data.reviews];

  return (
    <section
      aria-label="Google Business Reviews"
      className="relative pt-0 pb-12 lg:pb-14 bg-[#0a0a0a] border-b border-white/5 overflow-hidden"
    >
      <div className="relative w-full overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"
          aria-hidden="true"
        />
        <div className="animate-marquee-reviews flex items-stretch gap-4 sm:gap-5 px-4 sm:px-6 py-2">
          {items.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <a
          href={data.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 !text-primary hover:!text-[#cfbe0a] font-heading font-black uppercase tracking-wider text-sm transition-colors"
        >
          <span>Read all reviews on Google</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
