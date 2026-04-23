import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ValueShiftSection = () => {
  const chartRef = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const chartScale = useTransform(scrollYProgress, [0.2, 0.6], [0.9, 1]);

  return (
    <section ref={sectionRef} className="section-dark py-28 md:py-40">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <Reveal><span className="section-label text-mrag-teal">Value Curve</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 heading-section text-mrag-warm-white">
                물리적 공간은 감가되지만,
                <br /><span className="text-gradient-teal">플랫폼 공간은 가치가 높아집니다.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 body-large max-w-md">
                기존 공간은 완공과 동시에 가치가 하락합니다. MRAG 공간은 콘텐츠와 운영 업데이트를 통해 시간이 갈수록 가치가 커집니다.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex gap-12">
                <div>
                  <span className="font-accent text-sm font-bold text-red-400/50 tracking-wider">기존 공간</span>
                  <p className="mt-1 font-accent text-xl font-extrabold text-red-400/40">Depreciation ↓</p>
                </div>
                <div>
                  <span className="font-accent text-sm font-bold text-mrag-teal tracking-wider">MRAG 플랫폼</span>
                  <p className="mt-1 font-accent text-xl font-extrabold text-mrag-teal">Appreciation ↑</p>
                </div>
              </div>
            </Reveal>
          </div>

          <motion.div ref={chartRef} style={{ scale: chartScale }}>
            <svg viewBox="0 0 500 300" className="w-full h-auto" fill="none">
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="40" y1={50 + i * 70} x2="470" y2={50 + i * 70} stroke="hsl(222, 15%, 15%)" strokeWidth="0.5" />
              ))}
              <text x="32" y="57" textAnchor="end" fill="hsl(222, 8%, 35%)" fontSize="9" fontFamily="Inter Tight">가치</text>
              <text x="470" y="285" textAnchor="end" fill="hsl(222, 8%, 35%)" fontSize="9" fontFamily="Inter Tight">시간 →</text>

              <motion.path
                d="M50,80 C130,95 220,150 320,210 C400,250 450,265 470,270"
                stroke="hsl(0, 50%, 55%)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.path
                d="M50,200 C120,185 200,155 280,115 C350,80 420,55 470,45"
                stroke="hsl(166, 56%, 40%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Glow effect on teal line */}
              <motion.path
                d="M50,200 C120,185 200,155 280,115 C350,80 420,55 470,45"
                stroke="hsl(166, 56%, 40%)"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
                opacity="0.1"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.circle cx="195" cy="155" r="5" fill="hsl(166, 56%, 40%)"
                initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 2, type: 'spring', stiffness: 300 }}
              />
              <motion.text x="205" y="145" fill="hsl(166, 56%, 40%)" fontSize="9" fontFamily="Inter Tight"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.2 }}
              >교차점</motion.text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
