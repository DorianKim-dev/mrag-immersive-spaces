import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import globalOps from '@/assets/projects/global-ops.jpg';
import immersiveBeauty from '@/assets/projects/immersive-beauty.jpg';
import mediaSpa from '@/assets/projects/media-spa-concept.jpg';

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
          <div className="group relative overflow-hidden aspect-[2.4/1] mb-5">
            <img src={globalOps} alt="필리핀 미디어카페" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/85 via-mrag-navy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-xl">
              <span className="font-accent text-[11px] font-bold text-mrag-teal tracking-[0.15em] uppercase">해외 F&B · HISCO 전체 구축</span>
              <h3 className="mt-3 text-2xl md:text-4xl font-bold text-mrag-warm-white leading-tight tracking-tight">
                필리핀 San Fernando
                <br />미디어카페
              </h3>
              <p className="mt-3 text-sm text-mrag-warm-white/45 leading-relaxed max-w-md">
                동남아 최초 MRAG 미디어카페. 지역 No.1으로 자리잡으며 해외 F&B+엔터테인먼트 복합 운영 모델 검증.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Two supporting — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <Reveal delay={0.1}>
            <div className="md:col-span-3 group relative overflow-hidden aspect-[16/9]">
              <img src={mediaSpa} alt="Media Spa Concept" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-accent text-[11px] text-mrag-teal tracking-wider">복합 웰니스</span>
                <h3 className="mt-1 text-xl font-bold text-mrag-warm-white">Media Spa Concept</h3>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:col-span-2 group relative overflow-hidden aspect-[16/9] md:aspect-auto md:h-full">
              <img src={immersiveBeauty} alt="몰입형 미디어 전시" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-accent text-[11px] text-mrag-teal tracking-wider">미디어아트</span>
                <h3 className="mt-1 text-xl font-bold text-mrag-warm-white">몰입형 미디어 전시</h3>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
