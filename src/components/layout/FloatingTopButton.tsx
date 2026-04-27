import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const FloatingTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 26, mass: 0.3 });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      const firstSectionOffset = Math.max(window.innerHeight * 0.9, 560);
      setIsVisible(latest > firstSectionOffset);
    });

    return unsubscribe;
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="맨 위로 이동"
          className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-white/12 bg-mrag-navy/45 text-mrag-warm-white/80 shadow-[0_14px_36px_rgba(0,0,0,0.28)] outline-none backdrop-blur-xl transition-colors hover:border-mrag-teal/45 hover:text-mrag-warm-white focus-visible:ring-2 focus-visible:ring-mrag-teal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-mrag-navy md:bottom-7 md:right-7"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="22" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              stroke="hsl(166, 56%, 40%)"
              strokeWidth="1.5"
              fill="none"
              pathLength={progress}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp className="relative z-10 h-4 w-4" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default FloatingTopButton;
