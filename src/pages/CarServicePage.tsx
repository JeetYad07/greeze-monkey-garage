import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { SERVICES_DATA, type ServiceItem } from '../data/services';
import { Button } from '../components/common/Button';
import { ShieldCheck, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const CarServicePage: React.FC = () => {
  const service = SERVICES_DATA.find((s: ServiceItem) => s.slug === 'car-service')!;

  return (
    <>
      <SEO
        title="Car Service & Repair in Electronic City, Bengaluru"
        description="Comprehensive periodic car maintenance, engine oil service, brake overhaul, AC servicing, and computer OBD-II diagnostics at Greeze Monkey Garage."
        canonicalPath="/services/car-service"
      />

      {/* Hero */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-20 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: 'Services', to: '/services' },
              { label: 'Car Service' }
            ]}
            theme="light"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
                Multi-Brand Car Service · Electronic City
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#6B6D69] leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button
                  variant="primary"
                  size="md"
                  to="/booking?service=car-service"
                  leftIcon={<Calendar className="w-4 h-4" />}
                  className="text-xs"
                >
                  Book Service Slot
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={BUSINESS_CONFIG.getWhatsAppUrl('estimate', "Hi Greeze Monkey Garage, I'd like an estimate for my car service.")}
                  isExternal
                  leftIcon={<MessageSquare className="w-4 h-4 text-[#66705F]" />}
                  className="text-xs"
                >
                  WhatsApp Estimate
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
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Upfront Estimate & Photo Proof</span>
                  </div>
                  <p className="text-[11px] text-[#DDD9D0] mt-0.5">
                    We show you old vs new genuine parts on WhatsApp before installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-20 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Coverage"
            title="Comprehensive maintenance and repair scope"
            subtitle="From scheduled periodic maintenance to in-depth mechanical and electrical diagnostics."
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

          {/* Pricing Transparency Note */}
          <div className="mt-10 p-6 rounded-lg bg-[#EFECE4] border border-[#DDD9D0] text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase text-[#D97732]">
                Customized Transparency
              </span>
              <h4 className="font-heading font-semibold text-base text-[#17191A]">
                Need an exact quote for your car model?
              </h4>
              <p className="text-xs text-[#6B6D69]">
                Share your car make, model, and year on WhatsApp for an itemized estimate.
              </p>
            </div>
            <Button
              variant="dark"
              size="sm"
              href={BUSINESS_CONFIG.getWhatsAppUrl('estimate', "Hi Greeze Monkey Garage, please share an estimate for my car service.")}
              isExternal
              leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
              className="shrink-0 text-xs"
            >
              Request Car Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* 5-Step Process Timeline */}
      <section className="bg-[#202426] text-[#F7F5F0] py-20 border-b border-[#353B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Workflow"
            title="Our car service process"
            subtitle="Zero guesswork from initial triage until final quality handover."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
            {service.process.map((step, idx: number) => (
              <div
                key={idx}
                className="bg-[#282D30] p-5 rounded-lg border border-[#3E4549] relative flex flex-col justify-between"
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

      {/* Service-Specific FAQs */}
      <FAQSection limit={4} />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
