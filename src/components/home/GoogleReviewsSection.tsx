import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const GoogleReviewsSection: React.FC = () => {
  const reviews = [
    {
      stars: 5,
      quote: "Got my Royal Enfield Himalayan serviced here before an Ooty ride. Clutch feel was buttery smooth and they cleaned the brake rotors without charging unnecessary labor. Top-notch work.",
      author: "Subhash N.",
      location: "Neeladri Nagar",
      vehicle: "Royal Enfield Himalayan",
      date: "2 weeks ago"
    },
    {
      stars: 5,
      quote: "Nice paint job on the passenger door of my Honda Jazz. The paint matching to their booth was 100% factory spec. Can't even tell it was touched up. Delivered right on time.",
      author: "Kaviyan M.",
      location: "Shikaripalya",
      vehicle: "Honda Jazz",
      date: "1 month ago"
    },
    {
      stars: 5,
      quote: "The WhatsApp updates during the work were super refreshing. No waiting blindly at the reception. I saw pictures of the dirty cabin AC filter before saying yes to replacing it.",
      author: "Preetag R.",
      location: "Wipro Gate 10, EC",
      vehicle: "Maruti Swift",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="bg-[#F7F5F0] text-[#17191A] py-16 lg:py-24 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97732]"></span>
              <span>GOOGLE VERIFIED EXPERIENCE</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#17191A] tracking-tight">
              4.9 ★ on Google · 687 Real Customer Reviews
            </h2>
          </div>

          <a
            href={BUSINESS_CONFIG.reputation.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-semibold uppercase text-[#D97732] hover:text-[#C26522] inline-flex items-center gap-1 shrink-0 pb-1"
          >
            <span>Read All 687 Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Big Review Card */}
        <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#DDD9D0] shadow-sm mb-6 space-y-4">
          <div className="flex items-center gap-1 text-[#D97732]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D97732]" />
            ))}
          </div>

          <p className="font-heading font-medium text-base sm:text-lg lg:text-xl text-[#17191A] leading-relaxed italic">
            “Finally a garage in Electronic City where you don’t have to worry about inflated bills or phantom parts. They sent WhatsApp videos of the worn suspension bushing and let me choose genuine parts before installing. Absolutely transparent and honest.”
          </p>

          <div className="pt-4 border-t border-[#F0ECE1] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EFECE4] text-[#17191A] font-bold font-mono text-xs flex items-center justify-center border border-[#DDD9D0]">
                RK
              </div>
              <div>
                <span className="font-semibold text-[#17191A] block">Rajesh K.</span>
                <span className="text-[#6B6D69] text-[11px]">
                  Electronic City Phase 1 · Hyundai Creta 1.6 CRDi Owner
                </span>
              </div>
            </div>

            <span className="text-[11px] font-mono text-[#66705F]">
              ✓ Google Verified Review · 3 weeks ago
            </span>
          </div>
        </div>

        {/* 3 Supporting Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 border border-[#DDD9D0] flex flex-col justify-between shadow-sm space-y-4 text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-[#D97732]">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D97732]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#6B6D69]">{rev.date}</span>
                </div>

                <p className="text-xs text-[#6B6D69] leading-relaxed line-clamp-4">
                  “{rev.quote}”
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0ECE1] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#EFECE4] text-[#17191A] font-bold font-mono text-[11px] flex items-center justify-center border border-[#DDD9D0]">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-xs text-[#17191A] block">{rev.author}</span>
                  <span className="text-[10px] text-[#6B6D69]">{rev.location} · {rev.vehicle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
