/**
 * Centralized Business Configuration for Greeze Monkey Garage
 * Single source of truth for business contact, location, ratings, and WhatsApp helpers.
 */

export const BUSINESS_CONFIG = {
  name: "Greeze Monkey Garage",
  tagline: "Transparent vehicle service. No guesswork.",
  shortDescription: "Professional multi-brand car and 2-wheeler service, repair, denting & painting workshop in Electronic City, Bengaluru. Verified 4.9★ rating with 680+ Google reviews.",
  
  contact: {
    phoneRaw: "+918248378737",
    phoneDisplay: "082483 78737",
    phoneInternational: "+91 82483 78737",
    whatsappNumber: "918248378737",
    email: "contact@greezemonkeygarage.com", // verified placeholder
  },

  location: {
    addressLine1: "No: 3, Sri Sai Complex, 1, Hulimangala Main Rd",
    addressLine2: "Opposite Sai Baba Temple, Neeladri Nagar, Shikaripalya",
    area: "Electronic City, Hulimangala",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560105",
    country: "India",
    fullAddress: "No: 3, Sri Sai Complex, 1, Hulimangala Main Rd, opposite Sai Baba Temple, Neeladri Nagar, Shikaripalya, Electronic City, Bengaluru, Hulimangala, Karnataka 560105",
    coordinates: {
      lat: 12.8362192,
      lng: 77.645773,
    },
    landmarks: [
      "Opposite Sai Baba Temple",
      "Near Neeladri Nagar Main Road",
      "Shikaripalya, Electronic City Phase 1",
    ],
  },

  reputation: {
    googleRating: 4.9,
    reviewCount: 687,
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Greeze+Monkey+Garage+Electronic+City",
  },

  hours: {
    display: "Mon – Sat: 9:00 AM – 8:00 PM | Sun: Contact to confirm",
    note: "Please contact the workshop to confirm holiday hours or special slots.",
  },

  // WhatsApp context-specific message generators
  getWhatsAppUrl: (intent: 'general' | 'booking' | 'breakdown' | 'inspection' | 'estimate' | 'denting', customText?: string): string => {
    const base = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}`;
    let message = "Hi Greeze Monkey Garage, I found you through your website and would like to enquire about servicing my vehicle.";

    if (customText) {
      message = customText;
    } else {
      switch (intent) {
        case 'booking':
          message = "Hi Greeze Monkey Garage, I would like to book a service slot for my vehicle.";
          break;
        case 'breakdown':
          message = "Hi Greeze Monkey Garage, I need breakdown assistance with my vehicle near Electronic City. Please let me know if a technician is available.";
          break;
        case 'inspection':
          message = "Hi Greeze Monkey Garage, I would like to schedule a vehicle inspection and diagnostic check.";
          break;
        case 'estimate':
          message = "Hi Greeze Monkey Garage, I would like to request an estimate for vehicle repair/maintenance.";
          break;
        case 'denting':
          message = "Hi Greeze Monkey Garage, I would like to share photos for a denting & painting estimate.";
          break;
      }
    }

    return `${base}?text=${encodeURIComponent(message)}`;
  },

  // Google Maps directions helper
  getDirectionsUrl: (): string => {
    return `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS_CONFIG.location.coordinates.lat},${BUSINESS_CONFIG.location.coordinates.lng}`;
  },

  // Map embed URL
  getMapEmbedUrl: (): string => {
    return `https://maps.google.com/maps?q=${BUSINESS_CONFIG.location.coordinates.lat},${BUSINESS_CONFIG.location.coordinates.lng}&hl=en&z=16&output=embed`;
  },

  // Call URL
  getTelUrl: (): string => {
    return `tel:${BUSINESS_CONFIG.contact.phoneRaw}`;
  },
};
