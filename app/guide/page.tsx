import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '미용입시 가이드 허브 | 준비 타이밍·자격증·대학 정보 총정리',
  description: '미용입시 준비에 필요한 모든 정보. 학년별 준비 타이밍, 미용사 자격증 일정, 미용대학 입결·모집요강까지 한눈에.',
  alternates: { canonical: '/guide' },
}

const GUIDE_MENU = [
  { href: '/guide/timing', emoji: '⏰', title: '준비 타이밍', desc: '고1·고2·고3·재수생별 미용입시 준비 체크리스트와 로드맵' },
  { href: '/guide/license', emoji: '📜', title: '자격증 정보', desc: '미용사 국가자격증 시험 일정·합격률·응시 방법 총정리' },
  { href: '/guide/universities', emoji: '🏫', title: '미용대학 정보', desc: '전국 미용학과 입결·모집인원·전형 방법 비교' },
  { href: '/guide/practical', emoji: '🎨', title: '실기 가이드', desc: '헤어·메이크업·네일·피부 전공별 실기 준비 방법' },
]

export default function GuidePage() {
  return (
    <article>
      <header className="bg-premium-gradient py-14 px-4 text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">미용입시 가이드</h1>
        <p className="text-gray-500 max-w-xl mx-auto">미용입시 준비에 필요한 모든 정보를 한 곳에서 확인하세요</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <nav aria-label="미용입시 가이드 메뉴">
          <ul className="grid md:grid-cols-2 gap-5" role="list">
            {GUIDE_MENU.map(g => (
              <li key={g.href}>
                <Link href={g.href}
                  className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-brand/30 transition-all group h-full">
                  <span className="text-4xl shrink-0" role="img" aria-label={g.title}>{g.emoji}</span>
                  <div>
                    <h2 className="font-black text-gray-900 group-hover:text-brand transition-colors mb-1">{g.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 빠른 팁 */}
        <section aria-labelledby="quick-tips" className="mt-12">
          <h2 id="quick-tips" className="text-2xl font-black text-gray-900 mb-6">미용입시 핵심 정보 3가지</h2>
          <ul className="space-y-4" role="list">
            {[
              { title: '실기가 합격의 80%', desc: '미용입시는 실기 점수 비중이 매우 높습니다. 조기에 학원을 등록해 실기 연습 시간을 충분히 확보하는 것이 중요합니다.' },
              { title: '자격증은 필수 스펙', desc: '미용사 국가자격증 취득 여부가 대학 입시에서 중요한 평가 요소입니다. 고2~고3 초반에 자격증을 먼저 취득하는 것을 권장합니다.' },
              { title: '학원 선택 기준', desc: '단순히 학원비만 비교하지 말고 담당 강사 경력, 대학별 합격률, 학원 위치, 소수정예 여부를 종합적으로 비교하세요.' },
            ].map(tip => (
              <li key={tip.title} className="bg-white rounded-2xl border border-gray-100 p-5">
                <h3 className="font-bold text-gray-900 mb-1.5">✅ {tip.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="mt-12 bg-brand/5 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">지금 바로 학원비를 비교해 보세요</h2>
          <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
            올댓뷰티 멘토 상담 신청 →
          </Link>
        </aside>
      </div>
    </article>
  )
}
