import React from 'react';
import { FileText, Target, Zap, ShieldCheck, Database, LayoutTemplate } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#123a73]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d5a11e]/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123a73]/10 text-[#123a73] text-xs font-bold tracking-wider mb-6">
              <Zap size={14} />
              LEAD ACQUISITION · B2B STRATEGY
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#123a73] leading-tight mb-6">
              운송사의 성장을 가속하는<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123a73] to-[#d5a11e]">
                “시스템 기반 리드 엔진”
              </span> 구축
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              본 제안서는 <b>운송사(메인 유저)</b> 타겟으로 Aloa의 리드를 예측 가능하게 확보하기 위한
              디지털 광고 실행 전략 보고서입니다. 
              <br className="hidden md:block" />
              전통적 영업의 한계를 넘어, <b>측정 가능한 데이터 퍼널</b>을 제안합니다.
            </p>

            <div className="bg-[#d5a11e]/10 border border-[#d5a11e]/30 rounded-xl p-5 mb-8 inline-block max-w-2xl">
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
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-xl sticky top-24">
              <h3 className="text-[#123a73] font-bold text-lg mb-4 flex items-center gap-2">
                <FileText size={20} />
                범위 및 전제
              </h3>
              <ul className="space-y-3">
                {[
                  "대행 범위: 디지털 광고 ~ 리드 확보",
                  "비즈니스 전략(상품/가격) 제외"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Channels</p>
                <div className="flex flex-wrap gap-2">
                  {['검색광고', '디스플레이', '리타겟팅', '특화매체', '콜드메일', '콘텐츠'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium border border-slate-200">
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