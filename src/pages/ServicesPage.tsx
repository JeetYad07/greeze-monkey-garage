import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SERVICES_DATA, type ServiceItem } from '../data/services';
import { Button } from '../components/common/Button';
import { ArrowRight, Check } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Services — Car, Bike, Denting, Inspection & Repairs in Electronic City"
        description="Explore all vehicle services at Greeze Monkey Garage: Periodic Car & 2-Wheeler maintenance, engine diagnostics, brake overhaul, denting & painting, and emergency roadside help."
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-16 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Services' }]} theme="light" />
          
          <div className="max-w-3xl text-left">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              Workshop Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] mt-2 mb-4 tracking-tight">
              Automotive and motorcycle services.
            </h1>
            <p className="text-base sm:text-lg text-[#6B6D69] leading-relaxed">
              Every job is conducted with upfront estimates, verified genuine spare parts, and real-time WhatsApp photo updates. Zero guesswork, zero unauthorized repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Editorial List */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-16 sm:py-24 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => {
            const num = String(index + 1).padStart(2, '0');
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-lg border border-[#DDD9D0] shadow-sm"
              >
                {/* Image */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded overflow-hidden border border-[#DDD9D0] bg-[#202426] group h-72 sm:h-80">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    {service.badge && (
                      <span className="absolute top-3 left-3 bg-[#17191A]/85 backdrop-blur-sm text-[10px] font-mono text-[#F0B27A] px-2.5 py-1 rounded font-semibold border border-white/10">
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-4 text-left ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-[#D97732] uppercase tracking-wider">
                      {num} · SERVICE BAY
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold font-heading text-[#17191A]">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 pb-2">
                    {service.keyHighlights.slice(0, 4).map((h: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#17191A]">
                        <Check className="w-4 h-4 text-[#66705F] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#17191A] hover:text-[#D97732] transition-colors py-2 px-3 border border-[#DDD9D0] rounded bg-[#F7F5F0]"
                    >
                      <span>Service details & scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Button
                      variant="primary"
                      size="sm"
                      to={`/booking?service=${service.slug}`}
                      className="text-xs"
                    >
                      Book This Service
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
