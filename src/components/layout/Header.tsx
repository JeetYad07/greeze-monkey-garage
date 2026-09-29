import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { SERVICES_DATA } from '../../data/services';
import logoImg from '../../assets/logo.png';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Proof of Work', href: '/#proof-of-work', isAnchor: true },
    { label: 'Why Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Location', href: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DDD9D0]'
          : 'bg-white border-b border-[#E5E0D8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Brand Logo (Left) */}
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              className="flex items-center text-left group py-1"
              aria-label="Greeze Monkey Garage Homepage"
            >
              <img
                src={logoImg}
                alt="Greeze Monkey Garage"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* 2. Center Navigation with Equal Spacing */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-heading font-medium transition-all ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#D97732] bg-[#F7F5F0] font-semibold'
                    : 'text-[#17191A] hover:text-[#D97732] hover:bg-[#F7F5F0]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#D97732]' : 'text-[#6B6D69]'}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-[#DDD9D0] p-2 space-y-1">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.slug}
                        to={`/services/${srv.slug}`}
                        className="block px-3 py-2 rounded text-xs text-[#17191A] hover:bg-[#F7F5F0] hover:text-[#D97732] transition-colors"
                      >
                        <div className="font-semibold">{srv.shortTitle}</div>
                        <div className="text-[11px] text-[#6B6D69] line-clamp-1">{srv.tagline}</div>
                      </Link>
                    ))}
                    <div className="pt-1.5 border-t border-[#DDD9D0] mt-1">
                      <Link
                        to="/services"
                        className="block px-3 py-1.5 text-xs font-semibold text-[#D97732] hover:underline"
                      >
                        All Workshop Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Nav Links with Identical Sizing & Hover States */}
            {navLinks.map((link) => {
              const isActive = !link.isAnchor && location.pathname === link.href;
              
              if (link.isAnchor) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => {
                      const el = document.getElementById('proof-of-work');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-2 rounded-md text-xs font-heading font-medium text-[#17191A] hover:text-[#D97732] hover:bg-[#F7F5F0] transition-all"
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-3 py-2 rounded-md text-xs font-heading font-medium transition-all ${
                    isActive
                      ? 'text-[#D97732] bg-[#F7F5F0] font-semibold'
                      : 'text-[#17191A] hover:text-[#D97732] hover:bg-[#F7F5F0]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Desktop Right CTAs (Evenly Spaced & Aligned) */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Live WhatsApp Status Pill */}
            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-[#F7F5F0] border border-[#DDD9D0] text-xs font-mono font-medium text-[#17191A] hover:border-[#D97732] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp: 082483 78737</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={BUSINESS_CONFIG.getTelUrl()}
              className="w-9 h-9 rounded-md bg-[#F7F5F0] border border-[#DDD9D0] flex items-center justify-center text-[#17191A] hover:text-[#D97732] hover:border-[#D97732] transition-colors"
              aria-label="Call Greeze Monkey Garage"
              title="Call Workshop: 082483 78737"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Primary Book CTA */}
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-xs font-mono font-bold tracking-wider uppercase bg-[#D97732] hover:bg-[#C26522] text-white shadow-sm transition-all"
            >
              BOOK A SERVICE
            </Link>
          </div>

          {/* 4. Mobile Right Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={BUSINESS_CONFIG.getWhatsAppUrl('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-md bg-[#F7F5F0] border border-[#DDD9D0] text-[11px] font-mono font-medium text-[#17191A] flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#17191A] hover:bg-[#F7F5F0] border border-[#DDD9D0] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DDD9D0] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-[#17191A]">
            <Link
              to="/services"
              className="px-3 py-2.5 rounded-md hover:bg-[#F7F5F0] border-b border-[#F0ECE1] flex items-center justify-between"
            >
              <span>Services</span>
              <span className="text-xs text-[#D97732] font-mono">5 Categories →</span>
            </Link>
            <Link
              to="/about"
              className="px-3 py-2.5 rounded-md hover:bg-[#F7F5F0] border-b border-[#F0ECE1]"
            >
              Why Us & Philosophy
            </Link>
            <Link
              to="/gallery"
              className="px-3 py-2.5 rounded-md hover:bg-[#F7F5F0] border-b border-[#F0ECE1]"
            >
              Workshop Gallery
            </Link>
            <Link
              to="/reviews"
              className="px-3 py-2.5 rounded-md hover:bg-[#F7F5F0] border-b border-[#F0ECE1] flex items-center justify-between"
            >
              <span>Customer Reviews</span>
              <span className="text-xs text-amber-600 font-mono font-bold">4.9★ (687)</span>
            </Link>
            <Link
              to="/faq"
              className="px-3 py-2.5 rounded-md hover:bg-[#F7F5F0] border-b border-[#F0ECE1]"
            >
              Frequently Asked Questions
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2.5 rounded-md hover:bg-[#F7F5F0]"
            >
              Workshop Location & Directions
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              to="/booking"
              className="w-full py-3 rounded-md text-center text-xs font-mono font-bold uppercase tracking-wider bg-[#D97732] hover:bg-[#C26522] text-white shadow-sm transition-all"
            >
              Book Service Slot
            </Link>
            <a
              href={BUSINESS_CONFIG.getTelUrl()}
              className="w-full py-2.5 rounded-md text-center text-xs font-mono font-semibold border border-[#DDD9D0] bg-[#F7F5F0] text-[#17191A] flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97732]" />
              <span>Call: 082483 78737</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

