import React from 'react';
import Section from './Section';
import { Eye, Search, MousePointerClick, Filter } from 'lucide-react';

const FunnelSection: React.FC = () => {
  return (
    <Section id="funnel" title="통합 퍼널 설계" subtitle="발견 → 검토 → 전환으로 이어지는 유기적 흐름">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          
          {/* Top Funnel */}
          <div className="w-full relative group z-30">
            <div className="h-32 bg-gradient-to-br from-[#123a73] to-[#1e4b8a] rounded-t-2xl flex items-center justify-between px-6 md:px-12 text-white shadow-lg relative transform transition hover:scale-[1.01] hover:shadow-xl clip-path-funnel-top">
                <div className="flex flex-col">
                    <span className="text-xs opacity-60 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Filter size={12} /> Top Funnel
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                        <Eye className="text-[#d5a11e] shrink-0" />
                        발견 / 인지
                    </h3>
                </div>
                <div className="text-right hidden md:block border-l border-white/10 pl-6">
                    <div className="text-sm font-light mb-2">콘텐츠(블로그), 디스플레이</div>
                    <div className="text-xs bg-white/10 px-2 py-1 rounded inline-block text-[#d5a11e] font-semibold">Goal: 타겟 모수 확보</div>
                </div>
            </div>
             {/* Connector Graphic */}
            <div className="h-4 bg-[#123a73] mx-8 opacity-50 blur-sm absolute -bottom-2 w-[90%] left-[5%] -z-10"></div>
          </div>

          {/* Middle Funnel */}
          <div className="w-[85%] relative group z-20 -mt-1">
            <div className="h-32 bg-gradient-to-br from-[#123a73]/90 to-[#0b2b57]/90 flex items-center justify-between px-6 md:px-12 text-white shadow-lg relative transform transition hover:scale-[1.01] hover:shadow-xl mx-auto rounded-lg">
                <div className="flex flex-col">
                    <span className="text-xs opacity-60 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Filter size={12} /> Middle Funnel
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                        <Search className="text-[#d5a11e] shrink-0" />
                        검토 / 학습
                    </h3>
                </div>
                <div className="text-right hidden md:block border-l border-white/10 pl-6">
                    <div className="text-sm font-light mb-2">검색광고, 특화 매체</div>
                    <div className="text-xs bg-white/10 px-2 py-1 rounded inline-block text-[#d5a11e] font-semibold">Goal: 폼/다운로드</div>
                </div>
            </div>
          </div>

          {/* Bottom Funnel */}
          <div className="w-[70%] relative group z-10 -mt-1">
            <div className="h-32 bg-[#001e40] rounded-b-3xl flex items-center justify-between px-6 md:px-12 text-white shadow-lg relative transform transition hover:scale-[1.01] hover:shadow-xl mx-auto">
                <div className="flex flex-col">
                    <span className="text-xs opacity-60 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Filter size={12} /> Bottom Funnel
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                        <MousePointerClick className="text-[#d5a11e] shrink-0" />
                        전환 / 결정
                    </h3>
                </div>
                <div className="text-right hidden md:block border-l border-white/10 pl-6">
                    <div className="text-sm font-light mb-2">리타겟팅, 콜드메일</div>
                    <div className="text-xs bg-[#d5a11e] text-[#123a73] px-2 py-1 rounded font-bold inline-block">Goal: 상담 확정 (SQL)</div>
                </div>
            </div>
          </div>

        </div>

        <div className="mt-10 bg-slate-50 border border-slate-200 p-6 rounded-xl text-center shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[#d5a11e]"></div>
            <p className="text-[#123a73] text-sm md:text-base">
                <strong>Key Insight:</strong> B2B는 "한 번 보고 신청"보다 <b>반복 접촉 후 신청</b>이 일반적입니다. <br className="hidden md:block"/>
                따라서 <b>리타겟팅 + 너처링(Middle Funnel)</b>이 없으면 전환이 누락됩니다.
            </p>
        </div>
      </div>
    </Section>
  );
};

export default FunnelSection;