import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '@/constants/links';

const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Public', href: '/public' },
  { label: 'Work', href: '/work' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
];

export const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-mrag-warm-white/[0.03] bg-mrag-dark-surface">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" onClick={scrollToTop} className="inline-flex items-center transition-opacity hover:opacity-80">
              <img src="/MRAG 로고.png" alt="MRAG" className="h-8 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-mrag-warm-white/25">
              HISCO 기반 통합 공간 운영 기업.
              <br />
              구축부터 콘텐츠 운영까지, 공간의 가치를 지속적으로 높입니다.
            </p>
            <div className="mt-6 flex gap-5">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="font-accent text-xs uppercase tracking-wider text-mrag-warm-white/25 transition-colors hover:text-mrag-teal">YouTube</a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="font-accent text-xs uppercase tracking-wider text-mrag-warm-white/25 transition-colors hover:text-mrag-teal">Instagram</a>
              <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="font-accent text-xs uppercase tracking-wider text-mrag-warm-white/25 transition-colors hover:text-mrag-teal">Website</a>
            </div>
          </div>

          <div className="md:col-span-2">
            <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-mrag-warm-white/15">Navigate</span>
            <div className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <Link key={item.href} to={item.href} className="text-sm text-mrag-warm-white/30 transition-colors hover:text-mrag-warm-white/60">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-mrag-warm-white/15">Contact</span>
            <div className="mt-4 flex flex-col gap-2 text-sm text-mrag-warm-white/30">
              <a href="mailto:business@mrac.co.kr" className="transition-colors hover:text-mrag-teal">business@mrac.co.kr</a>
              <a href="tel:02-308-0007" className="transition-colors hover:text-mrag-teal">02-308-0007</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] text-mrag-warm-white/15">Office</span>
            <p className="mt-4 text-sm leading-relaxed text-mrag-warm-white/30">
              서울특별시 서초구 방배로32길 4
              <br />
              정다원빌딩 5F / B1
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-mrag-warm-white/[0.03] pt-6 md:flex-row">
          <p className="font-accent text-[10px] tracking-wider text-mrag-warm-white/15">
            © {new Date().getFullYear()} MRAG. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="font-accent text-[10px] uppercase tracking-wider text-mrag-warm-white/25 transition-colors hover:text-mrag-teal"
          >
            Top
          </button>
        </div>
      </div>
    </footer>
  );
};
