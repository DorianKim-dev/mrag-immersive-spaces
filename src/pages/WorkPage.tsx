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
import moduleT from '@/assets/projects/module-t.jpg';
import immersiveCherry from '@/assets/projects/immersive-cherry.jpg';
import immersiveBeauty from '@/assets/projects/immersive-beauty.jpg';
import scenarioFlamingo from '@/assets/projects/scenario-flamingo.jpg';
import heroMain from '@/assets/projects/hero-main.jpg';
import { SOLUTION_IMAGES } from '@/constants/images';
import { FEATURED_VIDEO, SOCIAL_LINKS } from '@/constants/links';
import { useState } from 'react';

type ProjectCategory = '전체' | '교육·공공' | 'F&B·상업' | '미디어아트·전시' | '해외·글로벌';

interface Project {
  title: string;
  client: string;
  role: string;
  category: ProjectCategory[];
  image: string;
  featured?: boolean;
  link?: string;
}

const projects: Project[] = [
  {
    title: '충남대학교 융합교육혁신센터',
    client: '충남대학교',
    role: '미디어 인프라 전체 구축 · HISCO',
    category: ['교육·공공'],
    image: contentFnb,
    featured: true,
    link: 'https://mrag.co.kr/works/%ec%b6%a9%eb%82%a8%eb%8c%80%ed%95%99%ea%b5%90-%ec%9c%b5%ed%95%a9%ea%b5%90%ec%9c%a1%ed%98%81%ec%8b%a0%ec%84%bc%ed%84%b0/',
  },
  {
    title: '연세대학교 국제캠퍼스 Y-FLEX',
    client: '연세대학교',
    role: '스마트 교육 공간 구축',
    category: ['교육·공공'],
    image: contentEducation,
    link: 'https://mrag.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ea%b5%ad%ec%a0%9c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-flex/',
  },
  {
    title: '연세대학교 신촌캠퍼스 Y-FLOW',
    client: '연세대학교',
    role: '몰입형 미디어 학습 공간',
    category: ['교육·공공'],
    image: moduleM,
    link: 'https://mrag.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ec%8b%a0%ec%b4%8c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-flow/',
  },
  {
    title: '필리핀 San Fernando 미디어카페',
    client: '해외 F&B',
    role: 'HISCO 전체 구축 · 해외 1호점',
    category: ['F&B·상업', '해외·글로벌'],
    image: globalOps,
    featured: true,
    link: undefined,
  },
  {
    title: '서울특별시교육청 남산도서관',
    client: '서울시교육청',
    role: '몰입형 전시 공간 구축',
    category: ['교육·공공', '미디어아트·전시'],
    image: contentExhibition,
    link: 'https://mrag.co.kr/works/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c%ea%b5%90%ec%9c%a1%ec%b2%ad-%eb%82%a8%ec%82%b0%eb%8f%84%ec%84%9c%ea%b4%80/',
  },
  {
    title: '인하대학교 I-META SPACE',
    client: '인하대학교',
    role: '메타버스 기반 스마트 공간',
    category: ['교육·공공'],
    image: moduleT,
    link: 'https://mrag.co.kr/works/%ec%9d%b8%ed%95%98%eb%8c%80%ed%95%99%ea%b5%90-i-meta-space/',
  },
  {
    title: '충남교육청 진로융합교육원',
    client: '충남교육청',
    role: '미디어 교육 환경 구축',
    category: ['교육·공공'],
    image: contentStore,
    link: 'https://mrag.co.kr/works/%ec%b6%a9%eb%82%a8%ea%b5%90%ec%9c%a1%ec%b2%ad-%ec%a7%84%eb%a1%9c%ec%9c%b5%ed%95%a9%ea%b5%90%ec%9c%a1%ec%9b%90/',
  },
  {
    title: '농협은행 본점 금융교육센터 메타버스 체험관',
    client: 'NH농협은행',
    role: '메타버스 체험관 구축',
    category: ['교육·공공', '미디어아트·전시'],
    image: immersiveCherry,
    link: 'https://mrag.co.kr/works/%eb%86%8d%ed%98%91%ec%9d%80%ed%96%89-%eb%b3%b8%ec%a0%90-%ea%b8%88%ec%9c%b5%ea%b5%90%ec%9c%a1%ec%84%bc%ed%84%b0-%eb%a9%94%ed%83%80%eb%b2%84%ec%8a%a4-%ec%b2%b4%ed%97%98%ea%b4%80/',
  },
  {
    title: '아난티 가평 센터',
    client: '아난티',
    role: '복합 웰니스 미디어 구축',
    category: ['F&B·상업'],
    image: contentSpa,
    link: 'https://mrag.co.kr/works/%ec%95%84%eb%82%9c%ed%8b%b0-%ea%b0%80%ed%8f%89-%ec%84%bc%ed%84%b0/',
  },
  {
    title: '서초 스마트유스센터',
    client: '서초구',
    role: '스마트 청소년 공간 구축',
    category: ['교육·공공'],
    image: scenarioFlamingo,
    link: 'https://mrag.co.kr/works/%ec%84%9c%ec%b4%88-%ec%8a%a4%eb%a7%88%ed%8a%b8%ec%9c%a0%ec%8a%a4%ec%84%bc%ed%84%b0/',
  },
  {
    title: '용인 처인성 역사교육관',
    client: '용인시',
    role: '몰입형 역사 전시 공간',
    category: ['미디어아트·전시', '교육·공공'],
    image: immersiveBeauty,
    link: 'https://mrag.co.kr/works/%ec%9a%a9%ec%9d%b8-%ec%b2%98%ec%9d%b8%ec%84%b1-%ec%97%ad%ec%82%ac%ea%b5%90%ec%9c%a1%ea%b4%80/',
  },
  {
    title: '연세대학교 신촌캠퍼스 Y-SCAPE',
    client: '연세대학교',
    role: '미디어 스케이프 공간 구축',
    category: ['교육·공공'],
    image: heroMain,
    link: 'https://mrag.co.kr/works/%ec%97%b0%ec%84%b8%eb%8c%80%ed%95%99%ea%b5%90-%ec%8b%a0%ec%b4%8c%ec%ba%a0%ed%8d%bc%ec%8a%a4-y-scape/',
  },
  {
    title: '금천 사이언스큐브센터',
    client: '금천구',
    role: '과학 교육 미디어 공간',
    category: ['교육·공공'],
    image: moduleL,
    link: 'https://mrag.co.kr/works/%ea%b8%88%ec%b2%9c-%ec%82%ac%ec%9d%b4%ec%96%b8%ec%8a%a4%ed%81%90%eb%b8%8c%ec%84%bc%ed%84%b0/',
  },
  {
    title: 'Future Museum in Daegu',
    client: '대구시',
    role: '미래 박물관 몰입형 전시',
    category: ['미디어아트·전시'],
    image: contentExhibition,
    link: 'https://mrag.co.kr/works/future-museum-in-daegu/',
  },
];

