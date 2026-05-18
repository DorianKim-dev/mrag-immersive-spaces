import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SOCIAL_LINKS } from '@/constants/links';

const navItems = [
  { label: 'Commercial', href: '/commercial' },
  { label: 'Public', href: '/public' },
  { label: 'Work', href: '/work' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[130] transition-all duration-700 ${
          scrolled
            ? 'border-b border-mrag-warm-white/[0.04] bg-mrag-navy/90 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="group relative z-50 flex items-center gap-3" aria-label="MRAG home">
            <img
              src="/MRAG 로고.png"
              alt="MRAG"
              className="h-7 w-auto object-contain transition-opacity group-hover:opacity-80 md:h-8"
            />
            <span className="hidden font-accent text-[10px] font-medium uppercase tracking-[0.2em] text-mrag-warm-white/20 lg:inline">
              Space Platform
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`line-reveal pb-1 text-[13px] font-medium uppercase tracking-wide transition-colors ${
                  location.pathname === item.href
                    ? 'text-mrag-warm-white'
                    : 'text-mrag-warm-white/50 hover:text-mrag-warm-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="메뉴"
          >
            <span className={`block h-0.5 w-6 bg-mrag-warm-white transition-all duration-300 ${menuOpen ? 'translate-y-1 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-mrag-warm-white transition-all duration-300 ${menuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
          </button>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-mrag-teal/70"
          style={{ scaleX: progressScale }}
        />
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[120] flex animate-[menu-panel-in_0.36s_ease_both] flex-col items-center justify-center gap-8 overflow-hidden bg-mrag-navy">
          <motion.div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-accent text-[28vw] font-black leading-none text-mrag-warm-white/[0.025]"
            initial={{ x: '-12%' }}
            animate={{ x: '-3%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            MRAG
          </motion.div>
          <div className="fixed left-0 right-0 top-28 z-[125] flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="block text-4xl font-black text-white transition-colors hover:text-mrag-teal sm:text-5xl">
                {item.label}
              </Link>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.52 }}
            className="fixed bottom-12 left-1/2 z-[125] flex -translate-x-1/2 gap-6"
          >
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="font-accent text-sm text-mrag-warm-white/30 transition-colors hover:text-mrag-teal">YouTube</a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="font-accent text-sm text-mrag-warm-white/30 transition-colors hover:text-mrag-teal">Instagram</a>
          </motion.div>
        </div>
      )}
    </>
  );
};
