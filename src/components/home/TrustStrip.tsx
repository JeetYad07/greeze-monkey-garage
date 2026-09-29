import React from 'react';
import { FileSpreadsheet, Smartphone, PackageCheck, ShieldCheck } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const protocols = [
    {
      step: '01 / ESTIMATION',
      title: 'Clear Estimates',
      description: 'Transparent labor and genuine OEM/OES part costs declared digitally before any spanner touches your vehicle.',
      footerIcon: <FileSpreadsheet className="w-3.5 h-3.5 text-[#66705F]" />,
      footerNote: 'Itemized Before Work'
    },
    {
      step: '02 / REAL-TIME',
      title: 'WhatsApp Updates',
      description: 'Direct high-resolution photos and diagnostic video clips from the lift as you can approve issues from your office or home.',
      footerIcon: <Smartphone className="w-3.5 h-3.5 text-[#66705F]" />,
      footerNote: 'Direct to Customer Phone'
    },
    {
      step: '03 / EVIDENCE',
      title: 'Photo Proof of Parts',
      description: 'We photograph old worn components beside fresh, boxed parts with serial codes visible. Replaced parts returned on demand.',
      footerIcon: <PackageCheck className="w-3.5 h-3.5 text-[#66705F]" />,
      footerNote: 'OEM Spares Guarantee'
    },
    {
      step: '04 / APPROVAL',
      title: 'Customer Approval',
      description: 'Zero unauthorized repairs. Every unexpected wear item discovered during multi-point inspection requires your explicit confirmation.',
      footerIcon: <ShieldCheck className="w-3.5 h-3.5 text-[#66705F]" />,
      footerNote: 'Your Authorization First'
    }
  ];

  return (
    <section className="bg-[#F7F5F0] text-[#17191A] py-16 lg:py-24 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="mb-10 lg:mb-12 space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
            THE TRANSPARENCY PROTOCOL
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#17191A] leading-tight">
            Know what we are doing.
            <br />
            Know what it costs. Know when it is done.
          </h2>
        </div>

        {/* 4 Protocol Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {protocols.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-[#DDD9D0] flex flex-col justify-between shadow-sm hover:border-[#D97732] transition-colors"
            >
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D97732] block">
                  {item.step}
                </span>
                
                <h3 className="font-heading text-lg font-semibold text-[#17191A]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B6D69] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F0ECE1] flex items-center gap-2 text-[11px] font-mono text-[#66705F]">
                {item.footerIcon}
                <span>{item.footerNote}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
