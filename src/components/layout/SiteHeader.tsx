import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-mrag-navy/95 backdrop-blur-md border-b border-mrag-warm-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="relative z-50">
            <span className="font-accent text-xl md:text-2xl font-black tracking-tight text-mrag-warm-white">
              MRAG
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`line-reveal text-sm font-medium transition-colors pb-1 ${
                  location.pathname === item.href
                    ? 'text-mrag-warm-white'
                    : 'text-mrag-warm-white/80 hover:text-mrag-warm-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-semibold px-5 py-2.5 bg-mrag-teal text-accent-foreground rounded-sm hover:bg-mrag-teal-light transition-colors"
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
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-mrag-navy flex flex-col justify-center items-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link to={item.href} className="text-3xl font-bold text-mrag-warm-white">
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Link
                to="/contact"
                className="mt-4 text-lg font-semibold px-8 py-3 bg-mrag-teal text-accent-foreground rounded-sm"
              >
                프로젝트 문의
              </Link>
            </motion.div>
            {/* Social links in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex gap-6"
            >
              <a
                href="https://www.youtube.com/@maboroshi_mrag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-accent text-mrag-warm-white/40 hover:text-mrag-teal transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/mrag_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-accent text-mrag-warm-white/40 hover:text-mrag-teal transition-colors"
              >
                Instagram
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
