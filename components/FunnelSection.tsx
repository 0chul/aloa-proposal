import React from 'react';
import Section from './Section';
import { Eye, Search, MousePointerClick, Filter, ArrowDown } from 'lucide-react';

const FunnelSection: React.FC = () => {
  return (
    <Section id="funnel" title="통합 퍼널 설계" subtitle="발견 → 검토 → 전환으로 이어지는 유기적 흐름">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center relative">
          
          {/* Top Funnel */}
          <div className="w-full relative group z-30 filter drop-shadow-xl">
            <div className="bg-gradient-to-b from-[#123a73] to-[#1e4b8a] h-40 md:h-36 flex items-center justify-between px-8 md:px-16 text-white relative transform transition hover:scale-[1.02] md:clip-funnel-top rounded-t-xl md:rounded-none">
                <div className="flex flex-col">
                    <span className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Filter size={12} /> Top Funnel
                    </span>
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Eye className="text-[#d5a11e] shrink-0" />
                        발견 / 인지
                    </h3>
                </div>
                <div className="text-right hidden md:block pl-6 border-l border-white/10">
                    <div className="text-sm font-light mb-2 text-blue-100">콘텐츠(블로그), 디스플레이</div>
                    <div className="text-xs bg-black/20 px-3 py-1 rounded-full inline-block text-[#d5a11e] font-semibold border border-[#d5a11e]/30">Goal: 타겟 모수 확보</div>
                </div>
            </div>
          </div>

          {/* Connector */}
          <div className="hidden md:block absolute top-[130px] z-40 text-white/50 animate-bounce">
            <ArrowDown size={24} />
          </div>

          {/* Middle Funnel */}
          <div className="w-full md:w-[85%] relative group z-20 -mt-1 filter drop-shadow-lg">
            <div className="bg-gradient-to-b from-[#1e4b8a] to-[#2a5da3] h-40 md:h-36 flex items-center justify-between px-8 md:px-16 text-white relative transform transition hover:scale-[1.02] md:clip-funnel-mid">
                <div className="flex flex-col md:pl-8">
                    <span className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Filter size={12} /> Middle Funnel
                    </span>
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Search className="text-[#d5a11e] shrink-0" />
                        검토 / 학습
                    </h3>
                </div>
                <div className="text-right hidden md:block pl-6 border-l border-white/10 md:pr-8">
                    <div className="text-sm font-light mb-2 text-blue-100">검색광고, 특화 매체</div>
                    <div className="text-xs bg-black/20 px-3 py-1 rounded-full inline-block text-[#d5a11e] font-semibold border border-[#d5a11e]/30">Goal: 폼/다운로드</div>
                </div>
            </div>
          </div>

          {/* Connector */}
          <div className="hidden md:block absolute top-[270px] z-40 text-white/50 animate-bounce">
            <ArrowDown size={24} />
          </div>

          {/* Bottom Funnel */}
          <div className="w-full md:w-[70%] relative group z-10 -mt-1 filter drop-shadow-md">
            <div className="bg-gradient-to-b from-[#2a5da3] to-[#123a73] h-40 md:h-36 flex items-center justify-between px-8 md:px-16 text-white relative transform transition hover:scale-[1.02] md:clip-funnel-bot rounded-b-xl md:rounded-b-3xl">
                <div className="flex flex-col md:pl-12">
                    <span className="text-xs text-blue-200 font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Filter size={12} /> Bottom Funnel
                    </span>
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <MousePointerClick className="text-[#d5a11e] shrink-0" />
                        전환 / 결정
                    </h3>
                </div>
                <div className="text-right hidden md:block pl-6 border-l border-white/10 md:pr-12">
                    <div className="text-sm font-light mb-2 text-blue-100">리타겟팅, 콜드메일</div>
                    <div className="text-xs bg-[#d5a11e] text-[#123a73] px-3 py-1 rounded-full font-bold inline-block shadow-lg">Goal: 상담 확정 (SQL)</div>
                </div>
            </div>
          </div>

        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 p-6 rounded-xl text-center shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1.5 h-full bg-[#d5a11e]"></div>
            <p className="text-[#123a73] text-sm md:text-base leading-relaxed">
                <span className="inline-block bg-[#d5a11e] text-white text-xs font-bold px-2 py-0.5 rounded mb-2 md:mb-0 md:mr-2">INSIGHT</span>
                B2B는 "한 번 보고 신청"보다 <b>반복 접촉 후 신청</b>이 일반적입니다. 
                따라서 <b>리타겟팅 + 너처링(Middle Funnel)</b>이 없으면 전환이 누락됩니다.
            </p>
        </div>
      </div>
    </Section>
  );
};

export default FunnelSection;