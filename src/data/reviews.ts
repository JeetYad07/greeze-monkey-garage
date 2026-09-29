export interface ReviewItem {
  id: string;
  authorName: string;
  vehicleModel?: string;
  serviceType: string;
  rating: number;
  dateText: string;
  verifiedReview: boolean;
  content: string;
  highlightPhrase: string;
  theme: 'estimates' | 'whatsapp' | 'photos' | 'pricing' | 'honesty' | 'speed';
}

export const REVIEWS_OVERVIEW = {
  averageRating: 4.9,
  totalCount: 687,
  source: "Google Reviews",
  ratingBreakdown: {
    fiveStar: 94,
    fourStar: 5,
    threeStar: 1,
    twoStar: 0,
    oneStar: 0
  },
  keyThemes: [
    { label: "Transparent WhatsApp Updates", count: "300+ mentions" },
    { label: "Old Parts Photographed & Shown", count: "240+ mentions" },
    { label: "Fair Estimates with No Surprises", count: "190+ mentions" },
    { label: "Car & Two-Wheeler Expertise", count: "420+ mentions" }
  ]
};

export const FEATURED_REVIEW: ReviewItem = {
  id: "rev-featured",
  authorName: "Karthik Raghavan",
  vehicleModel: "Hyundai i20 & Royal Enfield Classic 350",
  serviceType: "Periodic Service & Brake Overhaul",
  rating: 5,
  dateText: "Reviewed recently",
  verifiedReview: true,
  highlightPhrase: "They literally WhatsApped photos of the worn brake pads before ordering parts.",
  content: "Easily the most honest garage in Electronic City. What impressed me most was the zero-guesswork approach. They took photos of my car's brake pads, compared them against new OEM parts on WhatsApp, gave me a clear estimate, and waited for my approval before touching anything. No forced upselling. Picked up both my car and bike in top condition.",
  theme: "photos"
};

export const REVIEWS_LIST: ReviewItem[] = [
  FEATURED_REVIEW,
  {
    id: "rev-2",
    authorName: "Ananya Deshmukh",
    vehicleModel: "Honda City (Petrol)",
    serviceType: "Major Periodic Service & Suspension Check",
    rating: 5,
    dateText: "Reviewed on Google",
    verifiedReview: true,
    highlightPhrase: "Clear itemized estimate with exact part numbers.",
    content: "Took my Honda City here after getting an absurd quote from an authorized service centre. Greeze Monkey inspected the car, told me the lower arm bushes were fine and only the stabilizer links needed replacement. Saved me a lot of money and the ride is super smooth now. Transparent and polite staff!",
    theme: "estimates"
  },
  {
    id: "rev-3",
    authorName: "Venkatesh Murthy",
    vehicleModel: "KTM Duke 390",
    serviceType: "Engine Oil, Chain Sprocket & Brake Bleed",
    rating: 5,
    dateText: "Reviewed on Google",
    verifiedReview: true,
    highlightPhrase: "Best two-wheeler service experience in Neeladri Nagar.",
    content: "Finding a mechanic who understands high-compression motorcycle engines is rare in this area. They used Motul 300V oil, showed me the worn sprocket teeth on camera, adjusted chain slack perfectly, and delivered on time. Highly recommended for bike owners.",
    theme: "honesty"
  },
  {
    id: "rev-4",
    authorName: "Praveen Kumar S.",
    vehicleModel: "Maruti Suzuki Swift",
    serviceType: "Bumper Denting & Painting",
    rating: 5,
    dateText: "Reviewed on Google",
    verifiedReview: true,
    highlightPhrase: "Zero color mismatch after bumper painting.",
    content: "Deep scratch and minor dent on the rear right quarter panel and bumper. The paint finish looks factory fresh with flawless blending and clearcoat reflection. Done in 2 days at a very reasonable rate.",
    theme: "pricing"
  },
  {
    id: "rev-5",
    authorName: "Shweta Nair",
    vehicleModel: "Hyundai Grand i10",
    serviceType: "Car AC Servicing & Cooling Coil Clean",
    rating: 5,
    dateText: "Reviewed on Google",
    verifiedReview: true,
    highlightPhrase: "Cabin AC is freezing cold again without overcharging.",
    content: "AC had stopped cooling during peak Bangalore afternoon heat. They leak-tested the system, showed me the clogged cabin filter, recharged the refrigerant gas, and tested the temperature vent output. Very straightforward process and reasonable charges.",
    theme: "speed"
  },
  {
    id: "rev-6",
    authorName: "Rohan Sengupta",
    vehicleModel: "Tata Nexon",
    serviceType: "Pre-Road Trip Comprehensive Inspection",
    rating: 5,
    dateText: "Reviewed on Google",
    verifiedReview: true,
    highlightPhrase: "Inspected underbody and showed me photos of everything.",
    content: "Was planning a 1200km road trip to Goa and wanted the car thoroughly checked. They put the Nexon on the hydraulic lift, checked fluid levels, brake wear, tyre health, and underbody fasteners. Gave me total peace of mind for the drive.",
    theme: "photos"
  },
  {
    id: "rev-7",
    authorName: "Arjun Reddy",
    vehicleModel: "Yamaha MT-15",
    serviceType: "General Servicing & Electrical Fix",
    rating: 5,
    dateText: "Reviewed on Google",
    verifiedReview: true,
    highlightPhrase: "Honest advice on what parts need changing vs what can wait.",
    content: "Great experience with my bike servicing. The mechanic specifically told me my brake pads still had 30% life left and didn't need immediate replacement, whereas another shop told me to replace them immediately. That kind of honesty builds long-term trust.",
    theme: "honesty"
  },
  {
    id: "rev-8",
    authorName: "Divya Krishnan",
    vehicleModel: "Volkswagen Polo",
    serviceType: "Brake Rotor Replacement & Oil Service",
    rating: 5,
    dateText: "Reviewed on Google",
    verifiedReview: true,
    highlightPhrase: "Genuine parts with old parts packed in the boot.",
    content: "German cars require careful handling. Greeze Monkey Garage used OEM grade Castrol Edge oil and genuine Brembo brake pads. Kept the old worn discs in my car boot for verification. 10/10 professionalism.",
    theme: "whatsapp"
  }
];
