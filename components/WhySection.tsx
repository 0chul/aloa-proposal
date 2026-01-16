import React from 'react';
import Section from './Section';
import { Briefcase, Activity, Target, X, Check, ArrowRight } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <Section id="why" title="왜 “시스템”이 리드를 만드는가" subtitle="전통적 영업의 한계를 “측정 가능한 퍼널”로 대체합니다.">
      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        
        {/* VS Badge (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-slate-100 z-10 font-black text-slate-200 italic">
            VS
        </div>

        {/* Traditional */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden group hover:bg-slate-100 transition duration-300">
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
          
          <ul className="space-y-4 text-slate-500 relative">
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} className="text-red-500" />
              </div>
              <span>발로 뛰는 영업은 물리적 한계가 존재</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} className="text-red-500" />
              </div>
              <span>잠재고객의 온라인 탐색 행동을 놓침</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={14} className="text-red-500" />
              </div>
              <span>단순 노출만 있고 <b>데이터</b>가 남지 않음</span>
            </li>
          </ul>
        </div>

        {/* System */}
        <div className="bg-white rounded-2xl p-8 border-2 border-[#123a73] shadow-xl shadow-[#123a73]/10 relative overflow-hidden transform md:scale-105 z-0">
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
          
          <ul className="space-y-4 text-slate-700 relative">
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-[#123a73] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#d5a11e]" />
              </div>
              <span>콘텐츠, 검색, 리타겟팅이 <b>자동 연결</b></span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-[#123a73] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#d5a11e]" />
              </div>
              <span>각 단계가 데이터로 측정되어 개선 가능</span>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-[#123a73] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#d5a11e]" />
              </div>
              <span>노출이 아닌 <b>영업 가능한 리드(SQL)</b> 생성</span>
            </li>
          </ul>
        </div>

      </div>
    </Section>
  );
};

export default WhySection;