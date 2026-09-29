import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG } from '../../config/business';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#1B1E20] text-[#F7F5F0] py-20 lg:py-24 border-b border-[#353B3E] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#252A2D] border border-[#3E4549] text-[11px] font-mono uppercase tracking-widest text-[#F0B27A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97732]"></span>
          <span>CERTIFIED WORKSHOP · ELECTRONIC CITY</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-white tracking-tight">
          Let’s get your vehicle sorted.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-[#DDD9D0]/70 max-w-lg mx-auto leading-relaxed">
          Reserve a hydraulic bay slot for scheduled service, or start a direct conversation with our technicians on WhatsApp.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/booking"
            className="px-6 py-3 rounded bg-[#D97732] hover:bg-[#C26522] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            BOOK A SERVICE BAY
          </Link>

          <a
            href={BUSINESS_CONFIG.getWhatsAppUrl('booking')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#2C3235] hover:bg-[#353B3E] border border-[#3E4549] text-xs font-mono font-semibold text-[#F7F5F0] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#66705F]" />
            <span>Chat on WhatsApp: 082483 78737</span>
          </a>
        </div>

      </div>
    </section>
  );
};
