import React from 'react';
import Section from './Section';
import { Megaphone, Globe, Cog, Database, Repeat, UserCheck, ArrowRight, Zap, Layers, BarChart3, Activity } from 'lucide-react';

const WorkflowSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      icon: <Megaphone size={28} />,
      title: "Traffic Entry",
      subtitle: "잠재 타겟 유인",
      desc: "검색광고와 특화 매체를 활용해 '배차 효율'에 갈증을 느끼는 운송사를 선별적으로 유입시킵니다.",
      tags: ["High Intent", "Segmentation"]
    },
    {
      id: '02',
      icon: <Globe size={28} />,
      title: "Value Offer",
      subtitle: "가치 기반 제안",
      desc: "운송사 관리 효율화 리포트, 사례집 등 '즉각적인 도움'이 되는 자료를 통해 신뢰를 구축합니다.",
      tags: ["Trust Asset", "Education"]
    },
    {
      id: '03',
      icon: <Repeat size={28} />,
      title: "Retargeting Loop",
      subtitle: "이탈 방지 엔진",
      desc: "자료를 확인한 유저가 고민하는 동안, 지속적인 리타겟팅으로 브랜드 인지도를 유지합니다.",
      tags: ["Omnichannel", "Pixel Sync"]
    },
    {
      id: '04',
      icon: <UserCheck size={28} />,
      title: "SQL Delivery",
      subtitle: "고품질 리드 확정",
      desc: "전환 의사가 확인된 데이터만을 영업팀에 즉시 전달하여 미팅 성공률을 극대화합니다.",
      tags: ["Sales Ready", "API Sync"],
      highlight: true
    }
  ];

  return (
    <Section id="workflow" title="리드 엔진 아키텍처" subtitle="단순 유입을 넘어 상담 확정까지의 정밀한 데이터 파이프라인" dark className="!py-28 overflow-hidden">
      <div className="relative">
        
        {/* Connection Visuals (Desktop) */}
        <div className="hidden lg:block absolute top-[110px] left-0 right-0 w-full pointer-events-none z-0">
          <svg width="100%" height="20" viewBox="0 0 1000 20" fill="none" className="w-full">
            <path d="M0 10 H1000" stroke="rgba(213, 161, 30, 0.2)" strokeWidth="2" />
            <path d="M0 10 H1000" stroke="#d5a11e" strokeWidth="2" className="animate-dash" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className={`w-full p-8 rounded-[2.5rem] border transition-all duration-500 transform group-hover:-translate-y-4 flex flex-col h-full relative overflow-hidden ${
                step.highlight 
                ? 'bg-[#d5a11e] border-[#d5a11e] shadow-2xl shadow-[#d5a11e]/30 text-[#123a73]' 
                : 'bg-[#1e4b8a]/30 border-white/10 backdrop-blur-xl hover:bg-[#1e4b8a]/50'
              }`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                {/* Step Number */}
                <div className={`text-[4rem] font-black absolute -top-4 -left-2 opacity-5 ${step.highlight ? 'text-[#123a73]' : 'text-white'}`}>
                  {step.id}
                </div>

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-xl transition-transform group-hover:rotate-6 ${
                  step.highlight ? 'bg-[#123a73] text-[#d5a11e]' : 'bg-[#d5a11e] text-[#123a73]'
                }`}>
                  {step.icon}
                </div>

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-1 tracking-tight ${step.highlight ? 'text-[#123a73]' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${step.highlight ? 'text-[#123a73]/60' : 'text-[#d5a11e]'}`}>
                    {step.subtitle}
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-10 flex-grow ${step.highlight ? 'text-[#123a73]/80 font-medium' : 'text-slate-300'}`}>
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-current/10">
                  {step.tags.map(tag => (
                    <span key={tag} className={`text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                      step.highlight ? 'bg-[#123a73] text-white' : 'bg-white/10 text-blue-200'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Vertical flow dots (Mobile/Tablet) */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden h-12 flex flex-col items-center justify-center gap-1 my-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] animate-flow-dot delay-0"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] animate-flow-dot delay-75"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d5a11e] animate-flow-dot delay-150"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-[#d5a11e]/20 rounded-2xl flex items-center justify-center text-[#d5a11e]">
                  <Activity size={32} />
              </div>
              <div>
                  <h4 className="text-xl font-bold text-white">Continuous Growth Engine</h4>
                  <p className="text-sm text-slate-400">데이터가 쌓일수록 타겟팅 정확도는 기하급수적으로 상승합니다.</p>
              </div>
          </div>
          <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#123a73] bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                      DATA_{i}
                  </div>
              ))}
          </div>
      </div>
    </Section>
  );
};

export default WorkflowSection;