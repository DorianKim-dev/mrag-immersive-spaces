import { Reveal } from '@/components/animations/Reveal';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PROJECT_IMAGES } from '@/constants/images';

const cases = [
  {
    num: '(a.)',
    tag: '교육 · HISCO 전체 구축',
    title: '충남대학교\n융합교육혁신센터',
    desc: '대학 교육 환경의 미래를 설계한 MRAG의 대표 프로젝트. 미디어 인프라부터 운영까지 HISCO 전체 구조 적용.',
    image: PROJECT_IMAGES.fnb.src,
    link: 'https://mrag.co.kr/works/%ec%b6%a9%eb%82%a8%eb%8c%80%ed%95%99%ea%b5%90-%ec%9c%b5%ed%95%a9%ea%b5%90%ec%9c%a1%ed%98%81%ec%8b%a0%ec%84%bc%ed%84%b0/',
    featured: true,
  },
  {
    num: '(b.)',
    tag: '공공·문화',
    title: '서울특별시교육청\n남산도서관',
    desc: '',
    image: PROJECT_IMAGES.exhibition.src,
    link: 'https://mrag.co.kr/works/%ec%84%9c%ec%9a%b8%ed%8a%b9%eb%b3%84%ec%8b%9c%ea%b5%90%ec%9c%a1%ec%b2%ad-%eb%82%a8%ec%82%b0%eb%8f%84%ec%84%9c%ea%b4%80/',
    featured: false,
  },
  {
    num: '(c.)',
    tag: '해외 F&B',
    title: '필리핀 San Fernando\n미디어카페',
    desc: '',
    image: PROJECT_IMAGES.global.src,
    link: undefined,
    featured: false,
  },
];

export const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const featuredY = useTransform(scrollYProgress, [0, 1], ['3%', '-3%']);

  return (
    <section ref={sectionRef} className="section-dark py-28 md:py-40">
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
          <a
            href={cases[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden aspect-[2.4/1] mb-5 block"
          >
              <img src={cases[0].image} alt={cases[0].title} className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-[1.05] group-hover:brightness-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/90 via-mrag-navy/50 to-transparent transition-all duration-700 group-hover:via-mrag-navy/60" />
            <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-mrag-teal/15" />
            <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-xl">
              <span className="number-badge mr-2">{cases[0].num}</span>
              <span className="font-accent text-[11px] font-bold text-mrag-teal tracking-[0.15em] uppercase">{cases[0].tag}</span>
              <h3 className="mt-3 text-2xl md:text-4xl font-bold text-mrag-warm-white leading-tight tracking-tight whitespace-pre-line">
                {cases[0].title}
              </h3>
              <p className="mt-3 text-sm text-mrag-warm-white/40 leading-relaxed max-w-md">
                {cases[0].desc}
              </p>
              <span className="mt-4 inline-block text-xs font-accent font-bold text-mrag-teal uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                Explore →
              </span>
            </div>
          </a>
        </Reveal>

        {/* Two supporting — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {cases.slice(1).map((c, idx) => (
            <Reveal key={c.num} delay={0.1 + idx * 0.1}>
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${idx === 0 ? 'md:col-span-3' : 'md:col-span-2'} group relative overflow-hidden aspect-[16/9] ${idx === 1 ? 'md:aspect-auto md:h-full' : ''} block`}
                >
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-[1.05] group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/80 to-transparent transition-all duration-500 group-hover:from-mrag-navy/90" />
                  <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-mrag-teal/15" />
                  <div className="absolute bottom-6 left-6">
                    <span className="number-badge mr-2">{c.num}</span>
                    <span className="font-accent text-[11px] text-mrag-teal tracking-wider">{c.tag}</span>
                    <h3 className="mt-1 text-xl font-bold text-mrag-warm-white whitespace-pre-line">{c.title}</h3>
                  </div>
                </a>
              ) : (
                <div className={`${idx === 0 ? 'md:col-span-3' : 'md:col-span-2'} group relative overflow-hidden aspect-[16/9] ${idx === 1 ? 'md:aspect-auto md:h-full' : ''}`}>
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-[1.05] group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy/80 to-transparent transition-all duration-500 group-hover:from-mrag-navy/90" />
                  <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-mrag-teal/15" />
                  <div className="absolute bottom-6 left-6">
                    <span className="number-badge mr-2">{c.num}</span>
                    <span className="font-accent text-[11px] text-mrag-teal tracking-wider">{c.tag}</span>
                    <h3 className="mt-1 text-xl font-bold text-mrag-warm-white whitespace-pre-line">{c.title}</h3>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 md:hidden text-center">
            <Link to="/work" className="text-sm font-accent font-medium text-mrag-teal hover:text-mrag-teal-light transition-colors">
              전체 사례 보기 →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
