import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서경대 메이크업디자인학과 입시 | 실기 내용·모집요강',
  description: '서경대 메이크업디자인학과 입시를 위한 실기 내용, 모집요강, 준비 전략을 안내합니다.',
  alternates: { canonical: '/seokyeong/makeup' },
}

export default function SeokyeongMakeupPage() {
  return (
    <article>
      <header className="bg-premium-gradient py-14 px-4 text-center">
        <nav aria-label="브레드크럼" className="text-sm text-gray-400 mb-4">
          <ol className="flex justify-center gap-2">
            <li><a href="/seokyeong" className="hover:text-brand">서경대</a></li>
            <li aria-hidden="true">/</li>
            <li>메이크업디자인학과</li>
          </ol>
        </nav>
        <p className="text-4xl mb-3" role="img" aria-label="메이크업">💄</p>
        <h1 className="text-4xl font-black text-gray-900 mb-3">서경대 메이크업디자인학과</h1>
        <p className="text-gray-500">서경대미용학과 메이크업디자인 입시 정보 총정리</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <section aria-labelledby="makeup-quota">
          <h2 id="makeup-quota" className="text-2xl font-black text-gray-900 mb-6">모집요강</h2>
          <dl className="bg-white rounded-2xl border border-gray-100 p-6 grid md:grid-cols-2 gap-5 text-sm">
            {[
              { dt: '모집인원', dd: '약 30명 (매년 변동 있음)' },
              { dt: '전형 방법', dd: '실기 80% + 학생부 20%' },
              { dt: '실기 과목', dd: '뷰티 메이크업, 특수 메이크업, 웨딩 메이크업' },
              { dt: '자격증 가산점', dd: '미용사(메이크업) 자격증 보유 시 가산' },
            ].map(item => (
              <div key={item.dt} className="flex gap-3">
                <dt className="text-gray-400 shrink-0 w-24">{item.dt}</dt>
                <dd className="font-bold text-gray-800">{item.dd}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-400 mt-2">※ 정확한 모집요강은 서경대학교 공식 입학처에서 확인하세요.</p>
        </section>

        <section aria-labelledby="makeup-practical">
          <h2 id="makeup-practical" className="text-2xl font-black text-gray-900 mb-6">실기 준비 포인트</h2>
          <ul className="space-y-3" role="list">
            {[
              '뷰티 메이크업: 깨끗하고 완성도 높은 베이스 메이크업이 핵심',
              '특수 메이크업: 상처·노화·컬러 특수 분장 기초 완성',
              '색채 이론: 색상 매칭과 보정 능력이 합격의 변수',
              '트렌드 파악: 최신 메이크업 트렌드를 작품에 반영',
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4">
                <span className="w-6 h-6 rounded-full bg-brand text-white text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                <p className="text-sm text-gray-700">{tip}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="bg-brand/5 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">서경대 메이크업 입시 전문 학원비 비교</h2>
          <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
            올댓뷰티 멘토 상담 신청 →
          </Link>
        </aside>
      </div>
    </article>
  )
}
