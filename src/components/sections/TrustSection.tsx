import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

export const TrustSection = () => {
  return (
    <section className="section-light py-28 md:py-40">
      <div className="container-wide">
        <Reveal>
          <span className="section-label text-mrag-teal">Trust & Proof</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 heading-section max-w-xl">
            검증된 실적이
            <br />말해줍니다.
          </h2>
        </Reveal>

        {/* Stats — clean horizontal, no boxes */}
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
                <span className="stat-number text-4xl md:text-5xl text-foreground">{stat.number}</span>
                <p className="mt-3 text-sm text-muted-foreground leading-snug">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications — minimal inline */}
        <Reveal delay={0.3}>
          <div className="mt-20 pt-10 border-t border-border">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <span className="text-xs text-muted-foreground font-accent uppercase tracking-widest">Certifications</span>
              {['GS 1등급 인증', '특허 20건', 'iF Design Award', 'TEA Award'].map((cert) => (
                <span key={cert} className="text-sm font-medium text-foreground/70">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
