import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../../utils/analytics';

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    analytics.trackPageView(pathname, document.title);
  }, [pathname]);

  return null;
};
