import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryCategory, type GalleryItem } from '../data/gallery';
import { Plus } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const { onOpenLightbox } = useOutletContext<{ onOpenLightbox: (item: GalleryItem) => void }>() || {};

  const filteredItems = GALLERY_ITEMS.filter((item: GalleryItem) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <>
      <SEO
        title="Workshop & Service Gallery — Greeze Monkey Garage Electronic City"
        description="Explore workshop photos of Greeze Monkey Garage: hydraulic lift bays, car & bike service, brake overhauls, engine diagnostics, and before/after denting and painting work."
        canonicalPath="/gallery"
      />

      {/* Hero Header */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-16 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Workshop Gallery' }]} theme="light" />

          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              Visual Tour & Proof of Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight">
              Inside Greeze Monkey Garage
            </h1>
            <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed">
              Explore our workshop bays, diagnostic stations, two-wheeler workstations, and before & after denting and paint restorations.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-[#DDD9D0]">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-[#17191A] text-white'
                    : 'bg-white text-[#6B6D69] hover:text-[#17191A] border border-[#DDD9D0]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#F7F5F0] text-[#17191A] py-16 sm:py-24 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: GalleryItem) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox && onOpenLightbox(item)}
                className="group relative rounded-lg overflow-hidden border border-[#DDD9D0] bg-white cursor-pointer shadow-sm hover:border-[#D97732] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#202426]">
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#17191A]/80 backdrop-blur-sm text-[10px] font-mono font-semibold uppercase tracking-wider text-[#F0B27A] border border-white/10">
                      {item.category}
                    </span>
                    {item.beforeImageUrl && (
                      <span className="px-2 py-0.5 rounded bg-[#202426]/85 backdrop-blur-sm text-[10px] font-mono font-semibold uppercase text-emerald-400 border border-emerald-500/30">
                        Before / After
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#D97732] group-hover:text-white transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 text-left">
                  <h3 className="font-heading font-semibold text-base text-[#17191A] group-hover:text-[#D97732] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B6D69] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
