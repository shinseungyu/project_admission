import type { Metadata } from 'next'
import Link from 'next/link'
import { MAJORS } from '@/data/constants'

export const metadata: Metadata = {
  title: '미용입시 실기 가이드 | 전공별 실기 준비 방법',
  description: '헤어·메이크업·네일·피부 전공별 미용입시 실기 준비 방법과 핵심 포인트를 안내합니다.',
  alternates: { canonical: '/guide/practical' },
}

const PRACTICAL_TIPS: Record<string, { tips: string[]; timeframe: string }> = {
  hair: {
    tips: ['커트 기본기부터 탄탄히 — 원랭스·그래듀에이션·레이어 순서대로', '업스타일은 반복 연습이 핵심, 핀웨이브·롤컬 매일 연습', '시험 시간 내 완성 능력 → 타이머 설정 실전 연습', '재료 세팅 순서 반복 숙지'],
    timeframe: '최소 8~12개월',
  },
  makeup: {
    tips: ['피부 표현(베이스)의 완성도가 전체 점수의 절반', '색채 이론 이해 후 컬러 조화 능력 키우기', '특수 메이크업 기초(상처·노화) 빠르게 습득', '최신 트렌드 반영한 작품 제작 연습'],
    timeframe: '최소 6~10개월',
  },
  nail: {
    tips: ['기본 케어·큐티클 정리 완성도가 점수 기본', '젤네일 경화 시간 정확히 파악', '네일아트 디자인 다양하게 준비', '손 자세와 작업 속도 동시에 연습'],
    timeframe: '최소 4~8개월',
  },
  skin: {
    tips: ['피부 분석·진단 능력 이론과 실기 병행', '매뉴얼 테크닉(경락·딥클렌징) 정확한 순서 암기', '기기 관리(갈바닉·초음파) 작동법 완벽 숙지', '위생 관리 기본 점수 절대 놓치지 말 것'],
    timeframe: '최소 6~10개월',
  },
}

export default function PracticalPage() {
  return (
    <article>
      <header className="bg-premium-gradient py-14 px-4 text-center">
        <nav aria-label="브레드크럼" className="text-sm text-gray-400 mb-4">
          <ol className="flex justify-center gap-2">
            <li><a href="/guide" className="hover:text-brand">가이드</a></li>
            <li aria-hidden="true">/</li>
            <li>실기 가이드</li>
          </ol>
        </nav>
        <h1 className="text-4xl font-black text-gray-900 mb-3">미용입시 실기 가이드</h1>
        <p className="text-gray-500 max-w-xl mx-auto">전공별 실기 준비 방법과 핵심 포인트 총정리</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {MAJORS.map(m => {
          const detail = PRACTICAL_TIPS[m.id]
          return (
            <section key={m.id} aria-labelledby={`${m.id}-practical`} className="bg-white rounded-3xl border border-gray-100 p-8">
              <h2 id={`${m.id}-practical`} className="text-2xl font-black text-gray-900 mb-1">
                {m.id === 'hair' ? '💇' : m.id === 'makeup' ? '💄' : m.id === 'nail' ? '💅' : '✨'} {m.label} 실기
              </h2>
              <p className="text-sm text-brand font-bold mb-5">권장 준비 기간: {detail.timeframe}</p>
              <ul className="space-y-3" role="list">
                {detail.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                    <p className="text-sm text-gray-700">{tip}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <Link href={`/major/${m.id}`} className="text-brand text-sm font-bold hover:underline">
                  {m.label} 전공 자세히 보기 →
                </Link>
              </div>
            </section>
          )
        })}

        <aside className="bg-brand/5 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">실기 전문 학원을 찾고 계신가요?</h2>
          <p className="text-gray-500 mb-6 text-sm">올댓뷰티 전문 멘토가 실기 커리큘럼이 탄탄한 학원을 직접 비교해드립니다</p>
          <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
            올댓뷰티 멘토 상담 신청 →
          </Link>
        </aside>
      </div>
    </article>
  )
}
