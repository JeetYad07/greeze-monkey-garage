import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141617] text-[#DDD9D0] border-t border-[#2D3237] pt-16 pb-24 lg:pb-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#2D3237]">
          
          {/* Column 1: Brand & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white px-3 py-1.5 rounded inline-block">
                <img
                  src={logoImg}
                  alt="Greeze Monkey Garage"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-[#DDD9D0]/70 leading-relaxed max-w-sm">
              Precision automotive engineering, multi-brand diagnostic expertise, and transparent proof-of-work mechanics in the heart of Electronic City.
            </p>

            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded bg-[#1C1F21] border border-[#2D3237]">
              <div className="flex items-center text-[#D97732]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D97732]" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-white">4.9 / 5.0</span>
              <span className="text-[11px] text-[#DDD9D0]/60">· Genuine 687 Verified Google Reviews</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#66705F]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>CERTIFIED INDUSTRY TECHNICIANS ON SITE</span>
            </div>
          </div>

          {/* Column 2: Workshop & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white block">
              WORKSHOP & CONTACT
            </span>

            <div className="space-y-3 text-xs text-[#DDD9D0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97732] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  No: 3, Sri Sai Complex, 1, Hulimangala Main Rd, opp. Sai Baba Temple, Neeladri Nagar, Electronic City, Bengaluru 560105
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97732] shrink-0" />
                <a href={BUSINESS_CONFIG.getTelUrl()} className="font-mono font-bold text-white hover:underline">
                  082483 78737
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#66705F] shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11px]">
                  <div>Monday – Saturday: 08:30 AM – 08:00 PM</div>
                  <div className="text-[#DDD9D0]/60">Sunday: 09:30 AM – 02:00 PM (Emergency & Diagnostics)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-white block">
              QUICK NAVIGATION
            </span>

            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="text-[#DDD9D0]/70 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/#proof-of-work" className="text-[#DDD9D0]/70 hover:text-white transition-colors">
                  Proof of Work Demo
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#DDD9D0]/70 hover:text-white transition-colors">
                  Why Greeze Monkey
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#DDD9D0]/70 hover:text-white transition-colors">
                  Workshop Bays & Tools
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#DDD9D0]/70 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[#DDD9D0]/70 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#DDD9D0]/70 hover:text-white transition-colors">
                  Workshop Directions
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/booking"
                  className="text-[#D97732] hover:text-[#F0B27A] font-semibold transition-colors inline-flex items-center gap-1 font-mono uppercase text-[11px]"
                >
                  <span>Book a Service Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#DDD9D0]/50 font-mono">
          <div>
            © {new Date().getFullYear()} Greeze Monkey Garage. Precision Engineered Independent Automotive Atelier.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Warranty Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
