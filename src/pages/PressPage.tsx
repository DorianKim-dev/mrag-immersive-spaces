import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

const articles = [
  { date: '2025.03', tag: '사업 확장', title: 'MRAG, 필리핀 San Fernando 미디어카페 오픈', summary: '동남아 시장 진출 첫 프로젝트로 해외 사업 본격화. San Fernando 지역 No.1 미디어카페로 자리매김.', link: undefined },
  { date: '2025.01', tag: '수상', title: 'iF Design Award / TEA Award 수상', summary: '글로벌 디자인 어워드에서 몰입형 공간 기술력 인정. 국제 무대에서의 MRAG 경쟁력 입증.', link: undefined },
  { date: '2024.11', tag: '인증', title: 'GS 1등급 인증 획득, 특허 20건 등록', summary: '품질 인증 및 핵심 기술 특허 확보. 공공·민간 프로젝트 신뢰 기반 강화.', link: undefined },
  { date: '2024.09', tag: '론칭', title: 'TIKITAKA 상업공간 전환 플랫폼 공식 론칭', summary: 'B2G 역량을 B2C/B2B 상업 시장으로 확장하는 플랫폼 공식 발표.', link: undefined },
  { date: '2024.06', tag: '전시', title: '2024 서울 스마트시티 엑스포 참여', summary: '공간 전환 기술 데모 및 TIKITAKA 플랫폼 소개. 다수의 B2B 파트너십 논의 진행.', link: undefined },
  { date: '2024.03', tag: '프로젝트', title: '연세대학교 Y-FLEX / Y-FLOW 구축 완료', summary: '연세대학교 국제캠퍼스 및 신촌캠퍼스에 스마트 교육 공간 구축 완료.', link: 'https://mrag.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ea%b5%ad%ec%a0%9c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-flex/' },
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
            <Reveal delay={0.2}>
              <div className="mt-8 flex gap-5">
                <a
                  href="https://www.youtube.com/@maboroshi_mrag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-accent text-mrag-warm-white/40 hover:text-mrag-teal transition-colors"
                >
                  YouTube →
                </a>
                <a
                  href="https://www.instagram.com/mrag_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-accent text-mrag-warm-white/40 hover:text-mrag-teal transition-colors"
                >
                  Instagram →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-light py-16 md:py-24">
          <div className="container-narrow">
            <StaggerContainer className="divide-y divide-border">
              {articles.map((article) => {
                const inner = (
                  <article className="py-8 md:py-10 group cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-accent text-xs text-muted-foreground">{article.date}</span>
                      <span className="px-2 py-0.5 text-xs font-semibold bg-mrag-teal/10 text-mrag-teal rounded-sm">{article.tag}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-mrag-teal transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">{article.summary}</p>
                    {article.link && (
                      <span className="mt-2 inline-block text-xs font-accent text-mrag-teal">자세히 보기 →</span>
                    )}
                  </article>
                );

                return (
                  <StaggerItem key={article.title}>
                    {article.link ? (
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default PressPage;
