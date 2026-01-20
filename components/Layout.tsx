
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#123a73] to-[#0b2b57] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#123a73]/20">
              C
            </div>
            <div className="leading-tight">
              <div className="text-slate-500 text-xs tracking-wider">Carta Mobility</div>
              <div className="text-[#123a73] font-bold text-lg">ALOA Proposal</div>
            </div>
          </div>

        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">
            본 문서는 Carta Mobility ALOA의 디지털 광고 실행 전략 제안 페이지입니다.<br/>
            (예산 수치 및 일부 경쟁사 정보는 제외됨)
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <ArrowUp size={18} />
            </button>
          </div>
          <p className="mt-8 text-xs text-slate-600">
            © 2026 Carta Mobility Proposal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;