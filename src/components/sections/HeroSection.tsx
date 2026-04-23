import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { HERO_IMAGES } from '@/constants/images';

/**
 * 히어로 슬라이드 데이터
 * 이미지/문구를 변경하려면 이 배열만 수정하세요.
 */
const heroSlides = [
  {
    ...HERO_IMAGES[0],
    tag: 'Immersive Dining',
    title: '상업공간의',
    titleAccent: '한계를 지우다',
    description: '하나의 공간을 20,000+ 운영 시나리오로 전환합니다.\n구축부터 장기 운영까지, HISCO 전체 구조를 제공합니다.',
    stats: [
      { num: '100+', label: '프로젝트' },
      { num: '500억+', label: '구축 규모' },
      { num: '95%', label: '운영 신뢰' },
    ],
  },
  {
    ...HERO_IMAGES[1],
    tag: 'Season Theme',
    title: '공간이 바뀌면,',
    titleAccent: '매출이 바뀝니다',
    description: '시즌 콘텐츠 업데이트만으로 완전히 새로운 공간을 연출.\n공사 없이 매장의 분위기를 바꾸는 플랫폼 TIKITAKA.',
    stats: [
      { num: '20,000+', label: '콘텐츠' },
      { num: '4종', label: '모듈 타입' },
      { num: '5년', label: '책임 운영' },
    ],
  },
  {
    ...HERO_IMAGES[2],
    tag: 'Beauty Concept',
    title: '브랜드를 공간으로',
    titleAccent: '경험합니다',
    description: '브랜드 아이덴티티를 몰입형 미디어 아트로 구현.\n고객이 머무는 시간을 늘리고, 체험 자체가 콘텐츠가 됩니다.',
    stats: [
      { num: 'GS 1등급', label: '인증' },
      { num: '특허 20건', label: '기술 보유' },
      { num: 'iF Award', label: '수상' },
    ],
  },
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastWheelTime = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Navigate to slide
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [current, isTransitioning]);

  const goNext = useCallback(() => {
    goToSlide((current + 1) % heroSlides.length);
  }, [current, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((current - 1 + heroSlides.length) % heroSlides.length);
  }, [current, goToSlide]);

  // Autoplay — restarts after 8s of no interaction
  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % heroSlides.length;
        return next;
      });
    }, 6000);
  }, []);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [resetAutoplay]);

  // Wheel handler — vers.kr style
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      const rect = section.getBoundingClientRect();

      // Only intercept wheel if hero is in viewport
      if (rect.top > 50 || rect.bottom < window.innerHeight * 0.5) return;

      // Debounce wheel events (700ms)
      if (now - lastWheelTime.current < 700) return;

      if (e.deltaY > 0) {
        // Scrolling down
        if (current < heroSlides.length - 1) {
          e.preventDefault();
          lastWheelTime.current = now;
          goToSlide(current + 1);
          resetAutoplay();
        } else {
          // Last slide — allow natural scroll
          setHasPassedHero(true);
        }
      } else {
        // Scrolling up
        if (current > 0 && !hasPassedHero) {
          e.preventDefault();
          lastWheelTime.current = now;
          goToSlide(current - 1);
          resetAutoplay();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [current, hasPassedHero, goToSlide, resetAutoplay]);

  // Reset hasPassedHero when scrolled back to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setHasPassedHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] max-h-[1200px] flex items-end overflow-hidden"
    >
      {/* Background images with crossfade + parallax */}
      {heroSlides.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: current === i ? 1 : 0,
            scale: current === i ? 1 : 1.08,
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={s.src}
            alt={s.alt}
            className="w-full h-full object-cover"
            style={{ y }}
          />
        </motion.div>
      ))}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy via-mrag-navy/60 to-mrag-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/70 via-transparent to-transparent" />
      <div className="film-grain" />

      {/* Content — scroll fades out */}
      <motion.div className="relative container-wide pb-16 md:pb-24 lg:pb-32 w-full" style={{ opacity }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left: Title + CTA */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="section-label text-mrag-teal">{slide.tag}</span>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${current}`}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 heading-hero text-mrag-warm-white"
              >
                {slide.title}
                <br />
                <span className="text-gradient-teal">{slide.titleAccent}</span>
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-7 text-[17px] md:text-lg text-mrag-warm-white/50 leading-[1.75] max-w-lg whitespace-pre-line"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            {/* Stats strip */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stats-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-10 flex items-center gap-8 md:gap-12"
              >
                {slide.stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-baseline gap-1.5">
                    <span className="font-accent text-xl md:text-2xl font-extrabold text-mrag-warm-white">
                      {stat.num}
                    </span>
                    <span className="text-[11px] text-mrag-warm-white/30 font-accent">
                      {stat.label}
                    </span>
                    {i < slide.stats.length - 1 && (
                      <span className="ml-6 md:ml-10 w-px h-4 bg-mrag-warm-white/10" />
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 flex gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-mrag-teal text-accent-foreground font-semibold text-sm tracking-tight hover:bg-mrag-teal-light transition-all duration-300"
              >
                프로젝트 문의
              </Link>
              <Link
                to="/work"
                className="px-8 py-3.5 border border-mrag-warm-white/15 text-mrag-warm-white/80 font-medium text-sm tracking-tight hover:border-mrag-teal/50 hover:text-mrag-teal transition-all duration-300"
              >
                사례 보기
              </Link>
            </motion.div>
          </div>

          {/* Right: Vertical slide indicator (vers.kr style) */}
          <motion.div
            className="lg:col-span-5 hidden lg:flex flex-col items-end justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Slide counter */}
              <span className="font-accent text-[10px] text-mrag-warm-white/20 tracking-widest">
                {String(current + 1).padStart(2, '0')}
              </span>

              {/* Vertical progress indicators */}
              <div className="flex flex-col gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      goToSlide(i);
                      resetAutoplay();
                    }}
                    className="relative w-0.5 overflow-hidden transition-all duration-700"
                    style={{ height: current === i ? 48 : 16 }}
                  >
                    <span className={`absolute inset-0 transition-all duration-700 ${
                      current === i ? 'bg-mrag-teal' : 'bg-mrag-warm-white/15 hover:bg-mrag-warm-white/30'
                    }`} />
                    {current === i && (
                      <motion.span
                        className="absolute inset-0 bg-mrag-teal/50"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 6, ease: 'linear' }}
                        style={{ transformOrigin: 'top' }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Total */}
              <span className="font-accent text-[10px] text-mrag-warm-white/10 tracking-widest">
                {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint — mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-accent text-[10px] text-mrag-warm-white/20 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-mrag-teal/50 to-transparent" />
      </motion.div>

      {/* Bottom horizontal indicator — mobile */}
      <div className="absolute bottom-8 right-6 lg:hidden flex items-center gap-2">
        <span className="font-accent text-[10px] text-mrag-warm-white/20">
          {String(current + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </span>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goToSlide(i);
              resetAutoplay();
            }}
            className={`transition-all duration-700 ${
              current === i
                ? 'w-8 h-0.5 bg-mrag-teal'
                : 'w-3 h-0.5 bg-mrag-warm-white/15'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
