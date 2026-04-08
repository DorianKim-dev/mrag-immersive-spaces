import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';

const articles = [
  { date: '2025.03', tag: '사업 확장', title: 'MRAG, 필리핀 San Fernando 미디어카페 오픈' },
  { date: '2025.01', tag: '수상', title: 'iF Design Award / TEA Award 수상' },
  { date: '2024.11', tag: '인증', title: 'GS 1등급 인증 획득, 특허 20건 등록' },
  { date: '2024.09', tag: '론칭', title: 'TIKITAKA 상업공간 전환 플랫폼 공식 론칭' },
];

export const PressSection = () => {
  return (
    <section className="section-cream py-28 md:py-40">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Reveal><span className="section-label text-mrag-teal">Press & Updates</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 heading-sub">최신 소식</h2></Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link to="/press" className="hidden md:inline-flex text-sm font-accent font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors">
              전체 보기 →
            </Link>
          </Reveal>
        </div>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.06}>
              <article className="py-6 flex items-baseline justify-between gap-6 group cursor-pointer">
                <div className="flex items-baseline gap-4 min-w-0">
                  <span className="font-accent text-xs text-muted-foreground shrink-0 w-16">{article.date}</span>
                  <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-mrag-teal transition-colors truncate">
                    {article.title}
                  </h3>
                </div>
                <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold font-accent text-mrag-teal bg-mrag-teal/8 uppercase tracking-wider">
                  {article.tag}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
