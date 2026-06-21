import type { Metadata } from 'next'
import PartnerForm from './PartnerForm'

export const metadata: Metadata = {
  title: '미용입시학원 제휴 신청 | 학원 원장님 파트너 문의',
  description: '미용입시학원 원장님을 위한 제휴 파트너 프로그램. 견적 요청 리드를 제공하고 학원 홍보 효과를 높이세요.',
  alternates: { canonical: '/partner' },
}

const BENEFITS = [
  { icon: '🎯', title: '맞춤 리드 연결', desc: '지역·전공이 일치하는 학생/학부모 리드를 직접 연결해 드립니다.' },
  { icon: '📊', title: '성과 기반 비용', desc: '광고비 선납 없이 실제 견적 요청 건수 기반으로 정산됩니다.' },
  { icon: '🏆', title: '학원 홍보 효과', desc: '플랫폼 내 학원 정보 노출로 신규 수강생 유입을 늘리세요.' },
  { icon: '📱', title: '관리자 대시보드', desc: '리드 현황을 실시간으로 확인하고 관리할 수 있는 전용 대시보드 제공.' },
]

export default function PartnerPage() {
  return (
    <article>
      <header className="bg-premium-gradient py-14 px-4 text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">학원 제휴 파트너</h1>
        <p className="text-gray-500 max-w-xl mx-auto">미용입시학원 원장님을 위한 리드 연결 파트너 프로그램</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

        {/* 혜택 */}
        <section aria-labelledby="partner-benefits">
          <h2 id="partner-benefits" className="text-2xl font-black text-gray-900 mb-6">제휴 혜택</h2>
          <ul className="grid md:grid-cols-2 gap-5" role="list">
            {BENEFITS.map(b => (
              <li key={b.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <p className="text-3xl mb-3" role="img" aria-label={b.title}>{b.icon}</p>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 수익 모델 */}
        <section aria-labelledby="partner-model">
          <h2 id="partner-model" className="text-2xl font-black text-gray-900 mb-6">파트너십 모델</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: '베이직', fee: '월 30만원', leads: '월 5건 리드', features: ['지역 1개', '전공 1개', '기본 노출'] },
              { name: '스탠다드', fee: '월 60만원', leads: '월 15건 리드', features: ['지역 3개', '전공 3개', '상단 노출', '후기 관리'] },
              { name: '프리미엄', fee: '월 100만원', leads: '월 30건 리드', features: ['전 지역', '전 전공', '최상단 노출', '전용 매니저', '분석 리포트'] },
            ].map(p => (
              <div key={p.name} className={`rounded-2xl p-6 border-2 ${p.name === '스탠다드' ? 'border-brand bg-brand/5' : 'border-gray-200 bg-white'}`}>
                {p.name === '스탠다드' && <p className="text-xs font-black text-brand uppercase tracking-widest mb-2">인기</p>}
                <h3 className="text-lg font-black text-gray-900">{p.name}</h3>
                <p className="text-2xl font-black text-brand mt-1 mb-1">{p.fee}</p>
                <p className="text-sm text-gray-500 mb-4">{p.leads}</p>
                <ul className="space-y-1.5">
                  {p.features.map(f => <li key={f} className="text-sm text-gray-600 flex gap-2"><span className="text-brand">✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 제휴 신청 폼 */}
        <section aria-labelledby="partner-form">
          <h2 id="partner-form" className="text-2xl font-black text-gray-900 mb-6">제휴 신청</h2>
          <PartnerForm />
        </section>
      </div>
    </article>
  )
}
