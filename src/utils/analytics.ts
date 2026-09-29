/**
 * Centralized Analytics Abstraction
 * Logs user interaction events safely and is ready for plug-and-play integration with Google Analytics 4, Mixpanel, or Plausible.
 */

export type AnalyticsEvent =
  | { name: 'page_view'; path: string; title?: string }
  | { name: 'call_click'; location: string; phoneNumber: string }
  | { name: 'whatsapp_click'; intent: string; location: string }
  | { name: 'directions_click'; location: string }
  | { name: 'booking_started'; vehicleType?: string; service?: string }
  | { name: 'booking_completed'; vehicleType: string; service: string }
  | { name: 'service_page_view'; serviceId: string; serviceTitle: string }
  | { name: 'gallery_open'; category?: string; imageId?: string }
  | { name: 'review_click'; source: string };

class AnalyticsService {
  private isDevelopment = import.meta.env.DEV;

  public track(event: AnalyticsEvent): void {
    if (this.isDevelopment) {
      console.log(`[Analytics Event] ${event.name}:`, event);
    }

    // Window dataLayer hook if GTM/GA4 is present
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push(event);
    }
  }

  public trackPageView(path: string, title?: string): void {
    this.track({ name: 'page_view', path, title });
  }

  public trackCall(location: string, phoneNumber: string): void {
    this.track({ name: 'call_click', location, phoneNumber });
  }

  public trackWhatsApp(intent: string, location: string): void {
    this.track({ name: 'whatsapp_click', intent, location });
  }

  public trackDirections(location: string): void {
    this.track({ name: 'directions_click', location });
  }

  public trackBookingStart(vehicleType?: string, service?: string): void {
    this.track({ name: 'booking_started', vehicleType, service });
  }

  public trackBookingComplete(vehicleType: string, service: string): void {
    this.track({ name: 'booking_completed', vehicleType, service });
  }

  public trackServiceView(serviceId: string, serviceTitle: string): void {
    this.track({ name: 'service_page_view', serviceId, serviceTitle });
  }

  public trackGalleryOpen(category?: string, imageId?: string): void {
    this.track({ name: 'gallery_open', category, imageId });
  }

  public trackReviewClick(source: string): void {
    this.track({ name: 'review_click', source });
  }
}

export const analytics = new AnalyticsService();
