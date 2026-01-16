import React from 'react';
import Section from './Section';

const ScheduleSection: React.FC = () => {
  const tasks = [
    { label: "Tracking/전환설정", months: [1] },
    { label: "Landing/Offer 구축", months: [1, 2] },
    { label: "검색광고(핵심)", months: [2, 3, 4, 5, 6], main: true },
    { label: "리타겟팅(전환닫기)", months: [3, 4, 5, 6] },
    { label: "콘텐츠(블로그/OSMU)", months: [3, 4, 5, 6] },
    { label: "특화매체 테스트(리드젠)", months: [4, 6] },
    { label: "사람인 기업회원 eDM", months: [5] },
    { label: "콜드메일(툴 기반)", months: [5, 6] },
    { label: "최적화/승자조합 고정", months: [5, 6] },
  ];

  const milestones = [
    { month: "M1", title: "구조 완성", desc: "리드 측정 가능한 기본 구조 완성 (트래킹/전환/랜딩/폼)" },
    { month: "M2", title: "첫 리드 + 병목 확인", desc: "검색광고로 '첫 리드 발생' 및 병목(폼/오퍼/키워드) 점검" },
    { month: "M3", title: "루틴 가동", desc: "리타겟팅 + 콘텐츠 가동 → 끊기지 않는 리드 흐름" },
    { month: "M4", title: "소스 다변화", desc: "특화매체(리드젠) 1차 테스트로 리드 소스 확장" },
    { month: "M5", title: "파이프라인 확장", desc: "콜드메일(툴 기반) + 사람인 eDM 테스트" },
    { month: "M6", title: "승자 고정", desc: "승자 조합(키워드/랜딩/오퍼) 고정 → 예측 가능한 운영" },
  ];

  return (
    <Section id="schedule" title="6개월 실행 스케줄" subtitle="주먹구구식 운영이 아닌, 계획된 파이프라인 구축">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Gantt Chart Area */}
        <div className="flex-grow lg:w-2/3">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm overflow-hidden">
            <h3 className="font-bold text-[#123a73] mb-6 flex items-center justify-between">
                <span>실행 로드맵 (Gantt)</span>
                <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded">M = Month</span>
            </h3>
            
            <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                    {/* Header */}
                    <div className="grid grid-cols-8 mb-4 border-b border-slate-200 pb-2">
                        <div className="col-span-2 font-bold text-slate-400 text-xs uppercase tracking-wider pl-2">Activity</div>
                        {[1, 2, 3, 4, 5, 6].map((m) => (
                        <div key={m} className="col-span-1 text-center font-bold text-[#123a73] text-sm">M{m}</div>
                        ))}
                    </div>

                    {/* Rows */}
                    <div className="space-y-3 relative">
                        {/* Vertical Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-8 pointer-events-none h-full">
                            <div className="col-span-2"></div>
                            {[1, 2, 3, 4, 5, 6].map((m) => (
                                <div key={m} className="col-span-1 border-l border-slate-100 h-full"></div>
                            ))}
                        </div>

                        {tasks.map((task, idx) => (
                        <div key={idx} className="grid grid-cols-8 items-center relative z-10 py-1 hover:bg-slate-50 transition rounded">
                            <div className="col-span-2 text-xs md:text-sm font-bold text-slate-700 truncate pr-4 pl-2" title={task.label}>
                                {task.label}
                            </div>
                            {/* Bars */}
                            {[1, 2, 3, 4, 5, 6].map((m) => {
                                const isActive = task.months.includes(m);
                                const isPrevActive = task.months.includes(m - 1);
                                const isNextActive = task.months.includes(m + 1);
                                
                                return (
                                    <div key={m} className="col-span-1 h-8 flex items-center justify-center px-0.5">
                                    {isActive && (
                                        <div 
                                            className={`
                                                h-5 w-full shadow-sm transition-all duration-500
                                                ${task.main ? 'bg-[#123a73]' : 'bg-[#123a73]/70'}
                                                ${!isPrevActive ? 'rounded-l-md' : ''}
                                                ${!isNextActive ? 'rounded-r-md' : ''}
                                            `}
                                        ></div>
                                    )}
                                    </div>
                                );
                            })}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3 items-start">
                <div className="text-amber-500 mt-0.5 text-lg">💡</div>
                <p className="text-sm text-slate-700 font-medium">
                    "6개월로 늘리되, 월 1회 몰아서 하면 성과가 나오지 않습니다. <br className="hidden md:block"/>
                    최소 <span className="text-[#123a73] font-bold underline decoration-amber-400 decoration-2">주간 단위로 ‘운영 루틴’</span>이 유지되어야 합니다."
                </p>
            </div>
          </div>
        </div>

        {/* Milestones Area */}
        <div className="lg:w-1/3">
           <div className="bg-[#123a73] text-white rounded-2xl p-6 shadow-xl h-full relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d5a11e]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <h3 className="font-bold text-lg mb-6 flex items-center gap-2 relative z-10">
                    <span className="w-1.5 h-6 bg-[#d5a11e] rounded-full block"></span>
                    기간별 핵심 목표
                </h3>
                
                <div className="space-y-6 relative z-10">
                    {milestones.map((ms, i) => (
                        <div key={i} className="flex gap-4 group">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-[#d5a11e]/50 flex items-center justify-center text-xs font-bold text-[#d5a11e] shrink-0 group-hover:bg-[#d5a11e] group-hover:text-[#123a73] transition">
                                    {ms.month}
                                </div>
                                {i !== milestones.length - 1 && <div className="w-px h-full bg-white/10 my-1"></div>}
                            </div>
                            <div className="pb-2">
                                <h4 className="font-bold text-white text-sm mb-1 group-hover:text-[#d5a11e] transition">{ms.title}</h4>
                                <p className="text-xs text-slate-300 leading-relaxed opacity-80">{ms.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </div>

      </div>
    </Section>
  );
};

export default ScheduleSection;