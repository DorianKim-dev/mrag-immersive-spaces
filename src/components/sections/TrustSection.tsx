import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const stats = [
  { number: '100+', label: '누적 프로젝트', sub: '공공·교육·민간' },
  { number: '50+', label: '운영 공간', sub: '국내 및 해외' },
  { number: '500억+', label: '누적 통합 구축 규모', sub: '원' },
  { number: '95%', label: '지속/운영 신뢰 지표', sub: '생존율' },
  { number: '5년', label: '책임제', sub: '장기 운영 보장' },
  { number: '20,000+', label: '콘텐츠/운영 시나리오', sub: '무제한 전환' },
];

const certs = ['GS 1등급 공인 인증', '특허 20건', 'iF Design Award', 'TEA Award'];

export const TrustSection = () => {
  return (
    <section className="section-cream py-24 md:py-36">
      <div className="container-wide">
        <Reveal>
          <span className="section-label text-mrag-teal">Trust & Proof</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            검증된 실적,
            <br />
            <span className="text-gradient-teal">신뢰할 수 있는 파트너.</span>
          </h2>
        </Reveal>

        {/* Stats grid */}
        <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-background p-6 md:p-8 text-center h-full flex flex-col justify-center">
                <span className="stat-number text-3xl md:text-4xl text-foreground">{stat.number}</span>
                <span className="mt-2 text-sm font-semibold text-foreground">{stat.label}</span>
                <span className="mt-1 text-xs text-muted-foreground">{stat.sub}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-6">
            <span className="text-sm text-muted-foreground mr-2">인증 및 수상:</span>
            {certs.map((cert) => (
              <span
                key={cert}
                className="text-xs md:text-sm font-medium px-4 py-2 border border-border rounded-sm text-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
