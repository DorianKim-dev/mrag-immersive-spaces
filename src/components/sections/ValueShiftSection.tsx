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
    <section ref={sectionRef} className="section-dark overflow-hidden py-24 md:py-36">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
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
            <p className="max-w-xl text-base leading-7 text-mrag-warm-white/52 [word-break:keep-all] md:text-lg">
              MRAG는 공간을 한 번 완성하고 끝내는 방식보다, 콘텐츠와 운영 데이터를 계속 갱신하는 구조에 집중합니다.
              방문자는 매번 다른 장면을 만나고, 운영자는 같은 면적에서 더 많은 기회를 얻습니다.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="relative hidden h-[66vh] min-h-[500px] overflow-hidden border border-mrag-warm-white/10 bg-mrag-warm-white/[0.025] lg:block">
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
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/78 via-mrag-navy/10 to-transparent" />
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
          </div>

          <div className="lg:col-span-5">
            <div className="hidden h-[66vh] min-h-[500px] flex-col justify-between border-y border-mrag-warm-white/10 lg:flex">
              {valueRows.map((row, index) => (
                <button
                  key={row.eyebrow}
                  type="button"
                  className={`group relative grid flex-1 grid-cols-[72px_1fr_auto] items-center gap-5 overflow-hidden border-b border-mrag-warm-white/10 py-5 text-left transition-colors duration-300 last:border-b-0 ${
                    activeRow === index ? 'bg-mrag-warm-white/[0.035]' : 'hover:bg-mrag-warm-white/[0.02]'
                  }`}
                  onMouseEnter={() => setActiveRow(index)}
                  onFocus={() => setActiveRow(index)}
                  onClick={() => setActiveRow(index)}
                >
                  <motion.span
                    className="absolute left-0 top-0 h-full w-0.5 bg-mrag-teal"
                    initial={false}
                    animate={{ scaleY: activeRow === index ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'top' }}
                  />
                  <div className="pl-5">
                    <span className={`font-accent text-xs transition-colors ${activeRow === index ? 'text-mrag-teal' : 'text-mrag-warm-white/32'}`}>
                      0{index + 1}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-mrag-teal/70">{row.eyebrow}</span>
                    <h3 className="mt-2 text-xl font-black leading-snug tracking-[-0.01em] text-mrag-warm-white [word-break:keep-all] xl:text-2xl">
                      {row.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-mrag-warm-white/45 [word-break:keep-all]">{row.desc}</p>
                  </div>

                  <div className="pr-5 text-right">
                    <span className="font-accent text-3xl font-black leading-none text-mrag-warm-white xl:text-4xl">{row.stat}</span>
                    <p className="mt-1 font-accent text-[9px] uppercase tracking-[0.16em] text-mrag-warm-white/35">{row.unit}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:hidden">
            {valueRows.map((row, index) => (
              <motion.article
                key={row.eyebrow}
                className="border-t border-mrag-warm-white/10 py-10"
                onViewportEnter={() => setActiveRow(index)}
                viewport={{ amount: 0.58, margin: '-12% 0px -12% 0px' }}
              >
                <div className="w-full">
                  <div className="mb-6 aspect-[16/10] overflow-hidden border border-mrag-warm-white/10 bg-mrag-warm-white/[0.03] lg:hidden">
                    <img src={row.image} alt={row.title} className="h-full w-full object-cover" loading="lazy" />
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <span className="font-accent text-xs uppercase tracking-[0.18em] text-mrag-teal/80">{row.eyebrow}</span>
                    <span className="font-accent text-sm text-mrag-warm-white/28">0{index + 1}</span>
                  </div>

                  <h3 className="mt-7 max-w-xl text-3xl font-black leading-tight tracking-[-0.01em] text-mrag-warm-white [word-break:keep-all] md:text-4xl">
                    {row.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-7 text-mrag-warm-white/48 [word-break:keep-all]">{row.desc}</p>

                  <div className="mt-9 flex items-end gap-3">
                    <span className="font-accent text-5xl font-black leading-none text-mrag-warm-white md:text-6xl">{row.stat}</span>
                    <span className="mb-2 font-accent text-[10px] uppercase tracking-[0.2em] text-mrag-warm-white/38">{row.unit}</span>
                  </div>
                </div>
              </motion.article>
            ))}
            <div className="border-t border-mrag-warm-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
