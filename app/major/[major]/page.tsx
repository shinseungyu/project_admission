import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MAJORS, ACADEMIES } from '@/data/constants'

type Props = { params: Promise<{ major: string }> }

export async function generateStaticParams() {
  return MAJORS.map(m => ({ major: m.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { major } = await params
  const m = MAJORS.find(x => x.id === major)
  if (!m) return {}
  return {
    title: `${m.label} 미용입시학원 학원비 비교 | ${m.name} 미용대학 입시`,
    description: `${m.label} 미용입시학원 학원비를 비교하세요. ${m.name} 전공 미용대학 입시 준비, 자격증, 국비지원 정보를 무료로 제공합니다.`,
    alternates: { canonical: `/major/${major}` },
  }
}

const MAJOR_DETAIL: Record<string, { emoji: string; intro: string; roadmap: string[]; licenses: string[]; schools: string[] }> = {
  hair: {
    emoji: '💇',
    intro: '헤어디자인 전공은 커트·펌·염색·업스타일 등 헤어 전반을 다루는 미용의 대표 전공입니다. 서경대·수원여대 등 국내 유수 대학에서 헤어디자인학과를 운영 중입니다.',
    roadmap: ['헤어 기초 (위생·도구 사용법)', '커트 기초 → 자격증 실기', '펌·염색 응용 기술', '업스타일·작품 연출', '포트폴리오 제작 → 면접 대비'],
    licenses: ['미용사(일반) 국가자격증', '헤어 NCS 수준별 자격', '두피관리사(선택)'],
    schools: ['서경대 헤어디자인학과', '수원여대 뷰티아트과', '경인여대 헤어디자인과', '혜전대 헤어미용과', '한국관광대 뷰티코디네이션과'],
  },
  makeup: {
    emoji: '💄',
    intro: '메이크업아티스트 전공은 뷰티·웨딩·무대·미디어 등 다양한 분야에서 활약하는 전문 직종입니다. 실기 작품의 완성도가 합격의 핵심입니다.',
    roadmap: ['메이크업 기초 (피부·색채론)', '미용사(메이크업) 자격증 준비', '특수·무대 메이크업 기술', '포트폴리오 작품 제작', '면접·실기 시험 대비'],
    licenses: ['미용사(메이크업) 국가자격증', '컬러리스트 자격증(선택)', 'NCS 메이크업 수준별 자격'],
    schools: ['경인여대 메이크업아티스트과', '혜전대 메이크업학과', '동아방송예술대 뷰티아트학과', '연성대 미용예술학과', '강원도립대 뷰티아트과'],
  },
  nail: {
    emoji: '💅',
    intro: '네일아트 전공은 네일 케어·젤·아크릴·네일아트 등을 배우는 실용적인 미용 전공입니다. 자격증 취득 후 창업이나 취업이 비교적 빠른 편입니다.',
    roadmap: ['네일 기초 (위생·도구)', '미용사(네일) 자격증 준비', '젤네일·아크릴·네일아트', '살롱 실무 트레이닝', '포트폴리오 제작'],
    licenses: ['미용사(네일) 국가자격증', '네일 NCS 수준별 자격'],
    schools: ['동아방송예술대 뷰티아트학과', '부천대 뷰티케어과', '경북전문대 미용예술과', '대구미래대 뷰티케어과', '연성대 미용예술학과'],
  },
  skin: {
    emoji: '✨',
    intro: '피부미용 전공은 피부 관리·에스테틱·의료피부 등을 다루는 전문 분야입니다. 의료·뷰티 융합 트렌드로 취업 수요가 꾸준히 증가하고 있습니다.',
    roadmap: ['피부학·해부학 기초', '피부미용 기기 관리', '미용사(피부) 자격증 준비', '경락·피부 관리 실무', '포트폴리오·면접 대비'],
    licenses: ['미용사(피부) 국가자격증', '경락관리사(선택)', 'NCS 피부미용 수준별 자격'],
    schools: ['한국관광대 뷰티코디네이션과', '수원여대 피부미용과', '경인여대 피부미용과', '혜전대 피부미용과', '연성대 미용예술학과'],
  },
}

export default async function MajorPage({ params }: Props) {
  const { major } = await params
  const majorInfo = MAJORS.find(m => m.id === major)
  if (!majorInfo) notFound()
  const detail = MAJOR_DETAIL[major]
  const relatedAcademies = ACADEMIES.filter(a => a.majors.includes(major)).slice(0, 4)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${majorInfo.label} 미용입시 정보`,
    description: `${majorInfo.label} 전공 미용입시 준비 로드맵, 자격증, 학원비 정보`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="bg-premium-gradient py-14 px-4 text-center">
          <nav aria-label="브레드크럼" className="text-sm text-gray-400 mb-4">
            <ol className="flex justify-center gap-2">
              <li><a href="/" className="hover:text-brand">홈</a></li>
              <li aria-hidden="true">/</li>
              <li>{majorInfo.label}</li>
            </ol>
          </nav>
          <p className="text-5xl mb-3" role="img" aria-label={majorInfo.name}>{detail.emoji}</p>
          <h1 className="text-4xl font-black text-gray-900 mb-3">{majorInfo.label} 미용입시</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">{detail.intro}</p>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-14">

          {/* 로드맵 */}
          <section aria-labelledby={`${major}-roadmap`}>
            <h2 id={`${major}-roadmap`} className="text-2xl font-black text-gray-900 mb-6">
              {majorInfo.label} 입시 준비 로드맵
            </h2>
            <ol className="space-y-3" role="list">
              {detail.roadmap.map((step, i) => (
                <li key={i} className="flex gap-4 items-start bg-white rounded-2xl border border-gray-100 p-5">
                  <span className="w-8 h-8 rounded-full bg-brand text-white text-sm font-black flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 font-medium pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* 자격증 */}
          <section aria-labelledby={`${major}-license`}>
            <h2 id={`${major}-license`} className="text-2xl font-black text-gray-900 mb-6">관련 자격증</h2>
            <ul className="grid md:grid-cols-3 gap-4" role="list">
              {detail.licenses.map(l => (
                <li key={l} className="bg-brand/5 rounded-2xl p-5 text-center">
                  <p className="text-sm font-bold text-gray-800">{l}</p>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/guide/license" className="text-brand text-sm font-bold hover:underline">
                자격증 일정·합격률 자세히 보기 →
              </Link>
            </div>
          </section>

          {/* 주요 대학 */}
          <section aria-labelledby={`${major}-schools`}>
            <h2 id={`${major}-schools`} className="text-2xl font-black text-gray-900 mb-6">
              {majorInfo.label} 주요 대학
            </h2>
            <ul className="grid md:grid-cols-2 gap-3" role="list">
              {detail.schools.map(s => (
                <li key={s} className="bg-white rounded-xl border border-gray-100 px-5 py-4 text-sm font-medium text-gray-700">
                  🏫 {s}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/guide/universities" className="text-brand text-sm font-bold hover:underline">
                미용대학 입결·모집요강 자세히 보기 →
              </Link>
            </div>
          </section>

          {/* 제휴 학원 */}
          {relatedAcademies.length > 0 && (
            <section aria-labelledby={`${major}-academies`}>
              <h2 id={`${major}-academies`} className="text-2xl font-black text-gray-900 mb-6">
                {majorInfo.label} 제휴 학원
              </h2>
              <ul className="grid md:grid-cols-2 gap-4" role="list">
                {relatedAcademies.map(a => (
                  <li key={a.id} className="bg-white rounded-2xl border border-gray-100 p-5">
                    <h3 className="font-bold text-gray-900">{a.name}</h3>
                    <p className="text-sm text-gray-400">{a.region}</p>
                    <p className="text-brand font-bold mt-1">{a.priceMin}~{a.priceMax}만원</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CTA */}
          <aside className="bg-brand/5 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-3">{majorInfo.label} 학원비 비교</h2>
            <p className="text-gray-500 mb-6 text-sm">올댓뷰티 전문 멘토가 {majorInfo.label} 입시학원을 직접 비교해드립니다</p>
            <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
              올댓뷰티 멘토 상담 신청 →
            </Link>
          </aside>

        </div>
      </article>
    </>
  )
}
