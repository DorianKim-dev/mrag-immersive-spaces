import { Reveal } from '@/components/animations/Reveal';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { ContactThreeBackdrop } from '@/components/sections/ContactThreeBackdrop';
import heroImg from '@/assets/projects/hero-dining.jpg';
import { SOCIAL_LINKS } from '@/constants/links';

const proposalSteps = [
  { title: '공간 진단', desc: '면적, 동선, 기존 장비, 운영 목적을 확인해 적용 가능한 모듈을 빠르게 정리합니다.' },
  { title: '콘텐츠 매칭', desc: 'F&B, 전시, 교육, 팝업, K-Culture 등 목적에 맞는 테마와 화면 구성을 제안합니다.' },
  { title: '운영 설계', desc: 'HISCO 기반으로 구축 이후 업데이트, 이벤트, 유지보수 흐름까지 함께 설계합니다.' },
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
        <section className="section-dark relative min-h-[720px] overflow-hidden pt-32 pb-20">
          <ContactThreeBackdrop />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--mrag-navy))_0%,hsl(var(--mrag-navy)/0.92)_42%,hsl(var(--mrag-navy)/0.45)_100%)]" />
          <div className="relative z-10 flex min-h-[520px] items-center container-wide">
            <div className="max-w-xl">
              <Reveal>
                <span className="section-label text-mrag-teal">Contact</span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-5 heading-hero text-mrag-warm-white">
                  프로젝트를
                  <br />
                  시작하세요.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-mrag-warm-white/55">
                  공간의 목적, 규모, 운영 방식만 알려주시면 MRAG가 구현 가능한 콘텐츠와 설치 방향을 정리해드립니다.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-light py-20 md:py-28">
          <div className="container-wide">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="body-large max-w-sm">
                    규모와 업종에 관계없이, 공간이 가진 가능성에 대해 편하게 연락 주세요.
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="mt-12 space-y-8">
                    {[
                      { init: 'JH', name: '김준현 과장', phone: '010-4591-2815' },
                      { init: 'JW', name: '매니지먼트 매니저 박정우', phone: '010-9240-3126' },
                    ].map((person) => (
                      <div key={person.init} className="flex items-start gap-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mrag-navy">
                          <span className="font-accent text-sm font-bold text-mrag-teal">{person.init}</span>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground">{person.name}</p>
                          <a href={`tel:${person.phone}`} className="mt-1 block font-accent text-base text-mrag-teal transition-colors hover:text-mrag-teal-light">
                            {person.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-12 space-y-4 border-t border-border pt-8">
                    <div>
                      <span className="font-accent text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                      <a href="mailto:business@mrag.co.kr" className="block font-accent text-foreground transition-colors hover:text-mrag-teal">
                        business@mrag.co.kr
                      </a>
                    </div>
                    <div>
                      <span className="font-accent text-xs uppercase tracking-wider text-muted-foreground">Office</span>
                      <p className="text-sm leading-relaxed text-foreground">
                        서울특별시 서초구 방배로 32길 4
                        <br />
                        정다운 빌딩 5F / B1
                      </p>
                    </div>
                    <div>
                      <span className="font-accent text-xs uppercase tracking-wider text-muted-foreground">Tel</span>
                      <a href="tel:02-308-0007" className="block font-accent text-foreground transition-colors hover:text-mrag-teal">
                        02-308-0007
                      </a>
                    </div>
                    <div className="flex gap-5 pt-4">
                      <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="font-accent text-sm text-muted-foreground transition-colors hover:text-mrag-teal">
                        YouTube
                      </a>
                      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="font-accent text-sm text-muted-foreground transition-colors hover:text-mrag-teal">
                        Instagram
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.15}>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-accent text-xs font-bold uppercase tracking-wider text-muted-foreground">회사명 / 성함</label>
                        <input type="text" className="w-full border border-border bg-transparent px-4 py-3.5 text-sm text-foreground transition-colors focus:border-mrag-teal focus:outline-none" placeholder="회사명 또는 성함" />
                      </div>
                      <div>
                        <label className="mb-2 block font-accent text-xs font-bold uppercase tracking-wider text-muted-foreground">연락처</label>
                        <input type="tel" className="w-full border border-border bg-transparent px-4 py-3.5 text-sm text-foreground transition-colors focus:border-mrag-teal focus:outline-none" placeholder="010-0000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block font-accent text-xs font-bold uppercase tracking-wider text-muted-foreground">이메일</label>
                      <input type="email" className="w-full border border-border bg-transparent px-4 py-3.5 text-sm text-foreground transition-colors focus:border-mrag-teal focus:outline-none" placeholder="email@company.com" />
                    </div>
                    <div>
                      <label className="mb-2 block font-accent text-xs font-bold uppercase tracking-wider text-muted-foreground">프로젝트 유형</label>
                      <select className="w-full border border-border bg-mrag-navy px-4 py-3.5 text-sm text-foreground transition-colors focus:border-mrag-teal focus:outline-none">
                        {projectTypes.map((type) => (
                          <option key={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block font-accent text-xs font-bold uppercase tracking-wider text-muted-foreground">문의 내용</label>
                      <textarea className="h-28 w-full resize-none border border-border bg-transparent px-4 py-3.5 text-sm text-foreground transition-colors focus:border-mrag-teal focus:outline-none" placeholder="프로젝트 규모, 위치, 예산 등을 자유롭게 작성해주세요." />
                    </div>
                    <button type="submit" className="w-full bg-mrag-teal py-4 text-sm font-semibold tracking-tight text-accent-foreground transition-colors hover:bg-mrag-teal-light">
                      제안 상담 요청
                    </button>
                  </form>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="relative mt-8 aspect-[21/9] overflow-hidden">
                    <img src={heroImg} alt="MRAG 공간" className="h-full w-full object-cover" />
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
              <h2 className="mt-5 max-w-2xl heading-section text-mrag-warm-white">
                문의 후 바로
                <br />
                공간 운영안까지 연결합니다.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
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
                  <span key={type} className="border border-mrag-teal/15 bg-mrag-teal/[0.04] px-3 py-1.5 font-accent text-xs text-mrag-teal/75">
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
