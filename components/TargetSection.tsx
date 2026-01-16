import React from 'react';
import Section from './Section';
import { Users, Truck, AlertTriangle, TrendingUp, BarChart3 } from 'lucide-react';

const TargetSection: React.FC = () => {
  const targets = [
    {
      icon: <BarChart3 className="text-[#123a73]" size={32} />,
      title: "화주 요구 압력 증가",
      signal: "실시간 위치/리포트 요청 증가, ERP/정산 연동 요구",
      message: "사람 기반 보고로는 요구사항이 누적될수록 깨집니다. 시스템으로 대응하세요."
    },
    {
      icon: <AlertTriangle className="text-[#d5a11e]" size={32} />,
      title: "배차 업무 리스크 발생",
      signal: "담당자 이직, 인수인계 실패, 배차 실수 및 클레임",
      message: "배차는 '사람'이 아니라 '프로세스'로 굴려야 합니다."
    },
    {
      icon: <TrendingUp className="text-green-600" size={32} />,
      title: "예비/초기 운송사",
      signal: "차량/기사 확장 준비, 엑셀/카톡 운영의 한계",
      message: "초기부터 시스템을 깔면, 확장 구간에서 폭발(혼란)하지 않습니다."
    }
  ];

  return (
    <Section id="target" title="Target Audience" subtitle="모든 운송사가 아니라 “결정적 순간”의 운송사를 공략합니다." className="bg-slate-50">
      <div className="grid md:grid-cols-3 gap-6">
        {targets.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:-translate-y-1 transition duration-300">
            <div className="mb-4 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">
              {t.icon}
            </div>
            <h3 className="text-lg font-bold text-[#123a73] mb-3">{t.title}</h3>
            <div className="mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Signal</span>
              <p className="text-sm text-slate-600 mt-1">{t.signal}</p>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-[#d5a11e] uppercase tracking-wide">Key Message</span>
              <p className="text-sm text-slate-800 font-medium mt-1">"{t.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TargetSection;