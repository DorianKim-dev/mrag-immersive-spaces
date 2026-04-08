import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import contentFnb from '@/assets/projects/content-fnb.jpg';
import contentStore from '@/assets/projects/content-store.jpg';
import globalOps from '@/assets/projects/global-ops.jpg';

const featured = {
  title: '필리핀 San Fernando 미디어카페',
  client: '해외 F&B / 미디어 엔터테인먼트',
  role: 'HISCO 전체 구축 · 콘텐츠 운영 · 장기 유지보수',
  summary: '동남아 최초 MRAG 미디어카페. 지역 No.1 미디어 카페로 자리잡으며 F&B+엔터테인먼트 복합 공간 운영 모델을 검증.',
  image: globalOps,
};

const supporting = [
  {
    title: '충남대학교 융합교육혁신센터',
    client: '공공·교육',
    role: '미디어 인프라 구축 · 콘텐츠 공급',
    image: contentFnb,
  },
  {
    title: 'GLAM Grand Media Art Cafe',
    client: 'F&B · 미디어아트',
    role: 'HISCO 전체 구축 · 브랜드 운영',
    image: contentStore,
  },
];

export const CaseStudiesSection = () => {
  return (
    <section className="section-dark py-24 md:py-36">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Reveal>
              <span className="section-label text-mrag-teal">Featured Work</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-mrag-warm-white leading-tight">
                실제 구축 사례
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors"
            >
              전체 사례 보기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </Reveal>
        </div>

        {/* Featured large */}
        <Reveal>
          <div className="group relative overflow-hidden rounded-sm aspect-[21/9] mb-4">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/90 via-mrag-navy/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
              <span className="font-accent text-xs font-semibold text-mrag-teal tracking-wider uppercase">{featured.client}</span>
              <h3 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-mrag-warm-white leading-tight">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm text-mrag-warm-white/60 leading-relaxed">{featured.summary}</p>
              <p className="mt-4 text-xs text-mrag-warm-white/40 font-accent">{featured.role}</p>
            </div>
          </div>
        </Reveal>

        {/* Supporting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supporting.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.1}>
              <div className="group relative overflow-hidden rounded-sm aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-accent text-xs text-mrag-teal">{item.client}</span>
                  <h3 className="mt-2 text-lg md:text-xl font-bold text-mrag-warm-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-mrag-warm-white/50">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 md:hidden text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-mrag-teal"
            >
              전체 사례 보기 →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
