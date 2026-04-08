import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import scenarioYoga from '@/assets/projects/scenario-yoga.jpg';
import scenarioCafe from '@/assets/projects/scenario-cafe.jpg';
import scenarioDining from '@/assets/projects/scenario-dining.jpg';
import scenarioLounge from '@/assets/projects/scenario-lounge.jpg';

const timeSlots = [
  { time: '06~10시', label: '요가 & 웰니스', en: 'YOGA', image: scenarioYoga, accent: 'bg-amber-400/20 text-amber-600' },
  { time: '10~14시', label: '브런치 카페', en: 'CAFE', image: scenarioCafe, accent: 'bg-green-400/20 text-green-600' },
  { time: '14~21시', label: '다이닝 레스토랑', en: 'DINING', image: scenarioDining, accent: 'bg-blue-400/20 text-blue-600' },
  { time: '21~02시', label: '미디어 펍', en: 'LOUNGE', image: scenarioLounge, accent: 'bg-purple-400/20 text-purple-600' },
];

const seasons = [
  { title: '크리스마스 이벤트', en: 'CHRISTMAS', desc: '연말 시즌 테마 공간 운영' },
  { title: '할로윈 파티', en: 'HALLOWEEN', desc: '테마형 체험 콘텐츠 운영' },
  { title: '프라이빗 파티', en: 'PRIVATE', desc: '고객 맞춤형 경험 제공' },
  { title: '연말/새해', en: 'NEW YEAR', desc: '카운트다운 및 시즌 이벤트' },
];

export const ScenarioSection = () => {
  const [activeSlot, setActiveSlot] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section-light py-24 md:py-36">
      <div className="container-wide">
        <Reveal>
          <span className="section-label text-mrag-teal">Scenario</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
            하나의 공간,
            <br />
            <span className="text-gradient-teal">무한한 전환.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            시간대별, 시즌별로 공간의 용도와 분위기가 완전히 전환됩니다.
          </p>
        </Reveal>

        {/* Time-based transformation */}
        <div className="mt-16">
          <Reveal delay={0.2}>
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider font-accent">
              시간대별 운영 시나리오
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Image preview */}
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-sm">
              {timeSlots.map((slot, i) => (
                <motion.img
                  key={slot.en}
                  src={slot.image}
                  alt={slot.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={false}
                  animate={{ opacity: activeSlot === i ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <motion.span
                  key={activeSlot}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-accent text-4xl md:text-5xl font-black text-mrag-warm-white"
                >
                  {timeSlots[activeSlot].en}
                </motion.span>
              </div>
            </div>

            {/* Time slots selector */}
            <div className="lg:col-span-5 flex flex-col gap-2">
              {timeSlots.map((slot, i) => (
                <motion.button
                  key={slot.en}
                  onClick={() => setActiveSlot(i)}
                  className={`text-left p-5 rounded-sm border transition-all duration-300 ${
                    activeSlot === i
                      ? 'border-mrag-teal bg-mrag-teal/5'
                      : 'border-border hover:border-mrag-teal/30 bg-transparent'
                  }`}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-accent text-xs font-semibold text-muted-foreground">{slot.time}</span>
                      <h4 className="mt-1 text-lg font-bold text-foreground">{slot.label}</h4>
                    </div>
                    <span className={`px-3 py-1 rounded-sm text-xs font-semibold font-accent ${slot.accent}`}>
                      {slot.en}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Seasonal */}
        <Reveal delay={0.3}>
          <div className="mt-20">
            <h3 className="text-sm font-semibold text-foreground mb-8 uppercase tracking-wider font-accent">
              시즌별 운영 시나리오
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {seasons.map((season) => (
                <div key={season.en} className="p-5 md:p-6 border border-border rounded-sm hover:border-mrag-teal/30 transition-colors">
                  <span className="font-accent text-xs font-bold text-mrag-teal tracking-wider">{season.en}</span>
                  <h4 className="mt-2 text-base font-bold text-foreground">{season.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{season.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
