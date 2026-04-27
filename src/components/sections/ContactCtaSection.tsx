import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CTA_IMAGES } from '@/constants/images';
import { SOCIAL_LINKS } from '@/constants/links';

export const ContactCtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.8], ['5%', '-5%']);

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-[600px]">
      {/* Full background image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img src={CTA_IMAGES.space.src} alt="MRAG 몰입형 공간" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-mrag-navy/80 backdrop-blur-[2px]" />
      <div className="film-grain" />

      {/* Content */}
      <motion.div
        className="relative z-10 container-wide py-24 md:py-40 flex flex-col justify-center min-h-[600px]"
        style={{ y: contentY }}
      >
        <Reveal>
          <span className="section-label text-mrag-teal">Start Your Space</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 heading-section text-mrag-warm-white max-w-2xl">
            공간의 가능성을
            <br />함께 이야기합니다.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-[15px] text-mrag-warm-white/40 leading-[1.75] max-w-md">
            규모와 업종에 관계없이, 공간이 가진 가능성에 대해 편하게 연락 주세요. 전문 담당자가 직접 상담해드립니다.
          </p>
        </Reveal>

        {/* Direct contacts */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { init: 'JH', name: '김준혁 과장', phone: '010-4591-2815' },
              { init: 'JW', name: '박정우 매니저', phone: '010-9240-3126' },
            ].map((person) => (
              <div key={person.init} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-mrag-warm-white/5 border border-mrag-warm-white/[0.06] flex items-center justify-center">
                  <span className="text-xs font-accent font-bold text-mrag-teal">{person.init}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-mrag-warm-white">{person.name}</p>
                  <a href={`tel:${person.phone}`} className="text-sm text-mrag-warm-white/35 hover:text-mrag-teal transition-colors font-accent">
                    {person.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-mrag-teal text-accent-foreground font-semibold text-sm hover:bg-mrag-teal-light transition-all duration-300"
            >
              제안 상담
            </Link>
            <a
              href="mailto:business@mrag.co.kr"
              className="px-8 py-3.5 border border-mrag-warm-white/10 text-mrag-warm-white/60 text-sm hover:border-mrag-teal/50 hover:text-mrag-teal transition-all duration-300 font-accent"
            >
              business@mrag.co.kr
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-8 flex gap-5">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-xs font-accent text-mrag-warm-white/20 hover:text-mrag-teal transition-colors uppercase tracking-wider">YouTube</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-xs font-accent text-mrag-warm-white/20 hover:text-mrag-teal transition-colors uppercase tracking-wider">Instagram</a>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
};
