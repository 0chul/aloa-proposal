import React from 'react';
import Section from './Section';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const budgetData = [
  { name: '검색광고', value: 30, color: '#123a73' },
  { name: '디스플레이', value: 25, color: '#2563eb' },
  { name: '특화매체', value: 20, color: '#d5a11e' },
  { name: '콘텐츠', value: 15, color: '#64748b' },
  { name: '리타겟팅', value: 10, color: '#94a3b8' },
];

const growthData = [
  { month: 'M1', leads: 20 },
  { month: 'M2', leads: 45 },
  { month: 'M3', leads: 80 },
  { month: 'M4', leads: 130 },
  { month: 'M5', leads: 190 },
  { month: 'M6', leads: 280 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-lg">
        <p className="font-bold text-[#123a73]">{label}</p>
        <p className="text-sm text-slate-600">
          Leads: <span className="font-bold text-[#d5a11e]">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const MetricsSection: React.FC = () => {
  return (
    <Section id="metrics" title="측정 및 예산 배분" subtitle="데이터 기반의 의사결정과 예측 가능한 성장">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Charts Column */}
        <div className="space-y-6">
            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#123a73]">예산 배분 (Budget Mix)</h3>
                    <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">Recommended</span>
                </div>
                <div className="h-64 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={budgetData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {budgetData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                ))}
                            </Pie>
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                        <div className="text-xs text-slate-400 font-bold uppercase">Focus</div>
                        <div className="text-xl font-bold text-[#123a73]">SA 30%</div>
                    </div>
                </div>
                <p className="text-center text-xs text-slate-500 border-t border-slate-100 pt-3">
                    초기에는 <b>검색광고(SA)</b>에 집중하여 확실한 수요를 포착하고,<br/> 이후 디스플레이/특화매체로 확장합니다.
                </p>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#123a73]">예상 리드 성장 (Projected)</h3>
                    <span className="text-xs bg-[#d5a11e]/10 text-[#d5a11e] px-2 py-1 rounded font-bold">J-Curve</span>
                </div>
                <div className="h-64">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                            <YAxis tickLine={false} axisLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                            <Tooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc'}} />
                            <Bar dataKey="leads" radius={[4, 4, 0, 0]} barSize={32}>
                                {growthData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`rgba(18, 58, 115, ${0.4 + (index * 0.12)})`} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Table Column */}
        <div className="flex flex-col h-full">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-full">
                <h3 className="font-bold text-xl text-[#123a73] mb-6 flex items-center gap-2">
                    KPI Framework
                    <div className="h-px bg-slate-200 flex-grow ml-4"></div>
                </h3>
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm mb-8">
                    <table className="w-full text-sm text-left bg-white">
                        <thead className="bg-[#123a73] text-white">
                            <tr>
                                <th className="p-4 font-medium w-1/4">Funnel</th>
                                <th className="p-4 font-medium">Core Metrics</th>
                                <th className="p-4 font-medium hidden sm:table-cell">Lever</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr className="group hover:bg-slate-50 transition">
                                <td className="p-4 font-bold text-[#123a73] border-l-4 border-transparent group-hover:border-[#d5a11e]">상단 (발견)</td>
                                <td className="p-4 text-slate-600">방문자 수, CPM, 유입 채널 비중</td>
                                <td className="p-4 text-slate-500 text-xs hidden sm:table-cell">타겟팅 최적화</td>
                            </tr>
                            <tr className="group hover:bg-slate-50 transition">
                                <td className="p-4 font-bold text-[#123a73] border-l-4 border-transparent group-hover:border-[#d5a11e]">중단 (검토)</td>
                                <td className="p-4 text-slate-600">CTR, 상세페이지 체류시간, 이탈률</td>
                                <td className="p-4 text-slate-500 text-xs hidden sm:table-cell">콘텐츠 매력도</td>
                            </tr>
                            <tr className="group hover:bg-amber-50/50 transition bg-amber-50/20">
                                <td className="p-4 font-bold text-[#123a73] border-l-4 border-transparent group-hover:border-[#d5a11e]">하단 (전환)</td>
                                <td className="p-4 text-slate-600">
                                    <span className="inline-block px-2 py-1 bg-[#d5a11e] text-white rounded font-bold text-xs mb-1 shadow-sm">SQL (유효상담)</span><br/>
                                    CPA (전환단가)
                                </td>
                                <td className="p-4 text-slate-500 text-xs hidden sm:table-cell">양식 간소화</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div>
                    <h4 className="font-bold text-slate-700 mb-3 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        필수 트래킹 이벤트 (Event Tagging)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {['Page_View', 'Scroll_70%', 'CTA_Click', 'Brochure_Download', 'Form_Submit', 'Call_Click'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-xs rounded-lg font-mono hover:border-[#123a73] hover:text-[#123a73] transition cursor-default">
                                {tag}
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