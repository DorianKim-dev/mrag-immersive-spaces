import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const articles = [
  { date: '2025.03', tag: '사업 확장', title: 'MRAG, 필리핀 San Fernando 미디어카페 오픈', summary: '동남아 시장 진출 첫 프로젝트로 해외 사업 본격화.' },
  { date: '2025.01', tag: '수상', title: 'iF Design Award / TEA Award 수상', summary: '글로벌 디자인 어워드에서 몰입형 공간 기술력 인정.' },
  { date: '2024.11', tag: '인증', title: 'GS 1등급 인증 획득, 특허 20건 등록', summary: '품질 인증 및 핵심 기술 특허 확보.' },
  { date: '2024.09', tag: '론칭', title: 'TIKITAKA 상업공간 전환 플랫폼 공식 론칭', summary: 'B2G 역량을 B2C/B2B 상업 시장으로 확장하는 플랫폼 발표.' },
  { date: '2024.06', tag: '전시', title: 'MRAG, 2024 서울 스마트시티 엑스포 참여', summary: '공간 전환 기술 데모 및 TIKITAKA 플랫폼 소개.' },
  { date: '2024.03', tag: '프로젝트', title: '공주 문화 복합 센터 TYPE XL 구축 완료', summary: '국내 최대 규모 몰입 복합 상업 시설 구축.' },
];

const PressPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-dark pt-32 pb-20">
          <div className="container-wide">
            <Reveal><span className="section-label text-mrag-teal">Press & Updates</span></Reveal>
            <Reveal delay={0.1}><h1 className="mt-4 editorial-heading text-mrag-warm-white">최신 소식</h1></Reveal>
          </div>
        </section>

        <section className="section-light py-16 md:py-24">
          <div className="container-narrow">
            <StaggerContainer className="divide-y divide-border">
              {articles.map((article) => (
                <StaggerItem key={article.title}>
                  <article className="py-8 md:py-10 group cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-accent text-xs text-muted-foreground">{article.date}</span>
                      <span className="px-2 py-0.5 text-xs font-semibold bg-mrag-teal/10 text-mrag-teal rounded-sm">{article.tag}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-mrag-teal transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">{article.summary}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default PressPage;
