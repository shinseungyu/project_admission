import type { Metadata } from 'next'
import Link from 'next/link'
import { REVIEWS } from '@/data/constants'

export const metadata: Metadata = {
  title: '미용입시 합격 후기 | 실제 합격생 학원비 비교 경험담',
  description: '미용입시 합격생들의 실제 후기를 확인하세요. 학원비 비교 후 합격한 학생들의 생생한 경험담을 소개합니다.',
  alternates: { canonical: '/review' },
}

const ALL_REVIEWS = [
  ...REVIEWS,
  { name: '강**', school: '부천대 뷰티케어과', grade: '고3', text: '학원을 3곳 비교했는데 가격 차이가 80만원이나 났어요. 결국 중간 가격대 학원으로 선택했고 합격했습니다.', rating: 5 },
  { name: '한**', school: '서경대 메이크업디자인학과', grade: '재수생', text: '재수생이라 불안했는데 견적 받은 학원에서 재수생 할인도 해줘서 많이 절약했어요.', rating: 5 },
  { name: '오**', school: '혜전대 피부미용과', grade: '고2', text: '부모님이 학원비 걱정하셨는데 국비지원까지 안내받아서 실제 부담은 많이 줄었어요.', rating: 4 },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '미용입시 합격 후기',
  itemListElement: ALL_REVIEWS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewBody: r.text,
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
    },
  })),
}

export default function ReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="bg-premium-gradient py-14 px-4 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-3">미용입시 합격 후기</h1>
          <p className="text-gray-500 max-w-xl mx-auto">학원비 비교 후 합격한 학생들의 실제 경험담</p>
        </header>

        <div className="max-w-5xl mx-auto px-4 py-12">

          {/* 통계 */}
          <section aria-label="합격 후기 통계" className="grid grid-cols-3 gap-5 mb-12">
            {[
              { value: '2,400+', label: '누적 후기' },
              { value: '97%', label: '만족도' },
              { value: '평균 47만원', label: '비교 후 절약' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
                <p className="text-2xl font-black text-brand">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </section>

          {/* 후기 목록 */}
          <section aria-labelledby="review-list">
            <h2 id="review-list" className="text-2xl font-black text-gray-900 mb-6">합격생 후기</h2>
            <ul className="grid md:grid-cols-2 gap-5" role="list">
              {ALL_REVIEWS.map((r, i) => (
                <li key={i}>
                  <article className="bg-white rounded-2xl border border-gray-100 p-6 h-full">
                    <div className="flex items-center gap-1 mb-3" aria-label={`별점 ${r.rating}점`}>
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <span key={j} className="text-yellow-400 text-sm" aria-hidden="true">★</span>
                      ))}
                    </div>
                    <blockquote className="text-sm text-gray-700 leading-relaxed mb-4">
                      "{r.text}"
                    </blockquote>
                    <footer className="border-t border-gray-100 pt-4">
                      <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                      <p className="text-xs text-brand mt-0.5">{r.school} 합격</p>
                      <p className="text-xs text-gray-400">{r.grade}</p>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <aside className="mt-12 bg-brand/5 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-3">나도 합격 후기를 남겨보세요</h2>
            <p className="text-gray-500 mb-6 text-sm">학원비 비교 후 합격했다면, 후배들을 위해 경험을 나눠주세요</p>
            <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
              올댓뷰티 멘토 상담 신청 →
            </Link>
          </aside>
        </div>
      </article>
    </>
  )
}
