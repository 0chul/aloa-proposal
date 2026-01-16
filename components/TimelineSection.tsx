
import React from 'react';
import Section from './Section';
import { Flag, Rocket, Settings } from 'lucide-react';

const TimelineSection: React.FC = () => {
  return (
    <Section id="timeline" title="롤아웃 플랜 (Rollout)" subtitle="작게 시작해 빠르게 검증하고 확장합니다." className="bg-slate-50">
      <div className="relative mt-12 px-4">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-[100px] left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-[#123a73]/20 to-slate-200 z-0"></div>
        
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* Phase 1 */}
            <div className="group">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#123a73] h-full flex flex-col">
                    <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6 group-hover:bg-[#123a73] group-hover:text-white transition-all duration-300 relative z-20 ring-8 ring-white shadow-sm border border-slate-100">
                        <Flag size={32} />
                    </div>
                    <div className="text-center flex-grow">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Step 01</span>
                        <h3 className="text-xl font-bold text-[#123a73] mb-2">Foundation</h3>
                        <p className="text-sm text-slate-500 mb-6">퍼널, 추적, 랜딩 기본기 고정</p>
                        
                        <div className="bg-slate-50 rounded-xl p-4 text-left">
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] mt-1.5 shrink-0" />
                                    <span>전환용 랜딩 2~3종 구축</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] mt-1.5 shrink-0" />
                                    <span>픽셀/전환 이벤트 세팅</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] mt-1.5 shrink-0" />
                                    <span>검색광고 핵심 그룹 런칭</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

             {/* Phase 2 */}
            <div className="group">
                <div className="bg-white p-6 rounded-2xl border-2 border-[#123a73] shadow-xl transition duration-300 hover:-translate-y-2 h-full flex flex-col relative md:-mt-8">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d5a11e] text-[#123a73] text-xs font-bold px-3 py-1 rounded-full shadow-md z-30 whitespace-nowrap">
                        CORE STAGE
                    </div>
                    <div className="w-20 h-20 mx-auto bg-[#123a73] rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-[#123a73]/30 relative z-20 ring-8 ring-white">
                        <Rocket size={32} />
                    </div>
                    <div className="text-center flex-grow">
                         <span className="text-xs font-bold text-[#d5a11e] uppercase tracking-widest block mb-2">Step 02</span>
                        <h3 className="text-xl font-bold text-[#123a73] mb-2">Expansion</h3>
                        <p className="text-sm text-slate-500 mb-6">모수 확장 + 리드 소스 다변화</p>

                         <div className="bg-[#123a73]/5 rounded-xl p-4 text-left">
                             <ul className="space-y-3 text-sm text-slate-600">
                                 <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#123a73] mt-1.5 shrink-0" />
                                    <span className="font-semibold">디스플레이로 타겟 확장</span>
                                </li>
                                 <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#123a73] mt-1.5 shrink-0" />
                                    <span className="font-semibold">특화 매체 소규모 테스트</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#123a73] mt-1.5 shrink-0" />
                                    <span>리타겟팅 시나리오 세분화</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phase 3 */}
            <div className="group">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#123a73] h-full flex flex-col">
                    <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6 group-hover:bg-[#d5a11e] group-hover:text-white transition-all duration-300 relative z-20 ring-8 ring-white shadow-sm border border-slate-100">
                        <Settings size={32} />
                    </div>
                     <div className="text-center flex-grow">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Step 03</span>
                        <h3 className="text-xl font-bold text-[#123a73] mb-2">Optimization</h3>
                        <p className="text-sm text-slate-500 mb-6">전환 효율 및 품질 개선</p>
                        
                        <div className="bg-slate-50 rounded-xl p-4 text-left">
                             <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] mt-1.5 shrink-0" />
                                    <span>키워드/랜딩 A/B 테스트</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] mt-1.5 shrink-0" />
                                    <span>콜드메일 데이터 기반 개선</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] mt-1.5 shrink-0" />
                                    <span>성과 우수 채널 스케일업</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default TimelineSection;
