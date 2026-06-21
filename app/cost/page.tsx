import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '미용입시 학원비용·국비지원 가이드 | 미용학원비 얼마?',
  description: '미용입시 학원비용과 국비지원 정보를 알아보세요. 헤어·메이크업·네일·피부 전공별 학원비 구성과 내일배움카드 활용법을 안내합니다.',
  alternates: { canonical: '/cost' },
}

const COST_BREAKDOWN = [
  { item: '입시 기초반', range: '50~80만원', desc: '기초 실기 및 소묘 기초' },
  { item: '실기 전문반', range: '120~200만원', desc: '자격증 실기 + 입시 작품' },
  { item: '자격증 준비', range: '30~60만원', desc: '필기·실기 자격증 준비' },
  { item: '재료비', range: '20~50만원', desc: '전공별 실습 재료 (학원 포함 여부 확인)' },
  { item: '포트폴리오', range: '10~30만원', desc: '최종 포트폴리오 제작' },
]

const SUBSIDY_INFO = [
  { title: '내일배움카드', amount: '최대 500만원', desc: '직업훈련 과정 수강 시 활용 가능. 입시 전문 과정은 대상 외인 경우 있음.', eligible: '구직자·재직자·대학생' },
  { title: '국민내일배움카드', amount: '1인당 최대 500만원', desc: '고용노동부 지정 훈련 기관에서 사용 가능.', eligible: '만 15세 이상 국민' },
  { title: '교육비 지원금', amount: '지역별 상이', desc: '지자체별 청소년 교육비 지원 프로그램 활용 가능.', eligible: '지역별 조건 상이' },
]

export default function CostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '미용입시 학원비용·국비지원 가이드',
    description: '미용입시 학원비 구성과 국비지원 활용법 안내',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: '미용입시 학원비 총 얼마나 드나요?', acceptedAnswer: { '@type': 'Answer', text: '전공에 따라 다르나 평균 150~400만원입니다. 국비지원 활용 시 실 부담금을 크게 줄일 수 있습니다.' } },
        { '@type': 'Question', name: '내일배움카드로 미용입시 학원비를 낼 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '내일배움카드는 직업훈련 과정에 사용 가능합니다. 단, 입시 전문 과정은 지원 대상이 아닐 수 있으므로 학원별 확인이 필요합니다.' } },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="bg-premium-gradient py-14 px-4 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-3">미용입시 학원비용 & 국비지원</h1>
          <p className="text-gray-500 max-w-xl mx-auto">실제 학원비 구성부터 국비지원 활용법까지 투명하게 안내합니다</p>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

          {/* 비용 구성 */}
          <section aria-labelledby="cost-breakdown-heading">
            <h2 id="cost-breakdown-heading" className="text-2xl font-black text-gray-900 mb-6">미용입시 학원비 구성 항목</h2>
            <div className="overflow-x-auto rounded-2xl shadow-sm">
              <table className="w-full bg-white text-sm">
                <caption className="sr-only">미용입시 학원비 구성 항목별 금액 범위</caption>
                <thead>
                  <tr className="bg-brand text-white">
                    <th scope="col" className="px-5 py-4 text-left font-bold rounded-tl-2xl">항목</th>
                    <th scope="col" className="px-5 py-4 text-center font-bold">금액 범위</th>
                    <th scope="col" className="px-5 py-4 text-left font-bold rounded-tr-2xl">설명</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_BREAKDOWN.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <th scope="row" className="px-5 py-4 font-bold text-gray-800 text-left">{row.item}</th>
                      <td className="px-5 py-4 text-center font-bold text-brand">{row.range}</td>
                      <td className="px-5 py-4 text-gray-500 text-xs">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-brand/5">
                    <th scope="row" className="px-5 py-4 font-black text-gray-900 rounded-bl-2xl text-left">총 합계</th>
                    <td className="px-5 py-4 text-center text-brand font-black">150~420만원</td>
                    <td className="px-5 py-4 text-gray-500 text-xs rounded-br-2xl">전공·지역·학원별 차이 있음</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          {/* 국비지원 */}
          <section aria-labelledby="subsidy-heading">
            <h2 id="subsidy-heading" className="text-2xl font-black text-gray-900 mb-6">국비지원 활용 안내</h2>
            <ul className="grid md:grid-cols-3 gap-5" role="list">
              {SUBSIDY_INFO.map(s => (
                <li key={s.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-2xl font-black text-brand mb-3">{s.amount}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-xs bg-brand/10 text-brand px-3 py-1.5 rounded-full inline-block font-medium">대상: {s.eligible}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
              <p className="text-sm text-yellow-800 font-medium">
                ⚠️ 국비지원 여부는 학원별·과정별로 다릅니다. 무료 견적 신청 시 국비 가능 여부도 함께 안내받으세요.
              </p>
            </div>
          </section>

          {/* 비용 시뮬레이터 */}
          <section aria-labelledby="simulator-heading" className="bg-brand/5 rounded-3xl p-8">
            <h2 id="simulator-heading" className="text-2xl font-black text-gray-900 mb-3">나의 실제 부담금은?</h2>
            <p className="text-gray-500 mb-6 text-sm">무료 견적을 신청하면 국비지원 적용 후 실제 부담금을 학원에서 직접 안내드립니다</p>
            <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
              내 부담금 견적받기 →
            </Link>
          </section>

          {/* FAQ */}
          <section aria-labelledby="cost-faq-heading">
            <h2 id="cost-faq-heading" className="text-2xl font-black text-gray-900 mb-6">비용 관련 자주 묻는 질문</h2>
            <dl className="space-y-4">
              {[
                { q: '학원별 학원비 차이가 왜 나나요?', a: '강사 경력, 학원 위치, 시설, 재료 포함 여부, 소수정예 여부 등에 따라 다릅니다. 단순히 가격만 보지 말고 교육 내용·합격률·취업 지원을 종합적으로 비교하세요.' },
                { q: '할부나 분납이 가능한가요?', a: '대부분의 미용입시학원에서 월납 또는 분납이 가능합니다. 학원별로 다르므로 견적 받을 때 함께 문의하세요.' },
                { q: '재수생도 입시학원을 다녀야 하나요?', a: '실기 감각 유지와 최신 입시 트렌드 반영을 위해 재수생도 학원 수강을 권장합니다. 재수생 할인을 제공하는 학원도 있습니다.' },
              ].map(item => (
                <div key={item.q} className="border border-gray-100 rounded-2xl p-5 bg-white">
                  <dt className="font-bold text-gray-900 mb-2">Q. {item.q}</dt>
                  <dd className="text-sm text-gray-600 leading-relaxed">A. {item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </article>
    </>
  )
}
