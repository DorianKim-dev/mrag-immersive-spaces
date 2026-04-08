import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const hiscoItems = [
  { letter: 'H', title: 'Hardware', ko: '인프라 구축', desc: '프로젝션, LED, 사운드, 센서 등 공간 하드웨어 인프라 설계 및 시공' },
  { letter: 'I', title: 'Interior', ko: '인테리어 구축', desc: '브랜드와 콘텐츠에 최적화된 몰입형 공간 인테리어 디자인' },
  { letter: 'S', title: 'Software', ko: '공간 OS 설치', desc: '공간 운영 소프트웨어, 시나리오 제어, 자동화 시스템' },
  { letter: 'C', title: 'Content', ko: '콘텐츠 업데이트', desc: '20,000+ 콘텐츠 라이브러리 기반 지속적 공급 및 업데이트' },
  { letter: 'O', title: 'Operation', ko: '유지보수·운영', desc: '5년 책임제 장기 운영, 유지보수, 시즌/이벤트 기획' },
];

export const HiscoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-dark py-28 md:py-40 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label text-mrag-teal">Framework</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 heading-section text-mrag-warm-white">
                HISCO
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-2 heading-sub text-mrag-warm-white/40 font-normal">
                통합 운영 생태계
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-[15px] text-mrag-warm-white/50 leading-[1.75] max-w-sm">
                MRAG는 단순 구축이 아닙니다. Hardware부터 Operation까지, 공간의 전체 생애주기를 하나의 시스템으로 연결합니다.
              </p>
            </Reveal>

            {/* Large HISCO letters */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex gap-3">
                {hiscoItems.map((item, i) => (
                  <motion.span
                    key={item.letter}
                    className="font-accent text-5xl md:text-6xl font-black text-mrag-warm-white/[0.06]"
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }}
                  >
                    {item.letter}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right items — stacked, no grid */}
          <div className="lg:col-span-7">
            {hiscoItems.map((item, i) => (
              <motion.div
                key={item.letter}
                className="py-7 border-b border-mrag-warm-white/[0.06] first:pt-0 last:border-b-0 group"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-start gap-5">
                  <span className="font-accent text-2xl font-black text-mrag-teal shrink-0 w-8">
                    {item.letter}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-accent text-base font-bold text-mrag-warm-white tracking-tight">
                        {item.title}
                      </h3>
                      <span className="text-xs text-mrag-teal/70">{item.ko}</span>
                    </div>
                    <p className="mt-2 text-sm text-mrag-warm-white/40 leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
