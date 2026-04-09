import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/projects/hero-dining.jpg';

export const ContactCtaSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Split layout: image left, content right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        {/* Image half */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <img src={heroImg} alt="MRAG 몰입형 공간" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-mrag-navy/30" />
        </div>

        {/* Content half */}
        <div className="bg-mrag-navy px-8 md:px-16 lg:px-20 py-16 md:py-24 flex flex-col justify-center">
          <Reveal>
            <span className="section-label text-mrag-teal">Start Your Space</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 heading-section text-mrag-warm-white">
              공간의 가능성을
              <br />함께 이야기합니다.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[15px] text-mrag-warm-white/50 leading-[1.75] max-w-md">
              규모와 업종에 관계없이, 공간이 가진 가능성에 대해 편하게 연락 주세요. 전문 담당자가 직접 상담해드립니다.
            </p>
          </Reveal>

          {/* Direct contacts */}
          <Reveal delay={0.3}>
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-mrag-warm-white/5 flex items-center justify-center">
                  <span className="text-xs font-accent font-bold text-mrag-teal">JH</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-mrag-warm-white">김준혁 과장</p>
                  <a href="tel:010-4591-2815" className="text-sm text-mrag-warm-white/45 hover:text-mrag-teal transition-colors font-accent">
                    010-4591-2815
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-mrag-warm-white/5 flex items-center justify-center">
                  <span className="text-xs font-accent font-bold text-mrag-teal">JW</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-mrag-warm-white">박정우 매니저</p>
                  <a href="tel:010-9240-3126" className="text-sm text-mrag-warm-white/45 hover:text-mrag-teal transition-colors font-accent">
                    010-9240-3126
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-7 py-3 bg-mrag-teal text-accent-foreground font-semibold text-sm hover:bg-mrag-teal-light transition-colors"
              >
                제안 상담
              </Link>
              <a
                href="mailto:business@mrag.co.kr"
                className="px-7 py-3 border border-mrag-warm-white/10 text-mrag-warm-white/70 text-sm hover:border-mrag-warm-white/25 transition-colors font-accent"
              >
                business@mrag.co.kr
              </a>
            </div>
          </Reveal>

          {/* Social links */}
          <Reveal delay={0.5}>
            <div className="mt-8 flex gap-5">
              <a
                href="https://www.youtube.com/@maboroshi_mrag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-accent text-mrag-warm-white/25 hover:text-mrag-teal transition-colors uppercase tracking-wider"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/mrag_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-accent text-mrag-warm-white/25 hover:text-mrag-teal transition-colors uppercase tracking-wider"
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
