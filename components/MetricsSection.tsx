
import React from 'react';
import Section from './Section';
import { 
    PieChart, Pie, Cell, ResponsiveContainer, 
    AreaChart, Area, XAxis, YAxis, Tooltip, 
    CartesianGrid
} from 'recharts';

const budgetData = [
  { name: '검색광고', value: 30, color: '#123a73', desc: '고관여 타겟 직접 전환' },
  { name: '디스플레이', value: 25, color: '#2563eb', desc: '브랜드 인지 및 모수 확장' },
  { name: '특화매체', value: 20, color: '#d5a11e', desc: '운송/물류 전문 타겟팅' },
  { name: '콘텐츠', value: 15, color: '#64748b', desc: '신뢰 구축 및 정보 제공' },
  { name: '리타겟팅', value: 10, color: '#94a3b8', desc: '이탈 유저 재유입 유도' },
];

const projectionData = [
  { month: '1월', traffic: 1200, leads: 20, cost: 50 },
  { month: '2월', traffic: 2500, leads: 45, cost: 45 },
  { month: '3월', traffic: 4200, leads: 80, cost: 38 },
  { month: '4월', traffic: 6800, leads: 140, cost: 32 },
  { month: '5월', traffic: 9500, leads: 210, cost: 28 },
  { month: '6월', traffic: 12000, leads: 310, cost: 25 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    if (payload[0].name === '검색광고' || payload[0].payload.name) {
         // Pie Chart Tooltip
         return (
            <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-lg">
                <p className="font-bold text-[#123a73] text-sm">{payload[0].name}</p>
                <p className="text-xs text-slate-500">{payload[0].value}%</p>
            </div>
         )
    }
    // Area Chart Tooltip
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-2xl rounded-xl">
        <p className="font-bold text-[#123a73] mb-2 border-b border-slate-100 pb-1">{label}</p>
        <div className="space-y-1">
            <p className="text-xs flex justify-between gap-4">
                <span className="text-slate-500">예상 리드:</span>
                <span className="font-bold text-[#123a73]">{payload[0].value}건</span>
            </p>
            <p className="text-xs flex justify-between gap-4">
                <span className="text-slate-500">리드 단가:</span>
                <span className="font-bold text-[#d5a11e]">{payload[1].value}천원</span>
            </p>
        </div>
      </div>
    );
  }
  return null;
};

const MetricsSection: React.FC = () => {
  return (
    <Section id="metrics" title="측정 및 예산 배분" subtitle="데이터 기반의 의사결정과 예측 가능한 성장">
      <div className="grid lg:grid-cols-12 gap-8">
        
        {/* Left: Main Growth Projection & Budget */}
        <div className="lg:col-span-8 space-y-8">
            {/* Simulation Chart */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="font-bold text-[#123a73] text-lg">성과 시뮬레이션 (Growth Simulation)</h3>
                        <p className="text-xs text-slate-400">유입량 증가에 따른 리드 수 및 CPA(리드단가) 변화 추이</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#123a73]"></div>
                            <span className="text-[10px] font-bold text-slate-500">리드 수</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#d5a11e]"></div>
                            <span className="text-[10px] font-bold text-slate-500">CPA 추이</span>
                        </div>
                    </div>
                </div>
                <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={projectionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#123a73" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#123a73" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                            <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                            <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area yAxisId="left" type="monotone" dataKey="leads" stroke="#123a73" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                            <Area yAxisId="right" type="monotone" dataKey="cost" stroke="#d5a11e" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-2xl text-[11px] text-slate-500 flex items-center gap-4">
                    <span className="font-bold text-[#123a73] shrink-0">INSIGHT</span>
                    <p>시스템이 고도화될수록 <b>데이터 학습 효과</b>로 인해 유입량 대비 고품질 리드 비율이 높아지고, 결과적으로 리드당 획득 비용(CPA)은 점진적으로 하락합니다.</p>
                </div>
            </div>

            {/* Budget Allocation (Redesigned & Expanded) */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                 <div className="flex items-center justify-between mb-6">
                    <div>
                         <h3 className="font-bold text-[#123a73] text-lg">매체별 예산 최적화 (Budget Allocation)</h3>
                         <p className="text-xs text-slate-400">채널별 성과 기여도에 따른 유동적 배분 모델</p>
                    </div>
                 </div>

                 <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Chart Side */}
                    <div className="w-full md:w-1/2 h-64 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                    data={budgetData} 
                                    cx="50%" 
                                    cy="50%" 
                                    innerRadius={60} 
                                    outerRadius={90} 
                                    paddingAngle={5} 
                                    dataKey="value"
                                >
                                    {budgetData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={2} stroke="#fff" />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Label */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                            <div className="text-2xl font-black text-[#123a73]">Total</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase">Budget</div>
                        </div>
                    </div>

                    {/* Legend Side (Moved here to fix overlap issue) */}
                    <div className="w-full md:w-1/2 space-y-3">
                        {budgetData.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: item.color }}></div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-700">{item.name}</div>
                                        <div className="text-[10px] text-slate-400">{item.desc}</div>
                                    </div>
                                </div>
                                <div className="text-sm font-bold text-[#123a73] bg-blue-50/50 px-2 py-1 rounded">
                                    {item.value}%
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center md:text-left">
                    <p className="text-[11px] text-slate-400 flex items-center gap-2 justify-center md:justify-start">
                        <span className="w-1 h-1 rounded-full bg-[#d5a11e]"></span>
                        실제 광고 집행 효율 및 입찰가 변동에 따라 예산 비중은 실시간으로 조정될 수 있습니다.
                    </p>
                </div>
            </div>
        </div>

        {/* Right: KPI Framework */}
        <div className="lg:col-span-4">
            <div className="bg-[#123a73] rounded-3xl p-8 text-white h-full shadow-xl shadow-[#123a73]/20 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#d5a11e] rounded-full"></span>
                    KPI Framework
                </h3>

                <div className="space-y-10">
                    {[
                        { 
                            label: "TOP (Awareness)", 
                            metric: "CPM / CTR / Traffic", 
                            desc: "최대한 많은 '적격 타겟'에게 인지시키고 있는가?",
                            color: "bg-blue-400/20"
                        },
                        { 
                            label: "MID (Consideration)", 
                            metric: "CVR / Stay Time", 
                            desc: "우리의 제안이 그들의 고통을 해결해줄 것이라 믿는가?",
                            color: "bg-amber-400/20"
                        },
                        { 
                            label: "BOT (Conversion)", 
                            metric: "SQL Count / CPA", 
                            desc: "영업팀이 바로 미팅을 잡을 수 있는 '진짜 리드'인가?",
                            color: "bg-[#d5a11e]"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative pl-6 border-l border-white/10 group">
                            <div className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full ${idx === 2 ? 'bg-[#d5a11e]' : 'bg-white/30'} group-hover:scale-150 transition-transform`}></div>
                            <div className={`text-[10px] font-black tracking-widest uppercase mb-1 ${idx === 2 ? 'text-[#d5a11e]' : 'text-blue-300'}`}>
                                {item.label}
                            </div>
                            <h4 className="font-bold text-lg mb-1">{item.metric}</h4>
                            <p className="text-xs text-blue-100/60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <h5 className="text-[11px] font-bold text-[#d5a11e] uppercase tracking-wider mb-3">핵심 측정 도구</h5>
                    <div className="flex flex-wrap gap-2">
                        {['GA4', 'GTM', 'Pixel', 'Hotjar', 'CRM Sync'].map(tool => (
                            <span key={tool} className="text-[10px] px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/80">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default MetricsSection;
