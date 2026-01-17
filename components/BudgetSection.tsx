
import React from 'react';
import Section from './Section';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CheckCircle2, AlertTriangle, TrendingUp, Shield, MousePointer2, Layers } from 'lucide-react';

const BudgetSection: React.FC = () => {
  const COLORS = ['#123a73', '#d5a11e', '#64748b', '#94a3b8', '#cbd5e1'];

  const plans = [
    {
      price: "100",
      unit: "만원/월",
      title: "검증형 (Validation)",
      desc: "리드 가능성과 병목을 6개월 안에 확인",
      theme: "slate",
      data: [
        { name: '검색광고', value: 70 },
        { name: '리타겟팅', value: 20 },
        { name: '콜드메일/기타', value: 10 },
      ],
      details: [
        "네이버 중심 + 구글 보조",
        "방문자/폼이탈 최소 리타겟팅",
        "키워드 10~30개 핵심만 운영"
      ],
      expectation: "리드가 안 나오는 달도 발생 가능. CPL 감 잡기와 병목 발견이 핵심 목표."
    },
    {
      price: "300",
      unit: "만원/월",
      title: "최소 운영형 (Standard)",
      desc: "검색+리타겟팅으로 리드 흐름 생성",
      theme: "blue",
      featured: true,
      data: [
        { name: '검색광고', value: 160 },
        { name: '리타겟팅', value: 60 },
        { name: '디스플레이', value: 30 },
        { name: '특화매체적립', value: 30 },
        { name: '콜드메일', value: 20 },
      ],
      details: [
        "검색+리타겟팅+확장 동시 구동",
        "콘텐츠 기반 디스플레이로 모수 확장",
        "특화매체(리멤버 등) 단발 테스트 가능"
      ],
      expectation: "채널 2~3개에서 리드가 꾸준히 발생하며, 6개월 운영 시 설득력 있는 데이터 확보."
    },
    {
      price: "500",
      unit: "만원/월",
      title: "확장형 (Scale)",
      desc: "테스트가 '의미 있는 수준'으로 진행",
      theme: "gold",
      data: [
        { name: '검색광고', value: 240 },
        { name: '리타겟팅', value: 100 },
        { name: '디스플레이', value: 70 },
        { name: '특화매체적립', value: 60 },
        { name: '콜드메일', value: 30 },
      ],
      details: [
        "승자 조합(Winning Combo) 스케일업",
        "단발 테스트를 1~2회 의미 있게 집행",
        "사람인/리멤버 등 B2B 특화 매체 활용"
      ],
      expectation: "테스트→검증→확장 루프가 실제로 작동하며, 공격적인 리드 확보 가능."
    }
  ];

  const tableRows = [
    { label: "포지션", v100: "“될지 안 될지” 빠른 검증", v300: "리드가 ‘쌓이는 구조’ 확보", v500: "테스트가 ‘의미 있게’ 돌아감" },
    { label: "필수 세팅", v100: "전환/UTM/폼 최소 1회", v300: "전환/세그먼트 정교화", v500: "이벤트 확장 + A/B 상시" },
    { label: "검색광고", v100: "상시 ON (핵심 10~30개)", v300: "상시 ON + 매칭 확장", v500: "상시 ON + 승자군 스케일" },
    { label: "리타겟팅", v100: "최소 ON (핵심/이탈)", v300: "상시 ON (세그먼트 분기)", v500: "상시 ON + 시나리오(2~3단)" },
    { label: "디스플레이", v100: "보류 (우선순위 낮음)", v300: "소량 ON (모수 확장용)", v500: "상시 ON (확장+리타겟 연계)" },
    { label: "특화매체/eDM", v100: "보류", v300: "단발 1회 가능성", v500: "단발 1~2회 의미 있게 운영" },
    { label: "콜드메일", v100: "선택 (아주 얇게)", v300: "ON (시퀀스 운영)", v500: "ON (세그먼트/카피 실험)" },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-slate-200 shadow-lg rounded text-xs">
          <p className="font-bold text-[#123a73]">{payload[0].name}</p>
          <p className="text-slate-500">{payload[0].value}만원</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Section id="budget" title="예산 및 플랜 제안" subtitle="성장 단계에 맞춘 3가지 실행 옵션">
      
      {/* Core Principles */}
      <div className="grid md:grid-cols-3 gap-4 mb-16">
        <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm hover:border-[#123a73] transition">
            <div className="flex items-center gap-2 text-[#123a73] font-bold">
                <Shield size={20} />
                <span>Always On</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
                <b>검색광고(고의도) + 리타겟팅(전환)</b>은 항상 켜져 있어야 학습 데이터가 쌓이고 효율이 개선됩니다.
            </p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm hover:border-[#123a73] transition">
            <div className="flex items-center gap-2 text-[#d5a11e] font-bold">
                <MousePointer2 size={20} />
                <span>Winning Combo</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
                예산이 작을수록 채널 다양화보다 <b>승자 조합(키워드×랜딩×오퍼)</b>을 빨리 찾는 것이 생존의 핵심입니다.
            </p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm hover:border-[#123a73] transition">
            <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Layers size={20} />
                <span>Pool Volume</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
                리타겟팅은 타겟/예산에 따라 도달이 급격히 줄 수 있습니다. <b>모수 확보</b>를 위한 운영 세팅이 필수적입니다.
            </p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-20 items-start">
        {plans.map((plan, i) => (
            <div key={i} className={`relative flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.featured ? 'border-2 border-[#123a73] shadow-xl scale-105 z-10' : 'border border-slate-200 shadow-sm'
            }`}>
                {plan.featured && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-[#d5a11e]"></div>
                )}
                
                <div className="p-8 pb-0">
                    <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-[#123a73]' : 'text-slate-700'}`}>
                        {plan.title}
                    </h3>
                    <p className="text-sm text-slate-500 h-10 mb-4">{plan.desc}</p>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className={`text-4xl font-black ${plan.featured ? 'text-[#123a73]' : 'text-slate-800'}`}>{plan.price}</span>
                        <span className="text-slate-400 font-bold text-sm">{plan.unit}</span>
                    </div>
                </div>

                {/* Chart */}
                <div className="h-48 relative w-full -mt-4">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={plan.data}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={70}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {plan.data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold text-center leading-tight">
                        EST.<br/>Budget
                    </div>
                </div>

                <div className="px-8 pb-8 flex flex-col flex-grow">
                     <ul className="space-y-3 mb-8 flex-grow">
                        {plan.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${plan.featured ? 'text-[#d5a11e]' : 'text-slate-300'}`} />
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={`p-4 rounded-xl text-xs leading-relaxed font-medium ${
                        plan.featured ? 'bg-[#123a73] text-white' : 'bg-slate-50 text-slate-600'
                    }`}>
                        <span className="block font-bold mb-1 opacity-70 uppercase tracking-wider text-[10px]">Expectation</span>
                        {plan.expectation}
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-bold text-[#123a73] flex items-center gap-2">
                <TrendingUp size={20} />
                월 예산별 6개월 운영 비교
            </h3>
            <span className="text-xs text-slate-500 hidden md:inline-block">* 콜드메일 솔루션 비용 포함/별도 협의 가능</span>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead>
                    <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                        <th className="py-4 px-6 font-bold w-[15%]">구분</th>
                        <th className="py-4 px-6 font-bold w-[25%] text-slate-400">100만원 (검증형)</th>
                        <th className="py-4 px-6 font-bold w-[30%] text-[#123a73]">300만원 (최소 운영형)</th>
                        <th className="py-4 px-6 font-bold w-[30%] text-[#d5a11e]">500만원 (확장형)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {tableRows.map((row, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 transition ${idx === tableRows.length - 1 ? 'bg-amber-50/30' : ''}`}>
                            <td className="py-4 px-6 font-bold text-slate-700 bg-slate-50/50">{row.label}</td>
                            <td className="py-4 px-6 text-slate-500">{row.v100}</td>
                            <td className={`py-4 px-6 font-medium ${idx === tableRows.length - 1 ? 'text-[#123a73]' : 'text-slate-700'}`}>{row.v300}</td>
                            <td className={`py-4 px-6 font-medium ${idx === tableRows.length - 1 ? 'text-[#d5a11e]' : 'text-slate-700'}`}>{row.v500}</td>
                        </tr>
                    ))}
                     <tr className="bg-[#123a73] text-white">
                        <td className="py-4 px-6 font-bold border-r border-white/10">6개월 후<br/>보이는 결과</td>
                        <td className="py-4 px-6 border-r border-white/10 text-slate-300 text-xs">리드가 안 나오는 달도 존재<br/>→ 병목 파악이 성과</td>
                        <td className="py-4 px-6 border-r border-white/10 text-white font-bold">채널 2~3개에서<br/>리드가 꾸준히 발생</td>
                        <td className="py-4 px-6 text-[#d5a11e] font-bold">승자 조합 고정 +<br/>확장 루프 작동</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>

      {/* Footnotes */}
      <div className="mt-6 flex gap-4 text-[11px] text-slate-400 px-4 flex-wrap">
        <div className="flex items-center gap-1.5">
            <AlertTriangle size={12} className="text-[#d5a11e]" />
            <span><b>리멤버 리드젠서베이:</b> 설문 기반 구매 의향 확인 (B2B 타겟)</span>
        </div>
        <div className="flex items-center gap-1.5">
            <AlertTriangle size={12} className="text-[#d5a11e]" />
             <span><b>리타겟팅:</b> 사이트 방문자를 추적하여 재광고 (도달율 중요)</span>
        </div>
        <div className="flex items-center gap-1.5">
            <AlertTriangle size={12} className="text-[#d5a11e]" />
             <span><b>사람인 eDM:</b> 산업/직무 타겟 메일 발송 (단발 테스트용)</span>
        </div>
      </div>

    </Section>
  );
};

export default BudgetSection;
