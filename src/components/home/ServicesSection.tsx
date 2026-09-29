import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';

export const ServicesSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const services = [
    {
      num: '01',
      title: 'Car Periodic & Mechanical Service',
      badge: "HATCHBACK, SEDAN, SUV & EV'S",
      slug: 'car-service',
      description: 'Engine flush, synthetic oil change (Castrol/Motul Spec), filter replacements, 45-point brake caliper servicing, suspension check, and throttle body decarbonization.',
      turnaround: 'Same-Day (4-5 Hrs)',
      startingPrice: 'From ₹2,499',
      tags: ['Synthetic Oil & Filters', 'Brake Caliper Servicing', '45-Point Multi-Check']
    },
    {
      num: '02',
      title: 'Motorcycle & Scooter Maintenance',
      badge: 'COMMUTER TO PERFORMANCE BIKES',
      slug: '2-wheeler',
      description: 'Dedicated 2-wheeler bay: Valve clearances, chain slack tensioning and ultrasonic bath cleaning, fork oil renewal, clutch cable replacement, and ECU code readouts for modern FI systems.',
      turnaround: '2 - 3 Hours',
      startingPrice: 'From ₹699',
      tags: ['Royal Enfield', 'KTM & Performance', 'CVT Scooters']
    },
    {
      num: '03',
      title: 'Precision Denting & Paint Booth',
      badge: 'DUST-FREE HEATED BOOTH',
      slug: 'denting-painting',
      description: 'Computerized spectral color matching (DuPont / Standox), spot primer panel pulling, clear-coat UV curing, and seamless bumper scratch repairs with 2-year clear-coat warranty.',
      turnaround: '24 - 48 Hours',
      startingPrice: 'Per Panel ₹2,200',
      tags: ['Panel Beating', 'Refinish / 2-Coats', 'Computerized Color Match']
    },
    {
      num: '04',
      title: '65-Point Pre-Purchase & Trip Inspection',
      badge: 'DIGITAL HEALTH DOSSIER',
      slug: 'vehicle-inspection',
      description: 'Comprehensive physical and scan-tool health evaluation before buying a used vehicle or embarking on an outstation highway drive / South highway trip.',
      turnaround: '60 Minutes',
      startingPrice: 'Flat ₹1,450',
      tags: ['Used Car Check', 'Highway Readiness', 'OBD Report']
    }
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#F7F5F0] text-[#17191A] py-16 lg:py-24 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
              COMPREHENSIVE WORKSHOP BAYS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#17191A] tracking-tight">
              What can we help with?
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6D69] leading-relaxed">
              From factory-spec logbook servicing to multi-brand ECU diagnostics and heated-booth body restoration.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-[#D97732] hover:text-[#C26522] transition-colors shrink-0 group self-start md:self-end pb-1"
          >
            <span>Full Detailed Diagnostic Bay</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Editorial Service Rows */}
        <div className="divide-y divide-[#DDD9D0] border-y border-[#DDD9D0]">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.num}
                className={`py-6 lg:py-7 transition-colors ${
                  isExpanded ? 'bg-[#EFECE4]/60' : 'hover:bg-[#EFECE4]/30'
                } px-4 -mx-4 rounded-lg`}
              >
                {/* Main clickable row header */}
                <div
                  onClick={() => toggleExpand(index)}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <span className="text-xs font-mono font-semibold text-[#D97732] shrink-0 pt-0.5 sm:pt-0">
                      {service.num}
                    </span>

                    <div className="space-y-1 sm:space-y-0 sm:flex sm:items-center sm:gap-3 flex-wrap">
                      <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#17191A]">
                        {service.title}
                      </h3>
                      <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#66705F] border border-[#DDD9D0]">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-6 shrink-0 pl-7 lg:pl-0">
                    <div className="text-left lg:text-right">
                      <span className="text-[11px] text-[#6B6D69] block font-mono">
                        Typical Turnaround
                      </span>
                      <span className="text-xs font-semibold text-[#17191A] font-mono">
                        {service.turnaround}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white border border-[#DDD9D0] flex items-center justify-center text-[#17191A] transition-colors">
                      {isExpanded ? <Minus className="w-3.5 h-3.5 text-[#D97732]" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="pt-4 pl-7 pr-2 space-y-4 text-left animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#6B6D69] leading-relaxed max-w-3xl">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#DDD9D0]/70">
                      <div className="flex flex-wrap items-center gap-2">
                        {service.tags.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded bg-white text-[11px] font-mono text-[#17191A] border border-[#DDD9D0]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase text-[#17191A] hover:text-[#D97732] transition-colors"
                        >
                          <span>View Full Bay</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <Button
                          variant="primary"
                          size="sm"
                          to={`/booking?service=${service.slug}`}
                          className="text-xs font-mono font-bold uppercase"
                        >
                          Book Bay
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
