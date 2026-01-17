
import React from 'react';
import Section from './Section';
import { Briefcase, Activity, Target, X, Check, TrendingUp } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <Section id="why" title="왜 “시스템”이 리드를 만드는가" subtitle="전통적 영업의 한계를 “측정 가능한 퍼널”로 대체합니다.">
      <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
        
        {/* Traditional */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:bg-slate-100 transition duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-5 grayscale">
            <Briefcase size={120} />
          </div>
          <div className="flex items-center gap-4 mb-6 relative">
            <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
              <Briefcase size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-600">전통적 영업 방식</h3>
                <span className="text-xs font-bold text-slate-400">Human Dependent</span>
            </div>
          </div>
          
          <ul className="space-y-4 text-slate-500 relative mb-8">
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} className="text-red-500" />
              </div>
              <span>물리적 이동 한계로 인한 고객 접점 부족</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} className="text-red-500" />
              </div>
              <span>잠재고객의 온라인 탐색 데이터를 놓침</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} className="text-red-500" />
              </div>
              <span>단순 노출만 있고 사후 관리가 불가능</span>
            </li>
          </ul>

          <div className="h-1 bg-slate-200 rounded-full w-full overflow-hidden">
             <div className="bg-slate-400 h-full w-[30%]"></div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Efficiency Limit</p>
        </div>

        {/* System */}
        <div className="bg-white rounded-3xl p-8 border-2 border-[#123a73] shadow-xl shadow-[#123a73]/10 relative overflow-hidden transform md:scale-105 z-10">
           <div className="absolute top-0 right-0 p-4 text-[#123a73] opacity-5">
            <Activity size={120} />
          </div>
          <div className="flex items-center gap-4 mb-6 relative">
             <div className="w-12 h-12 bg-[#123a73] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#123a73]/30">
              <Target size={24} />
            </div>
             <div>
                <h3 className="text-xl font-bold text-[#123a73]">시스템 기반 접근</h3>
                <span className="text-xs font-bold text-[#d5a11e]">Data Driven</span>
            </div>
          </div>
          
          <ul className="space-y-4 text-slate-700 relative mb-8">
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-[#123a73] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#d5a11e]" />
              </div>
              <span>디지털 광고로 <b>24/7</b> 고객 탐색 자동 대응</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-[#123a73] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#d5a11e]" />
              </div>
              <span>각 단계별 <b>데이터 추적</b>으로 즉각적 개선</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-[#123a73] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#d5a11e]" />
              </div>
              <span>노출이 아닌 <b>영업 기회(Lead)</b> 직접 생성</span>
            </li>
          </ul>

          <div className="h-1 bg-slate-100 rounded-full w-full overflow-hidden">
             <div className="bg-gradient-to-r from-[#123a73] to-[#d5a11e] h-full w-[85%] animate-pulse"></div>
          </div>
          <p className="text-[10px] font-bold text-[#123a73] mt-2 uppercase tracking-widest flex justify-between">
            <span>ROI Optimization</span>
            <span className="text-[#d5a11e]">+280% Improved</span>
          </p>
        </div>
      </div>

      {/* ROI Visual Tool */}
      <div className="bg-[#123a73] rounded-3xl p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 flex flex-col items-center justify-center">
                <div className="relative w-40 h-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#d5a11e" strokeWidth="8" strokeDasharray="210 282" strokeLinecap="round" className="animate-pulse" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-3xl font-black text-white">74%</div>
                        <div className="text-[8px] font-bold text-[#d5a11e] uppercase tracking-widest">Efficiency Up</div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-[#d5a11e]" size={24} />
                    <h4 className="text-2xl font-bold">누적 성과 가설 (Accumulated Performance)</h4>
                </div>
                <p className="text-blue-100/70 mb-6 leading-relaxed">
                    시스템 기반의 리드 엔진은 시간이 지날수록 축적되는 <b>'픽셀 데이터'</b>와 <b>'오디언스 모수'</b> 덕분에 
                    초기 세팅 이후에는 동일 예산 대비 확보되는 리드의 품질과 양이 비약적으로 상승합니다.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/10">
                        <div className="text-[10px] font-bold text-blue-300 uppercase mb-1">Cost Per Lead</div>
                        <div className="text-lg font-bold">▼ 42.5%</div>
                    </div>
                    <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/10">
                        <div className="text-[10px] font-bold text-blue-300 uppercase mb-1">Lead Quality</div>
                        <div className="text-lg font-bold">▲ 2.4x</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default WhySection;
