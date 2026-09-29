import React from 'react';
import { SEO } from '../components/common/SEO';
import { Wrench, Home, MessageSquare } from 'lucide-react';
import { Button } from '../components/common/Button';
import { BUSINESS_CONFIG } from '../config/business';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found (404) — Greeze Monkey Garage"
        description="The page you were looking for does not exist. Navigate back to Greeze Monkey Garage homepage."
      />

      <section className="bg-[#F7F5F0] text-[#17191A] min-h-[80vh] flex items-center justify-center py-32 border-b border-[#DDD9D0]">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-14 h-14 rounded-lg bg-white border border-[#DDD9D0] flex items-center justify-center text-[#D97732] mx-auto shadow-sm">
            <Wrench className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              404 • Page Not Found
            </span>
            <h1 className="text-3xl sm:text-4xl font-semibold font-heading text-[#17191A]">
              Under Inspection
            </h1>
            <p className="text-sm text-[#6B6D69]">
              The road ends here. The page you requested might have been moved or does not exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              to="/"
              leftIcon={<Home className="w-4 h-4" />}
              className="text-xs"
            >
              Return to Homepage
            </Button>
            <Button
              variant="outline"
              size="md"
              href={BUSINESS_CONFIG.getWhatsAppUrl('general')}
              isExternal
              leftIcon={<MessageSquare className="w-4 h-4 text-[#66705F]" />}
              className="text-xs"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
