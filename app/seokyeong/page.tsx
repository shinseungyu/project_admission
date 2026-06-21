import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서경대 미용학과 입시 정보 | 헤어디자인·메이크업디자인학과',
  description: '서경대 미용학과 입시 정보를 확인하세요. 헤어디자인학과·메이크업디자인학과 모집요강, 실기 내용, 합격 전략을 총정리합니다.',
  alternates: { canonical: '/seokyeong' },
}

const DEPTS = [
  { id: 'hair', name: '헤어디자인학과', emoji: '💇', quota: '30명', exam: '실기 80% + 학생부 20%', skills: ['커트 기초', '업스타일', '헤어 작품'], href: '/seokyeong/hair' },
  { id: 'makeup', name: '메이크업디자인학과', emoji: '💄', quota: '30명', exam: '실기 80% + 학생부 20%', skills: ['뷰티 메이크업', '특수 메이크업', '웨딩 메이크업'], href: '/seokyeong/makeup' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollegeOrUniversity',
  name: '서경대학교',
  address: { '@type': 'PostalAddress', addressLocality: '서울', addressCountry: 'KR' },
  department: DEPTS.map(d => ({ '@type': 'EducationalOrganization', name: d.name })),
}

export default function SeokyeongPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="bg-premium-gradient py-14 px-4 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-3">서경대 미용학과 입시</h1>
          <p className="text-gray-500 max-w-xl mx-auto">서경대 헤어디자인·메이크업디자인학과 모집요강 및 합격 전략</p>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

          {/* 학과 선택 */}
          <section aria-labelledby="dept-select">
            <h2 id="dept-select" className="text-2xl font-black text-gray-900 mb-6">학과 안내</h2>
            <ul className="grid md:grid-cols-2 gap-5" role="list">
              {DEPTS.map(d => (
                <li key={d.id}>
                  <Link href={d.href}
                    className="block bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-brand/30 transition-all group">
                    <p className="text-4xl mb-3" role="img" aria-label={d.name}>{d.emoji}</p>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-brand transition-colors mb-4">{d.name}</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <dt className="text-gray-400 shrink-0">모집인원</dt>
                        <dd className="font-bold text-gray-700">{d.quota}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gray-400 shrink-0">전형 방법</dt>
                        <dd className="font-bold text-gray-700">{d.exam}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-gray-400 shrink-0">실기 내용</dt>
                        <dd className="text-gray-700">{d.skills.join(' · ')}</dd>
                      </div>
                    </dl>
                    <p className="mt-4 text-brand text-sm font-bold group-hover:underline">자세히 보기 →</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* 서경대 입시 특징 */}
          <section aria-labelledby="seokyeong-features" className="bg-white rounded-3xl border border-gray-100 p-8">
            <h2 id="seokyeong-features" className="text-2xl font-black text-gray-900 mb-6">서경대 미용학과 입시 특징</h2>
            <ul className="space-y-4" role="list">
              {[
                { title: '실기 비중이 매우 높음 (80%)', desc: '필기보다 실기 준비가 훨씬 중요합니다. 최소 1년 전부터 전문 학원에서 입시 실기를 준비하세요.' },
                { title: '미용사 자격증 가산점', desc: '미용사 국가자격증 보유 시 실기 점수에 가산점이 부여됩니다. 수시 원서 접수 전에 자격증 취득을 완료하세요.' },
                { title: '포트폴리오 완성도', desc: '면접 전형에서 포트폴리오를 제출합니다. 작품의 완성도와 창의성이 중요 평가 요소입니다.' },
              ].map(f => (
                <li key={f.title} className="flex gap-4">
                  <span className="text-brand text-lg shrink-0">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{f.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <aside className="bg-brand/5 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-3">서경대 입시 전문 학원비 비교</h2>
            <p className="text-gray-500 mb-6 text-sm">서경대 입시 경험이 풍부한 제휴 학원에서 맞춤 견적을 받아보세요</p>
            <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
              올댓뷰티 멘토 상담 신청 →
            </Link>
          </aside>
        </div>
      </article>
    </>
  )
}
