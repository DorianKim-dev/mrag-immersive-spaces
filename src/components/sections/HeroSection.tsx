import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/projects/hero-dining.jpg';
import heroCherry from '@/assets/projects/immersive-cherry.jpg';
import heroBeauty from '@/assets/projects/immersive-beauty.jpg';
import { useState, useEffect } from 'react';

const heroImages = [heroImg, heroCherry, heroBeauty];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1100px] flex items-end overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: current === i ? 1 : 0, scale: current === i ? 1.02 : 1.08 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={img} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-mrag-navy via-mrag-navy/50 to-mrag-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-mrag-navy/60 via-transparent to-transparent" />
      {/* Subtle film grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

      {/* Content */}
      <div className="relative container-wide pb-20 md:pb-28 lg:pb-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="section-label text-mrag-teal">Space Transition Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 heading-hero text-mrag-warm-white"
          >
            상업공간의
            <br />
            <span className="text-gradient-teal">한계를 지우다</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-[17px] md:text-lg text-mrag-warm-white/65 leading-[1.75] max-w-lg"
          >
            하나의 공간을 20,000+ 운영 시나리오로 전환합니다.
            <br className="hidden md:block" />
            구축부터 장기 운영까지, HISCO 전체 구조를 제공합니다.
          </motion.p>

          {/* Trust strip — tight, editorial */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-10 flex items-center gap-8 md:gap-12"
          >
            {[
              { num: '100+', label: '프로젝트' },
              { num: '500억+', label: '구축 규모' },
              { num: '95%', label: '운영 신뢰' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-baseline gap-1.5">
                <span className="font-accent text-xl md:text-2xl font-extrabold text-mrag-warm-white">{stat.num}</span>
                <span className="text-[11px] text-mrag-warm-white/35 font-accent">{stat.label}</span>
                {i < 2 && <span className="ml-6 md:ml-10 w-px h-4 bg-mrag-warm-white/10" />}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-10 flex gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-mrag-teal text-accent-foreground font-semibold text-sm tracking-tight hover:bg-mrag-teal-light transition-colors"
            >
              프로젝트 문의
            </Link>
            <Link
              to="/work"
              className="px-8 py-3.5 border border-mrag-warm-white/15 text-mrag-warm-white/80 font-medium text-sm tracking-tight hover:border-mrag-warm-white/30 transition-colors"
            >
              사례 보기
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 ${current === i ? 'w-8 h-0.5 bg-mrag-teal' : 'w-4 h-0.5 bg-mrag-warm-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};
