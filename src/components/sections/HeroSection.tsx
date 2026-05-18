import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const videoId = 'L2Pu4QEJ6D8';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.14]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-2%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.42, 0.58]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=15&controls=0&showinfo=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&autohide=1&vq=hd1080`;

  return (
    <section ref={sectionRef} className="relative h-[210vh] bg-mrag-navy">
      <div className="sticky top-0 h-screen min-h-[720px] overflow-hidden bg-mrag-navy">
        <motion.div className="absolute inset-0 overflow-hidden" style={{ scale: videoScale, y: videoY }}>
          <iframe
            title="MRAG immersive media background"
            src={embedUrl}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[max(100vh,56.25vw)] w-[max(177.78vh,100vw)] -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; encrypted-media"
            loading="eager"
            aria-hidden="true"
            tabIndex={-1}
          />
        </motion.div>

        <motion.div className="absolute inset-0 bg-mrag-navy" style={{ opacity: overlayOpacity }} />
        <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/86 via-mrag-navy/42 to-mrag-navy/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/82 via-transparent to-mrag-navy/14" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:12vw_12vw] opacity-18" />
        <div className="film-grain" />

        <motion.div
          className="relative z-10 container-wide flex h-full items-end pb-16 pt-28 md:pb-24 lg:pb-28"
          style={{ y: textY }}
        >
          <div className="max-w-[1120px]">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label text-mrag-teal">Space Transition Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 48, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-[clamp(3.8rem,8.6vw,9rem)] font-black leading-[0.96] text-mrag-warm-white [word-break:keep-all]"
            >
              상업공간의 한계를 지우다
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6 max-w-3xl text-[clamp(1.25rem,2.2vw,2.05rem)] font-semibold leading-[1.45] text-mrag-warm-white/78 [word-break:keep-all]"
            >
              트렌드가 변해도, 당신의 공간은 살아남아야 합니다.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-xl text-[15px] leading-[1.8] text-mrag-warm-white/62 md:text-base"
            >
              MRAG는 실감미디어, 콘텐츠, 운영 시스템을 결합해 하나의 공간을 계속 업데이트되는 상업 플랫폼으로 전환합니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/commercial"
                className="bg-mrag-teal px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors duration-300 hover:bg-mrag-teal-light"
              >
                Commercial
              </Link>
              <Link
                to="/public"
                className="border border-mrag-warm-white/15 px-7 py-3.5 font-accent text-sm text-mrag-warm-white/76 transition-colors duration-300 hover:border-mrag-teal/50 hover:text-mrag-teal"
              >
                Public
              </Link>
              <Link
                to="/work"
                className="border border-mrag-warm-white/15 px-7 py-3.5 font-accent text-sm text-mrag-warm-white/76 transition-colors duration-300 hover:border-mrag-teal/50 hover:text-mrag-teal"
              >
                Work
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-accent text-[10px] uppercase text-mrag-warm-white/28">Scroll</span>
          <div className="h-9 w-px bg-gradient-to-b from-mrag-teal/70 to-transparent" />
        </div>
      </div>
    </section>
  );
};
