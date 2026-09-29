import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { ServicesSection } from '../components/home/ServicesSection';
import { ProofOfWork } from '../components/home/ProofOfWork';
import { WhyTrustUs } from '../components/home/WhyTrustUs';
import { WorkshopGalleryPreview } from '../components/home/WorkshopGalleryPreview';
import { GoogleReviewsSection } from '../components/home/GoogleReviewsSection';
import { BreakdownCTA } from '../components/home/BreakdownCTA';
import { LocationSection } from '../components/home/LocationSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';
import type { GalleryItem } from '../data/gallery';

export const HomePage: React.FC = () => {
  const { onOpenLightbox } = useOutletContext<{ onOpenLightbox: (item: GalleryItem) => void }>() || {};

  return (
    <>
      <SEO
        title="Greeze Monkey Garage — Transparent Car & Bike Service in Electronic City"
        description="Transparent multi-brand car and 2-wheeler service in Electronic City, Neeladri Nagar, Bengaluru. Upfront WhatsApp estimates, real photo proof, and 4.9★ Google reviews."
        canonicalPath="/"
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Services Grid */}
      <ServicesSection />

      {/* 4. Signature Proof of Work Section */}
      <ProofOfWork />

      {/* 5. Why Customers Trust Us */}
      <WhyTrustUs />

      {/* 6. Workshop Gallery Preview */}
      <WorkshopGalleryPreview onOpenLightbox={onOpenLightbox} />

      {/* 7. Google Reviews (4.9★ / 687 Reviews) */}
      <GoogleReviewsSection />

      {/* 8. Breakdown / Emergency Assistance */}
      <BreakdownCTA />

      {/* 9. Workshop Location & Navigation */}
      <LocationSection />

      {/* 10. FAQ Accordion */}
      <FAQSection limit={6} />

      {/* 11. Final High-Conversion CTA */}
      <FinalCTA />
    </>
  );
};
