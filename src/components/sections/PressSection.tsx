import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import { Marquee } from '@/components/animations/Marquee';

const articles = [
  { date: '2025.03', tag: '사업 확장', title: 'MRAG, 필리핀 San Fernando 미디어카페 오픈', link: '/press' },
  { date: '2025.01', tag: '수상', title: 'iF Design Award / TEA Award 수상', link: '/press' },
  { date: '2024.11', tag: '인증', title: 'GS 1등급 인증 획득, 특허 20건 등록', link: '/press' },
  { date: '2024.09', tag: '론칭', title: 'TIKITAKA 상업공간 전환 플랫폼 공식 론칭', link: '/press' },
];

export const PressSection = () => {
  return (
    <section className="section-cream py-28 md:py-40">
      <div className="container-wide">
        {/* Headline marquee */}
        <Reveal>
          <Marquee speed={35} className="mb-12">
            {articles.map((a, i) => (
              <span key={`${a.title}-${i}`} className="inline-flex items-center gap-4 mx-8">
                <span className="font-accent text-lg md:text-2xl font-bold text-mrag-warm-white/10 tracking-tight">{a.title}</span>
                <span className="w-2 h-2 rounded-full bg-mrag-teal/20" />
              </span>
            ))}
          </Marquee>
        </Reveal>

        <div className="container-narrow mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Reveal><span className="section-label text-mrag-teal">Press & Updates</span></Reveal>
              <Reveal delay={0.1}><h2 className="mt-5 heading-sub text-mrag-warm-white">최신 소식</h2></Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link to="/press" className="hidden md:inline-flex text-sm font-accent font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors">
                전체 보기 →
              </Link>
            </Reveal>
          </div>

          <div className="divide-y divide-mrag-warm-white/[0.06]">
            {articles.map((article, i) => (
              <Reveal key={article.title} delay={i * 0.06}>
                <Link to={article.link}>
                  <article className="py-6 flex items-baseline justify-between gap-6 group cursor-pointer">
                    <div className="flex items-baseline gap-4 min-w-0">
                      <span className="font-accent text-xs text-mrag-warm-white/25 shrink-0 w-16">{article.date}</span>
                      <h3 className="text-base md:text-lg font-semibold text-mrag-warm-white/70 group-hover:text-mrag-teal transition-colors truncate">
                        {article.title}
                      </h3>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-bold font-accent text-mrag-teal/60 bg-mrag-teal/[0.05] uppercase tracking-wider">
                      {article.tag}
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Social media */}
          <Reveal delay={0.3}>
            <div className="mt-12 pt-8 border-t border-mrag-warm-white/[0.06] flex flex-wrap items-center gap-6">
              <span className="text-xs text-mrag-warm-white/20 font-accent uppercase tracking-widest">Follow</span>
              <a href="https://youtube.com/@mragofficial6481?si=iN0e0W9CdYvFcRXv" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-mrag-warm-white/40 hover:text-mrag-teal transition-colors font-accent">YouTube</a>
              <a href="https://www.instagram.com/mrag.official?igsh=YXM2MmZvYm5nNDVk" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-mrag-warm-white/40 hover:text-mrag-teal transition-colors font-accent">Instagram</a>
              <a href="https://mrag.co.kr" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-mrag-warm-white/40 hover:text-mrag-teal transition-colors font-accent">mrag.co.kr</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
