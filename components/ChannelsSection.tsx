import React from 'react';
import Section from './Section';
import { BookOpen, Monitor, Search, UserCheck, RefreshCw, Mail, AlertCircle } from 'lucide-react';

const channels = [
  {
    icon: <BookOpen className="text-[#123a73]" />,
    title: "기업 블로그 (콘텐츠)",
    desc: "검색 유입 + 신뢰 구축 → CTA로 리드 전환",
    details: ["'기능'이 아닌 '사고/리스크' 중심", "아티클별 자료 다운로드 CTA 필수", "KPI: 폼 전환율, 유입량"]
  },
  {
    icon: <Monitor className="text-[#123a73]" />,
    title: "디스플레이 (확장)",
    desc: "잠재 타겟 확장 + 리타겟팅 모수 확보",
    details: ["문제 제기형 크리에이티브 활용", "랜딩: 자료 다운로드/체크리스트", "KPI: 리타겟팅 풀 규모"]
  },
  {
    icon: <Search className="text-[#123a73]" />,
    title: "키워드 검색광고 (핵심)",
    desc: "'지금 찾는 고객'을 가장 확실하게 리드로 전환",
    details: ["키워드: 배차 시스템, 화물 관리", "키워드-랜딩 1:1 매칭", "KPI: 전환율(CVR), 리드 수"]
  },
  {
    icon: <UserCheck className="text-[#123a73]" />,
    title: "특화 매체 (리드젠)",
    desc: "운송/물류 의사결정자 농도가 높은 채널",
    details: ["리멤버 리드젠 (설문조사형)", "사람인 기업회원 eDM", "KPI: 리드 품질, 미팅 전환율"]
  },
  {
    icon: <RefreshCw className="text-[#123a73]" />,
    title: "리타겟팅 (Closing)",
    desc: "관심은 있지만 신청하지 않는 고객을 전환",
    details: ["세그먼트: 폼 진입 후 이탈자 타겟", "증거(사례/샘플) 제시", "KPI: 재방문율, 전환 증분"]
  },
  {
    icon: <Mail className="text-[#123a73]" />,
    title: "콜드메일 (Outreach)",
    desc: "광고로 닿기 어려운 운송사에 직접 접근",
    details: ["솔루션 기반 시퀀스 자동화", "3단계: 제안 → 리마인드 → 클로징", "KPI: 회신율, 미팅 요청"]
  },
  {
    icon: <Mail className="text-[#123a73]" />,
    title: "콜드메일 (Outreach)",
    desc: "광고로 닿기 어려운 운송사에 직접 접근",
    details: ["솔루션 기반 시퀀스 자동화", "3단계: 제안 → 리마인드 → 클로징", "KPI: 회신율, 미팅 요청"]
  }
];

const ChannelsSection: React.FC = () => {
  return (
    <Section id="channels" title="채널별 집행 전략" subtitle="각 채널은 “리드 수집 장치”로 귀결되어야 합니다." className="bg-slate-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.slice(0, 6).map((ch, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition hover:border-[#d5a11e]/50 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#123a73]/10 rounded-lg flex items-center justify-center group-hover:bg-[#123a73] transition duration-300">
                {React.cloneElement(ch.icon as React.ReactElement<{ className?: string }>, { className: "text-[#123a73] group-hover:text-white transition duration-300" })}
              </div>
              <h3 className="font-bold text-slate-800">{ch.title}</h3>
            </div>
            <p className="text-sm text-slate-500 mb-4 h-10">{ch.desc}</p>
            <ul className="space-y-2">
              {ch.details.map((d, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                  <div className="w-1 h-1 bg-[#d5a11e] rounded-full mt-1.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-5 bg-white border-l-4 border-[#d5a11e] rounded-r-lg shadow-sm flex items-start gap-3">
        <AlertCircle className="text-[#d5a11e] shrink-0 mt-0.5" size={20} />
        <div className="text-sm text-slate-600">
          채널은 많아도, 랜딩 페이지와 오퍼(Offer)가 매력적이지 않다면 전환은 일어나지 않습니다. 모든 채널 유입은 <strong>단 하나의 명확한 행동</strong>을 유도해야 합니다.
        </div>
      </div>
    </Section>
  );
};

export default ChannelsSection;