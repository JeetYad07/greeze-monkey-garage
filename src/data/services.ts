import brakeInspectionImg from '../assets/image copy.png';
import customerTechImg from '../assets/image.png';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
  badge?: string;
  keyHighlights: string[];
  subServices: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "car-service",
    slug: "car-service",
    title: "Comprehensive Car Service & Maintenance",
    shortTitle: "Car Service",
    tagline: "Periodic servicing, mechanical repairs, and diagnostics with itemized estimates.",
    description: "From routine oil changes and filter replacements to in-depth engine diagnostics, suspension work, and brake overhauls. Every step is documented with WhatsApp photos and upfront estimates.",
    image: brakeInspectionImg,
    iconName: "Car",
    badge: "Most Requested",
    keyHighlights: [
      "Synthetic & mineral oil flush + OEM filter changes",
      "Comprehensive 30+ point bumper-to-bumper inspection",
      "Brake pad wear measurement & disc rotor check",
      "Coolant, brake fluid & transmission fluid top-up/flush",
      "Suspension, steering & underbody health check",
      "OBD-II computer diagnostics for check-engine lights"
    ],
    subServices: [
      {
        title: "Periodic General Service",
        description: "Engine oil change, oil filter, air filter cleaning/replacement, spark plug check, fluid level top-ups, battery health check, and full safety audit."
      },
      {
        title: "Brake System Service",
        description: "Brake pad inspection, rotor disc resurfacing/replacement, brake fluid flushing, caliper greasing, and ABS sensor check."
      },
      {
        title: "Suspension & Steering Overhaul",
        description: "Strut/shock absorber replacement, lower arm bush, tie rod ends, steering rack inspection, and wheel alignment checks."
      },
      {
        title: "Engine & Transmission Diagnostics",
        description: "Digital OBD-II diagnostic scanning, fuel injector cleaning, throttle body servicing, clutch plate overhaul, and cooling system flush."
      },
      {
        title: "Car AC Servicing & Gas Refill",
        description: "AC condenser coil cleaning, cabin pollen filter replacement, refrigerant pressure testing, compressor check, and leak detection."
      },
      {
        title: "Electrical & Battery Diagnostics",
        description: "Alternator charging check, starter motor inspection, wiring harness diagnostics, and genuine replacement battery installation."
      }
    ],
    process: [
      {
        step: "01",
        title: "Initial Inspection & Road Test",
        description: "Our technicians run a comprehensive health check and identify any mechanical wear or error codes."
      },
      {
        step: "02",
        title: "Itemized WhatsApp Estimate",
        description: "You receive a clear breakdown of required parts and labor with transparent pricing before work begins."
      },
      {
        step: "03",
        title: "Customer Approval",
        description: "We only proceed with services you explicitly approve. No surprise charges."
      },
      {
        step: "04",
        title: "Work with Photo Updates",
        description: "We send real-time WhatsApp photos showing old worn parts beside new genuine replacements."
      },
      {
        step: "05",
        title: "Quality Check & Handover",
        description: "Final post-service road test, exterior wash check, and transparent handover."
      }
    ],
    faqs: [
      {
        q: "How long does a standard periodic car service take?",
        a: "A regular periodic maintenance service typically takes 3 to 5 hours depending on workshop load and whether replacement parts require special sourcing. We communicate estimated completion times upon initial inspection."
      },
      {
        q: "Do you use genuine OEM spare parts?",
        a: "Yes. We source genuine OEM and OES certified parts suitable for your specific car make and model (Maruti Suzuki, Hyundai, Tata, Honda, Mahindra, Toyota, Volkswagen, Skoda, Ford, etc.). Old parts are photographed and made available for customer inspection."
      },
      {
        q: "Can I get an estimate before authorizing repairs?",
        a: "Absolutely. Transparency is our core commitment. We inspect the vehicle first, provide an itemized estimate via WhatsApp or phone call, and proceed only once you approve."
      },
      {
        q: "Do you offer doorstep pick-up and drop in Electronic City?",
        a: "Please contact the workshop directly via WhatsApp or phone to check current driver availability for pick-up/drop in Neeladri Nagar, Electronic City Phase 1 & 2, and Hulimangala."
      }
    ]
  },
  {
    id: "2-wheeler",
    slug: "2-wheeler",
    title: "2-Wheeler & Bike Servicing",
    shortTitle: "Bike Service",
    tagline: "Precision maintenance, tuning, and repairs for commuter bikes, scooters, and performance motorcycles.",
    description: "Expert mechanical care for Royal Enfield, KTM, Yamaha, Honda, Bajaj, TVS, Suzuki, and all standard scooters. We treat two-wheelers with the same rigor and transparent photo updates as cars.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    iconName: "Bike",
    badge: "Car & Bike Specialists",
    keyHighlights: [
      "Engine oil flush with recommended viscosity grades",
      "Carburetor tuning / FI fuel injector cleaning",
      "Drive chain cleaning, tension adjustment & lubrication",
      "Front & rear brake shoe / disc pad replacement",
      "Fork oil seal replacement & suspension tuning",
      "Clutch cable, throttle cable & electrical harness inspection"
    ],
    subServices: [
      {
        title: "Routine Bike Periodic Service",
        description: "Engine oil change, oil filter renewal, spark plug clean/gap adjustment, air filter service, battery voltage test, and wash."
      },
      {
        title: "Brake & Chain Maintenance",
        description: "Drum brake shoe replacement, disc pad renewal, master cylinder bleeding, high-temperature chain lube, and sprocket wear inspection."
      },
      {
        title: "Clutch & Gearbox Repair",
        description: "Clutch friction plate replacement, pressure plate inspection, clutch cable replacement, and smooth gear engagement tuning."
      },
      {
        title: "Front Fork & Shock Absorber Service",
        description: "Front suspension oil seal replacement, hydraulic fluid refill, handlebar cone-set greasing, and rear monoshock inspection."
      },
      {
        title: "Scooter Belt & Variator Service",
        description: "CVT drive belt inspection, roller weight replacement, clutch shoe cleaning, and carburetor/fuel injector servicing for gearless scooters."
      },
      {
        title: "Electrical & Self-Start Diagnostics",
        description: "Starter relay troubleshooting, magneto coil inspection, wiring harness fixes, horn, headlight and battery replacement."
      }
    ],
    process: [
      {
        step: "01",
        title: "Triage & Ride Check",
        description: "We inspect brake bite, throttle response, chain play, and suspension rebound."
      },
      {
        step: "02",
        title: "Estimate & Parts Confirmation",
        description: "Clear communication on oil brand, consumable costs, and necessary part replacements."
      },
      {
        step: "03",
        title: "Service Execution",
        description: "Thorough mechanical work using proper torque specs and correct lubricant grades."
      },
      {
        step: "04",
        title: "Photo Proof & Test Ride",
        description: "Visual updates sent on WhatsApp showing old parts and final quality road testing."
      }
    ],
    faqs: [
      {
        q: "Do you service gearless scooters like Activa, Jupiter, and Access?",
        a: "Yes, we handle all popular automatic scooters including Honda Activa, TVS Jupiter, Suzuki Access, Yamaha RayZR, and Ntorq."
      },
      {
        q: "Do you service geared and performance bikes like Royal Enfield and KTM?",
        a: "Yes, our mechanics have extensive experience with Royal Enfield Classic/Hunter/Himalayan, KTM Duke/RC, Yamaha R15/MT-15, Pulsar series, and other popular motorcycles."
      },
      {
        q: "How often should I service my two-wheeler?",
        a: "We recommend regular servicing every 3,000 km to 4,000 km or every 3 to 4 months for optimal engine life, fuel efficiency, and brake safety."
      }
    ]
  },
  {
    id: "denting-painting",
    slug: "denting-painting",
    title: "Denting & Painting Services",
    shortTitle: "Denting & Painting",
    tagline: "Panel beating, scratch removal, computerized color matching, and paint booth finishing.",
    description: "Restore your vehicle's factory appearance with precision panel realignment, rust prevention, high-grade primers, and computerized paint matching with clear coat protection.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    iconName: "Paintbrush",
    badge: "Flawless Finish",
    keyHighlights: [
      "Bumper repair, scratch removal & localized spot painting",
      "Full body panel beating & precision dent pullers",
      "Computerized color matching for OEM shade accuracy",
      "Multi-stage primer, basecoat, and high-gloss clearcoat",
      "Underbody anti-rust rubberized coating",
      "Machine compounding, polishing, and swirl mark removal"
    ],
    subServices: [
      {
        title: "Panel Dent Removal & Realignment",
        description: "Hydraulic and manual dent pulling for doors, fenders, bonnet, boot lid, and quarter panels without compromising structural rigidity."
      },
      {
        title: "Scratch & Scuff Restoration",
        description: "Deep scratch sanding, primer application, targeted blending, and high-gloss clearcoat buffing for seamless panel integration."
      },
      {
        title: "Single Panel & Full Body Painting",
        description: "Dust-controlled painting with OEM paint codes, high-grade polyurethane paints, and UV-resistant lacquer coat."
      },
      {
        title: "Bumper Repair & Plastic Welding",
        description: "Repairing cracked or detached fiber/plastic bumpers, bracket reinforcement, and seamless color finishing."
      },
      {
        title: "Anti-Rust Underbody Coating",
        description: "Heavy-duty rubberized bitumen coating to protect vehicle undercarriage from monsoon water, salt, and road debris."
      },
      {
        title: "Exterior Buffing & Ceramic Gloss Enhancement",
        description: "Multi-step orbital machine polishing to eliminate oxidation, swirl marks, and restore mirror reflection."
      }
    ],
    process: [
      {
        step: "01",
        title: "Damage Assessment & Photo Review",
        description: "Send us photos on WhatsApp or bring the vehicle for a physical inspection."
      },
      {
        step: "02",
        title: "Transparent Paint Quote",
        description: "We provide panel-by-panel pricing with no ambiguity on materials or coats."
      },
      {
        step: "03",
        title: "Dent Pulling & Surface Prep",
        description: "Panel beating, rust removal, putty application, and fine-grit water sanding."
      },
      {
        step: "04",
        title: "Color Match & Clear Coat",
        description: "Precision spray application matching the vehicle's exact OEM paint formula."
      },
      {
        step: "05",
        title: "Baking, Polishing & Handover",
        description: "Curing the coat, machine compounding, and delivering with a showroom shine."
      }
    ],
    faqs: [
      {
        q: "Can I get an estimate by sending photos on WhatsApp?",
        a: "Yes! Click the WhatsApp button, send clear photos of the scratch or dent from multiple angles, and our team will provide an initial estimate."
      },
      {
        q: "Will the repainted panel match the original vehicle color?",
        a: "We utilize computerized OEM color matching formulations and take into account natural paint aging so the repaired section blends seamlessly with adjacent panels."
      },
      {
        q: "How long does a single panel denting & painting job take?",
        a: "A single panel (like a front bumper or door) typically takes 24 to 48 hours to ensure proper putty drying, primer curing, clearcoat application, and machine compounding."
      }
    ]
  },
  {
    id: "breakdown-assistance",
    slug: "breakdown-assistance",
    title: "Breakdown & Mechanical Assistance",
    shortTitle: "Breakdown Help",
    tagline: "Local roadside support for jump-starts, battery failures, flat tires, and emergency issues.",
    description: "Stuck in Electronic City, Neeladri Nagar, or nearby surrounding areas? Contact our workshop for prompt local assistance. Availability depends on technician schedules and exact location.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop",
    iconName: "Wrench",
    badge: "Local Support",
    keyHighlights: [
      "Emergency battery jump-start & terminal inspection",
      "On-site flat tire change / spare wheel fitment",
      "Coolant leak triage & temporary radiator hose assistance",
      "Clutch cable failure replacement for bikes",
      "Workshop towing coordination assistance",
      "Direct phone & WhatsApp emergency response"
    ],
    subServices: [
      {
        title: "Battery Jump-Start & Health Check",
        description: "Heavy-duty booster pack jump-start for drained car/bike batteries, plus alternator charging test once running."
      },
      {
        title: "Flat Tire & Spare Wheel Swap",
        description: "Safe hydraulic jacking and mounting of your vehicle's spare wheel when stranded curbside."
      },
      {
        title: "Minor Mechanical Roadside Fixes",
        description: "Throttle cable replacement, loose belt tightening, spark plug issues, and fuel line checks for two-wheelers and cars."
      },
      {
        title: "Towing & Workshop Transport Assistance",
        description: "Coordination with trusted local flatbed and tow truck operators to transport immobilised vehicles safely to our workshop."
      }
    ],
    process: [
      {
        step: "01",
        title: "Call or WhatsApp Location",
        description: "Call our workshop directly with your live location pin and description of the vehicle issue."
      },
      {
        step: "02",
        title: "Technician Availability Confirmation",
        description: "We confirm if an on-ground technician is available and provide an estimated arrival window."
      },
      {
        step: "03",
        title: "On-Site Triage or Workshop Transport",
        description: "If fixable on-site, we resolve it; otherwise, we assist in getting the vehicle safely to our workshop."
      }
    ],
    faqs: [
      {
        q: "What areas do you cover for breakdown assistance?",
        a: "We primarily support Electronic City Phase 1 & 2, Neeladri Nagar, Hulimangala, Shikaripalya, Bettadasanapura, and immediate nearby vicinities in South Bengaluru."
      },
      {
        q: "Is breakdown assistance 24/7?",
        a: "Our assistance is active during our standard workshop operating hours (Monday to Saturday, 9:00 AM – 8:00 PM). For after-hours emergencies, please call to check on-call availability."
      },
      {
        q: "What if the car cannot be fixed on the road?",
        a: "We will coordinate with local tow-truck services to safely transport your car or bike to our workshop for comprehensive diagnosis and repairs."
      }
    ]
  },
  {
    id: "vehicle-inspection",
    slug: "vehicle-inspection",
    title: "Vehicle Inspection & Diagnostics",
    shortTitle: "Vehicle Inspection",
    tagline: "Pre-purchase evaluation, long-trip safety checks, and computer diagnostic scans.",
    description: "Get total clarity on your vehicle's mechanical and electrical condition. We inspect underbody, suspension, engine compression, brakes, electricals, and frame integrity.",
    image: customerTechImg,
    iconName: "Search",
    badge: "100% Transparent",
    keyHighlights: [
      "40+ point detailed physical & mechanical inspection",
      "OBD-II scanner fault code readout for ECU, ABS & Airbag modules",
      "Pre-purchase inspection before buying a used car or bike",
      "Pre-monsoon and long road trip safety check",
      "Brake pad thickness, tyre tread depth & fluid condition reports",
      "Clear photographic evidence of any identified defects"
    ],
    subServices: [
      {
        title: "Pre-Purchase Used Car/Bike Inspection",
        description: "Independent condition assessment checking for accidental damage, repaint history, flood markers, odometer tampering signs, and mechanical wear."
      },
      {
        title: "Long Trip / Monsoon Safety Audit",
        description: "Brake performance, wiper blade health, tyre tread wear, fluid levels, light bulbs, radiator condition, and battery crank voltage."
      },
      {
        title: "OBD-II Digital Diagnostic Scan",
        description: "Scanning Engine Control Module (ECM), transmission, ABS sensors, and emissions system for current and pending Diagnostic Trouble Codes (DTCs)."
      },
      {
        title: "Underbody & Chassis Inspection",
        description: "Hoist inspection for oil sump leaks, exhaust pipe corrosion, drive shaft boot tears, steering rack play, and frame alignment."
      }
    ],
    process: [
      {
        step: "01",
        title: "Diagnostic Hookup & Visual Audit",
        description: "The vehicle is raised on the lift and connected to the digital diagnostic scanner."
      },
      {
        step: "02",
        title: "Systematic Multi-Point Check",
        description: "Technicians systematically test brakes, suspension, fluid quality, tyres, and electricals."
      },
      {
        step: "03",
        title: "Transparent Photo Report",
        description: "We document every finding with clear high-resolution photos sent directly to your phone."
      },
      {
        step: "04",
        title: "Actionable Recommendations",
        description: "We clearly explain what needs urgent attention, what can wait, and estimated repair costs."
      }
    ],
    faqs: [
      {
        q: "Why should I get an inspection before buying a second-hand car?",
        a: "An independent mechanical inspection protects you from hidden accident repairs, engine oil leaks, failing clutches, or worn suspension components that could cost tens of thousands of rupees to fix later."
      },
      {
        q: "How long does a complete multi-point inspection take?",
        a: "A thorough inspection and diagnostic scan takes approximately 45 to 75 minutes. You are welcome to observe the vehicle on the lift with our technicians."
      },
      {
        q: "Will you try to force unnecessary repairs?",
        a: "Never. Our core philosophy is radical transparency. We categorize findings into 'Critical Safety', 'Recommended Soon', and 'Good Condition' so you make informed decisions with zero pressure."
      }
    ]
  }
];
