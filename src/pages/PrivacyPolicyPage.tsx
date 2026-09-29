import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/business';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — Greeze Monkey Garage"
        description="Privacy policy and data protection terms for customers of Greeze Monkey Garage, Electronic City, Bengaluru."
        canonicalPath="/privacy"
      />

      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-16 border-b border-[#DDD9D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} theme="light" />

          <div className="max-w-3xl text-left space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              Customer Privacy & Data Policy
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold font-heading text-[#17191A]">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#6B6D69] font-mono">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] text-[#17191A] py-16 border-b border-[#DDD9D0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-lg border border-[#DDD9D0] shadow-sm text-left space-y-8">
          
          <div className="space-y-2">
            <h2 className="text-lg font-heading font-semibold text-[#17191A]">
              1. Information We Collect
            </h2>
            <p className="text-sm text-[#6B6D69] leading-relaxed">
              When you submit a service booking or contact {BUSINESS_CONFIG.name} via WhatsApp or phone, we collect only necessary details to service your vehicle: your name, contact phone number, vehicle make and model, registration number (if provided), and service symptoms.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-heading font-semibold text-[#17191A]">
              2. How We Use Your Information
            </h2>
            <p className="text-sm text-[#6B6D69] leading-relaxed">
              Your details are used strictly for communicating service estimates, sharing real-time WhatsApp photo updates of parts, verifying customer approval, and delivering final invoices. We never sell, lease, or share your contact info with third parties.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-heading font-semibold text-[#17191A]">
              3. Analytics & Cookies
            </h2>
            <p className="text-sm text-[#6B6D69] leading-relaxed">
              We may collect anonymized page view statistics and interaction metrics (e.g. clicks on WhatsApp or Call buttons) to improve user navigation and website performance. No personally identifiable tracking is performed without consent.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-heading font-semibold text-[#17191A]">
              4. Contact Regarding Privacy
            </h2>
            <p className="text-sm text-[#6B6D69] leading-relaxed">
              If you have any questions or wish to update/delete your service records, please reach out to us at {BUSINESS_CONFIG.contact.phoneDisplay} or visit our workshop in Electronic City, Bengaluru.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};
