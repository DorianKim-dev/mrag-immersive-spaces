import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';

export const ProblemSolutionSection = () => {
  return (
    <section className="section-cream py-24 md:py-36">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Problem */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="section-label text-mrag-teal">Problem</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                3년마다 리뉴얼,
                <br />
                또 수억 들여 공사.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
                공간을 운영하다 보면 반드시 찾아오는 위기가 있습니다. 리뉴얼을 하자니 수억이 들고, 하지 않으면 경쟁에서 밀려납니다. 이것이 기존 인테리어 중심 공간 구조의 한계입니다.
              </p>
            </Reveal>

            <StaggerContainer className="mt-10 grid grid-cols-3 gap-6">
              {[
                { stat: '96.2%', label: '외식업 폐업률' },
                { stat: '100만', label: '2025 폐업자' },
                { stat: '4~5억', label: '평균 창업비용' },
              ].map((item) => (
                <StaggerItem key={item.label}>
                  <div className="border-l-2 border-mrag-teal pl-4">
                    <span className="font-accent text-2xl md:text-3xl font-black text-foreground">{item.stat}</span>
                    <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Solution */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal delay={0.15}>
              <span className="section-label text-mrag-gold">Solution</span>
            </Reveal>
            <Reveal delay={0.25}>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                이 구조에서
                <br />
                <span className="text-gradient-teal">벗어날 수 있습니다.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                TIKITAKA는 일회성 인테리어가 아닌 장기 운영 플랫폼입니다. 한 번의 구축으로 F&B, 전시, 팝업 등 다양한 매출 구조를 운영하며, 공사 없이 하나의 매장을 20,000개의 공간 운영 시나리오로 바꿉니다.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-8 p-6 md:p-8 bg-mrag-navy rounded-sm">
                <p className="text-mrag-warm-white/90 text-lg md:text-xl font-semibold leading-relaxed">
                  "100만 폐업 시대,
                  <br />
                  10년 지속가능한 유일무이 공간 플랫폼"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-px bg-mrag-teal" />
                  <span className="font-accent text-xs text-mrag-teal tracking-wider">MRAG TIKITAKA</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
