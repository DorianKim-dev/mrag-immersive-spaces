import { Link } from 'react-router-dom';

export const SiteFooter = () => {
  return (
    <footer className="section-dark border-t border-mrag-warm-white/5">
      <div className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-accent text-2xl font-black tracking-tight text-mrag-warm-white">
              MRAG
            </span>
            <p className="mt-4 text-sm text-mrag-warm-white/50 leading-relaxed max-w-xs">
              공간의 한계를 지우는 HISCO 기반 통합 솔루션 기업.<br />
              구축부터 장기 운영까지, 공간의 가치를 높입니다.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="section-label text-mrag-teal mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-mrag-warm-white/60 hover:text-mrag-warm-white transition-colors">홈</Link>
              <Link to="/work" className="text-sm text-mrag-warm-white/60 hover:text-mrag-warm-white transition-colors">Work</Link>
              <Link to="/press" className="text-sm text-mrag-warm-white/60 hover:text-mrag-warm-white transition-colors">Press</Link>
              <Link to="/contact" className="text-sm text-mrag-warm-white/60 hover:text-mrag-warm-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="section-label text-mrag-teal mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-mrag-warm-white/60">
              <span>김준혁 과장 · 010-4591-2815</span>
              <span>박정우 매니저 · 010-9240-3126</span>
              <span>business@mrag.co.kr</span>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <h4 className="section-label text-mrag-teal mb-4">Office</h4>
            <p className="text-sm text-mrag-warm-white/60 leading-relaxed">
              서울특별시 서초구 방배로 32길 4<br />
              정다원 빌딩 5F / B1
            </p>
            <p className="mt-3 text-sm text-mrag-warm-white/60">02-308-0007</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-mrag-warm-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-mrag-warm-white/30 font-accent">
            © {new Date().getFullYear()} MRAG. All rights reserved.
          </p>
          <p className="text-xs text-mrag-warm-white/30 font-accent">
            HISCO · Hardware · Interior · Software · Content · Operation
          </p>
        </div>
      </div>
    </footer>
  );
};
