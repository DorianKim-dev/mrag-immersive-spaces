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

  const opacity = useTransform(
    progress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0],
  );
  const scale = useTransform(progress, [start, end], [1.04, 1.42]);
  const blur = useTransform(progress, [fadeOutStart, fadeOutEnd], ['blur(0px)', 'blur(14px)']);

  return (
    <motion.div className="absolute inset-0" style={{ opacity, scale, filter: blur }}>
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

  const contentOpacity = useTransform(scrollYProgress, [0.88, 0.98], [1, 0]);
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
    <section ref={sectionRef} className="relative h-[420vh] bg-mrag-navy">
      <div className="sticky top-0 h-screen min-h-[700px] max-h-[1200px] overflow-hidden">
        {heroSlides.map((item, i) => (
          <HeroImageLayer key={item.tag} slide={item} index={i} progress={scrollYProgress} />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy via-mrag-navy/55 to-mrag-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/75 via-mrag-navy/10 to-transparent" />
        <div className="film-grain" />

        <motion.div
          className="relative z-10 container-wide flex h-full w-full items-end pb-16 md:pb-24 lg:pb-32"
          style={{ opacity: contentOpacity }}
        >
          <div className="grid w-full grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
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
                className="mt-5 heading-hero text-mrag-warm-white"
              >
                {slide.title}
                <br />
                <span className="text-gradient-teal">{slide.titleAccent}</span>
              </motion.h1>

              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-7 max-w-lg text-[17px] leading-[1.75] text-mrag-warm-white/55 md:text-lg"
              >
                {slide.description}
              </motion.p>

              <motion.div
                key={`stats-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12"
              >
                {slide.stats.map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-1.5">
                    <span className="font-accent text-xl font-extrabold text-mrag-warm-white md:text-2xl">
                      {stat.num}
                    </span>
                    <span className="font-accent text-[11px] text-mrag-warm-white/30">{stat.label}</span>
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

            <div className="hidden flex-col items-end justify-end lg:col-span-5 lg:flex">
              <div className="flex flex-col items-center gap-4">
                <span className="font-accent text-[10px] tracking-widest text-mrag-warm-white/20">
                  {String(current + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToSlide(i)}
                      className="relative w-0.5 overflow-hidden transition-all duration-500"
                      style={{ height: current === i ? 56 : 16 }}
                      aria-label={`Hero slide ${i + 1}`}
                    >
                      <span
                        className={`absolute inset-0 transition-all duration-500 ${
                          current === i ? 'bg-mrag-teal' : 'bg-mrag-warm-white/15 hover:bg-mrag-warm-white/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="font-accent text-[10px] tracking-widest text-mrag-warm-white/10">
                  {String(heroSlides.length).padStart(2, '0')}
                </span>
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
