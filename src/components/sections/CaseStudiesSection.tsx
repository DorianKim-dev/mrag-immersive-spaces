import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import globalOps from '@/assets/projects/global-ops.jpg';
import contentFnb from '@/assets/projects/content-fnb.jpg';
import contentExhibition from '@/assets/projects/content-exhibition.jpg';

export const CaseStudiesSection = () => {
  return (
    <section className="section-dark py-28 md:py-40">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-14">
          <div>
            <Reveal><span className="section-label text-mrag-teal">Featured Work</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 heading-section text-mrag-warm-white">실제 구축 사례</h2></Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/work" className="hidden md:inline-flex text-sm font-accent font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors">
              전체 보기 →
            </Link>
          </Reveal>
        </div>

        {/* Featured — oversized single */}
        <Reveal>
          <a
            href="https://mrag.co.kr/works/%ec%b6%a9%eb%82%a8%eb%8c%80%ed%95%99%ea%b5%90-%ec%9c%b5%ed%95%a9%ea%b5%90%ec%9c%a1%ed%98%81%ec%8b%a0%ec%84%bc%ed%84%b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden aspect-[2.4/1] mb-5 block"
          >
            <img src={contentFnb} alt="충남대학교 융합교육혁신센터" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/85 via-mrag-navy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-xl">
              <span className="font-accent text-[11px] font-bold text-mrag-teal tracking-[0.15em] uppercase">교육 · HISCO 전체 구축</span>
              <h3 className="mt-3 text-2xl md:text-4xl font-bold text-mrag-warm-white leading-tight tracking-tight">
                충남대학교
                <br />융합교육혁신센터
              </h3>
              <p className="mt-3 text-sm text-mrag-warm-white/45 leading-relaxed max-w-md">
                대학 교육 환경의 미래를 설계한 MRAG의 대표 프로젝트. 미디어 인프라부터 운영까지 HISCO 전체 구조 적용.
              </p>
              <span className="mt-4 inline-block text-xs font-accent text-mrag-teal opacity-0 group-hover:opacity-100 transition-opacity">
                자세히 보기 →
              </span>
            </div>
          </a>
        </Reveal>

        {/* Two supporting — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <Reveal delay={0.1}>
            <a
              href="https://mrag.co.kr/works/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c%ea%b5%90%ec%9c%a1%ec%b2%ad-%eb%82%a8%ec%82%b0%eb%8f%84%ec%84%9c%ea%b4%80/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-3 group relative overflow-hidden aspect-[16/9] block"
            >
              <img src={contentExhibition} alt="서울특별시교육청 남산도서관" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-accent text-[11px] text-mrag-teal tracking-wider">공공·문화</span>
                <h3 className="mt-1 text-xl font-bold text-mrag-warm-white">서울특별시교육청 남산도서관</h3>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:col-span-2 group relative overflow-hidden aspect-[16/9] md:aspect-auto md:h-full">
              <img src={globalOps} alt="필리핀 San Fernando 미디어카페" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-accent text-[11px] text-mrag-teal tracking-wider">해외 F&B</span>
                <h3 className="mt-1 text-xl font-bold text-mrag-warm-white">필리핀 San Fernando 미디어카페</h3>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile: show all link */}
        <Reveal delay={0.3}>
          <div className="mt-10 md:hidden text-center">
            <Link to="/work" className="text-sm font-accent font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors">
              전체 사례 보기 →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
