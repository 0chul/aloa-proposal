
import React from 'react';
import { FileText, Target, Zap, ShieldCheck, Download, ChevronRight, Lock, Activity, Database, Share2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-36 pb-24 border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#123a73]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d5a11e]/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7">
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
            
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#123a73] leading-tight mb-8 tracking-tight">
              운송사의 성장을 가속하는
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#123a73] via-[#d5a11e] to-[#b88a14]">
                시스템 기반 리드 엔진
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
              본 제안서는 운송사 타겟으로 ALOA의 리드를<br />
              예측 가능하게 확보하기 위해 설계된<br />
              디지털 광고 실행 전략 보고서입니다.
            </p>

            <div className="bg-[#d5a11e]/10 border border-[#d5a11e]/30 rounded-2xl p-6 inline-block max-w-2xl shadow-sm">
              <p className="text-[#123a73] text-sm md:text-base font-medium flex items-start gap-3">
                <ShieldCheck className="shrink-0 mt-1 text-[#d5a11e]" size={22} />
                <span>
                  <strong className="text-lg block mb-1">핵심 원칙</strong>
                  단순 "트래픽"이 아닌 <b>"리드(Lead)"</b>를 만듭니다. 모든 채널은 폼, 신청,<br className="hidden md:block" />
                  설문, 회신 등 명확한 전환 포인트로 연결됩니다.
                </span>
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
                {/* Visual Lead Engine Mockup */}
                <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Activity size={100} className="text-[#123a73]" />
                    </div>
                    <h3 className="text-[#123a73] font-bold mb-6 flex items-center gap-2">
                        <Database size={20} className="text-[#d5a11e]" />
                        Lead Engine Architecture
                    </h3>
                    
                    <div className="space-y-6">
                        {/* Flow Visual */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">
                                <span>Input</span>
                                <span>System</span>
                                <span>Output</span>
                            </div>
                            <div className="relative h-24 bg-slate-50 rounded-2xl border border-slate-100 p-4 flex items-center justify-around overflow-hidden">
                                <div className="absolute inset-0 pointer-events-none opacity-20">
                                    <svg width="100%" height="100%" viewBox="0 0 400 100" fill="none">
                                        <path d="M50 50 Q 200 10, 350 50" stroke="#123a73" strokeWidth="2" strokeDasharray="5 5" className="animate-dash" />
                                        <path d="M50 50 Q 200 90, 350 50" stroke="#d5a11e" strokeWidth="2" strokeDasharray="5 5" className="animate-dash" />
                                    </svg>
                                </div>
                                <div className="w-12 h-12 bg-[#123a73] rounded-xl flex items-center justify-center text-white shadow-lg relative z-10">
                                    <Share2 size={20} />
                                </div>
                                <div className="w-16 h-16 bg-white border-2 border-[#d5a11e] rounded-full flex items-center justify-center shadow-xl relative z-10">
                                    <div className="w-10 h-10 bg-[#d5a11e]/10 rounded-full flex items-center justify-center animate-pulse">
                                        <Target size={24} className="text-[#d5a11e]" />
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg relative z-10">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <div className="text-2xl font-black text-[#123a73]">1.2k+</div>
                                <div className="text-[10px] text-slate-500 font-bold">AVG. MONTHLY TRAFFIC</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                <div className="text-2xl font-black text-[#d5a11e]">4.8%</div>
                                <div className="text-[10px] text-slate-500 font-bold">CONVERSION RATE</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                <FileText size={16} className="text-slate-400" />
                            </div>
                            <span className="text-sm font-bold text-slate-700">제안 범위 (Core Scope)</span>
                        </div>
                        <ul className="space-y-3">
                            {['디지털 광고 매체 믹스', '리드 전환 최적화 랜딩', '데이터 트래킹 시스템'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                                    <div className="w-1 h-1 rounded-full bg-[#d5a11e]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Visual decorative circles */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d5a11e] rounded-full opacity-10 blur-2xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#123a73] rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;