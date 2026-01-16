import React from 'react';
import Section from './Section.tsx';
import { Eye, Search, MousePointerClick, Filter, ArrowDown, Share2, Target, Zap, ChevronDown } from 'lucide-react';

const FunnelSection: React.FC = () => {
  return (
    <Section id="funnel" title="Strategic Funnel" subtitle="잠재고객의 심리 변화에 따른 채널 최적화">
      <div className="max-w-4xl mx-auto py-12">
        <div className="relative flex flex-col items-center">
          
          {/* Funnel Layer 1: Awareness */}
          <div className="w-full relative z-30 group">
            <div className="bg-[#123a73] text-white p-8 md:p-12 clip-funnel-top rounded-t-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02] border-t border-white/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Eye className="text-[#d5a11e]" size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-1">인식 단계 (Awareness)</h3>
                    <p className="text-blue-200 text-sm font-medium">우리 브랜드와 솔루션을 처음 접하는 지점</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-[#d5a11e] uppercase tracking-widest mb-2">핵심 채널</div>
                  <div className="flex gap-2 justify-end">
                    {['블로그', 'GDN', '유튜브'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-[10px] border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#123a73] w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-xl z-40">
                <ChevronDown className="text-white animate-bounce" size={20} />
            </div>
          </div>

          {/* Funnel Layer 2: Consideration */}
          <div className="w-[92%] relative z-20 group -mt-1">
            <div className="bg-[#1e4b8a] text-white p-8 md:p-12 clip-funnel-mid shadow-xl transition-all duration-500 hover:scale-[1.02] border-t border-white/10">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Search className="text-[#d5a11e]" size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-1">검토 단계 (Consideration)</h3>
                    <p className="text-blue-200 text-sm font-medium">타사와의 차별점과 구체적 혜택을 비교하는 구간</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-[#d5a11e] uppercase tracking-widest mb-2">핵심 액션</div>
                  <div className="flex gap-2 justify-end">
                    {['검색광고', '사례 다운로드'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-[10px] border border-white/5">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1e4b8a] w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-xl z-40">
                <ChevronDown className="text-white animate-bounce" size={20} />
            </div>
          </div>

          {/* Funnel Layer 3: Conversion */}
          <div className="w-[84%] relative z-10 group -mt-1">
            <div className="bg-gradient-to-b from-[#2a5da3] to-[#123a73] text-white p-8 md:p-12 clip-funnel-bot rounded-b-3xl shadow-lg border-t border-white/10 border-b-8 border-[#d5a11e]">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#d5a11e] rounded-2xl flex items-center justify-center shadow-lg shadow-[#d5a11e]/20">
                    <Zap className="text-[#123a73]" size={36} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-1">전환 단계 (Conversion)</h3>
                    <p className="text-[#d5a11e] text-sm font-bold uppercase tracking-wider">SQL (Sales Qualified Leads) 확보</p>
                  </div>
                </div>
                <div className="text-right bg-[#123a73] p-4 rounded-2xl border border-white/10">
                  <div className="text-3xl font-black text-[#d5a11e]">Final Goal</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Supporting Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#d5a11e]/10 transition-colors"></div>
                <h4 className="text-xl font-bold text-[#123a73] mb-4">리타겟팅 필터링</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                    상단에서 이탈한 유저는 버려지는 데이터가 아닙니다. 픽셀 데이터를 통해 <b>2차, 3차 제안</b>을 노출하여 퍼널 하단으로 지속적으로 유도합니다.
                </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#d5a11e]/10 transition-colors"></div>
                <h4 className="text-xl font-bold text-[#123a73] mb-4">전환 최적화 랜딩</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                    복잡한 홈페이지가 아닌, 각 단계의 <b>목표 행동(Action)</b>에만 집중된 전용 랜딩페이지를 활용하여 리드 획득률을 극대화합니다.
                </p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default FunnelSection;