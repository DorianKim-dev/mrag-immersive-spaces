import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/animations/Reveal';

const ContactPage = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-dark pt-32 pb-20">
          <div className="container-wide">
            <Reveal><span className="section-label text-mrag-teal">Contact</span></Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 editorial-heading text-mrag-warm-white">
                프로젝트를
                <br />시작하세요.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg text-mrag-warm-white/60 max-w-xl">
                공간의 가능성에 대해 이야기합니다. 규모와 업종에 관계없이 편하게 연락 주세요.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section-light py-16 md:py-24">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact info */}
              <div>
                <Reveal>
                  <h2 className="text-2xl font-bold mb-8">담당자 연락처</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="space-y-8">
                    <div className="p-6 border border-border rounded-sm">
                      <p className="font-semibold text-lg">김준혁 과장</p>
                      <a href="tel:010-4591-2815" className="mt-1 block font-accent text-mrag-teal text-lg hover:text-mrag-teal-light transition-colors">
                        010-4591-2815
                      </a>
                    </div>
                    <div className="p-6 border border-border rounded-sm">
                      <p className="font-semibold text-lg">매니지먼트 매니저 박정우</p>
                      <a href="tel:010-9240-3126" className="mt-1 block font-accent text-mrag-teal text-lg hover:text-mrag-teal-light transition-colors">
                        010-9240-3126
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-8 space-y-4">
                    <div>
                      <span className="text-sm text-muted-foreground">이메일</span>
                      <a href="mailto:business@mrag.co.kr" className="block font-accent text-foreground hover:text-mrag-teal transition-colors">
                        business@mrag.co.kr
                      </a>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">전화</span>
                      <a href="tel:02-308-0007" className="block font-accent text-foreground hover:text-mrag-teal transition-colors">
                        02-308-0007
                      </a>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">주소</span>
                      <p className="text-foreground">서울특별시 서초구 방배로 32길 4 정다원 빌딩 5F / B1</p>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Instagram</span>
                      <p className="font-accent text-foreground">@mrag.official</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Contact form */}
              <Reveal delay={0.15}>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-semibold mb-2">회사명 / 성함</label>
                    <input type="text" className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors" placeholder="회사명 또는 성함을 입력하세요" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">연락처</label>
                    <input type="tel" className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors" placeholder="연락 가능한 번호" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">이메일</label>
                    <input type="email" className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors" placeholder="email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">프로젝트 유형</label>
                    <select className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors">
                      <option>F&B / 카페 / 레스토랑</option>
                      <option>전시 / 미디어아트</option>
                      <option>교육 / 공공</option>
                      <option>엔터테인먼트 / 복합 공간</option>
                      <option>기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">문의 내용</label>
                    <textarea className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-foreground focus:border-mrag-teal focus:outline-none transition-colors h-32 resize-none" placeholder="프로젝트 규모, 위치, 예산 등 자유롭게 작성해주세요" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-mrag-teal text-accent-foreground font-semibold rounded-sm hover:bg-mrag-teal-light transition-colors">
                    제안 상담 요청
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
