import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../../config/business';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Article';
  schemaData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop',
  schemaType = 'LocalBusiness',
  schemaData
}) => {
  const fullTitle = title 
    ? `${title} | ${BUSINESS_CONFIG.name}` 
    : `${BUSINESS_CONFIG.name} — Professional Car & Bike Service in Electronic City, Bengaluru`;
  
  const metaDescription = description || BUSINESS_CONFIG.shortDescription;
  const canonicalUrl = `https://greezemonkeygarage.com${canonicalPath}`;

  useEffect(() => {
    document.title = fullTitle;

    // Update meta tags dynamically
    const updateMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const selector = isProperty 
        ? `meta[property="${nameOrProperty}"]` 
        : `meta[name="${nameOrProperty}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', nameOrProperty);
        } else {
          el.setAttribute('name', nameOrProperty);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', metaDescription);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', metaDescription, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', metaDescription);

    // Update or insert canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update or insert JSON-LD
    const jsonLdId = 'greeze-monkey-jsonld';
    let scriptTag = document.getElementById(jsonLdId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': schemaType === 'LocalBusiness' ? 'AutoRepair' : schemaType,
      name: BUSINESS_CONFIG.name,
      image: [
        'https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1200&auto=format&fit=crop'
      ],
      '@id': 'https://greezemonkeygarage.com',
      url: 'https://greezemonkeygarage.com',
      telephone: BUSINESS_CONFIG.contact.phoneRaw,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${BUSINESS_CONFIG.location.addressLine1}, ${BUSINESS_CONFIG.location.addressLine2}`,
        addressLocality: 'Electronic City, Bengaluru',
        addressRegion: 'KA',
        postalCode: BUSINESS_CONFIG.location.pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_CONFIG.location.coordinates.lat,
        longitude: BUSINESS_CONFIG.location.coordinates.lng
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: BUSINESS_CONFIG.reputation.googleRating,
        reviewCount: BUSINESS_CONFIG.reputation.reviewCount,
        bestRating: '5',
        worstRating: '1'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00'
        }
      ],
      paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
      currenciesAccepted: 'INR',
      areaServed: [
        'Electronic City Phase 1',
        'Electronic City Phase 2',
        'Neeladri Nagar',
        'Hulimangala',
        'Shikaripalya',
        'Bengaluru'
      ]
    };

    const finalSchema = schemaData ? { ...baseLocalBusinessSchema, ...schemaData } : baseLocalBusinessSchema;
    scriptTag.textContent = JSON.stringify(finalSchema);
  }, [fullTitle, metaDescription, canonicalUrl, ogImage, schemaType, schemaData]);

  return null;
};
