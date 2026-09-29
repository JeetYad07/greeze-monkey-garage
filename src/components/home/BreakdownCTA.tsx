import React from 'react';
import { Phone, MessageSquare, AlertOctagon } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const BreakdownCTA: React.FC = () => {
  return (
    <section className="bg-[#F7F5F0] py-10 lg:py-14 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-lg bg-[#202426] border border-[#353B3E] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left shadow-md">
          
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded bg-[#D97732]/20 text-[#D97732] flex items-center justify-center shrink-0 border border-[#D97732]/40 mt-0.5">
              <AlertOctagon className="w-5 h-5" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white">
                Vehicle trouble in or around Electronic City?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD9D0]/70 leading-relaxed">
                Dead battery, puncture, coolant leak, or brake failure? Contact our workshop team directly. We will diagnose immediately and guide your fastest next step.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={BUSINESS_CONFIG.getTelUrl()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#D97732] hover:bg-[#C26522] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>CALL 082483 78737</span>
            </a>

            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl('breakdown')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-[#2C3235] hover:bg-[#353B3E] text-[#F7F5F0] border border-[#3E4549] text-xs font-mono font-semibold tracking-wider transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#66705F]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
