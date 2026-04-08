import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const hiscoItems = [
  {
    letter: 'H',
    title: 'Hardware',
    ko: '인프라 구축',
    desc: '프로젝션, LED, 사운드, 센서 등 공간 하드웨어 인프라 설계 및 시공',
  },
  {
    letter: 'I',
    title: 'Interior',
    ko: '인테리어 구축',
    desc: '브랜드와 콘텐츠에 최적화된 몰입형 공간 인테리어 디자인',
  },
  {
    letter: 'S',
    title: 'Software',
    ko: '공간 OS 설치',
    desc: '공간 운영 소프트웨어, 시나리오 제어, 자동화 시스템 구축',
  },
  {
    letter: 'C',
    title: 'Content',
    ko: '콘텐츠 업데이트',
    desc: '20,000+ 콘텐츠 라이브러리 기반 지속적 콘텐츠 공급 및 업데이트',
  },
  {
    letter: 'O',
    title: 'Operation',
    ko: '유지보수 프로그램',
    desc: '5년 책임제 기반 장기 운영, 유지보수, 시즌/이벤트 기획',
  },
];

export const HiscoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section-dark py-24 md:py-36 overflow-hidden">
      <div className="container-wide">
        <Reveal>
          <span className="section-label text-mrag-teal">Framework</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 editorial-heading text-mrag-warm-white max-w-3xl">
            HISCO
            <span className="text-mrag-warm-white/30 ml-3">—</span>
            <br />
            통합 운영 생태계
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-mrag-warm-white/60 max-w-xl leading-relaxed">
            MRAG는 구축부터 장기 운영까지 하나의 시스템으로 연결되는 HISCO Framework를 제공합니다.
          </p>
        </Reveal>

        {/* HISCO Letters */}
        <div className="mt-16 md:mt-24">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-px bg-mrag-warm-white/5">
            {hiscoItems.map((item, i) => (
              <StaggerItem key={item.letter}>
                <motion.div
                  className="relative p-6 md:p-8 bg-mrag-navy group cursor-default"
                  whileHover={{ backgroundColor: 'hsl(220, 25%, 14%)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Large letter background */}
                  <motion.span
                    className="absolute top-2 right-4 font-accent text-[120px] md:text-[100px] lg:text-[140px] font-black leading-none text-mrag-warm-white/[0.03] select-none"
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  >
                    {item.letter}
                  </motion.span>

                  <div className="relative z-10">
                    <span className="font-accent text-3xl md:text-4xl font-black text-mrag-teal">
                      {item.letter}
                    </span>
                    <h3 className="mt-4 font-accent text-sm font-semibold text-mrag-warm-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-mrag-teal">{item.ko}</p>
                    <p className="mt-4 text-sm text-mrag-warm-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-mrag-teal/0 group-hover:bg-mrag-teal/40 transition-colors duration-500" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
