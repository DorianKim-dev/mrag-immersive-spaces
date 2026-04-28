import { Reveal } from '@/components/animations/Reveal';
import { CTA_IMAGES } from '@/constants/images';
import { SOCIAL_LINKS } from '@/constants/links';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const ContactCtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.8], ['5%', '-5%']);

  return (
    <section ref={sectionRef} className="relative min-h-[680px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img src={CTA_IMAGES.space.src} alt="MRAG 몰입형 공간" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-mrag-navy/78 backdrop-blur-[1px]" />
      <div className="film-grain" />

      <motion.div className="relative z-10 flex min-h-[680px] flex-col justify-center py-24 md:py-40 container-wide" style={{ y: contentY }}>
        <Reveal>
          <span className="section-label text-mrag-teal">Start Your Space</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-2xl heading-section text-mrag-warm-white">
            공간의 가능성을
            <br />
            함께 설계합니다.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-mrag-warm-white/58">
            규모와 업종에 관계없이, 공간이 가진 가능성을 편하게 공유해주세요. 담당자가 프로젝트 목적에 맞춰 직접 상담드립니다.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { init: 'JH', name: '김준현 과장', phone: '010-4591-2815' },
              { init: 'JW', name: '박정우 매니저', phone: '010-9240-3126' },
            ].map((person) => (
              <div key={person.init} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-mrag-warm-white/[0.08] bg-mrag-warm-white/5 backdrop-blur-md">
                  <span className="font-accent text-xs font-bold text-mrag-teal">{person.init}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-mrag-warm-white">{person.name}</p>
                  <a href={`tel:${person.phone}`} className="font-accent text-sm text-mrag-warm-white/45 transition-colors hover:text-mrag-teal">
                    {person.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="bg-mrag-teal px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:bg-mrag-teal-light">
              제안 상담
            </Link>
            <a
              href="mailto:business@mrag.co.kr"
              className="border border-mrag-warm-white/10 px-8 py-3.5 font-accent text-sm text-mrag-warm-white/65 transition-all duration-300 hover:border-mrag-teal/50 hover:text-mrag-teal"
            >
              business@mrag.co.kr
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-8 flex gap-5">
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="font-accent text-xs uppercase tracking-wider text-mrag-warm-white/24 transition-colors hover:text-mrag-teal">
              YouTube
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="font-accent text-xs uppercase tracking-wider text-mrag-warm-white/24 transition-colors hover:text-mrag-teal">
              Instagram
            </a>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};
