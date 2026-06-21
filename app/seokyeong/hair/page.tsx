import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '서경대 헤어디자인학과 입시 | 실기 내용·모집요강·합격 전략',
  description: '서경대 헤어디자인학과 입시를 준비하는 학생을 위한 실기 내용, 모집요강, 합격 전략을 상세히 안내합니다.',
  alternates: { canonical: '/seokyeong/hair' },
}

export default function SeokyeongHairPage() {
  return (
    <article>
      <header className="bg-premium-gradient py-14 px-4 text-center">
        <nav aria-label="브레드크럼" className="text-sm text-gray-400 mb-4">
          <ol className="flex justify-center gap-2">
            <li><a href="/seokyeong" className="hover:text-brand">서경대</a></li>
            <li aria-hidden="true">/</li>
            <li>헤어디자인학과</li>
          </ol>
        </nav>
        <p className="text-4xl mb-3" role="img" aria-label="헤어">💇</p>
        <h1 className="text-4xl font-black text-gray-900 mb-3">서경대 헤어디자인학과</h1>
        <p className="text-gray-500">서경대미용학과 헤어디자인 입시 정보 총정리</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {/* 모집요강 */}
        <section aria-labelledby="hair-quota">
          <h2 id="hair-quota" className="text-2xl font-black text-gray-900 mb-6">모집요강</h2>
          <dl className="bg-white rounded-2xl border border-gray-100 p-6 grid md:grid-cols-2 gap-5 text-sm">
            {[
              { dt: '모집인원', dd: '약 30명 (매년 변동 있음)' },
              { dt: '전형 유형', dd: '수시 1차·2차 / 정시' },
              { dt: '전형 방법', dd: '실기 80% + 학생부 20%' },
              { dt: '주요 실기 과목', dd: '커트 기초, 업스타일, 헤어 작품' },
              { dt: '자격증 가산점', dd: '미용사(일반) 자격증 보유 시 가산' },
              { dt: '면접', dd: '포트폴리오 발표 포함 (일부 전형)' },
            ].map(item => (
              <div key={item.dt} className="flex gap-3">
                <dt className="text-gray-400 shrink-0 w-24">{item.dt}</dt>
                <dd className="font-bold text-gray-800">{item.dd}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs text-gray-400 mt-2">※ 정확한 모집요강은 서경대학교 공식 입학처에서 확인하세요.</p>
        </section>

        {/* 실기 준비 */}
        <section aria-labelledby="hair-practical">
          <h2 id="hair-practical" className="text-2xl font-black text-gray-900 mb-6">실기 준비 포인트</h2>
          <ul className="space-y-3" role="list">
            {[
              '커트 기초: 원랭스·그래듀에이션·레이어 등 기본 커트 스킬 완성',
              '업스타일: 다양한 업스타일 기법과 핀웨이브 연습',
              '헤어 작품: 창의적인 헤어 작품 연출 능력 (포트폴리오 포함)',
              '시간 관리: 실기 시험 시간 내 작품 완성 연습 필수',
              '위생·안전: 도구 취급과 위생 관리 기본 점수 놓치지 않기',
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 bg-white rounded-xl border border-gray-100 p-4">
                <span className="w-6 h-6 rounded-full bg-brand text-white text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                <p className="text-sm text-gray-700">{tip}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="bg-brand/5 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">서경대 헤어 입시 전문 학원비 비교</h2>
          <Link href="/compare" className="inline-block bg-brand text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark transition-colors">
            올댓뷰티 멘토 상담 신청 →
          </Link>
        </aside>
      </div>
    </article>
  )
}
