import React, { useState } from 'react';
import brakeInspectionImg from '../../assets/image copy.png';

export const ProofOfWork: React.FC = () => {
  const [activeStage, setActiveStage] = useState(2); // Step 03 is active by default as shown in Stitch design

  const stages = [
    {
      num: '01 / STAGE',
      title: 'INSPECT',
      desc: '100-bay photo scan & underbody hoist audit'
    },
    {
      num: '02 / STAGE',
      title: 'ESTIMATE',
      desc: 'Transparent parts & labor breakdown generated'
    },
    {
      num: '03 / STAGE',
      title: 'APPROVE',
      desc: 'Digital WhatsApp sign-off before wrenching'
    },
    {
      num: '04 / STAGE',
      title: 'WORK',
      desc: 'Calibrated torque installation by bay techs'
    },
    {
      num: '05 / STAGE',
      title: 'UPDATE',
      desc: 'Old vs new parts photographic proof dispatched'
    },
    {
      num: '06 / STAGE',
      title: 'DELIVER',
      desc: 'Final road validation & spotless exterior wash'
    }
  ];

  return (
    <section id="proof-of-work" className="bg-[#202426] text-[#F7F5F0] py-16 lg:py-24 border-b border-[#353B3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="space-y-2 mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97732]"></span>
            <span>LIVE WORKSHOP TRANSPARENCY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#F7F5F0] tracking-tight">
            You should know exactly what happens to your vehicle.
          </h2>
          <p className="text-xs sm:text-sm text-[#DDD9D0]/70 leading-relaxed">
            Every vehicle undergoes our documented 6-stage protocol. We keep every decision accountable from intake check to road test verification.
          </p>
        </div>

        {/* 6 Stage Navigation Header */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {stages.map((st, idx) => {
            const isActive = idx === activeStage;
            return (
              <button
                key={st.title}
                onClick={() => setActiveStage(idx)}
                className={`text-left p-3 rounded transition-all ${
                  isActive
                    ? 'bg-[#2C3235] border-l-2 border-l-[#D97732] border border-[#3E4549]'
                    : 'bg-[#252A2D] border border-[#353B3E] hover:border-[#4B5358]'
                }`}
              >
                <span className={`text-[10px] font-mono block ${isActive ? 'text-[#D97732] font-semibold' : 'text-[#DDD9D0]/50'}`}>
                  {st.num}
                </span>
                <span className="font-heading font-semibold text-xs sm:text-sm text-white block mt-0.5">
                  {st.title}
                </span>
                <span className="text-[10px] text-[#DDD9D0]/60 line-clamp-2 mt-1 font-mono">
                  {st.desc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Job Case File Showcase Card */}
        <div className="rounded-lg bg-[#1A1D20] border border-[#353B3E] p-5 sm:p-7 space-y-6">
          
          {/* Job Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2D3237] text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-[#D97732]/20 text-[#F0B27A] border border-[#D97732]/30 font-semibold">
                ACTIVE JOB: #KA-01-MJ-4094
              </span>
              <span className="text-[#DDD9D0]/70">Lead Tech: Karthik S.</span>
            </div>
            <span className="text-[11px] text-[#DDD9D0]/50 uppercase tracking-wider">
              RESOLVED & PRINTED
            </span>
          </div>

          {/* Job Title & Symptom Description */}
          <div className="space-y-1">
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-white">
              Front Brake Rotor & Pad Overhaul — Honda City 1.5 i-VTEC
            </h3>
            <p className="text-xs text-[#DDD9D0]/70">
              Customer reported high-speed steering vibration while braking on Electronic City flyover.
            </p>
          </div>

          {/* 3 Step Evidence Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            {/* Step 1: Inspection Photo & Note */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-[#D97732] font-semibold block uppercase">
                1. PHYSICAL INSPECTION (10:15 AM)
              </span>
              <div className="relative aspect-[16/10] rounded overflow-hidden border border-[#353B3E] bg-black">
                <img
                  src={brakeInspectionImg}
                  alt="Vernier caliper measuring disc brake wear"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#DDD9D0]/80 leading-relaxed font-sans">
                Brake pads measured at 2.1mm (critical wear). Disc rotor face exhibited 0.14mm runout with deep thermal scoring rings.
              </p>
            </div>

            {/* Step 2: WhatsApp Estimate Breakdown */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-[#F0B27A] font-semibold block uppercase">
                2. WHATSAPP ESTIMATE SENT (10:45 AM)
              </span>
              <div className="p-3.5 rounded bg-[#202426] border border-[#353B3E] text-xs font-mono space-y-2 text-[#DDD9D0]">
                <div className="flex justify-between border-b border-[#353B3E] pb-1.5 text-[11px] text-[#F0B27A]">
                  <span>ESTIMATE: ₹7,900 INCL TAX</span>
                  <span className="text-emerald-400">Approved</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span>1x Brembo Ceramic Pads</span>
                    <span className="text-white">₹2,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1x OEM Ventilated Rotors (Pair)</span>
                    <span className="text-white">₹4,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1x Labor + Caliper Pin Grease</span>
                    <span className="text-white">₹650</span>
                  </div>
                </div>
                <div className="pt-1 text-[10px] text-emerald-400 border-t border-[#353B3E]">
                  ✓ Status: Client Confirmed via +91 98860-XXXXX
                </div>
              </div>
              <p className="text-xs text-[#DDD9D0]/80 leading-relaxed font-sans">
                We sent itemized estimate with photo updates for Brembo vs OEM TVS Girling pads. Customer confirmed Brembo + OE Rotors.
              </p>
            </div>

            {/* Step 3: Install & Delivery Photo */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-emerald-400 font-semibold block uppercase">
                3. INSTALL & DELIVERY (02:30 PM)
              </span>
              <div className="relative aspect-[16/10] rounded overflow-hidden border border-[#353B3E] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=600&auto=format&fit=crop"
                  alt="Brand new disc rotor and clean caliper assembly installed"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-[#DDD9D0]/80 leading-relaxed font-sans">
                Hub surface de-rusted, slide pins lubricated with copper-grease, wheel bolts torqued to 108Nm. 15-min road test verified zero shudder.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
