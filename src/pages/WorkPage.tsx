import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import globalOps from '@/assets/projects/global-ops.jpg';
import contentFnb from '@/assets/projects/content-fnb.jpg';
import contentStore from '@/assets/projects/content-store.jpg';
import contentExhibition from '@/assets/projects/content-exhibition.jpg';
import contentSpa from '@/assets/projects/content-spa.jpg';
import contentEducation from '@/assets/projects/content-education.jpg';
import moduleL from '@/assets/projects/module-l.jpg';
import moduleM from '@/assets/projects/module-m.jpg';

const projects = [
  { title: '필리핀 San Fernando 미디어카페', client: '해외 F&B', role: 'HISCO 전체 구축', image: globalOps, featured: true },
  { title: '충남대학교 융합교육혁신센터', client: '공공·교육', role: '미디어 인프라 구축', image: contentFnb, featured: true },
  { title: 'GLAM Grand Media Art Cafe', client: 'F&B·미디어아트', role: 'HISCO 전체 구축', image: contentStore },
  { title: '서울특별시교육청 남산도서관', client: '공공·문화', role: '몰입형 전시 공간', image: contentExhibition },
  { title: 'Media Spa Concept', client: '복합 웰니스', role: '공간 설계·콘텐츠', image: contentSpa },
  { title: '충남교육청 진로융합교육원', client: '교육', role: '미디어 교육 환경', image: contentEducation },
  { title: '필리핀 미디어센터', client: '해외·엔터테인먼트', role: '대형 복합 구축', image: moduleL },
  { title: '공주 문화 복합 센터', client: '공공·문화', role: 'XL 단지 구축', image: moduleM },
];

const WorkPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-dark pt-32 pb-20">
          <div className="container-wide">
            <Reveal>
              <span className="section-label text-mrag-teal">Work</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 editorial-heading text-mrag-warm-white">
                구축 사례
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg text-mrag-warm-white/60 max-w-xl">
                공공·교육·F&B·엔터테인먼트 분야에서 검증된 MRAG의 실제 프로젝트입니다.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-light py-16 md:py-24">
          <div className="container-wide">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <div className={`group relative overflow-hidden rounded-sm ${project.featured ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[16/10]'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/80 via-mrag-navy/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                      <span className="font-accent text-xs text-mrag-teal tracking-wider">{project.client}</span>
                      <h3 className="mt-2 text-xl md:text-2xl font-bold text-mrag-warm-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-mrag-warm-white/50">{project.role}</p>
                    </div>
                  </div>
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

export default WorkPage;
