import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { REGIONS, ACADEMIES, MAJORS } from '@/data/constants'
import LeadForm from '@/components/LeadForm'

type Props = { params: Promise<{ region: string }> }

export async function generateStaticParams() {
  return REGIONS.map(r => ({ region: encodeURIComponent(r) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params
  const r = decodeURIComponent(region)
  return {
    title: `${r} 미용입시학원 학원비 비교 | ${r} 미용학원 견적`,
    description: `${r} 미용입시학원 학원비를 무료로 비교하세요. ${r} 지역 헤어·메이크업·네일·피부 미용입시학원 정보와 맞춤 견적을 제공합니다.`,
    alternates: { canonical: `/region/${region}` },
  }
}

export default async function RegionLandingPage({ params }: Props) {
  const { region } = await params
  const regionName = decodeURIComponent(region)
  if (!REGIONS.includes(regionName as typeof REGIONS[number])) notFound()

  const regionAcademies = ACADEMIES.filter(a => a.region === regionName)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${regionName} 미용입시학원 학원비 비교`,
    description: `${regionName} 지역 미용입시학원 학원비 비교 및 무료 견적 신청`,
    areaServed: { '@type': 'State', name: regionName },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        {/* 히어로 */}
        <header className="bg-premium-gradient py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-brand text-sm font-bold mb-3">{regionName} 지역 미용입시</p>
                <h1 className="text-4xl font-black text-gray-900 leading-tight mb-4">
                  {regionName} 미용입시학원<br />학원비 비교
                </h1>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {regionName} 지역 미용입시학원 학원비를 한눈에 비교하세요.<br />
                  올댓뷰티 전문 멘토가 무료로 상담해드립니다
                </p>
                <ul className="flex flex-wrap gap-2">
                  {MAJORS.map(m => (
                    <li key={m.id}>
                      <Link href={`/major/${m.id}`}
                        className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-brand hover:text-brand transition-all">
                        {m.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <LeadForm sourcePage={`region_${regionName}`} variant="hero" />
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

          {/* 지역 학원 리스트 */}
          {regionAcademies.length > 0 && (
            <section aria-labelledby="region-academy-list">
              <h2 id="region-academy-list" className="text-2xl font-black text-gray-900 mb-6">
                {regionName} 제휴 미용입시학원
              </h2>
              <ul className="grid md:grid-cols-2 gap-5" role="list">
                {regionAcademies.map(a => (
                  <li key={a.id}>
                    <article className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
                      <h3 className="font-black text-gray-900 text-lg mb-1">{a.name}</h3>
                      <p className="text-brand font-bold mb-3">{a.priceMin}~{a.priceMax}만원</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {a.majors.map(mId => {
                          const m = MAJORS.find(x => x.id === mId)
                          return m ? <span key={mId} className="text-xs bg-brand/10 text-brand px-2.5 py-1 rounded-full">{m.name}</span> : null
                        })}
                        {a.tags.map(t => <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{t}</span>)}
                      </div>
                      <Link href="/compare" className="block w-full text-center py-3 rounded-xl bg-brand text-white font-bold text-sm hover:bg-brand-dark transition-all">
                        견적 받기
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 지역 SEO 콘텐츠 */}
          <section aria-labelledby="region-info">
            <h2 id="region-info" className="text-2xl font-black text-gray-900 mb-5">
              {regionName} 미용입시학원 선택 가이드
            </h2>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
              <p>
                {regionName} 지역에서 미용입시학원을 선택할 때는 단순히 학원비만 비교하지 않는 것이 중요합니다.
                강사의 입시 경험과 전공 대학 합격 실적, 소수정예 여부, 자격증 취득 지원 여부를 함께 확인하세요.
              </p>
              <p>
                특히 {regionName} 미용입시학원은 지역 교통 접근성도 중요한 요소입니다.
                장기간 통학해야 하는 만큼, 집에서 무리 없이 다닐 수 있는 위치의 학원을 선택하는 것이 학습 지속성에 도움이 됩니다.
              </p>
            </div>
          </section>

          {/* 다른 지역 */}
          <nav aria-label="다른 지역 미용입시학원">
            <h2 className="text-lg font-bold text-gray-800 mb-4">다른 지역 미용입시학원도 비교해보세요</h2>
            <ul className="flex flex-wrap gap-2" role="list">
              {REGIONS.filter(r => r !== regionName).slice(0, 8).map(r => (
                <li key={r}>
                  <Link href={`/region/${encodeURIComponent(r)}`}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-brand hover:text-brand transition-all">
                    {r}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </>
  )
}
