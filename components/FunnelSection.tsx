import React from 'react';
import Section from './Section';
import { Eye, Search, Zap, ArrowDown } from 'lucide-react';

const FunnelSection: React.FC = () => {
  return (
    <Section id="funnel" title="Strategic Funnel" subtitle="잠재고객의 심리 변화에 따른 채널 최적화">
      <div className="max-w-5xl mx-auto py-8">
        {/* Dashed Border Container */}
        <div className="border-2 border-dashed border-[#123a73]/30 rounded-[2.5rem] p-8 md:p-12 relative bg-slate-50/50">
          
          <div className="flex flex-col items-center">
            
            {/* Stage 1: Awareness */}
            <div className="w-full bg-[#123a73] rounded-3xl p-8 md:p-10 shadow-xl relative z-30 text-white group hover:scale-[1.01] transition-transform duration-300">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Eye className="text-[#d5a11e]" size={32} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-1">인식 단계 (Awareness)</h3>
                    <p className="text-blue-200 text-sm font-medium">우리 브랜드와 솔루션을 처음 접하는 지점</p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0 mt-2 md:mt-0">
                  <span className="text-[#d5a11e] text-[10px] font-bold uppercase tracking-widest">핵심 채널</span>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {['블로그', 'GDN', '유튜브'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-[#1e4b8a] rounded-lg text-xs font-medium text-blue-100 border border-white/10 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="-my-5 relative z-40">
               <div className="w-10 h-10 rounded-full bg-[#123a73] border-2 border-white flex items-center justify-center shadow-md animate-bounce">
                  <ArrowDown className="text-white" size={18} />
               </div>
            </div>

            {/* Stage 2: Consideration */}
            <div className="w-[94%] bg-[#1a4480] rounded-3xl p-8 md:p-10 shadow-xl relative z-20 text-white group hover:scale-[1.01] transition-transform duration-300">
               <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Search className="text-[#d5a11e]" size={32} />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-1">검토 단계 (Consideration)</h3>
                    <p className="text-blue-200 text-sm font-medium">타사와의 차별점과 구체적 혜택을 비교하는 구간</p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0 mt-2 md:mt-0">
                  <span className="text-[#d5a11e] text-[10px] font-bold uppercase tracking-widest">핵심 액션</span>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {['검색광고', '사례 다운로드'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-[#2a5591] rounded-lg text-xs font-medium text-blue-100 border border-white/10 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="-my-5 relative z-40">
               <div className="w-10 h-10 rounded-full bg-[#1a4480] border-2 border-white flex items-center justify-center shadow-md animate-bounce delay-100">
                  <ArrowDown className="text-white" size={18} />
               </div>
            </div>

            {/* Stage 3: Conversion */}
            <div className="w-[88%] bg-gradient-to-b from-[#1e4b8a] to-[#123a73] rounded-3xl p-8 md:p-10 shadow-xl relative z-10 text-white border-t border-white/5 group hover:scale-[1.01] transition-transform duration-300">
               <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-2xl bg-[#d5a11e] flex items-center justify-center shrink-0 shadow-lg shadow-[#d5a11e]/20 text-[#123a73]">
                    <Zap size={32} fill="currentColor" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-1">전환 단계 (Conversion)</h3>
                    <p className="text-[#d5a11e] text-sm font-bold uppercase tracking-wider">SQL (Sales Qualified Leads) 확보</p>
                  </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0 mt-2 md:mt-0">
                   <div className="px-6 py-3 bg-[#0f2d5c] rounded-xl border border-white/10 shadow-inner">
                      <span className="text-xl font-black text-[#d5a11e]">Final Goal</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Supporting Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#123a73]/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#d5a11e]/10 transition-colors"></div>
                <h4 className="text-xl font-bold text-[#123a73] mb-4">리타겟팅 필터링</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                    상단에서 이탈한 유저는 버려지는 데이터가 아닙니다. 픽셀 데이터를 통해 <b>2차, 3차 제안</b>을 노출하여 퍼널 하단으로 지속적으로 유도합니다.
                </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#123a73]/30 transition-colors">
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