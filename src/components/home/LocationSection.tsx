import React from 'react';
import { MapPin, Navigation, Phone, Clock, Compass } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const LocationSection: React.FC = () => {
  return (
    <section className="bg-[#F7F5F0] text-[#17191A] py-16 lg:py-24 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
                DIRECTIONS & LOCATION
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#17191A] tracking-tight">
                Visit our workshop.
              </h2>
            </div>

            {/* Address Box */}
            <div className="p-5 rounded-lg bg-white border border-[#DDD9D0] space-y-3 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D97732] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-heading font-semibold text-base text-[#17191A]">
                    Greeze Monkey Garage
                  </h3>
                  <p className="text-xs text-[#6B6D69] leading-relaxed">
                    No: 3, Sri Sai Complex, 1, Hulimangala Main Road, Opposite Sai Baba Temple, Neeladri Nagar, Shikaripalya, Electronic City, Bengaluru, Karnataka 560105
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0ECE1] flex items-center gap-2 text-xs text-[#66705F] font-mono">
                <Compass className="w-3.5 h-3.5 text-[#D97732]" />
                <span>Landmark: Right opposite Sai Baba Temple on Hulimangala Main Rd</span>
              </div>
            </div>

            {/* Timings Strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-white border border-[#DDD9D0] space-y-1 shadow-sm">
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-[#6B6D69]">
                  <Clock className="w-3.5 h-3.5 text-[#D97732]" />
                  <span>MON - SAT</span>
                </div>
                <div className="text-xs font-semibold font-mono text-[#17191A]">
                  08:30 AM - 08:00 PM
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#DDD9D0] space-y-1 shadow-sm">
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-[#6B6D69]">
                  <Clock className="w-3.5 h-3.5 text-[#66705F]" />
                  <span>SUNDAY</span>
                </div>
                <div className="text-xs font-semibold font-mono text-[#17191A]">
                  09:30 AM - 02:00 PM
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#D97732] hover:bg-[#C26522] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={BUSINESS_CONFIG.getTelUrl()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-white hover:bg-[#EFECE4] text-[#17191A] border border-[#DDD9D0] text-xs font-mono font-semibold tracking-wider transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#D97732]" />
                <span>Call Workshop</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Container with Approach Route Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-[#DDD9D0] bg-white min-h-[360px] sm:min-h-[400px] shadow-sm">
              <iframe
                title="Greeze Monkey Garage Location Map"
                src={BUSINESS_CONFIG.getMapEmbedUrl()}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Approach Route Box matching Stitch screen */}
            <div className="p-4 rounded-lg bg-white border border-[#DDD9D0] text-xs space-y-1 shadow-sm">
              <span className="font-mono font-semibold text-[#D97732] block uppercase text-[10px]">
                APPROACH ROUTE:
              </span>
              <p className="text-[#6B6D69] leading-relaxed">
                Coming from Neeladri Road / Wipro Gate 10, head towards Hulimangala Main Rd. Garage is located 800m ahead on the right, directly opposite the Sai Baba Temple.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
