import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { SERVICES_DATA, type ServiceItem } from '../data/services';
import { Button } from '../components/common/Button';
import { MessageSquare, Camera, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const DentingPaintingPage: React.FC = () => {
  const service = SERVICES_DATA.find((s: ServiceItem) => s.slug === 'denting-painting')!;

  return (
    <>
      <SEO
        title="Car & Bike Denting, Painting & Scratch Repair in Electronic City"
        description="Panel beating, deep scratch removal, computerized OEM color matching, and paint booth finishing at Greeze Monkey Garage, Electronic City, Bengaluru."
        canonicalPath="/services/denting-painting"
      />

      {/* Hero */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-20 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Services', to: '/services' },
              { label: 'Denting & Painting' }
            ]}
            theme="light"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
                Paint Restoration & Bodywork
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#6B6D69] leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  variant="outline"
                  size="md"
                  href={BUSINESS_CONFIG.getWhatsAppUrl('denting')}
                  isExternal
                  leftIcon={<Camera className="w-4 h-4 text-[#D97732]" />}
                  className="text-xs"
                >
                  WhatsApp Photos for Estimate
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  to="/booking?service=denting-painting"
                  className="text-xs"
                >
                  Book In-Person Inspection
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
                    <Sparkles className="w-4 h-4 text-[#F0B27A]" />
                    <span>Computerized OEM Shade Matching</span>
                  </div>
                  <p className="text-[11px] text-[#DDD9D0] mt-0.5">
                    Polyurethane basecoats and UV clearcoats with dust-free curing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-20 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Bodywork Scope"
            title="Denting and painting services offered"
            subtitle="From single panel spot repairs to full body compounding and anti-rust coatings."
            theme="light"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* WhatsApp photo estimate banner */}
          <div className="mt-12 bg-[#EFECE4] rounded-lg p-6 sm:p-8 border border-[#DDD9D0] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-xs font-mono font-semibold uppercase text-[#D97732]">
                Instant WhatsApp Quote
              </span>
              <h3 className="text-lg font-heading font-semibold text-[#17191A]">
                Get a fast quote by sending scratch or dent photos
              </h3>
              <p className="text-xs text-[#6B6D69] leading-relaxed">
                Take photos from 2–3 angles in clear daytime lighting. Send them directly to our workshop on WhatsApp for a quick estimate.
              </p>
            </div>
            <Button
              variant="dark"
              size="sm"
              href={BUSINESS_CONFIG.getWhatsAppUrl('denting')}
              isExternal
              leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
              className="shrink-0 text-xs"
            >
              Share Photos on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#202426] text-[#F7F5F0] py-20 border-b border-[#353B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Craftsmanship"
            title="5-stage body restoration process"
            subtitle="How we restore the factory reflection without shortcuts."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
            {service.process.map((step, idx: number) => (
              <div
                key={idx}
                className="bg-[#282D30] p-5 rounded-lg border border-[#3E4549] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#D97732] block mb-2">
                    STEP {step.step}
                  </span>
                  <h4 className="font-heading font-semibold text-sm text-[#F7F5F0] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#DDD9D0]/70 leading-relaxed">
                    {step.description}
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