const categories: ProjectCategory[] = ['전체', '교육·공공', 'F&B·상업', '미디어아트·전시', '해외·글로벌'];

const platformHighlights = [
  { title: '콘텐츠로 바뀌는 공간', desc: 'F&B, 전시, 팝업, K-Culture, 미디어아트까지 시간대와 목적에 따라 다른 장면을 운영합니다.' },
  { title: '운영까지 포함한 구축', desc: 'HISCO 프레임워크로 하드웨어, 인테리어, 소프트웨어, 콘텐츠, 운영을 하나의 구조로 묶습니다.' },
  { title: '참여형 솔루션', desc: 'NFC, 퀴즈, 인생네컷, 디지털 방명록, 클라우드월 등 사용자가 직접 반응하는 콘텐츠를 제공합니다.' },
];

const solutionPreviews = [
  { title: 'NFC Trigger', image: SOLUTION_IMAGES.nfc.src },
  { title: 'Interactive Quiz', image: SOLUTION_IMAGES.quiz.src },
  { title: 'Digital Guestbook', image: SOLUTION_IMAGES.guestbook.src },
  { title: '3D Transition', image: SOLUTION_IMAGES.transition.src },
];

const WorkPage = () => {
  const [filter, setFilter] = useState<ProjectCategory>('전체');

  const filtered = filter === '전체' ? projects : projects.filter((p) => p.category.includes(filter));
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

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
                교육·공공·F&B·전시·엔터테인먼트 분야에서 검증된 MRAG의 실제 프로젝트입니다.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="section-light border-b border-border">
          <div className="container-wide py-4 flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === cat
                    ? 'bg-mrag-navy text-mrag-warm-white'
                    : 'text-muted-foreground hover:text-foreground hover:bg-mrag-warm-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="section-light py-16 md:py-24">
          <div className="container-wide">
            {/* Featured projects — large */}
            {featured.length > 0 && (
              <div className="mb-8">
                {featured.map((project) => (
                  <Reveal key={project.title}>
                    <ProjectCard project={project} size="featured" />
                  </Reveal>
                ))}
              </div>
            )}

            {/* Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((project) => (
                <StaggerItem key={project.title}>
                  <ProjectCard project={project} size="normal" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="section-cream py-20 md:py-28 overflow-hidden">
          <div className="container-wide">
            <Reveal>
              <span className="section-label text-mrag-teal">TIKITAKA Platform</span>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <Reveal delay={0.1} className="lg:col-span-5">
                <h2 className="heading-section text-mrag-warm-white">
                  구축 사례를
                  <br />
                  운영 상품으로 확장합니다.
                </h2>
                <p className="mt-5 body-large">
                  참고자료의 콘텐츠 솔루션을 Work 페이지에도 연결해, 프로젝트 목록이 단순 포트폴리오가 아니라 실제 판매 가능한 운영 패키지로 보이도록 구성했습니다.
                </p>
              </Reveal>
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-3">
                {platformHighlights.map((item, i) => (
                  <Reveal key={item.title} delay={0.15 + i * 0.06}>
                    <div className="h-full border border-mrag-warm-white/[0.06] bg-mrag-warm-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mrag-teal/30">
                      <span className="font-accent text-xs text-mrag-teal">0{i + 1}</span>
                      <h3 className="mt-4 text-lg font-bold text-mrag-warm-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-mrag-warm-white/35">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {solutionPreviews.map((item, i) => (
                <Reveal key={item.title} delay={0.2 + i * 0.05}>
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-all duration-[1.2s] group-hover:scale-110 group-hover:brightness-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/85 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 font-accent text-xs font-bold uppercase tracking-wider text-mrag-warm-white/75">
                      {item.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube media section */}
        <section className="section-dark py-20 md:py-28">
          <div className="container-wide">
            <Reveal>
              <span className="section-label text-mrag-teal">Media</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 heading-sub text-mrag-warm-white">실제 프로젝트 영상</h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal delay={0.15}>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={FEATURED_VIDEO.embedUrl}
                    title={FEATURED_VIDEO.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col justify-center">
                  <p className="body-large max-w-md">
                    공식 채널의 대표 영상으로 MRAG의 AI 기반 공간 운영과 미디어월 경험을 보여줍니다. 몰입형 공간, 미디어아트, 운영 시나리오의 실제 모습을 영상으로 만나볼 수 있습니다.
                  </p>
                  <div className="mt-8 flex gap-4">
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-mrag-teal text-accent-foreground font-semibold text-sm hover:bg-mrag-teal-light transition-colors"
                    >
                      YouTube 채널 보기
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-mrag-warm-white/15 text-mrag-warm-white/70 text-sm hover:border-mrag-warm-white/30 transition-colors font-accent"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

const ProjectCard = ({ project, size }: { project: Project; size: 'featured' | 'normal' }) => {
  const Wrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank' as const, rel: 'noopener noreferrer' as const }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative overflow-hidden block ${
        size === 'featured' ? 'aspect-[21/9] mb-4' : 'aspect-[16/10]'
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/80 via-mrag-navy/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <span className="font-accent text-xs text-mrag-teal tracking-wider">{project.client}</span>
        <h3 className="mt-2 text-xl md:text-2xl font-bold text-mrag-warm-white leading-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-mrag-warm-white/50">{project.role}</p>
        {project.link && (
          <span className="mt-3 inline-block text-xs font-accent text-mrag-teal opacity-0 group-hover:opacity-100 transition-opacity">
            자세히 보기 →
          </span>
        )}
      </div>
    </Wrapper>
  );
};

export default WorkPage;
