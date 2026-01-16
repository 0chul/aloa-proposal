import React from 'react';
import Section from './Section';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const budgetData = [
  { name: '검색광고', value: 30, color: '#123a73' },
  { name: '디스플레이', value: 25, color: '#1e5bb8' },
  { name: '특화매체', value: 20, color: '#d5a11e' },
  { name: '콘텐츠', value: 15, color: '#475569' },
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

const MetricsSection: React.FC = () => {
  return (
    <Section id="metrics" title="측정 및 예산 배분" subtitle="데이터 기반의 의사결정과 예측 가능한 성장">
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Charts */}
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-[#123a73] mb-4">예산 배분 (Recommended)</h3>
                <div className="h-64">
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
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${value}%`} />
                            <Legend verticalAlign="bottom" height={36}/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-center text-xs text-slate-500 mt-2">
                    *검색광고(30%)에 최우선 투자하여 초기 ROI 확보
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-[#123a73] mb-4">예상 리드 성장 추이 (6개월)</h3>
                <div className="h-64">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={growthData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} />
                            <YAxis hide />
                            <Tooltip cursor={{fill: '#f1f5f9'}} />
                            <Bar dataKey="leads" fill="#123a73" radius={[4, 4, 0, 0]} barSize={40}>
                                {growthData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`rgba(18, 58, 115, ${0.4 + (index * 0.12)})`} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-center text-xs text-slate-500 mt-2">
                    *시스템 안정화(M3) 이후 기하급수적 성장 기대
                </p>
            </div>
        </div>

        {/* Table */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="font-bold text-xl text-[#123a73] mb-6">KPI Framework</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-[#123a73] text-white">
                        <tr>
                            <th className="p-3 rounded-tl-lg">단계</th>
                            <th className="p-3">핵심 지표</th>
                            <th className="p-3 rounded-tr-lg">개선 레버</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                        <tr>
                            <td className="p-3 font-semibold text-[#123a73]">상단 (발견)</td>
                            <td className="p-3 text-slate-600">방문자 수, 노출, 유입 채널 믹스</td>
                            <td className="p-3 text-slate-500 text-xs">크리에이티브 적합성</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-[#123a73]">중단 (검토)</td>
                            <td className="p-3 text-slate-600">CTR, 체류시간, CTA 클릭</td>
                            <td className="p-3 text-slate-500 text-xs">오퍼 가치, 문구 설득력</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-semibold text-[#123a73]">하단 (전환)</td>
                            <td className="p-3 text-slate-600">
                                <span className="inline-block px-2 py-0.5 bg-[#d5a11e]/20 text-[#b88a14] rounded font-bold">리드 수 (SQL)</span><br/>
                                폼 전환율
                            </td>
                            <td className="p-3 text-slate-500 text-xs">폼 간소화, 신뢰 요소</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="mt-8">
                <h4 className="font-bold text-slate-700 mb-2 text-sm">필수 트래킹 이벤트</h4>
                <div className="flex flex-wrap gap-2">
                    {['Landing View', 'CTA Click', 'Form Start', 'Form Submit', 'Download Complete'].map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white border border-slate-200 text-slate-500 text-xs rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default MetricsSection;