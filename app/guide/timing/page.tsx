import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '미용입시 준비 타이밍 | 고1·고2·고3·재수생 체크리스트',
  description: '미용입시 준비는 언제 시작해야 할까? 학년별 맞춤 준비 로드맵과 체크리스트를 확인하세요.',
  alternates: { canonical: '/guide/timing' },
}

const GRADE_PLANS = [
  {
    grade: '고1',
    color: 'bg-green-50 border-green-200',
    accentColor: 'text-green-700',
    steps: [
      '미용 관련 정보 탐색 & 전공 관심 분야 설정',
      '미용 관련 행사·전시 참관으로 분야 체험',
      '여름·겨울방학 중 미용 기초 원데이 클래스 수강',
      '성적 관리 (수시 학생부 반영 대학 대비)',
    ],
    tip: '아직 시간이 많습니다. 다양한 미용 분야를 체험하며 적성을 파악하세요.',
  },
  {
    grade: '고2',
    color: 'bg-blue-50 border-blue-200',
    accentColor: 'text-blue-700',
    steps: [
      '2학기부터 본격적인 학원 등록 권장',
      '미용사 자격증(해당 전공) 취득 목표 설정',
      '목표 대학 입결·모집 요강 조사',
      '학원비 비교 견적 후 학원 등록',
      '실기 기초 집중 연습',
    ],
    tip: '고2 2학기~고3 1학기가 학원 시작의 황금기입니다.',
  },
  {
    grade: '고3',
    color: 'bg-orange-50 border-orange-200',
    accentColor: 'text-orange-700',
    steps: [
      '3월 전까지 학원 등록 완료 (늦어도 4월)',
      '상반기 자격증 취득 완료 목표',
      '하반기 포트폴리오·작품 완성',
      '수시 원서 접수 (9~10월)',
      '면접 대비 준비 (11월)',
      '정시 준비 병행',
    ],
    tip: '늦어도 3월 안에 시작하세요. 실기 연습에 최소 6개월이 필요합니다.',
  },
  {
    grade: '재수생',
    color: 'bg-purple-50 border-purple-200',
    accentColor: 'text-purple-700',
    steps: [
      '지난 입시 결과 분석 후 전략 수정',
      '재수생 전문 과정 학원 등록',
      '실기 보완 포인트 집중 연습',
      '포트폴리오 업그레이드',
      '수시·정시 동시 준비',
    ],
    tip: '재수생 할인을 제공하는 학원을 찾아 비용을 절감하세요.',
  },
]

export default function TimingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '미용입시 준비 타이밍 가이드',
    description: '학년별 미용입시 준비 방법',
    step: GRADE_PLANS.map(p => ({
      '@type': 'HowToStep',
      name: `${p.grade} 미용입시 준비`,
      itemListElement: p.steps.map(s => ({ '@type': 'HowToDirection', text: s })),
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
              <li>준비 타이밍</li>
            </ol>
          </nav>
          <h1 className="text-4xl font-black text-gray-900 mb-3">미용입시 준비 타이밍</h1>
          <p className="text-gray-500 max-w-xl mx-auto">고1·고2·고3·재수생별 맞춤 로드맵과 체크리스트</p>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          {GRADE_PLANS.map(plan => (
            <section key={plan.grade} aria-labelledby={`${plan.grade}-plan`}
              className={`rounded-3xl border-2 p-8 ${plan.color}`}>
              <h2 id={`${plan.grade}-plan`} className={`text-2xl font-black mb-2 ${plan.accentColor}`}>
                {plan.grade} 미용입시 준비
              </h2>
              <p className="text-sm text-gray-500 mb-5 italic">{plan.tip}</p>
              <ul className="space-y-2.5" role="list">
                {plan.steps.map((s, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${plan.accentColor} bg-white`}>{i + 1}</span>
                    <p className="text-sm text-gray-700">{s}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <aside className="bg-brand/5 rounded-3xl p-8 text-center mt-8">
            <h2 className="text-2xl font-black text-gray-900 mb-3">지금 바로 학원비를 비교하세요</h2>
            <p className="text-gray-500 mb-6 text-sm">준비 타이밍을 정했다면, 이제 학원비를 비교할 차례입니다</p>
            <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
              올댓뷰티 멘토 상담 신청 →
            </Link>
          </aside>
        </div>
      </article>
    </>
  )
}
