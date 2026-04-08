import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import scenarioYoga from '@/assets/projects/immersive-yoga.jpg';
import scenarioCafe from '@/assets/projects/scenario-flamingo.jpg';
import scenarioDining from '@/assets/projects/immersive-cherry.jpg';
import scenarioLounge from '@/assets/projects/scenario-cityview.jpg';

const timeSlots = [
  { time: '06–10', label: '요가 & 웰니스', en: 'YOGA', image: scenarioYoga },
  { time: '10–14', label: '브런치 카페', en: 'CAFE', image: scenarioCafe },
  { time: '14–21', label: '다이닝 레스토랑', en: 'DINING', image: scenarioDining },
  { time: '21–02', label: '미디어 펍', en: 'LOUNGE', image: scenarioLounge },
];

export const ScenarioSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-light py-28 md:py-40">
      <div className="container-wide">
        <Reveal>
          <span className="section-label text-mrag-teal">Scenario</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 heading-section max-w-2xl">
            하나의 공간,
            <br /><span className="text-gradient-teal">무한한 전환.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 body-large max-w-lg">
            시간대와 시즌에 따라 공간의 용도와 분위기가 완전히 전환됩니다.
          </p>
        </Reveal>

        {/* Full-width time transformation */}
        <div className="mt-16">
          {/* Large image */}
          <div className="relative aspect-[21/9] overflow-hidden">
            {timeSlots.map((slot, i) => (
              <motion.img
                key={slot.en}
                src={slot.image}
                alt={slot.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/70 via-transparent to-mrag-navy/10" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <span className="font-accent text-5xl md:text-7xl font-black text-mrag-warm-white/90 tracking-tighter">
                  {timeSlots[active].en}
                </span>
                <p className="mt-1 text-sm text-mrag-warm-white/50">{timeSlots[active].label}</p>
              </motion.div>
            </div>
          </div>

          {/* Timeline strip */}
          <div className="grid grid-cols-4 mt-0">
            {timeSlots.map((slot, i) => (
              <button
                key={slot.en}
                onClick={() => setActive(i)}
                className={`py-5 px-4 text-left border-t-2 transition-all duration-400 ${
                  active === i
                    ? 'border-mrag-teal bg-mrag-teal/[0.04]'
                    : 'border-border hover:border-mrag-teal/30'
                }`}
              >
                <span className="font-accent text-xs font-bold text-muted-foreground">{slot.time}시</span>
                <p className={`mt-1 text-sm font-semibold transition-colors ${active === i ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {slot.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Seasonal — minimal, single row */}
        <Reveal delay={0.3}>
          <div className="mt-20">
            <h3 className="section-label text-muted-foreground mb-6">시즌별 전환</h3>
            <div className="flex flex-wrap gap-3">
              {['크리스마스 이벤트', '할로윈 파티', '프라이빗 파티', '연말/새해', '팝업 전시', '교육 프로그램', '몰입 퍼포먼스', '기업 행사'].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm text-foreground/70 border border-border hover:border-mrag-teal/30 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
