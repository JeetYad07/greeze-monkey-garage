import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  limit?: number;
  showCategoryFilter?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need an appointment or can I just drive in?',
      a: 'Walk-ins are always welcomed for diagnostic inspection, flat-tire fixes, battery swaps, and emergency breakdown help. For scheduled periodic servicing or major mechanical overhaul, reserving a slot online or over WhatsApp ensures immediate assignment of a hydraulic lift bay and dedicated lead technician.'
    },
    {
      q: 'Can I get a detailed estimate before work begins?',
      a: 'Yes, 100%. We provide a full itemized digital breakdown of genuine OEM/OES spare parts, consumables, and labor charges before any technician touches a spanner to your car or bike. You approve line items on WhatsApp.'
    },
    {
      q: 'Do you service motorcycles and scooters as well?',
      a: 'Yes. We have a dedicated two-wheeler bay equipped with paddock stands, ultrasonic carb cleaner, valve adjustment tools, and scan tools for Royal Enfield, KTM, Yamaha, Honda, and all standard gearless scooters.'
    },
    {
      q: 'Will I really receive real-time photos of replaced parts?',
      a: 'Yes. Our technicians photograph worn parts against fresh OEM packaged replacements with visible serial numbers and WhatsApp them to you during disassembly. Old parts are placed in your boot upon delivery.'
    },
    {
      q: 'What kind of warranty do you offer on repairs?',
      a: 'All genuine OEM/OES parts carry official manufacturer warranty. Labor and mechanical repairs carried out by our workshop are covered under a 30-day / 1,000 km workshop guarantee.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F5F0] text-[#17191A] py-16 lg:py-24 border-b border-[#DDD9D0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="space-y-2 mb-10 text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D97732] block">
            CLEAR POLICIES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#17191A] tracking-tight">
            Frequently asked questions.
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6D69]">
            Straightforward answers regarding our estimates, turnaround, and warranty.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg border border-[#DDD9D0] bg-white overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-medium text-sm sm:text-base text-[#17191A]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-5 h-5 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D97732]' : 'text-[#6B6D69]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#6B6D69] leading-relaxed border-t border-[#F0ECE1] mt-1">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
