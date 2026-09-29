import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCTA } from '../components/home/FinalCTA';

export const FAQPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQ) — Greeze Monkey Garage"
        description="Find clear answers to common questions about car & bike servicing, WhatsApp estimates, spare parts authenticity, and garage policies at Greeze Monkey Garage."
        canonicalPath="/faq"
      />

      {/* Hero Header */}
      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-16 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} theme="light" />

          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              Direct Answers
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight">
              Frequently asked questions.
            </h1>
            <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed">
              Everything you need to know about our service workflow, pricing estimates, two-wheeler capabilities, and workshop policies.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Categorized FAQs */}
      <FAQSection limit={20} showCategoryFilter={true} />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
};
