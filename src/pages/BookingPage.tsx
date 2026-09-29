import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BookingForm } from '../components/booking/BookingForm';
import { MessageSquare, Phone, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const BookingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Book a Service Slot — Car & Bike Servicing in Electronic City"
        description="Book your vehicle service, maintenance, inspection or repair at Greeze Monkey Garage in Electronic City. Free triage inspection, upfront estimates, and WhatsApp updates."
        canonicalPath="/booking"
      />

      <section className="bg-[#F7F5F0] text-[#17191A] pt-32 pb-24 border-b border-[#DDD9D0] min-h-[90vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Breadcrumbs items={[{ label: 'Book Service' }]} theme="light" className="justify-center mb-4" />
            
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732]">
              Quick Service Request
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading text-[#17191A] tracking-tight">
              Request your service slot.
            </h1>

            <p className="text-sm sm:text-base text-[#6B6D69] leading-relaxed">
              Fill in your vehicle details below. We'll check technician and bay availability, prepare an estimated parts cost, and contact you promptly to confirm.
            </p>
          </div>

          {/* Core Booking Form Component */}
          <BookingForm />

          {/* Quick Contact Alternatives */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            <div className="p-4 rounded-lg bg-white border border-[#DDD9D0] flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#D97732] shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-[#6B6D69] block">Direct Line</span>
                <a href={BUSINESS_CONFIG.getTelUrl()} className="text-xs font-semibold text-[#17191A] hover:text-[#D97732]">
                  {BUSINESS_CONFIG.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#DDD9D0] flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-[#66705F] shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-[#6B6D69] block">Instant Chat</span>
                <a
                  href={BUSINESS_CONFIG.getWhatsAppUrl('booking')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#17191A] hover:text-[#D97732]"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#DDD9D0] flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#66705F] shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-[#6B6D69] block">Workshop Hours</span>
                <span className="text-xs font-semibold text-[#17191A]">Mon–Sat: 9AM – 8PM</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
