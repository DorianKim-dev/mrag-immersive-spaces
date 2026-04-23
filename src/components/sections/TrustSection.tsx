import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import { Marquee } from '@/components/animations/Marquee';

export const TrustSection = () => {
  return (
    <section className="section-light py-28 md:py-40">
      <div className="container-wide">
        <Reveal>
          <span className="section-label text-mrag-teal">Trust & Proof</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 heading-section text-mrag-warm-white max-w-xl">
            검증된 실적이
            <br />말해줍니다.
          </h2>
        </Reveal>

        {/* Stats — clean horizontal */}
        <StaggerContainer className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-14 gap-x-8">
          {[
            { number: '100+', label: '누적 프로젝트' },
            { number: '50+', label: '운영 공간' },
            { number: '500억+', label: '통합 구축 규모' },
            { number: '95%', label: '운영 생존율' },
            { number: '5년', label: '책임제 보장' },
            { number: '20,000+', label: '콘텐츠 시나리오' },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <div>
                <span className="stat-number text-4xl md:text-5xl text-mrag-warm-white">{stat.number}</span>
                <p className="mt-3 text-sm text-mrag-warm-white/35 leading-snug">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications — marquee scroll */}
        <Reveal delay={0.3}>
          <div className="mt-20 pt-10 border-t border-mrag-warm-white/[0.06]">
            <Marquee speed={30} className="py-4">
              {['GS 1등급 인증', '특허 20건', 'iF Design Award', 'TEA Award', 'ISO 9001', '기술혁신형 기업', 'GS 1등급 인증', '특허 20건', 'iF Design Award', 'TEA Award'].map((cert, i) => (
                <span key={`${cert}-${i}`} className="inline-flex items-center gap-4 mx-6">
                  <span className="text-sm font-medium text-mrag-warm-white/50 hover:text-mrag-teal transition-colors">{cert}</span>
                  <span className="w-1 h-1 rounded-full bg-mrag-teal/30" />
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
