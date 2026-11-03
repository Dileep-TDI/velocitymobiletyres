import type { ReviewsData, FindOnGoogleData } from "@/lib/types";
import ScrollReveal from "@/components/ScrollReveal";

interface ReviewsSectionProps {
  reviews: ReviewsData | null;
  findOnGoogle: FindOnGoogleData | null;
}

export default function ReviewsSection({
  reviews,
  findOnGoogle,
}: ReviewsSectionProps) {
  if (!reviews && !findOnGoogle) return null;

  const title = reviews?.title ?? "What Our Customers Say";
  const description =
    reviews?.description ??
    "Real people. Real experiences. See what our customers have to say about Quickfit Mobile Tyres.";

  const googleHeading = findOnGoogle?.title ?? "Find Us on Google";
  const googleDescription =
    findOnGoogle?.description ??
    "Check out our reviews and see what our customers are saying.";
  const googleSearchUrl =
    findOnGoogle?.googleSearchUrl ??
    "https://www.google.com/search?q=Quickfit+Mobile+Tyres+West+Ryde";
  const googleReviewsUrl =
    reviews?.googleReviewsUrl ?? googleSearchUrl;
  const reviewsCtaLabel = reviews?.ctaLabel ?? "Read Our Google Reviews";
  const businessLabel =
    findOnGoogle?.businessLabel ?? "Quickfit Mobile Tyres West Ryde";
  const locationLabel =
    reviews?.locationLabel ?? "100% Mobile Service in West Ryde";

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative py-20 lg:py-28 bg-[#0a0a0a] text-white border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal variant="up" className="max-w-2xl mb-12">
          {reviews?.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-heading font-bold text-xs uppercase tracking-widest">
              <span>★ Verified Feedback</span>
            </div>
          )}
          <h2
            id="reviews-title"
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight mb-4"
          >
            {title}
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </ScrollReveal>

        {/* 2-Column Grid: Google Verified Card + Find Us Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Google Rating Box (7 cols) */}
          <ScrollReveal
            variant="left"
            delay={80}
            className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden group hover:border-primary/40 transition-colors h-full"
          >
            {/* Background Google G watermark */}
            <div
              className="absolute -right-8 -bottom-8 w-60 h-60 text-white/[0.02] pointer-events-none"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
              </svg>
            </div>

            <div>
              {/* Google Verified Banner */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-2 shadow">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.14z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-black text-white text-lg tracking-wide uppercase">
                    Google Customer Rating
                  </div>
                  <div className="text-white/50 text-xs font-semibold">
                    Verified Reviews & Ratings
                  </div>
                </div>
              </div>

              {/* Rating Score */}
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-heading font-black text-5xl sm:text-6xl text-primary tracking-tight">
                  4.9
                </span>
                <div>
                  <div className="flex items-center gap-1 text-primary text-xl">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="text-white/60 text-xs font-medium">
                    Over 500+ happy Sydney motorists
                  </div>
                </div>
              </div>

              {/* Verified Feature Highlights */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Customer satisfaction is our highest priority. We come to your location
                with fully equipped mobile tyre vans, upfront transparent pricing, and zero
                hidden callout fees.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                {locationLabel}
              </span>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn-primary !py-2.5 !px-4 text-xs font-heading font-black uppercase tracking-wider"
              >
                {reviewsCtaLabel}
              </a>
            </div>
          </ScrollReveal>

          {/* Find Us on Google Box (5 cols) */}
          <ScrollReveal
            variant="right"
            delay={160}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-primary/40 transition-colors h-full"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/10 text-white/80 font-heading font-bold text-xs uppercase tracking-wider">
                <svg
                  className="w-3.5 h-3.5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Google Business Profile</span>
              </div>

              <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-3">
                {googleHeading}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {googleDescription}
              </p>

              {/* Map location badge */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span>{businessLabel}</span>
                </div>
                <div className="text-white/50 text-xs">
                  Sydney NSW, Australia • Open 7:00 AM – 9:00 PM
                </div>
                <div className="text-primary text-xs font-semibold">
                  📞 0404 730 738
                </div>
              </div>
            </div>

            <a
              href={googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !py-3 !px-5 text-sm font-heading font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary hover:text-black hover:border-primary transition-all"
            >
              <span>View On Google</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
