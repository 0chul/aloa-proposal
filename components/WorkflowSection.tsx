import React from 'react';
import Section from './Section';
import { Megaphone, Globe, Cog, Database, Repeat, UserCheck, ArrowRight, ArrowDown } from 'lucide-react';

const WorkflowSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      icon: <Megaphone className="text-[#123a73]" size={28} />,
      title: "Multi-Channel Entry",
      subtitle: "전방위적 유입",
      desc: "검색, 디스플레이, 콜드메일을 통해 타겟 유저를 엔진으로 유인합니다.",
      tags: ["SA/DA", "Blog", "Mail"]
    },
    {
      id: '02',
      icon: <Globe className="text-[#123a73]" size={28} />,
      title: "Landing Engine",
      subtitle: "전환 최적화",
      desc: "단순 홈페이지가 아닌 '해결책'을 제시하는 랜딩페이지로 리드를 수집합니다.",
      tags: ["Offer", "UX/UI", "Form"]
    },
    {
      id: '03',
      icon: <Repeat className="text-[#d5a11e]" size={28} />,
      title: "Retargeting Loop",
      subtitle: "이탈 방지",
      desc: "전환하지 않은 유저를 추적하여 다시 엔진으로 복귀시키는 순환 구조입니다.",
      tags: ["Pixel", "Remarketing"]
    },
    {
      id: '04',
      icon: <UserCheck className="text-white" size={28} />,
      title: "SQL Output",
      subtitle: "상담 확정",
      desc: "검증된 정보(기업명, 담당자, 연락처)가 포함된 최종 리드를 영업팀에 전달합니다.",
      tags: ["High Quality", "Ready to Buy"],
      highlight: true
    }
  ];

  return (
    <Section id="workflow" title="리드 엔진 워크플로우" subtitle="유입부터 최종 상담 확정까지의 시스템 작동 프로세스">
      <div className="relative">
        {/* Background Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              {/* Card Container */}
              <div className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 transform group-hover:-translate-y-2 flex flex-col h-full ${
                step.highlight 
                ? 'bg-[#123a73] border-[#123a73] shadow-xl shadow-[#123a73]/30' 
                : 'bg-white border-slate-100 shadow-lg shadow-slate-200/50 hover:border-[#123a73]/20'
              }`}>
                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm ${
                  step.highlight ? 'bg-[#d5a11e]' : 'bg-slate-50'
                }`}>
                  {step.icon}
                </div>

                <div className="mb-4">
                  <span className={`text-[10px] font-bold tracking-widest uppercase block mb-1 ${
                    step.highlight ? 'text-blue-200' : 'text-slate-400'
                  }`}>Step {step.id}</span>
                  <h3 className={`text-lg font-bold mb-1 ${step.highlight ? 'text-white' : 'text-[#123a73]'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm font-medium ${step.highlight ? 'text-[#d5a11e]' : 'text-slate-500'}`}>
                    {step.subtitle}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed mb-6 flex-grow ${step.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100/10">
                  {step.tags.map(tag => (
                    <span key={tag} className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                      step.highlight ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Connector Arrows */}
              {idx < steps.length - 1 && (
                <div className="mt-4 lg:hidden">
                  <ArrowDown className="text-slate-300 animate-bounce" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Legend/Logic Box */}
      <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-[#123a73] font-bold text-xl mb-4 flex items-center gap-2">
              <Cog className="animate-spin-slow" size={24} />
              엔진 핵심 로직: "S.F.R"
            </h4>
            <div className="space-y-4">
              {[
                { label: "S", title: "Segment", desc: "운송사의 '결정적 고통(Pain Point)'별 타겟팅 분리" },
                { label: "F", title: "Frictionless", desc: "신청 폼의 허들을 낮추고 가치(자료/진단)를 즉시 제공" },
                { label: "R", title: "Reach-back", desc: "이탈한 98%의 방문자를 7일 이내 다시 불러오는 리타겟팅" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-[#123a73] text-white flex items-center justify-center font-bold shrink-0">
                    {item.label}
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block">{item.title}</span>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            <h4 className="text-slate-700 font-bold mb-4 flex items-center gap-2">
              <Database size={20} className="text-[#d5a11e]" />
              Data Pipeline Info
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span className="text-slate-500">리드 평균 수집 정보</span>
                <span className="font-bold text-[#123a73]">5~7개 항목</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span className="text-slate-500">리타겟팅 빈도</span>
                <span className="font-bold text-[#123a73]">주 3~5회 노출</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                <span className="text-slate-500">실시간 알림(CRM)</span>
                <span className="font-bold text-[#123a73]">3분 이내 전송</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-4 leading-tight italic">
                * 모든 데이터 트래킹은 GTM(Google Tag Manager) 및 GA4를 기반으로 중앙 집중 관리됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkflowSection;