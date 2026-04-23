import { Reveal } from '@/components/animations/Reveal';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MODULE_IMAGES } from '@/constants/images';

const modules = [
  { type: 'T', title: '소규모', size: '5–20평', use: '카페 / 팝업 / 미디어 포토 부스', image: MODULE_IMAGES.t.src },
  { type: 'M', title: '중형 복합', size: '20–200평', use: 'F&B / 카페+바 / 미디어아트', image: MODULE_IMAGES.m.src },
  { type: 'L', title: '대형 복합 센터', size: '200–2,000평', use: 'F&B / 미디어스파 / 전시 / GX', image: MODULE_IMAGES.l.src },
  { type: 'XL', title: '복합 단지', size: '2,000–20,000평', use: '도시형 몰입 복합 상업 시설', image: MODULE_IMAGES.xl.src },
];

export const ModulesSection = () => {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const gridY = useTransform(scrollYProgress, [0, 1], ['3%', '-3%']);

  return (
    <section ref={sectionRef} className="section-dark py-28 md:py-40">
      <div className="container-wide" ref={ref}>
        <Reveal><span className="section-label text-mrag-teal">Space Module</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 heading-section text-mrag-warm-white">
            T / M / L / XL
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-3 text-lg text-mrag-warm-white/30 max-w-md">
            규모에 맞게 구축하는 확장 가능한 플랫폼
          </p>
        </Reveal>

        <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-3" style={{ y: gridY }}>
          {modules.map((mod, i) => (
            <motion.div
              key={mod.type}
              className={`relative group overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-1 ${
                i === 0 ? 'md:col-span-7 aspect-[16/10]' :
                i === 3 ? 'md:col-span-7 aspect-[16/10]' :
                'md:col-span-5 aspect-[16/10]'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={mod.image}
                alt={`TYPE ${mod.type}`}
                className="w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-[1.06] group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/90 via-mrag-navy/30 to-transparent transition-all duration-500 group-hover:from-mrag-navy/95" />
              <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-mrag-teal/15 group-hover:shadow-[inset_0_0_30px_rgba(72,187,164,0.04)]" />
              
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <div className="flex items-baseline gap-2">
                  <span className="font-accent text-3xl md:text-4xl font-black text-mrag-teal leading-none">
                    {mod.type}
                  </span>
                  <span className="font-accent text-[10px] font-bold text-mrag-warm-white/20 tracking-widest uppercase">Type</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-mrag-warm-white tracking-tight">{mod.title}</h3>
                <p className="text-xs text-mrag-warm-white/35 font-accent mt-0.5">{mod.size}</p>
                
                {/* Hover reveal: usage */}
                <motion.p
                  className="mt-2 text-xs text-mrag-warm-white/25 overflow-hidden"
                  initial={false}
                >
                  {mod.use}
                </motion.p>
                
                {/* Explore tag on hover */}
                <span className="mt-3 inline-block text-[10px] font-accent font-bold text-mrag-teal uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Explore →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
