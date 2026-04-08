import { Reveal, StaggerContainer, StaggerItem } from '@/components/animations/Reveal';
import moduleT from '@/assets/projects/module-t.jpg';
import moduleM from '@/assets/projects/module-m.jpg';
import moduleL from '@/assets/projects/module-l.jpg';
import heroMain from '@/assets/projects/hero-main.jpg';

const modules = [
  {
    type: 'T',
    title: '소규모',
    size: '5~20평',
    use: '카페 / 팝업 / 미디어 포토 부스',
    image: moduleT,
  },
  {
    type: 'M',
    title: '중형 복합 공간',
    size: '20~200평',
    use: 'F&B / 카페+바 / 미디어아트',
    image: moduleM,
  },
  {
    type: 'L',
    title: '대형 엔터테인먼트 복합 센터',
    size: '200~2,000평',
    use: 'F&B / 미디어스파 / 미디어전시 / GX 프로그램',
    image: moduleL,
  },
  {
    type: 'XL',
    title: '복합 단지',
    size: '2,000~20,000평',
    use: '도시형 몰입 복합 상업 시설',
    image: heroMain,
  },
];

export const ModulesSection = () => {
  return (
    <section className="section-dark py-24 md:py-36">
      <div className="container-wide">
        <Reveal>
          <span className="section-label text-mrag-teal">Space Module</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 editorial-heading text-mrag-warm-white max-w-4xl">
            T / M / L / XL
            <br />
            <span className="text-mrag-warm-white/40 text-3xl md:text-4xl lg:text-5xl font-normal">규모에 맞게 구축하는 플랫폼</span>
          </h2>
        </Reveal>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <StaggerItem key={mod.type}>
              <div className="relative group overflow-hidden rounded-sm aspect-[4/3] md:aspect-[3/2]">
                <img
                  src={mod.image}
                  alt={`TYPE ${mod.type} - ${mod.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/90 via-mrag-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-accent text-3xl md:text-4xl font-black text-mrag-teal">
                      {mod.type}
                    </span>
                    <span className="font-accent text-sm font-semibold text-mrag-warm-white/50">
                      TYPE
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-mrag-warm-white">
                    {mod.title}
                  </h3>
                  <p className="mt-1 text-sm text-mrag-warm-white/60 font-accent">{mod.size}</p>
                  <p className="mt-3 text-sm text-mrag-warm-white/50">{mod.use}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-mrag-warm-white/40 text-sm">
            보유 공간에 따라, 사업은 지속적으로 확장됩니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
