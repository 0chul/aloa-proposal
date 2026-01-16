import React from 'react';
import Section from './Section';
import { CheckCircle2, Calendar, Layout, Sparkles } from 'lucide-react';

const NextSteps: React.FC = () => {
  return (
    <Section id="next" title="Next Steps" subtitle="실행을 위한 최소 단계 (Immediate Actions)">
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#123a73] transition cursor-default group hover:shadow-lg">
          <div className="mb-4 text-slate-400 group-hover:text-[#123a73] transition">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-lg font-bold text-[#123a73] mb-2">1. 범위 확정</h3>
          <p className="text-sm text-slate-500">
            리드 정의(SQL 기준), 운영 채널 믹스, 필수 랜딩페이지 및 오퍼 리스트 확정
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#123a73] transition cursor-default group hover:shadow-lg">
          <div className="mb-4 text-slate-400 group-hover:text-[#123a73] transition">
             <Calendar size={32} />
          </div>
          <h3 className="text-lg font-bold text-[#123a73] mb-2">2. 킥오프 미팅</h3>
          <p className="text-sm text-slate-500">
             타겟 세그먼트별 키워드 및 크리에이티브 가설 합의, 테스트 플랜 수립
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#123a73] transition cursor-default group hover:shadow-lg">
          <div className="mb-4 text-slate-400 group-hover:text-[#123a73] transition">
            <Layout size={32} />
          </div>
          <h3 className="text-lg font-bold text-[#123a73] mb-2">3. 자산 셋업</h3>
          <p className="text-sm text-slate-500">
             광고 계정/픽셀/UTM 셋업, 랜딩페이지 및 리드 수집 폼 구축 후 런칭
          </p>
        </div>

      </div>

      <div className="relative overflow-hidden rounded-2xl bg-[#123a73] p-10 text-center text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d5a11e]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
            <Sparkles className="mx-auto mb-4 text-[#d5a11e]" size={32} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Aloa의 성장 엔진에 시동을 걸 시간입니다.</h3>
            <p className="text-slate-300 max-w-lg mx-auto mb-8">
              지금 제안드린 전략은 단순한 광고 집행이 아니라,<br className="hidden md:block"/>
              지속 가능한 리드 파이프라인을 구축하는 과정입니다.
            </p>
        </div>
      </div>
    </Section>
  );
};

export default NextSteps;