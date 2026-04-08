import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/projects/hero-dining.jpg';

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="MRAG 몰입형 다이닝 공간"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy via-mrag-navy/60 to-mrag-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-wide pb-16 md:pb-24 lg:pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="section-label text-mrag-teal">Space Transition Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-heading text-mrag-warm-white max-w-4xl"
        >
          상업공간의
          <br />
          <span className="text-gradient-teal">한계를 지우다</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-mrag-warm-white/70 max-w-xl leading-relaxed"
        >
          하나의 공간을 20,000+ 운영 시나리오로 전환합니다.
          <br className="hidden md:block" />
          구축부터 장기 운영까지, HISCO 전체 구조를 제공합니다.
        </motion.p>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-6 md:gap-10"
        >
          {[
            { num: '100+', label: '누적 프로젝트' },
            { num: '500억+', label: '통합 구축 규모' },
            { num: '95%', label: '운영 신뢰 지표' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-accent text-2xl md:text-3xl font-black text-mrag-teal">{stat.num}</span>
              <span className="text-xs text-mrag-warm-white/50">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-mrag-teal text-accent-foreground font-semibold text-sm rounded-sm hover:bg-mrag-teal-light transition-colors"
          >
            프로젝트 문의
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 border border-mrag-warm-white/20 text-mrag-warm-white font-medium text-sm rounded-sm hover:border-mrag-warm-white/40 hover:bg-mrag-warm-white/5 transition-all"
          >
            사례 보기
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-accent text-mrag-warm-white/30 rotate-90 origin-center translate-y-6">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-mrag-teal to-transparent mt-8"
        />
      </motion.div>
    </section>
  );
};
