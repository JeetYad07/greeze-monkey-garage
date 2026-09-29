import workshopBayImg from '../assets/workshop.png';
import brakeInspectionImg from '../assets/image copy.png';
import customerInspectionImg from '../assets/image.png';
import mechanicLeadImg from '../assets/mechanic.png';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'WORKSHOP' | 'CARS' | 'BIKES' | 'SERVICE' | 'DENTING & PAINTING' | 'BEFORE / AFTER';
  imageUrl: string;
  beforeImageUrl?: string;
  alt: string;
  tag: string;
  description: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  isFeatured?: boolean;
}

export const GALLERY_CATEGORIES = [
  'ALL',
  'WORKSHOP',
  'CARS',
  'BIKES',
  'SERVICE',
  'DENTING & PAINTING',
  'BEFORE / AFTER'
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Workshop Floor & Twin Hydraulic Lift Bays",
    category: "WORKSHOP",
    imageUrl: workshopBayImg,
    alt: "Greeze Monkey Garage main service bay with vehicle on hydraulic lift in Electronic City",
    tag: "Workshop Bay",
    description: "Equipped with two-post vehicle hoists and diagnostic bays for thorough underbody and mechanical inspections.",
    aspectRatio: "wide",
    isFeatured: true
  },
  {
    id: "gal-2",
    title: "Brake Disc Caliper & Pad Wear Audit",
    category: "SERVICE",
    imageUrl: brakeInspectionImg,
    alt: "Automotive technician inspecting disc brake assembly with vernier caliper on workshop table",
    tag: "Brake Maintenance",
    description: "Precise rotor thickness measurement and caliper greasing using OEM grade high-temp lubricants with photographic proof.",
    aspectRatio: "portrait"
  },
  {
    id: "gal-3",
    title: "Motorcycle Engine Diagnostics & Tuning",
    category: "BIKES",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    alt: "Technician fine-tuning motorcycle engine and chain drive assembly",
    tag: "Bike Bay",
    description: "Dedicated two-wheeler workstation handling high-displacement motorcycles and automatic scooters.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-4",
    title: "Bumper Denting & Scratch Repair (Before vs After)",
    category: "BEFORE / AFTER",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    beforeImageUrl: "https://images.unsplash.com/photo-1590362891988-f77804703088?q=80&w=1200&auto=format&fit=crop",
    alt: "Before and after comparison of car quarter panel scratch and paint restoration",
    tag: "Paint Restoration",
    description: "Deep scuff marks repaired, sealed with anti-corrosion primer, and matched with computerized OEM paint.",
    aspectRatio: "wide",
    isFeatured: true
  },
  {
    id: "gal-5",
    title: "Engine Oil Flush & Filter Replacement",
    category: "SERVICE",
    imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
    alt: "Technician pouring high grade synthetic engine oil into engine block",
    tag: "Fluid Service",
    description: "Complete sump drain, engine flush, and OEM oil filter replacement ensuring clean internal lubrication.",
    aspectRatio: "square"
  },
  {
    id: "gal-6",
    title: "Full Body Machine Compounding & Gloss Buffing",
    category: "DENTING & PAINTING",
    imageUrl: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop",
    alt: "Dual action rotary machine buffing car hood to mirror gloss finish",
    tag: "Surface Finish",
    description: "Eliminating micro-scratches, swirl marks, and paint oxidation with progressive compound stages.",
    aspectRatio: "landscape"
  },
  {
    id: "gal-7",
    title: "OBD-II Computer Diagnostics & Customer Consultation",
    category: "CARS",
    imageUrl: customerInspectionImg,
    alt: "Automotive diagnostic check and technician explaining engine bay details directly with vehicle owner",
    tag: "Diagnostics",
    description: "Reading live ECU telemetry, sensor parameters, and reviewing findings transparently with the customer.",
    aspectRatio: "portrait"
  },
  {
    id: "gal-8",
    title: "Royal Enfield Chain & Sprocket Replacement (Old vs New)",
    category: "BEFORE / AFTER",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
    beforeImageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    alt: "Old worn motorcycle chain sprocket compared with brand new OEM brass-coated drive chain",
    tag: "Drive Train",
    description: "Visual evidence showing sharp hooked sprocket teeth compared against new genuine replacement kit.",
    aspectRatio: "square"
  },
  {
    id: "gal-9",
    title: "Lead Technician Inspection & Bay Service",
    category: "WORKSHOP",
    imageUrl: mechanicLeadImg,
    alt: "Lead mechanic at Greeze Monkey Garage ready for vehicle intake inspection in Electronic City",
    tag: "Master Technician",
    description: "Certified technicians with over 15+ years experience diagnosing and servicing multi-brand Japanese, European, and Indian vehicles.",
    aspectRatio: "landscape"
  }
];

