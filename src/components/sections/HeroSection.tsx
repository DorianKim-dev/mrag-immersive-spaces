import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { HERO_IMAGES } from '@/constants/images';

const heroSlides = [
  {
    ...HERO_IMAGES[0],
    tag: 'Space Platform',
    title: '공간은 매일',
    titleAccent: '새로워질 수 있습니다',
    description:
      '기존 인테리어와 장비를 유지한 채, 콘텐츠와 운영 솔루션만으로 방문자가 다시 찾는 몰입형 공간을 만듭니다.',
    stats: [
      { num: '365', label: '일 새로운 공간' },
      { num: '10', label: '콘텐츠 솔루션' },
      { num: 'AI', label: '콘텐츠 확장' },
    ],
  },
  {
    ...HERO_IMAGES[1],
    tag: 'Season Theme',
    title: '공간이 바뀌면',
    titleAccent: '매출도 바뀝니다',
    description:
      '시즌, 이벤트, 브랜드 캠페인을 공사 없이 빠르게 반영해 하나의 장소를 계속 다른 무대로 전환합니다.',
    stats: [
      { num: '20,000+', label: '콘텐츠 라이브러리' },
      { num: '4', label: '모듈 타입' },
      { num: '5년', label: '책임 운영' },
    ],
  },
  {
    ...HERO_IMAGES[2],
    tag: 'Brand Experience',
    title: '브랜드를',
    titleAccent: '경험으로 만듭니다',
    description:
      '미디어월, 터치 인터랙션, 디바이스 연동을 결합해 고객이 머무는 시간을 콘텐츠 자산으로 바꿉니다.',
    stats: [
      { num: 'GS 1등급', label: '기술 인증' },
      { num: '20+', label: '특허 보유' },
      { num: 'iF Award', label: '디자인 수상' },
    ],
  },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const HeroImageLayer = ({
  slide,
  index,
  progress,
}: {
  slide: (typeof heroSlides)[number];
  index: number;
  progress: MotionValue<number>;
}) => {
  const count = heroSlides.length;
  const start = index / count;
  const end = (index + 1) / count;
  const fadeInStart = Math.max(0, start - 0.08);
  const fadeInEnd = start + 0.03;
  const fadeOutStart = end - 0.06;
  const fadeOutEnd = Math.min(1, end + 0.04);
  const travelStart = Math.max(0, start - 0.04);
  const travelEnd = Math.min(1, end + 0.04);

  const opacity = useTransform(
    progress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    index === 0 ? [1, 1, 1, 0] : index === count - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0],
  );
  const scale = useTransform(progress, [travelStart, start + 0.12, end], [1.16, 1.02, 1.36]);
  const x = useTransform(progress, [travelStart, end], [`${index % 2 === 0 ? -5 : 5}%`, `${index % 2 === 0 ? 4 : -4}%`]);
  const y = useTransform(progress, [travelStart, end], ['3%', '-4%']);
  const rotate = useTransform(progress, [travelStart, end], [index % 2 === 0 ? -1.2 : 1.2, 0]);
  const blur = useTransform(
    progress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    index === 0
      ? ['blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(16px)']
      : index === count - 1
        ? ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(0px)']
        : ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(16px)'],
  );

  return (
    <motion.div className="absolute inset-0 will-change-transform" style={{ opacity, scale, x, y, rotateZ: rotate, filter: blur }}>
      <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
    </motion.div>
  );
};

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = clamp(Math.floor(latest * heroSlides.length), 0, heroSlides.length - 1);
    setCurrent(next);
  });

  const contentOpacity = useTransform(scrollYProgress, [0.92, 0.99], [1, 0]);
  const viewportScale = useTransform(scrollYProgress, [0, 0.22, 0.52, 0.88], [0.86, 1.02, 1.12, 1.24]);
  const viewportY = useTransform(scrollYProgress, [0, 1], ['5%', '-8%']);
  const railX = useTransform(scrollYProgress, [0, 1], ['0%', '-64%']);
  const slide = heroSlides[current];

  const scrollToSlide = (index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const start = window.scrollY + rect.top;
    const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: start + scrollable * (index / heroSlides.length) + 8,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={sectionRef} className="relative h-[470vh] bg-mrag-navy">
      <div className="sticky top-0 h-screen min-h-[700px] max-h-[1200px] overflow-hidden">
        <motion.div
          className="absolute inset-[5vw] top-[9vh] bottom-[13vh] overflow-hidden border border-mrag-warm-white/10 bg-mrag-navy shadow-[0_50px_160px_rgba(0,0,0,0.42)] md:inset-x-[8vw] lg:inset-x-[10vw]"
          style={{ scale: viewportScale, y: viewportY, transformPerspective: 1200 }}
        >
          {heroSlides.map((item, i) => (
            <HeroImageLayer key={item.tag} slide={item} index={i} progress={scrollYProgress} />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_52%,transparent_0%,rgba(6,10,18,0.04)_42%,rgba(6,10,18,0.46)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:9vw_9vw] opacity-25 mix-blend-screen" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-mrag-warm-white/10 bg-mrag-navy/20 px-4 py-3 backdrop-blur-[2px]">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-mrag-teal">MRAG spatial view</span>
            <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-mrag-warm-white/45">
              {String(current + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy via-mrag-navy/42 to-mrag-navy/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/88 via-mrag-navy/16 to-transparent" />
        <div className="film-grain" />

        <motion.div
          className="relative z-10 container-wide flex h-full w-full items-end pb-16 md:pb-24 lg:pb-28"
          style={{ opacity: contentOpacity }}
        >
          <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <span className="section-label text-mrag-teal">{slide.tag}</span>
              </motion.div>

              <motion.h1
                key={`title-${current}`}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 max-w-[980px] text-[clamp(3.4rem,8.8vw,8.8rem)] font-black leading-[0.86] tracking-[-0.045em] text-mrag-warm-white [word-break:keep-all]"
              >
                {slide.title}
                <br />
                <span className="inline-block whitespace-nowrap text-[0.68em] text-gradient-teal md:text-[0.74em] lg:text-[0.78em]">
                  {slide.titleAccent}
                </span>
              </motion.h1>

              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-7 max-w-lg text-[17px] leading-[1.75] text-mrag-warm-white/68 md:text-lg"
              >
                {slide.description}
              </motion.p>

              <motion.div
                key={`stats-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12"
              >
                {slide.stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-1.5">
                    <span className="font-accent text-xl font-extrabold text-mrag-warm-white md:text-2xl">
                      {stat.num}
                    </span>
                    <span className="font-accent text-[11px] text-mrag-warm-white/45">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-mrag-teal px-8 py-3.5 text-sm font-semibold tracking-tight text-accent-foreground transition-all duration-300 hover:bg-mrag-teal-light"
                >
                  프로젝트 문의
                </Link>
                <Link
                  to="/work"
                  className="border border-mrag-warm-white/15 px-8 py-3.5 text-sm font-medium tracking-tight text-mrag-warm-white/80 transition-all duration-300 hover:border-mrag-teal/50 hover:text-mrag-teal"
                >
                  포트폴리오 보기
                </Link>
              </div>
            </div>

            <div className="hidden flex-col items-end justify-end lg:col-span-4 lg:flex">
              <div className="w-full max-w-[320px] border border-mrag-warm-white/10 bg-mrag-navy/26 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="font-accent text-[10px] uppercase tracking-[0.18em] text-mrag-warm-white/32">view path</span>
                  <span className="font-accent text-[10px] tracking-widest text-mrag-teal">
                    {String(current + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="relative mt-5 h-16 overflow-hidden border-y border-mrag-warm-white/10">
                  <motion.div className="absolute inset-y-0 left-0 flex w-[280%] items-center gap-3" style={{ x: railX }}>
                    {heroSlides.concat(heroSlides).map((item, i) => (
                      <div key={`${item.tag}-${i}`} className="h-10 w-24 overflow-hidden border border-mrag-warm-white/10 opacity-80">
                        <img src={item.src} alt="" className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </motion.div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToSlide(i)}
                      className="relative h-1 flex-1 overflow-hidden bg-mrag-warm-white/12 transition-all duration-500"
                      aria-label={`Hero slide ${i + 1}`}
                    >
                      <span
                        className={`absolute inset-y-0 left-0 transition-all duration-500 ${
                          current === i ? 'bg-mrag-teal' : 'bg-mrag-warm-white/15 hover:bg-mrag-warm-white/30'
                        }`}
                        style={{ width: current === i ? '100%' : '22%' }}
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-4 font-accent text-[10px] uppercase tracking-[0.12em] text-mrag-warm-white/35">
                  wheel to move through spatial scenes
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 lg:hidden">
          <span className="font-accent text-[10px] uppercase tracking-widest text-mrag-warm-white/20">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-mrag-teal/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};
