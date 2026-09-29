import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { SERVICES_DATA, type ServiceItem } from '../data/services';
import { Button } from '../components/common/Button';
import { Phone, MessageSquare, AlertTriangle, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const BreakdownAssistancePage: React.FC = () => {
  const service = SERVICES_DATA.find((s: ServiceItem) => s.slug === 'breakdown-assistance')!;

  return (
    <>
      <SEO
        title="Breakdown & Roadside Assistance in Electronic City, Bengaluru"
        description="Local jump-start, flat tire replacement, battery support, and mechanical breakdown help in Electronic City, Neeladri Nagar, and Hulimangala by Greeze Monkey Garage."
        canonicalPath="/services/breakdown-assistance"
      />

      {/* Hero */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-20 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Services', to: '/services' },
              { label: 'Breakdown Assistance' }
            ]}
            theme="light"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] flex items-center gap-1.5 w-fit">
                <AlertTriangle className="w-3.5 h-3.5 text-[#D97732]" />
                <span>Electronic City & Vicinity Support</span>
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#6B6D69] leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="p-4 rounded-lg bg-[#EFECE4] border border-[#DDD9D0] text-xs font-mono text-[#17191A] space-y-1">
                <span className="text-[#D97732] font-semibold block uppercase">
                  Service Availability:
                </span>
                <p className="text-[#6B6D69]">
                  Assistance is active during workshop hours (Mon–Sat 9AM–8PM) based on technician availability in Electronic City Phase 1 & 2, Neeladri Nagar, and Hulimangala.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href={BUSINESS_CONFIG.getTelUrl()}
                  leftIcon={<Phone className="w-4 h-4" />}
                  trackingEvent={{ type: 'call', location: 'breakdown_page' }}
                  className="text-xs"
                >
                  Call Now: {BUSINESS_CONFIG.contact.phoneDisplay}
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={BUSINESS_CONFIG.getWhatsAppUrl('breakdown')}
                  isExternal
                  leftIcon={<MessageSquare className="w-4 h-4 text-[#66705F]" />}
                  trackingEvent={{ type: 'whatsapp', location: 'breakdown_page', intent: 'breakdown' }}
                  className="text-xs"
                >
                  WhatsApp Live Location
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#DDD9D0] shadow-sm relative bg-[#202426]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#17191A]/90 backdrop-blur-md p-3.5 rounded border border-white/10 text-left">
                  <div className="text-xs font-semibold text-white font-mono flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Local Electronic City Support</span>
                  </div>
                  <p className="text-[11px] text-[#DDD9D0] mt-0.5">
                    Jump starts, spare tire replacement, and towing coordination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-20 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Emergency Support"
            title="Common roadside problems we assist with"
            subtitle="Quick troubleshooting to get you moving or safe coordination to our workshop."
            theme="light"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.subServices.map((sub, idx: number) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-[#DDD9D0] shadow-sm text-left flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#D97732] block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading font-semibold text-base text-[#17191A] mb-2">
                    {sub.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6D69] leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection limit={3} />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
