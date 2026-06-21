import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '미용대학 입결·모집요강 | 미용학과 대학 정보',
  description: '전국 미용학과 대학 입결, 모집인원, 전형 방법을 비교합니다. 서경대·수원여대·혜전대 등 미용입시 인기 대학 정보 총정리.',
  alternates: { canonical: '/guide/universities' },
}

const UNIVERSITIES = [
  { name: '서경대', dept: '헤어디자인학과·메이크업디자인학과', location: '서울', quota: '각 30명 내외', admission: '실기(80%)+학생부(20%)', cutline: '실기 상위 20%', url: '#' },
  { name: '수원여대', dept: '뷰티아트과', location: '경기', quota: '40명 내외', admission: '실기(70%)+학생부(30%)', cutline: '실기 상위 25%', url: '#' },
  { name: '혜전대', dept: '헤어미용과·메이크업학과·피부미용과', location: '충남', quota: '각 30명 내외', admission: '실기(70%)+면접(30%)', cutline: '실기 상위 30%', url: '#' },
  { name: '동아방송예술대', dept: '뷰티아트학과', location: '경기', quota: '40명 내외', admission: '실기(100%) or 학생부+실기', cutline: '실기 상위 20%', url: '#' },
  { name: '경인여대', dept: '헤어디자인과·메이크업아티스트과·피부미용과', location: '인천', quota: '각 30명 내외', admission: '실기(70%)+학생부(30%)', cutline: '실기 상위 30%', url: '#' },
  { name: '한국관광대', dept: '뷰티코디네이션과', location: '경기', quota: '40명 내외', admission: '실기+학생부', cutline: '실기 상위 35%', url: '#' },
]

export default function UniversitiesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '미용학과 대학 목록',
    itemListElement: UNIVERSITIES.map((u, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'CollegeOrUniversity', name: u.name, address: { '@type': 'PostalAddress', addressRegion: u.location } },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="bg-premium-gradient py-14 px-4 text-center">
          <nav aria-label="브레드크럼" className="text-sm text-gray-400 mb-4">
            <ol className="flex justify-center gap-2">
              <li><a href="/guide" className="hover:text-brand">가이드</a></li>
              <li aria-hidden="true">/</li>
              <li>미용대학 정보</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 mb-3">미용대학 입결·모집요강</h1>
          <p className="text-gray-500 max-w-xl mx-auto">전국 미용학과 대학 입결, 모집인원, 전형 방법 비교</p>
        </header>

        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="overflow-x-auto rounded-2xl shadow-sm mb-8">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">전국 미용학과 대학별 모집인원·전형방법·입결 비교표 (2025~2026학년도 기준)</caption>
              <thead>
                <tr className="bg-brand text-white">
                  <th scope="col" className="px-5 py-4 text-left font-bold rounded-tl-2xl">대학</th>
                  <th scope="col" className="px-5 py-4 text-left font-bold">학과</th>
                  <th scope="col" className="px-5 py-4 text-center font-bold">위치</th>
                  <th scope="col" className="px-5 py-4 text-center font-bold">모집인원</th>
                  <th scope="col" className="px-5 py-4 text-left font-bold">전형 방법</th>
                  <th scope="col" className="px-5 py-4 text-center font-bold rounded-tr-2xl">입결 기준</th>
                </tr>
              </thead>
              <tbody>
                {UNIVERSITIES.map((u, i) => (
                  <tr key={u.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <th scope="row" className="px-5 py-4 font-black text-brand text-left">{u.name}</th>
                    <td className="px-5 py-4 text-gray-700 text-xs leading-relaxed">{u.dept}</td>
                    <td className="px-5 py-4 text-center text-gray-600">{u.location}</td>
                    <td className="px-5 py-4 text-center text-gray-600">{u.quota}</td>
                    <td className="px-5 py-4 text-gray-600 text-xs">{u.admission}</td>
                    <td className="px-5 py-4 text-center text-xs font-bold text-gray-700">{u.cutline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-10">
            <p className="text-sm text-yellow-800">
              ⚠️ 위 정보는 2025~2026학년도 기준 참고 데이터입니다. 정확한 모집요강은 반드시 각 대학 공식 사이트에서 확인하세요.
            </p>
          </div>

          <aside className="bg-brand/5 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-3">목표 대학 입시 준비, 지금 시작하세요</h2>
            <p className="text-gray-500 mb-6 text-sm">목표 대학이 정해졌다면 학원비를 비교해 최적의 학원을 선택하세요</p>
            <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
              올댓뷰티 멘토 상담 신청 →
            </Link>
          </aside>
        </div>
      </article>
    </>
  )
}
