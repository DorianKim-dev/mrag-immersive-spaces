import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      className="min-h-screen bg-mrag-navy"
      initial={{ opacity: 0, y: 32, filter: 'blur(18px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -24, filter: 'blur(18px)' }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-screen origin-top bg-mrag-warm-white"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.78, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </motion.div>
  );
};
