import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ValueShiftSection = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: '-80px' });

  return (
    <section className="section-light py-24 md:py-36">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <span className="section-label text-mrag-teal">Value Curve</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                물리적 공간은 감가되지만,
                <br />
                <span className="text-gradient-teal">플랫폼 공간은 가치가 높아집니다.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                기존 공간은 완공과 동시에 가치가 하락합니다. 반면 MRAG 공간은 콘텐츠와 경험이 축적될수록, 소프트웨어와 운영 업데이트를 통해 공간의 가치가 더 커집니다.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-5 rounded-sm bg-destructive/5 border border-destructive/10">
                  <span className="text-xs font-semibold text-destructive/70 uppercase tracking-wider font-accent">기존 공간</span>
                  <p className="mt-2 text-sm text-muted-foreground">Hardware / Interior 장비는 감가상각</p>
                  <span className="mt-3 block font-accent text-lg font-bold text-destructive/60">Depreciation ↓</span>
                </div>
                <div className="p-5 rounded-sm bg-mrag-teal/5 border border-mrag-teal/10">
                  <span className="text-xs font-semibold text-mrag-teal uppercase tracking-wider font-accent">MRAG 플랫폼</span>
                  <p className="mt-2 text-sm text-muted-foreground">데이터와 콘텐츠로 가치 상승</p>
                  <span className="mt-3 block font-accent text-lg font-bold text-mrag-teal">Appreciation ↑</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Chart Visualization */}
          <div ref={chartRef} className="relative">
            <svg viewBox="0 0 500 320" className="w-full h-auto" fill="none">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={i} x1="50" y1={60 + i * 60} x2="470" y2={60 + i * 60} stroke="hsl(30, 15%, 88%)" strokeWidth="0.5" />
              ))}
              {/* Y axis labels */}
              <text x="40" y="68" textAnchor="end" className="fill-muted-foreground" fontSize="10" fontFamily="Inter">가치</text>
              <text x="40" y="308" textAnchor="end" className="fill-muted-foreground" fontSize="10" fontFamily="Inter">0</text>
              {/* X axis label */}
              <text x="470" y="308" textAnchor="end" className="fill-muted-foreground" fontSize="10" fontFamily="Inter">시간 →</text>

              {/* Depreciation curve (traditional) */}
              <motion.path
                d="M60,100 C120,110 200,160 300,220 C380,260 440,280 470,285"
                stroke="hsl(0, 60%, 60%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.text
                x="380" y="270"
                className="fill-destructive/60"
                fontSize="11"
                fontFamily="Inter"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                기존 공간
              </motion.text>

              {/* Appreciation curve (MRAG) */}
              <motion.path
                d="M60,200 C120,190 180,170 240,140 C300,110 380,80 470,60"
                stroke="hsl(168, 60%, 42%)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.text
                x="380" y="55"
                className="fill-mrag-teal"
                fontSize="11"
                fontFamily="Inter"
                fontWeight="700"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.8 }}
              >
                MRAG 플랫폼
              </motion.text>

              {/* Cross point indicator */}
              <motion.circle
                cx="195" cy="165"
                r="5"
                fill="hsl(168, 60%, 42%)"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 2, type: 'spring', stiffness: 300 }}
              />
              <motion.text
                x="205" y="155"
                className="fill-foreground"
                fontSize="9"
                fontFamily="Inter"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.6 } : {}}
                transition={{ delay: 2.2 }}
              >
                역전 지점
              </motion.text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
