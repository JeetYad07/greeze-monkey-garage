import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileActionBar } from '../components/layout/MobileActionBar';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { GALLERY_ITEMS, type GalleryItem } from '../data/gallery';

export const RootLayout: React.FC = () => {
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxItem(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#17191A] font-sans antialiased">
      <ScrollToTop />
      
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet context={{ onOpenLightbox: handleOpenLightbox }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <MobileActionBar />

      {/* Global Gallery Lightbox */}
      <GalleryLightbox
        item={activeLightboxItem}
        items={GALLERY_ITEMS}
        onClose={handleCloseLightbox}
        onNavigate={setActiveLightboxItem}
      />
    </div>
  );
};
