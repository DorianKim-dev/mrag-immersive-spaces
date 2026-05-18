import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageTransition } from './PageTransition';
import Index from '@/pages/Index';
import { BrochurePage } from '@/pages/BrochurePage';
import WorkPage from '@/pages/WorkPage';
import PressPage from '@/pages/PressPage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/NotFound';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/commercial" element={<PageTransition><BrochurePage kind="commercial" /></PageTransition>} />
        <Route path="/public" element={<PageTransition><BrochurePage kind="public" /></PageTransition>} />
        <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/press" element={<PageTransition><PressPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};
