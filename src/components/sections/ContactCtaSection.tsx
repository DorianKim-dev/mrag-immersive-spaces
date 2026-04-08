import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import ctaImage from '@/assets/projects/cta-space.jpg';

export const ContactCtaSection = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ctaImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-mrag-navy/85" />
      </div>

      <div className="relative container-wide text-center">
        <Reveal>
          <span className="section-label text-mrag-teal">Start Your Space</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 editorial-heading text-mrag-warm-white">
            당신의 공간도,
            <br />
            TIKITAKA로 전환할 수 있습니다.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-mrag-warm-white/60 max-w-lg mx-auto leading-relaxed">
            지금 바로 수익이 나는 공간을 경험해보세요.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-mrag-teal text-accent-foreground font-semibold rounded-sm hover:bg-mrag-teal-light transition-colors"
            >
              프로젝트 문의
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-10 py-4 border border-mrag-warm-white/20 text-mrag-warm-white font-medium rounded-sm hover:border-mrag-warm-white/40 transition-colors"
            >
              사례 보기
            </Link>
          </div>
        </Reveal>

        {/* Contact info */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-sm text-mrag-warm-white/80 font-semibold">김준혁 과장</p>
              <a href="tel:010-4591-2815" className="text-sm text-mrag-warm-white/50 hover:text-mrag-teal transition-colors font-accent">
                010-4591-2815
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-mrag-warm-white/80 font-semibold">박정우 매니저</p>
              <a href="tel:010-9240-3126" className="text-sm text-mrag-warm-white/50 hover:text-mrag-teal transition-colors font-accent">
                010-9240-3126
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-mrag-warm-white/80 font-semibold">이메일</p>
              <a href="mailto:business@mrag.co.kr" className="text-sm text-mrag-warm-white/50 hover:text-mrag-teal transition-colors font-accent">
                business@mrag.co.kr
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
