import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Marquee } from '@/components/animations/Marquee';
import { SCENARIO_IMAGES } from '@/constants/images';

const timeSlots = [
  { time: '06–10', label: '요가 & 웰니스', en: 'YOGA', image: SCENARIO_IMAGES.yoga.src },
  { time: '10–14', label: '브런치 카페', en: 'CAFE', image: SCENARIO_IMAGES.cafe.src },
  { time: '14–21', label: '다이닝 레스토랑', en: 'DINING', image: SCENARIO_IMAGES.dining.src },
  { time: '21–02', label: '미디어 펍', en: 'LOUNGE', image: SCENARIO_IMAGES.lounge.src },
];

const seasonTags = ['크리스마스 이벤트', '할로윈 파티', '프라이빗 파티', '연말/새해', '팝업 전시', '교육 프로그램', '몰입 퍼포먼스', '기업 행사'];

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
          <h2 className="mt-5 heading-section text-mrag-warm-white max-w-2xl">
            하나의 공간,
            <br /><span className="text-gradient-teal">무한한 전환.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 body-large max-w-lg">
            시간대와 시즌에 따라 공간의 용도와 분위기가 완전히 전환됩니다.
          </p>
        </Reveal>

        {/* Time transformation */}
        <div className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden">
            {timeSlots.map((slot, i) => (
              <motion.img
                key={slot.en}
                src={slot.image}
                alt={slot.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.05 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/80 via-transparent to-mrag-navy/20" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <motion.div key={active} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="font-accent text-5xl md:text-7xl font-black text-mrag-warm-white/90 tracking-tighter">
                  {timeSlots[active].en}
                </span>
                <p className="mt-1 text-sm text-mrag-warm-white/40">{timeSlots[active].label}</p>
              </motion.div>
            </div>
            {/* Time indicator */}
            <div className="absolute top-6 right-6 font-accent text-xs text-mrag-warm-white/30 tracking-wider">
              {timeSlots[active].time}시
            </div>
          </div>

          {/* Timeline strip */}
          <div className="grid grid-cols-4 mt-0">
            {timeSlots.map((slot, i) => (
              <button
                key={slot.en}
                onClick={() => setActive(i)}
                className={`py-5 px-4 text-left border-t-2 transition-all duration-500 ${
                  active === i
                    ? 'border-mrag-teal bg-mrag-teal/[0.04]'
                    : 'border-mrag-warm-white/[0.06] hover:border-mrag-teal/30'
                }`}
              >
                <span className="font-accent text-xs font-bold text-mrag-warm-white/30">{slot.time}시</span>
                <p className={`mt-1 text-sm font-semibold transition-colors ${active === i ? 'text-mrag-warm-white' : 'text-mrag-warm-white/40'}`}>
                  {slot.label}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Seasonal — marquee scroll */}
        <Reveal delay={0.3}>
          <div className="mt-20">
            <h3 className="section-label text-mrag-warm-white/30 mb-6">시즌별 전환</h3>
            <Marquee speed={25} direction="right" className="py-2">
              {[...seasonTags, ...seasonTags].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="inline-flex mx-2 px-4 py-2 text-sm text-mrag-warm-white/40 border border-mrag-warm-white/[0.06] hover:border-mrag-teal/30 hover:text-mrag-teal transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
