import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/animations/Reveal';
import heroImg from '@/assets/projects/hero-dining.jpg';

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
                    {/* Person 1 */}
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
                    {/* Person 2 */}
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
                        <option>F&B / 카페 / 레스토랑</option>
                        <option>전시 / 미디어아트</option>
                        <option>교육 / 공공</option>
                        <option>엔터테인먼트 / 복합 공간</option>
                        <option>기타</option>
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

                {/* Image below form */}
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
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
