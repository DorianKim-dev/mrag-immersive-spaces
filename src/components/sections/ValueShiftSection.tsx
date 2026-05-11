import { Reveal } from '@/components/animations/Reveal';
import { SOLUTION_IMAGES } from '@/constants/images';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const valueRows = [
  {
    eyebrow: '01 / Content Rotation',
    title: '하나의 공간이 여러 캠페인으로 바뀝니다.',
    desc: 'NFC, POP, 퀴즈, 포토 콘텐츠를 시즌과 시간대에 맞춰 교체해 같은 장소에서도 새로운 방문 이유를 만듭니다.',
    stat: '365',
    unit: 'days',
    image: SOLUTION_IMAGES.pop.src,
  },
  {
    eyebrow: '02 / Data Loop',
    title: '방문자의 행동이 다음 연출을 정교하게 만듭니다.',
    desc: '참여 기록과 선호 데이터를 운영자가 바로 확인하고, 다음 콘텐츠와 이벤트 흐름에 반영할 수 있습니다.',
    stat: '20K+',
    unit: 'scenes',
    image: SOLUTION_IMAGES.quiz.src,
  },
  {
    eyebrow: '03 / Modular Expansion',
    title: '작게 시작해도 더 큰 경험으로 확장됩니다.',
    desc: '디바이스, 미디어월, 클라우드월을 단계적으로 연결해 교육, F&B, 전시, 리테일 공간으로 넓힙니다.',
    stat: '3x',
    unit: 'scale',
    image: SOLUTION_IMAGES.cloudwall.src,
  },
];

export const ValueShiftSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeRow, setActiveRow] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section ref={sectionRef} className="section-dark overflow-hidden py-28 md:py-40">
      <div className="container-wide">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label text-mrag-teal">Value Curve</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-[640px] text-4xl font-black leading-[1.08] tracking-[-0.02em] text-mrag-warm-white [word-break:keep-all] md:text-5xl lg:text-6xl">
                공간의 가치는 설치 이후부터 다시 쌓입니다.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-xl text-base leading-7 text-mrag-warm-white/52 [word-break:keep-all] md:text-lg lg:pb-2">
              MRAG는 공간을 한 번 완성하고 끝내는 방식보다, 콘텐츠와 운영 데이터를 계속 갱신하는 구조에 집중합니다.
              방문자는 매번 다른 장면을 만나고, 운영자는 같은 면적에서 더 많은 기회를 얻습니다.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="space-y-4 lg:space-y-6">
              {valueRows.map((row, index) => (
                <motion.article
                  key={row.eyebrow}
                  className={`group relative overflow-hidden border-t border-mrag-warm-white/10 py-8 transition-colors duration-500 lg:min-h-[205px] lg:py-8 ${
                    activeRow === index ? 'bg-mrag-warm-white/[0.028]' : ''
                  }`}
                  onViewportEnter={() => setActiveRow(index)}
                  viewport={{ amount: 0.62, margin: '-18% 0px -18% 0px' }}
                  onMouseEnter={() => setActiveRow(index)}
                >
                  <motion.span
                    className="absolute left-0 top-0 h-px bg-mrag-teal"
                    initial={false}
                    animate={{ width: activeRow === index ? '100%' : '0%' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="font-accent text-[11px] uppercase tracking-[0.2em] text-mrag-teal/75">{row.eyebrow}</span>
                      <h3 className="mt-4 max-w-xl text-[clamp(1.75rem,3.2vw,3.1rem)] font-black leading-[1.05] tracking-[-0.02em] text-mrag-warm-white [word-break:keep-all] lg:text-[2.55rem]">
                        {row.title}
                      </h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="font-accent text-3xl font-black leading-none text-mrag-warm-white/90 md:text-4xl">{row.stat}</span>
                      <p className="mt-1 font-accent text-[9px] uppercase tracking-[0.16em] text-mrag-warm-white/35">{row.unit}</p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-mrag-warm-white/48 [word-break:keep-all]">
                    {row.desc}
                  </p>
                  <div className="mt-7 aspect-[16/10] overflow-hidden border border-mrag-warm-white/10 bg-mrag-warm-white/[0.03] lg:hidden">
                    <img src={row.image} alt={row.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-24">
              <div className="relative h-[70vh] min-h-[520px] max-h-[720px] overflow-hidden border border-mrag-warm-white/10 bg-mrag-warm-white/[0.025]">
              {valueRows.map((row, index) => (
                <motion.img
                  key={row.eyebrow}
                  src={row.image}
                  alt={row.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ scale: imageScale, y: imageY }}
                  animate={{
                    opacity: activeRow === index ? 1 : 0,
                    clipPath: activeRow === index ? 'inset(0% 0% 0% 0%)' : 'inset(8% 8% 8% 8%)',
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                />
              ))}
              <div className="value-scanline absolute inset-0 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/78 via-mrag-navy/10 to-transparent" />
              <div className="absolute left-6 top-6 border border-mrag-warm-white/15 bg-mrag-navy/35 px-4 py-3 backdrop-blur-sm">
                <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-mrag-teal">live value system</p>
                <p className="mt-1 font-accent text-[10px] uppercase tracking-[0.14em] text-mrag-warm-white/35">scroll-linked editorial frame</p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
                <div>
                  <p className="font-accent text-xs uppercase tracking-[0.2em] text-mrag-teal">{valueRows[activeRow].eyebrow}</p>
                  <p className="mt-2 max-w-md text-lg font-semibold leading-snug text-mrag-warm-white/88 [word-break:keep-all]">
                    {valueRows[activeRow].title}
                  </p>
                </div>
                <div className="flex gap-2">
                  {valueRows.map((row, index) => (
                    <span
                      key={row.eyebrow}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        activeRow === index ? 'w-10 bg-mrag-teal' : 'w-1.5 bg-mrag-warm-white/28'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {valueRows.map((row, index) => (
                  <button
                    key={row.eyebrow}
                    type="button"
                    onClick={() => setActiveRow(index)}
                    className={`border px-3 py-2 text-left font-accent text-[10px] uppercase tracking-[0.12em] transition-colors ${
                      activeRow === index
                        ? 'border-mrag-teal bg-mrag-teal/10 text-mrag-teal'
                        : 'border-mrag-warm-white/10 text-mrag-warm-white/35 hover:border-mrag-warm-white/22'
                    }`}
                  >
                    0{index + 1} {row.unit}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
