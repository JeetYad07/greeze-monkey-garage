import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { REVIEWS_LIST, REVIEWS_OVERVIEW, FEATURED_REVIEW, type ReviewItem } from '../data/reviews';
import { Star, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { FinalCTA } from '../components/home/FinalCTA';

export const ReviewsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterThemes = [
    { id: 'all', label: 'All Reviews (687)' },
    { id: 'photos', label: 'Photo Proof & Old Parts' },
    { id: 'estimates', label: 'Clear Estimates' },
    { id: 'whatsapp', label: 'WhatsApp Updates' },
    { id: 'honesty', label: 'Honest Mechanic Advice' },
    { id: 'pricing', label: 'Fair Pricing' }
  ];

  const filteredReviews = REVIEWS_LIST.filter((rev: ReviewItem) => {
    if (selectedFilter === 'all') return true;
    return rev.theme === selectedFilter;
  });

  return (
    <>
      <SEO
        title="Customer Reviews (4.9★ / 687 Google Ratings) — Greeze Monkey Garage"
        description="Read authentic Google customer reviews for Greeze Monkey Garage in Electronic City, Bengaluru. Verified ratings for car & bike servicing, transparent estimates, and photo updates."
        canonicalPath="/reviews"
      />

      {/* Hero Header */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-16 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'Customer Reviews' }]} theme="light" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
                Verified Google Feedback
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight">
                4.9 ★ Rating Based on 687 Reviews
              </h1>
              <p className="text-sm sm:text-lg text-[#6B6D69] leading-relaxed">
                Read what vehicle owners in Electronic City, Neeladri Nagar, and Hulimangala say about our transparent estimates and WhatsApp photo verification.
              </p>
            </div>

            {/* Google Rating Big Badge */}
            <div className="bg-white p-6 rounded-lg border border-[#DDD9D0] flex items-center gap-5 text-left shrink-0 shadow-sm">
              <div className="w-14 h-14 rounded bg-[#F7F5F0] border border-[#DDD9D0] flex flex-col items-center justify-center text-[#D97732]">
                <Star className="w-7 h-7 fill-[#D97732]" />
              </div>
              <div>
                <div className="text-3xl font-semibold font-heading text-[#17191A]">4.9 / 5.0</div>
                <div className="text-xs text-[#6B6D69] font-mono mt-0.5">
                  687 Google Reviews
                </div>
                <a
                  href={BUSINESS_CONFIG.reputation.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#D97732] hover:text-[#C26522] inline-flex items-center gap-1 mt-1.5 transition-colors"
                >
                  Verify on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Core Themes Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#DDD9D0]">
            {REVIEWS_OVERVIEW.keyThemes.map((item, idx: number) => (
              <div key={idx} className="bg-white p-3 rounded border border-[#DDD9D0] text-left">
                <span className="text-[10px] font-mono text-[#D97732] block uppercase font-semibold">
                  {item.count}
                </span>
                <span className="text-xs text-[#17191A] font-medium mt-0.5 block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs & Review Cards */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-16 sm:py-24 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filterThemes.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono transition-colors ${
                  selectedFilter === tab.id
                    ? 'bg-[#17191A] text-white font-medium'
                    : 'bg-white text-[#6B6D69] hover:text-[#17191A] border border-[#DDD9D0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Featured Review Callout */}
          {selectedFilter === 'all' && (
            <div className="bg-white rounded-lg p-6 sm:p-10 border border-[#DDD9D0] text-left relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1 text-[#D97732]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D97732]" />
                  ))}
                </div>
                <span className="text-xs font-mono font-semibold uppercase bg-[#F7F5F0] text-[#66705F] px-2.5 py-0.5 rounded border border-[#DDD9D0]">
                  Featured Review
                </span>
              </div>

              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[#17191A] mb-3">
                “{FEATURED_REVIEW.highlightPhrase}”
              </h3>

              <p className="text-base text-[#6B6D69] leading-relaxed italic mb-4">
                “{FEATURED_REVIEW.content}”
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-[#DDD9D0]">
                <div className="w-8 h-8 rounded-full bg-[#17191A] text-[#F0B27A] font-bold font-mono text-xs flex items-center justify-center">
                  {FEATURED_REVIEW.authorName.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#17191A]">
                    {FEATURED_REVIEW.authorName}
                  </div>
                  <div className="text-xs text-[#6B6D69] font-mono">
                    {FEATURED_REVIEW.vehicleModel} · {FEATURED_REVIEW.serviceType}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev: ReviewItem) => (
              <div
                key={rev.id}
                className="bg-white p-6 sm:p-7 rounded-lg border border-[#DDD9D0] flex flex-col justify-between text-left shadow-sm hover:border-[#D97732] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0.5 text-[#D97732]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D97732]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#66705F]">
                      Verified Google Review
                    </span>
                  </div>

                  <h4 className="font-heading font-semibold text-base text-[#17191A] mb-2">
                    “{rev.highlightPhrase}”
                  </h4>

                  <p className="text-xs sm:text-sm text-[#6B6D69] leading-relaxed mb-6">
                    “{rev.content}”
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDD9D0] mt-auto flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F7F5F0] text-[#17191A] font-bold text-xs flex items-center justify-center font-mono border border-[#DDD9D0]">
                    {rev.authorName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[#17191A]">
                      {rev.authorName}
                    </div>
                    {rev.vehicleModel && (
                      <div className="text-[10px] text-[#6B6D69] font-mono">
                        {rev.vehicleModel}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
