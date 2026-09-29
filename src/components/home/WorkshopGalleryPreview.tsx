import React, { useState } from 'react';
import type { GalleryItem } from '../../data/gallery';
import workshopBayImg from '../../assets/workshop.png';
import customerTechImg from '../../assets/image.png';

interface WorkshopGalleryPreviewProps {
  onOpenLightbox?: (item: GalleryItem) => void;
}

export const WorkshopGalleryPreview: React.FC<WorkshopGalleryPreviewProps> = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'BAYS' | 'CARS' | 'BIKES' | 'DIAGNOSTICS'>('ALL');

  const tabs: Array<'ALL' | 'BAYS' | 'CARS' | 'BIKES' | 'DIAGNOSTICS'> = ['ALL', 'BAYS', 'CARS', 'BIKES', 'DIAGNOSTICS'];

  const items: GalleryItem[] = [
    {
      id: 'bay-lift',
      title: 'Twin 4-Ton Electro-Hydraulic Two-Post Lifts',
      category: 'WORKSHOP',
      tag: 'Undercarriage Bays',
      imageUrl: workshopBayImg,
      alt: 'Hydraulic two-post lift bays at Greeze Monkey Garage',
      description: 'Allows comprehensive undercarriage inspection of chassis, steering rack, suspension bushings, and sump gaskets.',
      aspectRatio: 'wide'
    },
    {
      id: 'diag-scanner',
      title: 'Multi-Brand OBD-II ECU Scanner & Diagnostics',
      category: 'CARS',
      tag: 'ECU Diagnostics',
      imageUrl: customerTechImg,
      alt: 'Technician explaining OBD-II diagnostics and vehicle health to customer',
      description: 'OEM-level diagnostic scanner reading live sensor telemetry and graphing for Asian & European models.',
      aspectRatio: 'landscape'
    },
    {
      id: 'bike-tuning',
      title: 'Dedicated 2-Wheeler Tuning Station',
      category: 'BIKES',
      tag: 'Bike Workstation',
      imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop',
      alt: 'Mechanic tuning performance motorcycle on dedicated bike station',
      description: 'Precision chain tensioning, chain bath ultrasonic cleaning, and valve lash clearance adjustments.',
      aspectRatio: 'landscape'
    }
  ];

  return (
    <section className="bg-[#F7F5F0] text-[#17191A] py-16 lg:py-24 border-b border-[#DDD9D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header with Category Filter on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
              WORKSHOP INFRASTRUCTURE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#17191A] tracking-tight">
              Inside the workshop.
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6D69] leading-relaxed">
              Clean bays, specialized diagnostic computers, and dedicated tooling for European, Japanese, and Indian vehicles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === tab
                    ? 'bg-[#D97732] text-white'
                    : 'bg-white text-[#6B6D69] hover:text-[#17191A] border border-[#DDD9D0]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Part Asymmetric Infrastructure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Left Photo (7 cols) */}
          <div
            onClick={() => onOpenLightbox && onOpenLightbox(items[0])}
            className="lg:col-span-7 relative rounded-lg overflow-hidden border border-[#DDD9D0] bg-[#202426] group cursor-pointer min-h-[320px] sm:min-h-[420px] flex flex-col justify-end p-5"
          >
            <img
              src={items[0].imageUrl}
              alt={items[0].alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            <div className="relative z-10 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F0B27A] block">
                UNDERCARRIAGE BAYS — RATED 4000 KG
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white">
                {items[0].title}
              </h3>
            </div>
          </div>

          {/* Right Two Stacked Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Top Right */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(items[1])}
              className="relative rounded-lg overflow-hidden border border-[#DDD9D0] bg-[#202426] group cursor-pointer min-h-[200px] flex flex-col justify-end p-4"
            >
              <img
                src={items[1].imageUrl}
                alt={items[1].alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F0B27A] block mb-0.5">
                  LIVE TELEMETRY READOUT
                </span>
                <h4 className="font-heading text-sm sm:text-base font-semibold text-white">
                  {items[1].title}
                </h4>
              </div>
            </div>

            {/* Bottom Right */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox(items[2])}
              className="relative rounded-lg overflow-hidden border border-[#DDD9D0] bg-[#202426] group cursor-pointer min-h-[200px] flex flex-col justify-end p-4"
            >
              <img
                src={items[2].imageUrl}
                alt={items[2].alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F0B27A] block mb-0.5">
                  MOTORCYCLE BAY
                </span>
                <h4 className="font-heading text-sm sm:text-base font-semibold text-white">
                  {items[2].title}
                </h4>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
