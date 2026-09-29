import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LocationSection } from '../components/home/LocationSection';
import { Phone, MessageSquare, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { FinalCTA } from '../components/home/FinalCTA';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Greeze Monkey Garage — Phone, WhatsApp & Directions"
        description="Get in touch with Greeze Monkey Garage in Electronic City, Bengaluru. Phone: 082483 78737, live WhatsApp chat, and Google Maps directions."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-16 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Contact & Directions' }]} theme="light" />

          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              Workshop Contact
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight">
              Get in touch with us.
            </h1>
            <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed">
              Have questions regarding vehicle maintenance, estimates, or breakdown assistance? Call us directly, message on WhatsApp, or visit our workshop in Electronic City.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Quick Columns without Heavy Cards */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-12 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Phone */}
            <div className="p-6 rounded-lg bg-white border border-[#DDD9D0] space-y-3 shadow-sm">
              <div className="w-8 h-8 rounded bg-[#F7F5F0] text-[#D97732] flex items-center justify-center border border-[#DDD9D0]">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-semibold text-base text-[#17191A]">Direct Phone Call</h3>
              <p className="text-xs text-[#6B6D69]">
                Speak directly with our workshop desk for slot confirmation or urgent vehicle queries.
              </p>
              <a
                href={BUSINESS_CONFIG.getTelUrl()}
                className="text-sm font-semibold font-mono text-[#D97732] hover:text-[#C26522] block pt-2"
              >
                {BUSINESS_CONFIG.contact.phoneDisplay}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-lg bg-white border border-[#DDD9D0] space-y-3 shadow-sm">
              <div className="w-8 h-8 rounded bg-[#F7F5F0] text-[#66705F] flex items-center justify-center border border-[#DDD9D0]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-semibold text-base text-[#17191A]">WhatsApp Chat</h3>
              <p className="text-xs text-[#6B6D69]">
                Send vehicle photos, share your live breakdown location, or request an itemized estimate.
              </p>
              <a
                href={BUSINESS_CONFIG.getWhatsAppUrl('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold font-mono text-[#17191A] hover:text-[#D97732] block pt-2"
              >
                Open WhatsApp Chat →
              </a>
            </div>

            {/* Timings */}
            <div className="p-6 rounded-lg bg-white border border-[#DDD9D0] space-y-3 shadow-sm">
              <div className="w-8 h-8 rounded bg-[#F7F5F0] text-[#66705F] flex items-center justify-center border border-[#DDD9D0]">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-semibold text-base text-[#17191A]">Workshop Hours</h3>
              <p className="text-xs text-[#6B6D69]">
                {BUSINESS_CONFIG.hours.display}
              </p>
              <span className="text-[11px] font-mono text-[#6B6D69] block pt-2">
                *Sunday: Contact ahead for technician availability
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Location & Navigation Component */}
      <LocationSection />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
