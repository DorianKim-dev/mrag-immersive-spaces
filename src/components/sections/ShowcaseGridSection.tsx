import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { PROJECT_IMAGES, MODULE_IMAGES, SCENARIO_IMAGES } from '@/constants/images';

/**
 * 쇼케이스 그리드 — vido.gallery 스타일
 * 다양한 크기의 카드가 밀집되어 콘텐츠가 풍부해 보이는 갤러리형 섹션.
 * 
 * 아이템 추가/삭제: showcaseItems 배열만 수정하세요.
 */

interface ShowcaseItem {
  image: string;
  title: string;
  category: string;
  tag: string;
  span: 'sm' | 'md' | 'lg' | 'wide' | 'tall';
}

const showcaseItems: ShowcaseItem[] = [
  { image: PROJECT_IMAGES.fnb.src, title: '충남대학교 융합교육혁신센터', category: '교육', tag: 'HISCO 전체 구축', span: 'lg' },
  { image: PROJECT_IMAGES.exhibition.src, title: '남산도서관', category: '전시', tag: '공공·문화 공간', span: 'md' },
  { image: PROJECT_IMAGES.global.src, title: 'San Fernando 미디어카페', category: '해외', tag: '해외 F&B', span: 'md' },
  { image: MODULE_IMAGES.t.src, title: 'TYPE T — 소규모 모듈', category: 'F&B', tag: '카페 · 팝업', span: 'sm' },
  { image: MODULE_IMAGES.m.src, title: 'TYPE M — 중형 복합', category: 'F&B', tag: 'F&B · 미디어아트', span: 'wide' },
  { image: SCENARIO_IMAGES.yoga.src, title: '몰입형 요가 스튜디오', category: '전시', tag: '웰니스 공간', span: 'sm' },
  { image: PROJECT_IMAGES.education.src, title: '스마트 교육 공간', category: '교육', tag: '교육 인프라', span: 'md' },
  { image: MODULE_IMAGES.l.src, title: 'TYPE L — 대형 복합 센터', category: 'F&B', tag: '전시 · GX', span: 'tall' },
  { image: PROJECT_IMAGES.performance.src, title: '퍼포먼스 공간', category: '전시', tag: '미디어 퍼포먼스', span: 'md' },
  { image: PROJECT_IMAGES.store.src, title: '리테일 체험 공간', category: 'F&B', tag: '스토어 컨셉', span: 'lg' },
  { image: PROJECT_IMAGES.kculture.src, title: 'K-Culture 전시관', category: '전시', tag: '한류 체험', span: 'sm' },
  { image: PROJECT_IMAGES.spa.src, title: '미디어 스파', category: 'F&B', tag: '힐링 공간', span: 'md' },
];

const categories = ['전체', 'F&B', '교육', '전시', '해외'];

const spanClasses: Record<ShowcaseItem['span'], string> = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-1 row-span-1 md:col-span-1',
  lg: 'col-span-1 md:col-span-2 row-span-1',
  wide: 'col-span-1 md:col-span-2 row-span-1',
  tall: 'col-span-1 row-span-1 md:row-span-2',
};

const aspectClasses: Record<ShowcaseItem['span'], string> = {
  sm: 'aspect-square',
  md: 'aspect-[4/3]',
  lg: 'aspect-[2/1]',
  wide: 'aspect-[21/9]',
  tall: 'aspect-[3/4] md:aspect-auto md:h-full',
};

export const ShowcaseGridSection = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const filteredItems = activeCategory === '전체'
    ? showcaseItems
    : showcaseItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section-dark py-28 md:py-40" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <span className="section-label text-mrag-teal">Showcase</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 heading-section text-mrag-warm-white">
                구축 포트폴리오
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 text-lg text-mrag-warm-white/30 max-w-md">
                다양한 업종과 규모의 몰입형 공간을 만들어 왔습니다.
              </p>
            </Reveal>
          </div>

          {/* Category filter tabs */}
          <Reveal delay={0.2}>
            <div className="flex gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-accent font-bold tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'text-mrag-teal bg-mrag-teal/[0.08] border border-mrag-teal/20'
                      : 'text-mrag-warm-white/30 border border-transparent hover:text-mrag-warm-white/50 hover:border-mrag-warm-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3"
          layout
        >
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`${spanClasses[item.span]} group relative overflow-hidden cursor-pointer showcase-card`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 + i * 0.06,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              layout
            >
              {/* Image */}
              <div className={`relative ${aspectClasses[item.span]} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.08] group-hover:brightness-110"
                  loading="lazy"
                />

                {/* Dark overlay — lightens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/90 via-mrag-navy/30 to-transparent transition-all duration-700 group-hover:from-mrag-navy/95 group-hover:via-mrag-navy/50" />

                {/* Teal glow border on hover */}
                <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-mrag-teal/20 group-hover:shadow-[inset_0_0_30px_rgba(72,187,164,0.05)]" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  {/* Tag — always visible */}
                  <span className="inline-block px-2 py-0.5 text-[10px] font-bold font-accent text-mrag-teal/60 bg-mrag-teal/[0.06] uppercase tracking-wider mb-2">
                    {item.tag}
                  </span>

                  {/* Title — slides up on hover */}
                  <h3 className="text-base md:text-lg font-bold text-mrag-warm-white tracking-tight leading-snug transition-all duration-500 group-hover:translate-y-[-4px]">
                    {item.title}
                  </h3>

                  {/* Explore link — appears on hover */}
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-accent font-bold text-mrag-teal uppercase tracking-[0.15em] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    Explore
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                {/* Category badge — top right */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[9px] font-accent font-bold text-mrag-warm-white/40 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-accent font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors group"
            >
              전체 포트폴리오 보기
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
