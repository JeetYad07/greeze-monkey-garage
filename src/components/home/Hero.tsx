import React from 'react';
import { Star, ShieldCheck, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { Button } from '../common/Button';
import mechanicImg from '../../assets/mechanic.png';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#F7F5F0] text-[#17191A] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#DDD9D0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#D97732]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97732]"></span>
              <span>GREEZE MONKEY GARAGE — ELECTRONIC CITY, BENGALURU</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#17191A] leading-[1.12]">
              Transparent vehicle service.{' '}
              <span className="text-[#D97732] block sm:inline">No guesswork.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed max-w-xl">
              Professional car and bike maintenance in Electronic City with live-item estimates, real-time WhatsApp updates, and photographic proof of every replaced component.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                to="/booking"
                className="text-xs font-mono font-bold tracking-wider uppercase px-6 py-3"
              >
                BOOK A SERVICE
              </Button>

              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl('booking')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white hover:bg-[#EFECE4] border border-[#DDD9D0] text-xs font-mono font-semibold text-[#17191A] transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#66705F]" />
                <span>WhatsApp: 082483 78737</span>
              </a>
            </div>

            {/* Proof Badges Strip below Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-[#DDD9D0]/80">
              {/* Google Reviews */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-white border border-[#DDD9D0] flex items-center justify-center text-[#D97732]">
                  <Star className="w-4 h-4 fill-[#D97732]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold font-mono text-[#17191A]">4.9 ★ Verified</div>
                  <div className="text-[11px] text-[#6B6D69]">687 Google Reviews</div>
                </div>
              </div>

              {/* Genuine OEM Spares */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-white border border-[#DDD9D0] flex items-center justify-center text-[#66705F]">
                  <ShieldCheck className="w-4 h-4 text-[#66705F]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold font-mono text-[#17191A]">100% Genuine</div>
                  <div className="text-[11px] text-[#6B6D69]">Zero unauthorized parts</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Hero Workshop Photograph Composition with mechanic.png */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#DDD9D0] bg-[#202426] shadow-sm">
              <img
                src={mechanicImg}
                alt="Greeze Monkey Garage master technician inspecting vehicle engine with diagnostic tablet in Electronic City"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none"></div>

              {/* Top Tag on Image */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-[#17191A]/85 backdrop-blur-md rounded text-[10px] font-mono uppercase tracking-wider text-[#F0B27A] border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97732] animate-pulse"></span>
                  BAY 02 — DIAGNOSTIC SUITE
                </span>
              </div>

              {/* Bottom Real-Time Diagnostic Estimation Tag */}
              <div className="absolute bottom-4 right-4 bg-[#17191A]/90 backdrop-blur-md px-3.5 py-2 rounded border border-white/15 text-right">
                <span className="text-[9px] font-mono text-[#F0B27A] uppercase tracking-wider block">
                  Diagnosis in Real-Time
                </span>
                <span className="text-xs font-mono font-bold text-white block">
                  ₹3,450* EST. READY BY 4 PM
                </span>
              </div>

              {/* Location pill bottom-left */}
              <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[#DDD9D0]/70 hidden sm:block">
                Neeladri Nagar Workshop · Electric Two-Post Hoist
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
