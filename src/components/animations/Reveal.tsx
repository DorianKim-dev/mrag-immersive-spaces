import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  intensity?: 'soft' | 'strong';
}

export const Reveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  intensity = 'soft',
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const travel = intensity === 'strong' ? 82 : 46;

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? travel : 0,
      x: direction === 'left' ? -travel : direction === 'right' ? travel : 0,
      filter: 'blur(14px)',
      clipPath: direction === 'none' ? 'inset(0% 0% 0% 0%)' : 'inset(12% 0% 0% 0%)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      clipPath: 'inset(0% 0% 0% 0%)',
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration: intensity === 'strong' ? 1.08 : 0.86,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 38, filter: 'blur(10px)', clipPath: 'inset(10% 0 0 0)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        clipPath: 'inset(0% 0 0 0)',
        transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
