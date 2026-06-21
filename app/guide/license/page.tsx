import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '미용사 자격증 일정·합격률 | 미용입시 자격증 정보',
  description: '미용사 국가자격증(일반·피부·네일·메이크업) 시험 일정, 합격률, 응시 방법을 총정리합니다.',
  alternates: { canonical: '/guide/license' },
}

const LICENSES = [
  { name: '미용사(일반)', exam: '연 4회', passRate: '약 50%', fee: '14,500원', target: '헤어디자인 전공', note: '필기+실기 모두 합격 필요' },
  { name: '미용사(피부)', exam: '연 4회', passRate: '약 55%', fee: '14,500원', target: '피부미용 전공', note: '에스테틱 실기 위주' },
  { name: '미용사(네일)', exam: '연 4회', passRate: '약 60%', fee: '14,500원', target: '네일아트 전공', note: '비교적 합격률 높은 편' },
  { name: '미용사(메이크업)', exam: '연 4회', passRate: '약 45%', fee: '14,500원', target: '메이크업 전공', note: '실기 작품 완성도가 핵심' },
]

export default function LicensePage() {
  return (
    <article>
      <header className="bg-premium-gradient py-14 px-4 text-center">
        <nav aria-label="브레드크럼" className="text-sm text-gray-400 mb-4">
          <ol className="flex justify-center gap-2">
            <li><a href="/guide" className="hover:text-brand">가이드</a></li>
            <li aria-hidden="true">/</li>
            <li>자격증 정보</li>
          </ol>
        </nav>
        <h1 className="text-4xl font-black text-gray-900 mb-3">미용사 자격증 정보</h1>
        <p className="text-gray-500 max-w-xl mx-auto">미용사 국가자격증 일정·합격률·응시 방법 총정리</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        {/* 자격증 표 */}
        <section aria-labelledby="license-table">
          <h2 id="license-table" className="text-2xl font-black text-gray-900 mb-6">미용사 국가자격증 종류</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">미용사 국가자격증 종류별 시험 횟수·합격률·응시료 비교</caption>
              <thead>
                <tr className="bg-brand text-white">
                  <th scope="col" className="px-5 py-4 text-left font-bold rounded-tl-2xl">자격증</th>
                  <th scope="col" className="px-5 py-4 text-center font-bold">시행 횟수</th>
                  <th scope="col" className="px-5 py-4 text-center font-bold">합격률</th>
                  <th scope="col" className="px-5 py-4 text-center font-bold">응시료</th>
                  <th scope="col" className="px-5 py-4 text-left font-bold rounded-tr-2xl">비고</th>
                </tr>
              </thead>
              <tbody>
                {LICENSES.map((l, i) => (
                  <tr key={l.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <th scope="row" className="px-5 py-4 font-bold text-gray-800 text-left">{l.name}</th>
                    <td className="px-5 py-4 text-center text-gray-600">{l.exam}</td>
                    <td className="px-5 py-4 text-center font-bold text-brand">{l.passRate}</td>
                    <td className="px-5 py-4 text-center text-gray-600">{l.fee}</td>
                    <td className="px-5 py-4 text-gray-500 text-xs">{l.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">※ 시험 일정은 한국산업인력공단 공식 사이트에서 확인하세요.</p>
        </section>

        {/* 응시 절차 */}
        <section aria-labelledby="exam-process">
          <h2 id="exam-process" className="text-2xl font-black text-gray-900 mb-6">응시 절차</h2>
          <ol className="grid md:grid-cols-4 gap-4" role="list">
            {['원서접수 (큐넷)', '필기시험', '필기 합격 확인', '실기시험 → 최종 합격'].map((s, i) => (
              <li key={s} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                <span className="w-8 h-8 rounded-full bg-brand text-white text-sm font-black flex items-center justify-center mx-auto mb-3">{i + 1}</span>
                <p className="text-sm font-bold text-gray-800">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        <aside className="bg-brand/5 rounded-3xl p-8 text-center">
          <h2 className="text-xl font-black text-gray-900 mb-3">자격증 취득 후 입시 준비까지</h2>
          <p className="text-gray-500 mb-6 text-sm">자격증을 취득했다면 이제 학원비를 비교해 입시를 준비하세요</p>
          <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
            올댓뷰티 멘토 상담 신청 →
          </Link>
        </aside>
      </div>
    </article>
  )
}
