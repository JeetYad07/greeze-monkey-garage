import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CarServicePage } from './pages/CarServicePage';
import { BikeServicePage } from './pages/BikeServicePage';
import { DentingPaintingPage } from './pages/DentingPaintingPage';
import { BreakdownAssistancePage } from './pages/BreakdownAssistancePage';
import { VehicleInspectionPage } from './pages/VehicleInspectionPage';
import { BookingPage } from './pages/BookingPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/car-service" element={<CarServicePage />} />
          <Route path="services/2-wheeler" element={<BikeServicePage />} />
          <Route path="services/denting-painting" element={<DentingPaintingPage />} />
          <Route path="services/breakdown-assistance" element={<BreakdownAssistancePage />} />
          <Route path="services/vehicle-inspection" element={<VehicleInspectionPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
