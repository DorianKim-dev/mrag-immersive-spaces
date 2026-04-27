import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/animations/Reveal';
import heroImg from '@/assets/projects/hero-dining.jpg';
import { SOCIAL_LINKS } from '@/constants/links';

const proposalSteps = [
  { title: '공간 진단', desc: '면적, 동선, 기존 장비, 운영 목적을 확인해 적용 가능한 모듈을 빠르게 좁힙니다.' },
  { title: '콘텐츠 매칭', desc: 'F&B, 전시, 교육, 팝업, K-Culture 등 목적에 맞는 솔루션과 장면 구성을 제안합니다.' },
  { title: '운영 설계', desc: 'HISCO 기준으로 구축 이후 업데이트, 이벤트, 유지보수 흐름까지 함께 설계합니다.' },
];

const projectTypes = [
  'F&B / 카페 / 레스토랑',
  '전시 / 미디어아트',
  '교육 / 공공',
  '엔터테인먼트 / 복합 공간',
  '팝업 / 브랜드 캠페인',
  '해외 / 글로벌 운영',
];

const ContactPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-dark pt-32 pb-20">
          <div className="container-wide">
            <Reveal><span className="section-label text-mrag-teal">Contact</span></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 heading-hero text-mrag-warm-white">
                프로젝트를
                <br />시작하세요.
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="section-light py-20 md:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              {/* Left: personal, human contact */}
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="body-large max-w-sm">
                    규모와 업종에 관계없이, 공간이 가진 가능성에 대해 편하게 연락 주세요.
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="mt-12 space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-mrag-navy flex items-center justify-center shrink-0">
                        <span className="font-accent text-sm font-bold text-mrag-teal">JH</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground">김준혁 과장</p>
                        <a href="tel:010-4591-2815" className="block mt-1 font-accent text-base text-mrag-teal hover:text-mrag-teal-light transition-colors">
                          010-4591-2815
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-mrag-navy flex items-center justify-center shrink-0">
                        <span className="font-accent text-sm font-bold text-mrag-teal">JW</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-foreground">매니지먼트 매니저 박정우</p>
                        <a href="tel:010-9240-3126" className="block mt-1 font-accent text-base text-mrag-teal hover:text-mrag-teal-light transition-colors">
                          010-9240-3126
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-12 pt-8 border-t border-border space-y-4">
                    <div>
                      <span className="text-xs text-muted-foreground font-accent uppercase tracking-wider">Email</span>
                      <a href="mailto:business@mrag.co.kr" className="block text-foreground font-accent hover:text-mrag-teal transition-colors">
                        business@mrag.co.kr
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-accent uppercase tracking-wider">Office</span>
                      <p className="text-foreground text-sm leading-relaxed">
                        서울특별시 서초구 방배로 32길 4<br />정다원 빌딩 5F / B1
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-accent uppercase tracking-wider">Tel</span>
                      <a href="tel:02-308-0007" className="block text-foreground font-accent hover:text-mrag-teal transition-colors">
                        02-308-0007
                      </a>
                    </div>
                    <div className="pt-4 flex gap-5">
                      <a
                        href={SOCIAL_LINKS.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-accent text-muted-foreground hover:text-mrag-teal transition-colors"
                      >
                        YouTube
                      </a>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-accent text-muted-foreground hover:text-mrag-teal transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-7">
                <Reveal delay={0.15}>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-accent font-bold text-muted-foreground uppercase tracking-wider mb-2">회사명 / 성함</label>
                        <input type="text" className="w-full px-4 py-3.5 border border-border bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors text-sm" placeholder="회사명 또는 성함" />
                      </div>
                      <div>
                        <label className="block text-xs font-accent font-bold text-muted-foreground uppercase tracking-wider mb-2">연락처</label>
                        <input type="tel" className="w-full px-4 py-3.5 border border-border bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors text-sm" placeholder="010-0000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-accent font-bold text-muted-foreground uppercase tracking-wider mb-2">이메일</label>
                      <input type="email" className="w-full px-4 py-3.5 border border-border bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors text-sm" placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="block text-xs font-accent font-bold text-muted-foreground uppercase tracking-wider mb-2">프로젝트 유형</label>
                      <select className="w-full px-4 py-3.5 border border-border bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors text-sm">
                        {projectTypes.map((type) => (
                          <option key={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-accent font-bold text-muted-foreground uppercase tracking-wider mb-2">문의 내용</label>
                      <textarea className="w-full px-4 py-3.5 border border-border bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors h-28 resize-none text-sm" placeholder="프로젝트 규모, 위치, 예산 등 자유롭게 작성해주세요" />
                    </div>
                    <button type="submit" className="w-full py-4 bg-mrag-teal text-accent-foreground font-semibold text-sm hover:bg-mrag-teal-light transition-colors tracking-tight">
                      제안 상담 요청
                    </button>
                  </form>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mt-8 relative overflow-hidden aspect-[21/9]">
                    <img src={heroImg} alt="MRAG 공간" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-mrag-navy/20" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark py-20 md:py-28">
          <div className="container-wide">
            <Reveal>
              <span className="section-label text-mrag-teal">Proposal Flow</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 heading-section text-mrag-warm-white max-w-2xl">
                문의 후 바로
                <br />
                공간 운영안까지 연결합니다.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-3">
              {proposalSteps.map((step, i) => (
                <Reveal key={step.title} delay={0.15 + i * 0.06}>
                  <div className="h-full border border-mrag-warm-white/[0.06] bg-mrag-warm-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mrag-teal/30">
                    <span className="font-accent text-xs text-mrag-teal">STEP {i + 1}</span>
                    <h3 className="mt-5 text-xl font-bold text-mrag-warm-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mrag-warm-white/35">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <span key={type} className="border border-mrag-teal/15 bg-mrag-teal/[0.04] px-3 py-1.5 text-xs font-accent text-mrag-teal/75">
                    {type}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
