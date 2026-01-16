import React from 'react';
import { FileText, Target, Zap, ShieldCheck, Download, ChevronRight, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#123a73]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d5a11e]/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123a73]/10 text-[#123a73] text-xs font-bold tracking-wider border border-[#123a73]/20">
                    <Zap size={14} fill="#123a73" className="text-[#123a73]" />
                    2026 GROWTH STRATEGY
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold tracking-wider border border-slate-200">
                    <Lock size={12} />
                    CONFIDENTIAL
                </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#123a73] leading-[1.15] mb-6 tracking-tight">
              운송사의 성장을 가속하는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123a73] via-[#d5a11e] to-[#b88a14]">
                시스템 기반 리드 엔진
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              본 제안서는 <b>운송사(메인 유저)</b> 타겟으로 Aloa의 리드를 예측 가능하게 확보하기 위한
              디지털 광고 실행 전략 보고서입니다.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
                <a href="#why" className="px-6 py-3.5 bg-[#123a73] text-white rounded-lg font-bold shadow-lg shadow-[#123a73]/30 hover:bg-[#0b2b57] transition flex items-center gap-2 group">
                    제안 내용 확인하기
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-6 py-3.5 bg-white text-slate-600 border border-slate-300 rounded-lg font-bold hover:bg-slate-50 transition flex items-center gap-2" onClick={() => alert("데모 페이지입니다. 실제 PDF 다운로드는 제공되지 않습니다.")}>
                    <Download size={18} />
                    제안서 PDF 저장
                </button>
            </div>

            <div className="bg-[#d5a11e]/10 border border-[#d5a11e]/30 rounded-xl p-5 inline-block max-w-2xl">
              <p className="text-[#123a73] text-sm md:text-base font-medium flex items-start gap-3">
                <ShieldCheck className="shrink-0 mt-1 text-[#d5a11e]" size={20} />
                <span>
                  <strong>핵심 원칙:</strong> 단순 "트래픽"이 아닌 <b>"리드(Lead)"</b>를 만듭니다. 
                  모든 채널은 폼, 신청, 설문, 회신 등 명확한 전환 포인트로 연결됩니다.
                </span>
              </p>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-2xl shadow-slate-200/50 sticky top-24 transform hover:-translate-y-1 transition duration-500">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#123a73] to-[#d5a11e] rounded-t-2xl"></div>
              <h3 className="text-[#123a73] font-bold text-lg mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileText size={20} />
                제안 범위 (Scope)
              </h3>
              <ul className="space-y-4">
                {[
                  "대행 범위: 디지털 광고 ~ 리드 확보",
                  "비즈니스 전략(상품/가격) 제외",
                  "타겟: 화물 운송사/주선사"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-[#123a73]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#123a73]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Target Channels</p>
                <div className="flex flex-wrap gap-2">
                  {['검색광고', '디스플레이', '리타겟팅', '특화매체', '콜드메일'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] rounded-full font-medium border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;