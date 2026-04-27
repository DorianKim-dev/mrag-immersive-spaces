import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { SOCIAL_LINKS } from '@/constants/links';

const navItems = [
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-mrag-navy/90 backdrop-blur-xl border-b border-mrag-warm-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="relative z-50 group">
            <span className="font-accent text-xl md:text-2xl font-black tracking-tight text-mrag-warm-white transition-colors group-hover:text-mrag-teal">
              MRAG
            </span>
            <span className="hidden md:inline ml-3 font-accent text-[10px] font-medium text-mrag-warm-white/20 tracking-[0.2em] uppercase">
              Space Platform
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`line-reveal text-[13px] font-medium tracking-wide transition-colors pb-1 uppercase ${
                  location.pathname === item.href
                    ? 'text-mrag-warm-white'
                    : 'text-mrag-warm-white/50 hover:text-mrag-warm-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-[13px] font-semibold px-6 py-2.5 bg-mrag-teal text-accent-foreground hover:bg-mrag-teal-light transition-all duration-300"
            >
              프로젝트 문의
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="메뉴"
          >
            <span className={`block w-6 h-0.5 bg-mrag-warm-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block w-6 h-0.5 bg-mrag-warm-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 h-px w-full origin-left bg-mrag-teal/70"
          style={{ scaleX: progressScale }}
        />
      </header>

      {/* Mobile menu — fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-mrag-navy flex flex-col justify-center items-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={item.href} className="text-4xl font-bold text-mrag-warm-white hover:text-mrag-teal transition-colors">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Link
                to="/contact"
                className="mt-4 text-lg font-semibold px-8 py-3 bg-mrag-teal text-accent-foreground"
              >
                프로젝트 문의
              </Link>
            </motion.div>
            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex gap-6"
            >
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-sm font-accent text-mrag-warm-white/30 hover:text-mrag-teal transition-colors">YouTube</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-accent text-mrag-warm-white/30 hover:text-mrag-teal transition-colors">Instagram</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
