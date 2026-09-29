import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { ShieldCheck, Eye, Star, Wrench, ArrowRight } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';
import workshopBayImg from '../assets/workshop.png';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Greeze Monkey Garage — Electronic City, Bengaluru"
        description="Learn about Greeze Monkey Garage, our radical transparency workflow, WhatsApp photo updates, and trusted multi-brand car and bike servicing in Neeladri Nagar, Electronic City."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-16 border-b border-[#DDD9D0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs items={[{ label: 'About Workshop' }]} theme="light" />

          <div className="max-w-3xl text-left space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
              Independent Workshop · Electronic City
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight leading-tight">
              Built on transparency.
              <br />
              <span className="text-[#6B6D69]">Engineered for long-term trust.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6B6D69] leading-relaxed">
              Greeze Monkey Garage was founded with a single objective: bring total clarity and honest workmanship back to automotive and motorcycle repair in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy / Story */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-20 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-[#DDD9D0] shadow-sm bg-[#202426] group">
                <img
                  src={workshopBayImg}
                  alt="Greeze Monkey Garage workshop bay in Electronic City"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#17191A]/90 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center gap-2 text-[#F0B27A] text-xs font-mono font-semibold uppercase mb-1">
                    <Star className="w-3.5 h-3.5 fill-[#D97732] text-[#D97732]" />
                    <span>4.9★ on Google Maps</span>
                  </div>
                  <p className="text-xs text-[#DDD9D0]">
                    687 verified customer reviews from vehicle owners in Electronic City, Hulimangala, and Neeladri Nagar.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values & Workflow */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
                Our Philosophy
              </span>

              <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-[#17191A]">
                Why we photograph old parts and send WhatsApp estimates.
              </h2>

              <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed">
                For too long, vehicle maintenance has felt like a black box. Customers drop off their car or bike and are handed an inflated bill with vague line items and replaced parts they never saw.
              </p>

              <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed">
                At Greeze Monkey Garage, we operate as an open book. If your brake pads are worn down to 2mm, we measure them with a vernier caliper and WhatsApp you a photo. If your air filter is clean, we don't replace it to inflate the bill. You approve every line item before our technicians begin work.
              </p>

              <div className="space-y-4 pt-2 divide-y divide-[#DDD9D0] border-y border-[#DDD9D0]">
                <div className="pt-3 flex items-start gap-3">
                  <span className="text-xs font-mono font-semibold text-[#D97732] pt-0.5">01</span>
                  <div>
                    <strong className="text-sm text-[#17191A] block font-heading">Itemized Quotes Before Repairs</strong>
                    <span className="text-xs text-[#6B6D69]">Exact prices for genuine parts and labor upfront.</span>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-3">
                  <span className="text-xs font-mono font-semibold text-[#D97732] pt-0.5">02</span>
                  <div>
                    <strong className="text-sm text-[#17191A] block font-heading">Real-Time Photo Proof</strong>
                    <span className="text-xs text-[#6B6D69]">Old worn parts photographed beside new OEM replacements.</span>
                  </div>
                </div>

                <div className="pt-3 pb-2 flex items-start gap-3">
                  <span className="text-xs font-mono font-semibold text-[#D97732] pt-0.5">03</span>
                  <div>
                    <strong className="text-sm text-[#17191A] block font-heading">Two-Wheeler & Four-Wheeler Bays</strong>
                    <span className="text-xs text-[#6B6D69]">Equipped for hatchbacks, sedans, SUVs, motorcycles, and scooters.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Workshop Location & Equipment */}
      <section className="bg-[#202426] text-[#F7F5F0] py-20 border-b border-[#353B3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Workshop Facility"
            title="Conveniently located in Neeladri Nagar"
            subtitle="Equipped with two-post hydraulic hoists, OBD-II diagnostic scanners, and panel painting equipment."
            theme="dark"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg bg-[#282D30] border border-[#3E4549]">
              <Wrench className="w-6 h-6 text-[#D97732] mb-4" />
              <h3 className="font-heading font-semibold text-lg text-[#F7F5F0] mb-2">
                Hydraulic Lift Bays
              </h3>
              <p className="text-xs text-[#DDD9D0]/70 leading-relaxed">
                Full underbody hoist access allows complete inspection of suspension arms, ball joints, exhaust lines, and sump gaskets.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#282D30] border border-[#3E4549]">
              <Eye className="w-6 h-6 text-[#66705F] mb-4" />
              <h3 className="font-heading font-semibold text-lg text-[#F7F5F0] mb-2">
                Digital OBD-II Diagnostics
              </h3>
              <p className="text-xs text-[#DDD9D0]/70 leading-relaxed">
                ECU computer scanner reading live sensor telemetry, engine error codes, ABS faults, and transmission feedback.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#282D30] border border-[#3E4549]">
              <ShieldCheck className="w-6 h-6 text-[#F0B27A] mb-4" />
              <h3 className="font-heading font-semibold text-lg text-[#F7F5F0] mb-2">
                Genuine Spare Parts
              </h3>
              <p className="text-xs text-[#DDD9D0]/70 leading-relaxed">
                We source certified OEM & OES replacement spares with verifiable packaging and manufacturer part numbers.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="primary"
              size="md"
              to="/booking"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="text-xs"
            >
              Book a Workshop Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
