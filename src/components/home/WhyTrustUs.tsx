import React from 'react';
import { Droplet, RotateCcw, Wrench, ShieldCheck } from 'lucide-react';
import customerTechImg from '../../assets/image.png';

export const WhyTrustUs: React.FC = () => {
  const standards = [
    {
      icon: <Droplet className="w-4 h-4 text-[#D97732]" />,
      title: 'Factory-Grade Fluids',
      desc: 'High-viscosity synthetic oils tailored specifically to your vehicle’s engine specification.'
    },
    {
      icon: <RotateCcw className="w-4 h-4 text-[#D97732]" />,
      title: 'Old Parts Returned',
      desc: 'Every replaced oil filter, spark plug, or worn belt is packed in the boot of the vehicle for verification on delivery.'
    },
    {
      icon: <Wrench className="w-4 h-4 text-[#D97732]" />,
      title: 'Calibrated Tools Only',
      desc: 'Wheel lug nuts, spark plugs, and cylinder heads are torqued using calibrated digital torque wrenches — no over-tightened stripped threads.'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#D97732]" />,
      title: 'No Unnecessary Upsells',
      desc: 'If brake pads have 5,000 km of life remaining, we tell you to keep running them. We do not invent repairs to hit monthly targets.'
    }
  ];

  return (
    <section className="bg-[#F7F5F0] text-[#17191A] py-16 lg:py-24 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Workshop Customer Interaction Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#DDD9D0] bg-[#202426] shadow-sm">
              <img
                src={customerTechImg}
                alt="Customer inspecting vehicle on hoist directly with lead technician in Electronic City"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-[#17191A]/90 backdrop-blur-md p-4 rounded border border-white/15 text-left space-y-1">
                <span className="text-xs font-mono font-semibold text-[#F0B27A] block uppercase tracking-wider">
                  Direct Access
                </span>
                <p className="text-xs text-[#DDD9D0] leading-relaxed">
                  Speak directly with the lead technician servicing your vehicle, not a quote-driven service advisor.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Standards & 4-Pillar Grid */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
                HONEST MECHANICAL STANDARDS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#17191A] tracking-tight leading-tight">
                Transparency is not an add-on.
                <br />
                It is the entire service.
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6D69] leading-relaxed max-w-xl">
                Too many garages in South Bengaluru rely on obscure terminology and fear tactics. We run our workshop on engineer-grade accountability and mutual respect.
              </p>
            </div>

            {/* 2x2 Grid of Standards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {standards.map((std, i) => (
                <div
                  key={i}
                  className="p-5 rounded-lg bg-white border border-[#DDD9D0] space-y-2 shadow-sm"
                >
                  <div className="flex items-center gap-2 font-heading font-semibold text-sm text-[#17191A]">
                    {std.icon}
                    <span>{std.title}</span>
                  </div>
                  <p className="text-xs text-[#6B6D69] leading-relaxed">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
