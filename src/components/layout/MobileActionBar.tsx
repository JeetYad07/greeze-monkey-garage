import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { analytics } from '../../utils/analytics';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#DDD9D0] px-3 py-2 pb-safe shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Button */}
        <a
          href={BUSINESS_CONFIG.getTelUrl()}
          onClick={() => analytics.trackCall('mobile_bar', '082483 78737')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded bg-[#EFECE4] text-[#17191A] hover:bg-[#E5E0D8] border border-[#DDD9D0] active:scale-95 transition-all"
          aria-label="Call Garage"
        >
          <Phone className="w-3.5 h-3.5 text-[#17191A]" />
          <span className="text-xs font-semibold font-mono">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={BUSINESS_CONFIG.getWhatsAppUrl('general')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => analytics.trackWhatsApp('general', 'mobile_bar')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded bg-[#EFECE4] text-[#17191A] hover:bg-[#E5E0D8] border border-[#DDD9D0] active:scale-95 transition-all"
          aria-label="WhatsApp Message"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#66705F]" />
          <span className="text-xs font-semibold font-mono">WhatsApp</span>
        </a>

        {/* Book Button (Primary Accent) */}
        <Link
          to="/booking"
          onClick={() => analytics.trackBookingStart('any', 'mobile_bar')}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded bg-[#D97732] hover:bg-[#C26522] text-white font-bold font-mono active:scale-95 shadow-sm transition-all"
          aria-label="Book a Service Bay"
        >
          <Calendar className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-bold font-mono">Book Bay</span>
        </Link>

      </div>
    </div>
  );
};
