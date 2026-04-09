import { Link } from 'react-router-dom';

export const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mrag-dark-surface border-t border-mrag-warm-white/[0.03]">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Link to="/" onClick={scrollToTop} className="font-accent text-xl font-black tracking-tight text-mrag-warm-white hover:text-mrag-teal transition-colors">
              MRAG
            </Link>
            <p className="mt-4 text-xs text-mrag-warm-white/30 leading-relaxed max-w-xs">
              HISCO 기반 통합 솔루션 기업.
              <br />구축부터 장기 운영까지, 공간의 가치를 높입니다.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-5">
              <a
                href="https://www.youtube.com/@maboroshi_mrag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-accent text-mrag-warm-white/30 hover:text-mrag-teal transition-colors uppercase tracking-wider"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/mrag_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-accent text-mrag-warm-white/30 hover:text-mrag-teal transition-colors uppercase tracking-wider"
              >
                Instagram
              </a>
              <a
                href="https://mrag.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-accent text-mrag-warm-white/30 hover:text-mrag-teal transition-colors uppercase tracking-wider"
              >
                Website
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <span className="font-accent text-[10px] font-bold text-mrag-warm-white/20 uppercase tracking-[0.2em]">Navigate</span>
            <div className="mt-4 flex flex-col gap-2.5">
              {[
                { label: '홈', href: '/' },
                { label: 'Work', href: '/work' },
                { label: 'Press', href: '/press' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link key={item.href} to={item.href} className="text-sm text-mrag-warm-white/35 hover:text-mrag-warm-white/70 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="font-accent text-[10px] font-bold text-mrag-warm-white/20 uppercase tracking-[0.2em]">Contact</span>
            <div className="mt-4 flex flex-col gap-2 text-sm text-mrag-warm-white/35">
              <a href="tel:010-4591-2815" className="hover:text-mrag-teal transition-colors">김준혁 과장 · 010-4591-2815</a>
              <a href="tel:010-9240-3126" className="hover:text-mrag-teal transition-colors">박정우 매니저 · 010-9240-3126</a>
              <a href="mailto:business@mrag.co.kr" className="hover:text-mrag-teal transition-colors">business@mrag.co.kr</a>
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="font-accent text-[10px] font-bold text-mrag-warm-white/20 uppercase tracking-[0.2em]">Office</span>
            <p className="mt-4 text-sm text-mrag-warm-white/35 leading-relaxed">
              서울특별시 서초구 방배로 32길 4
              <br />정다원 빌딩 5F / B1
            </p>
            <a href="tel:02-308-0007" className="mt-2 block text-sm text-mrag-warm-white/35 font-accent hover:text-mrag-teal transition-colors">02-308-0007</a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-mrag-warm-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-mrag-warm-white/20 font-accent tracking-wider">
            © {new Date().getFullYear()} MRAG. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[10px] text-mrag-warm-white/15 font-accent tracking-[0.15em]">
              H · I · S · C · O
            </p>
            <button
              onClick={scrollToTop}
              className="text-[10px] text-mrag-warm-white/30 hover:text-mrag-teal transition-colors font-accent uppercase tracking-wider"
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
