import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';

const articles = [
  {
    date: '2025.03',
    tag: '사업 확장',
    title: 'MRAG, 필리핀 San Fernando 미디어카페 오픈',
    summary: '동남아 시장 진출 첫 프로젝트. 지역 No.1 미디어 카페로 자리잡으며 해외 사업 본격화.',
  },
  {
    date: '2025.01',
    tag: '수상',
    title: 'iF Design Award / TEA Award 수상',
    summary: '글로벌 디자인 어워드에서 MRAG 몰입형 공간 기술력 인정.',
  },
  {
    date: '2024.11',
    tag: '인증',
    title: 'GS 1등급 인증 획득, 특허 20건 등록',
    summary: '공간 운영 솔루션 품질 인증 및 핵심 기술 특허 확보.',
  },
  {
    date: '2024.09',
    tag: '신규 론칭',
    title: 'TIKITAKA 상업공간 전환 플랫폼 공식 론칭',
    summary: '기존 B2G 역량을 B2C/B2B 상업 시장으로 확장하는 플랫폼 발표.',
  },
];

export const PressSection = () => {
  return (
    <section className="section-cream py-24 md:py-36">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Reveal>
              <span className="section-label text-mrag-teal">Press & Updates</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                최신 소식
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/press"
              className="hidden md:inline-flex text-sm font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors"
            >
              전체 보기 →
            </Link>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <article className="bg-background p-6 md:p-8 group cursor-pointer hover:bg-mrag-teal/[0.02] transition-colors h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-accent text-xs text-muted-foreground">{article.date}</span>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-mrag-teal/10 text-mrag-teal rounded-sm">
                    {article.tag}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug group-hover:text-mrag-teal transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {article.summary}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
