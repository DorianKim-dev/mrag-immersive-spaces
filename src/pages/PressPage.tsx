import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/animations/Reveal';
import { Marquee } from '@/components/animations/Marquee';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { PRESS_PREVIEW_IMAGES } from '@/constants/images';

/**
 * ============================================
 * Press 페이지 뉴스 데이터
 * ============================================
 * 새 기사를 추가하려면 이 배열의 맨 위에 항목을 추가하세요.
 * 최신 기사가 위에 오도록 날짜 역순으로 정렬해주세요.
 *
 * previewImage: PRESS_PREVIEW_IMAGES 인덱스로 지정
 * link: 외부 링크가 있으면 URL, 없으면 undefined
 */
const articles = [
  { date: '2025.03', tag: '사업 확장', title: 'MRAG, 필리핀 San Fernando 미디어카페 오픈', summary: '동남아 시장 진출 첫 프로젝트로 해외 사업 본격화. San Fernando 지역 No.1 미디어카페로 자리매김.', link: undefined, previewIdx: 0 },
  { date: '2025.01', tag: '수상', title: 'iF Design Award / TEA Award 수상', summary: '글로벌 디자인 어워드에서 몰입형 공간 기술력 인정. 국제 무대에서의 MRAG 경쟁력 입증.', link: undefined, previewIdx: 1 },
  { date: '2024.11', tag: '인증', title: 'GS 1등급 인증 획득, 특허 20건 등록', summary: '품질 인증 및 핵심 기술 특허 확보. 공공·민간 프로젝트 신뢰 기반 강화.', link: undefined, previewIdx: 2 },
  { date: '2024.09', tag: '론칭', title: 'TIKITAKA 상업공간 전환 플랫폼 공식 론칭', summary: 'B2G 역량을 B2C/B2B 상업 시장으로 확장하는 플랫폼 공식 발표.', link: undefined, previewIdx: 3 },
  { date: '2024.06', tag: '전시', title: '2024 서울 스마트시티 엑스포 참여', summary: '공간 전환 기술 데모 및 TIKITAKA 플랫폼 소개. 다수의 B2B 파트너십 논의 진행.', link: undefined, previewIdx: 4 },
  { date: '2024.03', tag: '프로젝트', title: '연세대학교 Y-FLEX / Y-FLOW 구축 완료', summary: '연세대학교 국제캠퍼스 및 신촌캠퍼스에 스마트 교육 공간 구축 완료.', link: 'https://mrag.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ea%b5%ad%ec%a0%9c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-flex/', previewIdx: 5 },
];

/** 한 번에 표시할 기사 수 */
const ARTICLES_PER_PAGE = 4;

const PressPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);
  const listRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (listRef.current) {
      const rect = listRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ARTICLES_PER_PAGE, articles.length));
  };

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero section with marquee */}
        <section className="section-dark pt-32 pb-12 overflow-hidden">
          <div className="container-wide mb-8">
            <Reveal><span className="section-label text-mrag-teal">Press & Updates</span></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 editorial-heading text-mrag-warm-white">최신 소식</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-mrag-warm-white/35 max-w-md">
                MRAG의 프로젝트, 수상, 행사 소식을 전합니다.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 flex gap-5">
                <a href="https://youtube.com/@mragofficial6481?si=iN0e0W9CdYvFcRXv" target="_blank" rel="noopener noreferrer" className="text-sm font-accent text-mrag-warm-white/30 hover:text-mrag-teal transition-colors">YouTube →</a>
                <a href="https://www.instagram.com/mrag.official?igsh=YXM2MmZvYm5nNDVk" target="_blank" rel="noopener noreferrer" className="text-sm font-accent text-mrag-warm-white/30 hover:text-mrag-teal transition-colors">Instagram →</a>
              </div>
            </Reveal>
          </div>

          {/* Marquee headline scroll */}
          <Marquee speed={40} className="py-6 border-y border-mrag-warm-white/[0.04]">
            {articles.map((a, i) => (
              <span key={`marquee-${i}`} className="inline-flex items-center gap-6 mx-10">
                <span className="font-accent text-4xl md:text-6xl font-black text-mrag-warm-white/15 tracking-tighter whitespace-nowrap">
                  {a.title}
                </span>
                <span className="w-2 h-2 rounded-full bg-mrag-teal/20 shrink-0" />
              </span>
            ))}
          </Marquee>
        </section>

        {/* Article count indicator */}
        <section className="section-dark">
          <div className="container-wide py-6 flex items-center justify-between border-b border-mrag-warm-white/[0.04]">
            <span className="font-accent text-xs text-mrag-warm-white/20 tracking-wider">
              {visibleCount < articles.length
                ? `${visibleCount} / ${articles.length} 건`
                : `전체 ${articles.length} 건`}
            </span>
            <span className="font-accent text-[10px] text-mrag-warm-white/15 uppercase tracking-widest">
              Latest First
            </span>
          </div>
        </section>

        {/* Main article list — obys.agency style */}
        <section className="section-dark py-16 md:py-24">
          <div
            className="container-wide relative"
            ref={listRef}
            onMouseMove={handleMouseMove}
          >
            {/* Floating preview image (obys style) */}
            <AnimatePresence>
              {hoveredIndex !== null && (
                <motion.div
                  className="fixed pointer-events-none z-30 w-[280px] h-[180px] overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    left: mousePos.x + (listRef.current?.getBoundingClientRect().left || 0) + 20,
                    top: mousePos.y + (listRef.current?.getBoundingClientRect().top || 0) - 90,
                  }}
                >
                  <img
                    src={PRESS_PREVIEW_IMAGES[visibleArticles[hoveredIndex].previewIdx]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/40 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Article list */}
            <div className="divide-y divide-mrag-warm-white/[0.04]">
              {visibleArticles.map((article, i) => {
                const inner = (
                  <motion.article
                    className="py-8 md:py-12 group cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-start md:items-center justify-between gap-4 md:gap-8">
                      {/* Left: date + tag */}
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="font-accent text-xs text-mrag-warm-white/20 w-16">{article.date}</span>
                        <span className="hidden md:inline px-2 py-0.5 text-[10px] font-bold font-accent text-mrag-teal/50 bg-mrag-teal/[0.04] uppercase tracking-wider">
                          {article.tag}
                        </span>
                      </div>

                      {/* Center: large title (obys style) */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-mrag-warm-white/70 group-hover:text-mrag-teal transition-all duration-500 tracking-tight leading-tight truncate md:whitespace-normal">
                          {article.title}
                        </h2>
                        <p className="mt-2 text-sm text-mrag-warm-white/25 leading-relaxed max-w-2xl hidden md:block">
                          {article.summary}
                        </p>
                      </div>

                      {/* Right: arrow */}
                      <span className="font-accent text-sm text-mrag-warm-white/15 group-hover:text-mrag-teal group-hover:translate-x-1 transition-all duration-500 shrink-0">
                        →
                      </span>
                    </div>

                    {/* Mobile: tag + summary */}
                    <div className="md:hidden mt-3">
                      <span className="px-2 py-0.5 text-[10px] font-bold font-accent text-mrag-teal/50 bg-mrag-teal/[0.04] uppercase tracking-wider">
                        {article.tag}
                      </span>
                      <p className="mt-2 text-xs text-mrag-warm-white/25 leading-relaxed">{article.summary}</p>
                    </div>
                  </motion.article>
                );

                return article.link ? (
                  <a key={article.title} href={article.link} target="_blank" rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={article.title}>{inner}</div>
                );
              })}
            </div>

            {/* Load More button */}
            {hasMore && (
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={handleLoadMore}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 border border-mrag-warm-white/10 text-sm font-accent font-medium text-mrag-warm-white/50 hover:border-mrag-teal/30 hover:text-mrag-teal transition-all duration-500"
                >
                  더 보기
                  <span className="font-accent text-xs text-mrag-warm-white/20 group-hover:text-mrag-teal/50 transition-colors">
                    +{Math.min(ARTICLES_PER_PAGE, articles.length - visibleCount)}
                  </span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>
            )}

            {/* All loaded indicator */}
            {!hasMore && articles.length > ARTICLES_PER_PAGE && (
              <div className="mt-12 text-center">
                <span className="text-xs font-accent text-mrag-warm-white/15 tracking-wider">
                  모든 소식을 확인했습니다
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Bottom marquee — reverse direction */}
        <section className="section-dark pb-20">
          <Marquee speed={50} direction="right" className="py-4 border-t border-mrag-warm-white/[0.04]">
            {['MRAG', '몰입형 공간', 'TIKITAKA', 'HISCO', 'Space Platform', '미디어 아트', 'F&B', '전시', '교육', '몰입'].map((tag, i) => (
              <span key={`bottom-${i}`} className="inline-flex items-center gap-4 mx-8">
                <span className="font-accent text-lg font-bold text-mrag-warm-white/15 tracking-wider uppercase">{tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-mrag-teal/10" />
              </span>
            ))}
          </Marquee>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default PressPage;
