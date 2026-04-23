import { Reveal } from '@/components/animations/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PROJECT_IMAGES } from '@/constants/images';

export const ProblemSolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section ref={sectionRef} className="section-dark py-28 md:py-40 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: Problem */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="number-badge">(a.)</span>
              <span className="section-label text-red-400/60 ml-3">Problem</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 heading-section text-mrag-warm-white">
                3년마다 리뉴얼,
                <br />또 수억 들여 공사.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 body-large max-w-md">
                리뉴얼을 하자니 수억이 들고, 하지 않으면 경쟁에서 밀려납니다. 이것이 기존 인테리어 중심 공간 구조의 한계입니다.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex gap-10">
                {[
                  { stat: '96.2%', label: '외식업 폐업률' },
                  { stat: '100만', label: '2025 폐업자' },
                  { stat: '4~5억', label: '평균 창업비용' },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="font-accent text-2xl font-extrabold text-mrag-warm-white">{item.stat}</span>
                    <p className="mt-1 text-xs text-mrag-warm-white/30">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Solution with parallax image */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden aspect-[16/10] mb-10">
                <motion.img
                  src={PROJECT_IMAGES.fnb.src}
                  alt="MRAG 몰입형 다이닝 — 벚꽃 테마"
                  className="w-full h-full object-cover"
                  style={{ y: imgY }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/70 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="section-label text-mrag-teal">MRAG 몰입형 다이닝</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <span className="number-badge">(b.)</span>
              <span className="section-label text-mrag-teal ml-3">Solution</span>
            </Reveal>
            <Reveal delay={0.35}>
              <h2 className="mt-4 heading-sub text-mrag-warm-white">
                이 구조에서 <span className="text-gradient-teal">벗어날 수 있습니다.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-4 body-large max-w-lg">
                TIKITAKA는 일회성 인테리어가 아닌 장기 운영 플랫폼입니다. 한 번의 구축으로 F&B·전시·팝업 등 다양한 매출 구조를 운영하며, 공사 없이 하나의 매장을 20,000개의 시나리오로 바꿉니다.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
