import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AtmosphericLayer = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<'idle' | 'action' | 'down'>('idle');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const haloXValue = useSpring(mouseX, { stiffness: 520, damping: 34, mass: 0.18 });
  const haloYValue = useSpring(mouseY, { stiffness: 520, damping: 34, mass: 0.18 });
  const auraXValue = useSpring(mouseX, { stiffness: 115, damping: 22, mass: 0.45 });
  const auraYValue = useSpring(mouseY, { stiffness: 115, damping: 22, mass: 0.45 });
  const haloX = useTransform(haloXValue, (value) => `${value - 22}px`);
  const haloY = useTransform(haloYValue, (value) => `${value - 22}px`);
  const auraX = useTransform(auraXValue, (value) => `${value - 150}px`);
  const auraY = useTransform(auraYValue, (value) => `${value - 150}px`);
  const dotX = useTransform(mouseX, (value) => `${value - 4}px`);
  const dotY = useTransform(mouseY, (value) => `${value - 4}px`);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(finePointer && !reduceMotion);

    const handleMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor], .cursor-pointer, .award-card, .showcase-card',
      );
      setCursorState((current) => (current === 'down' ? current : interactive ? 'action' : 'idle'));
    };

    const handleDown = () => setCursorState('down');
    const handleUp = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor], .cursor-pointer, .award-card, .showcase-card',
      );
      setCursorState(interactive ? 'action' : 'idle');
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerdown', handleDown, { passive: true });
    window.addEventListener('pointerup', handleUp, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [mouseX, mouseY]);

  const isAction = cursorState !== 'idle';
  const isDown = cursorState === 'down';

  return (
    <div className="pointer-events-none fixed inset-0 z-[250] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.16] mix-blend-screen atmospheric-grid" />
      {enabled && (
        <>
          <motion.div
            className="absolute h-[300px] w-[300px] rounded-full mix-blend-screen"
            animate={{
              opacity: isAction ? 0.5 : 0.28,
              scale: isAction ? 0.82 : 1,
              background: isAction
                ? 'radial-gradient(circle, rgba(241,210,122,0.18), rgba(72,187,164,0.09) 38%, transparent 68%)'
                : 'radial-gradient(circle, rgba(72,187,164,0.14), rgba(72,187,164,0.03) 42%, transparent 68%)',
            }}
            transition={{ duration: 0.14, ease: 'easeOut' }}
            style={{ x: auraX, y: auraY }}
          />
          <motion.div
            className="absolute h-11 w-11 rounded-full border"
            animate={{
              scale: isDown ? 0.72 : isAction ? 1.42 : 1,
              borderColor: isAction ? 'rgba(241,210,122,0.95)' : 'rgba(245,241,229,0.34)',
              backgroundColor: isAction ? 'rgba(241,210,122,0.08)' : 'rgba(72,187,164,0.035)',
              boxShadow: isAction
                ? '0 0 0 1px rgba(241,210,122,0.32), 0 0 42px rgba(241,210,122,0.32)'
                : '0 0 30px rgba(72,187,164,0.18)',
            }}
            transition={{ duration: 0.11, ease: 'easeOut' }}
            style={{ x: haloX, y: haloY }}
          >
            <motion.span
              className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-mrag-gold"
              animate={{ opacity: isAction ? 1 : 0, scaleX: isDown ? 0.7 : 1 }}
              transition={{ duration: 0.1 }}
            />
            <motion.span
              className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-mrag-gold"
              animate={{ opacity: isAction ? 1 : 0, scaleY: isDown ? 0.7 : 1 }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
          <motion.div
            className="absolute h-2 w-2 rounded-full bg-mrag-warm-white shadow-[0_0_24px_rgba(245,241,229,0.5)]"
            animate={{
              scale: isDown ? 0.9 : isAction ? 1.45 : 1,
              backgroundColor: isAction ? 'rgb(241,210,122)' : 'rgb(245,241,229)',
            }}
            transition={{ duration: 0.08, ease: 'easeOut' }}
            style={{ x: dotX, y: dotY }}
          />
        </>
      )}
    </div>
  );
};
