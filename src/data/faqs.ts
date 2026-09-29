export interface FAQItem {
  id: string;
  category: 'General & Booking' | 'Pricing & Transparency' | 'Services & Parts' | 'Breakdown & Location';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General & Booking",
    question: "Do I need an appointment before bringing my vehicle?",
    answer: "While we welcome walk-ins during workshop hours, booking a slot online or messaging us on WhatsApp ensures we can allocate a dedicated hydraulic lift and technician without delay."
  },
  {
    id: "faq-2",
    category: "General & Booking",
    question: "How do I request a service slot?",
    answer: "You can use our 30-second online Booking Form, call us directly at 082483 78737, or send a quick WhatsApp message with your vehicle make and model. Our team will promptly confirm availability."
  },
  {
    id: "faq-3",
    category: "Services & Parts",
    question: "Do you service both cars and two-wheelers (bikes & scooters)?",
    answer: "Yes! Greeze Monkey Garage is equipped with dedicated bays and experienced technicians for multi-brand cars (hatchbacks, sedans, SUVs) as well as two-wheelers (commuter bikes, automatic scooters, and performance motorcycles like Royal Enfield & KTM)."
  },
  {
    id: "faq-4",
    category: "Pricing & Transparency",
    question: "How will I know what work is actually required on my vehicle?",
    answer: "We perform an initial multi-point triage upon arrival. If mechanical wear or issues are detected, our technicians take clear photographs and send you an itemized WhatsApp estimate detailing required parts and labor before any repairs begin."
  },
  {
    id: "faq-5",
    category: "Pricing & Transparency",
    question: "Can I get an estimate before work starts?",
    answer: "Yes, 100%. We believe in total transparency and zero guesswork. You will receive an upfront quote, and we never proceed with any extra work without your explicit WhatsApp or phone approval."
  },
  {
    id: "faq-6",
    category: "Pricing & Transparency",
    question: "Do you show or return the old replaced parts?",
    answer: "Yes. We take photos of the worn parts alongside the brand-new OEM replacements during the job, and we can keep the old replaced components in your vehicle boot for physical inspection upon delivery."
  },
  {
    id: "faq-7",
    category: "Services & Parts",
    question: "Do you use genuine OEM spare parts and quality engine oils?",
    answer: "We source authentic OEM / OES parts and high-grade synthetic engine lubricants (such as Castrol, Motul, Shell, and manufacturer-recommended grades) tailored to your exact car or motorcycle specifications."
  },
  {
    id: "faq-8",
    category: "Breakdown & Location",
    question: "Where is the Greeze Monkey Garage workshop located?",
    answer: "We are located at No: 3, Sri Sai Complex, 1, Hulimangala Main Rd, opposite Sai Baba Temple, Neeladri Nagar, Shikaripalya, Electronic City, Bengaluru (Pincode: 560105). You can tap 'Get Directions' to navigate directly via Google Maps."
  },
  {
    id: "faq-9",
    category: "Breakdown & Location",
    question: "What should I do if my vehicle breaks down in Electronic City?",
    answer: "Call us directly at 082483 78737 or send your live location on WhatsApp. If a technician is available, we will assist with jump-starts, flat tires, minor roadside fixes, or help coordinate safe towing to our garage."
  },
  {
    id: "faq-10",
    category: "Services & Parts",
    question: "Can I get an estimate for denting and painting over WhatsApp?",
    answer: "Yes! Take clear photos of the scratched or dented area from a couple of angles and send them to our WhatsApp number. We will assess the damage and provide an estimated quote."
  }
];
