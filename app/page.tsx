import type { Metadata } from 'next'
import Link from 'next/link'
import LeadForm from '@/components/LeadForm'
import { MAJORS } from '@/data/constants'

const KEY_REGIONS = ['서울', '경기', '인천', '부산', '대구', '광주', '대전']

export const metadata: Metadata = {
  title: '미용입시 학원비 비교 | 헤어·메이크업·네일·피부 전공별 견적 총정리 2026',
  description: '미용입시 학원비를 한 번에 비교하세요. 올댓뷰티 전문 멘토가 헤어·메이크업·네일·피부 전공별 학원비와 국비지원 정보를 1:1로 안내해드립니다.',
  alternates: { canonical: '/' },
}

const PRICE_TABLE = [
  { major: '헤어디자인', min: 250, max: 380, avg: 315, schools: '서경대·수원여대 등' },
  { major: '메이크업아티스트', min: 200, max: 320, avg: 260, schools: '경인여대·혜전대 등' },
  { major: '네일아트', min: 150, max: 230, avg: 190, schools: '동아방송예술대 등' },
  { major: '피부미용', min: 280, max: 400, avg: 340, schools: '한국관광대·연성대 등' },
]

const CONCERNS = [
  { icon: '💰', title: '학원비 차이가 너무 커요', desc: '같은 헤어디자인 전공이라도 학원마다 150만원 이상 차이 나는 경우가 흔합니다. 커리큘럼·수업 시수·실기 재료비 포함 여부를 기준으로 올댓뷰티 멘토가 조건별 학원비를 투명하게 비교·정리해 드립니다. 국비지원 가능 과정이면 실 부담금이 절반 이하로 줄어드는 경우도 있습니다.' },
  { icon: '⏰', title: '준비 시기를 모르겠어요', desc: '미용대학 입시는 실기 비중이 압도적으로 높아 준비 기간이 합격률을 좌우합니다. 고2 2학기 이전에 시작하면 여유 있게 포트폴리오를 완성할 수 있고, 고3 1학기 진입도 집중 반으로 충분히 커버됩니다. 학년·시기별 맞춤 로드맵을 무료로 안내해 드립니다.' },
  { icon: '🎓', title: '국비지원 받을 수 있나요?', desc: '내일배움카드(직업훈련 바우처)를 활용하면 수강료의 최대 80%를 지원받을 수 있습니다. 단, 입시 전문 과정과 자격증 취득 과정은 지원 기준이 다르며 학원마다 인가 여부가 다릅니다. 올댓뷰티 멘토가 지역·전공별 국비 가능 학원을 직접 확인해 안내해 드립니다.' },
]

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section
        aria-labelledby="hero-heading"
        className="relative flex flex-col justify-center py-24 md:py-32 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/hero_beauty_bg.png" alt="미용입시 학원비 비교 플랫폼 올댓뷰티 배경 이미지" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/60 md:bg-white/40 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 텍스트 */}
            <div className="text-left">
              <p className="inline-block border border-brand/20 text-gray-900 bg-white/80 backdrop-blur-sm text-sm font-bold px-5 py-2 rounded-full tracking-widest mb-6 shadow-sm">
                🎉 비교부터 상담까지 100% 무료 플랫폼
              </p>
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
                미용입시 학원비,<br />
                <span className="text-gray-600">무료로 한 번에 비교하세요</span>
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                헤어·메이크업·네일·피부 전공별 학원비를<br className="hidden md:block" />
                올댓뷰티 전문 멘토가 1:1로 <strong className="text-brand">전액 무료로 상담</strong>해드립니다.
              </p>
            </div>
            {/* 폼 */}
            <div className="w-full">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-premium border border-gray-100/80">
                <LeadForm sourcePage="main_hero" variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 지역 바로가기 ─── */}
      <section aria-labelledby="region-heading" className="py-20 bg-[#FDFCFB]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 id="region-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3">
              내 지역 미용입시학원 찾기
            </h2>
            <p className="text-gray-500 leading-relaxed">거주 지역을 선택하면 해당 지역 미용입시학원의 전공별 평균 학원비, 국비지원 가능 여부, 제휴 학원 견적까지 한 번에 확인할 수 있습니다. 올댓뷰티 멘토가 지역별 합격 데이터를 바탕으로 최적의 학원을 1:1로 추천해 드립니다.</p>
          </div>
          <nav aria-label="지역별 미용입시 학원">
            <ul className="flex flex-wrap justify-center gap-2" role="list">
              {KEY_REGIONS.map((r) => (
                <li key={r}>
                  <Link
                    href={`/region/${encodeURIComponent(r)}`}
                    className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-all bg-white"
                  >
                    {r} 미용입시학원
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ─── 검색 의도 답변 섹션 ─── */}
      <section aria-labelledby="intent-heading" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 id="intent-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              미용입시 학원비 비교사이트란?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              미용입시 학원비 비교사이트는 헤어·메이크업·네일·피부 전공 입시를 준비하는 고등학생·재수생·학부모를 위해
              여러 미용입시학원의 학원비를 한 번에 비교할 수 있는 중립 정보 플랫폼입니다.
              특정 학원의 광고나 수수료 없이, 실제 제휴 학원 데이터를 기반으로 전공별·지역별 학원비를 투명하게 제공하며
              올댓뷰티 전문 멘토의 1:1 상담 연결까지 전액 무료로 지원합니다.
            </p>
          </div>
          <ul className="grid md:grid-cols-3 gap-6" role="list">
            {[
              { href: '/compare', title: '미용입시 학원비 무료 견적 비교', label: '무료 견적 비교', desc: '지역·전공·예산 조건을 입력하면 올댓뷰티 멘토가 제휴 학원의 실제 학원비 견적을 직접 비교해 드립니다. 학원마다 다른 수업 시수·재료비 포함 여부까지 정리해 드립니다.', icon: '📊' },
              { href: '/cost', title: '미용입시 학원비용 및 국비지원 가이드', label: '비용·국비 가이드', desc: '헤어·메이크업·네일·피부 전공별 평균 학원비와 내일배움카드 활용법, 지역별 국비지원 가능 학원 정보를 한눈에 확인할 수 있습니다.', icon: '💸' },
              { href: '/guide/timing', title: '학년별 미용입시 준비 타이밍', label: '학년별 준비 로드맵', desc: '고1부터 재수생까지 학년별로 언제, 무엇을 준비해야 하는지 실기 준비 기간·포트폴리오 완성 시점·원서 접수 일정을 체계적으로 안내합니다.', icon: '⏳' },
            ].map(c => (
              <li key={c.href}>
                <Link href={c.href} title={c.title}
                  className="block bg-[#FAF9F7] border border-gray-100 rounded-[2rem] p-8 hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">{c.icon}</div>
                  <p className="font-bold text-gray-900 text-lg mb-2">{c.label}</p>
                  <p className="text-gray-500">{c.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── 전공별 평균 학원비 표 ─── */}
      <section aria-labelledby="price-table-heading" className="py-24 bg-[#FAF9F7]">
        <div className="max-w-5xl mx-auto px-4">
          <header className="text-center mb-16">
            <h2 id="price-table-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              미용입시 전공별 평균 학원비
            </h2>
            <p className="text-gray-500 text-lg">2026년 기준 실제 제휴 학원 데이터 집계</p>
          </header>
          <div className="overflow-x-auto rounded-3xl shadow-sm border border-gray-100 bg-white">
            <table className="w-full bg-white text-sm">
              <caption className="sr-only">2026년 미용입시 전공별 평균 학원비 비교표 — 헤어·메이크업·네일·피부 최저·최고·평균 금액</caption>
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-500">
                  <th scope="col" className="px-6 py-5 text-left font-semibold">전공</th>
                  <th scope="col" className="px-6 py-5 text-center font-semibold">최저</th>
                  <th scope="col" className="px-6 py-5 text-center font-semibold">최고</th>
                  <th scope="col" className="px-6 py-5 text-center font-semibold">평균</th>
                  <th scope="col" className="px-6 py-5 text-left font-semibold">주요 대학</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICE_TABLE.map((row) => (
                  <tr key={row.major} className="hover:bg-gray-50/50 transition-colors">
                    <th scope="row" className="px-6 py-5 font-bold text-gray-900 text-left">{row.major}</th>
                    <td className="px-6 py-5 text-center text-gray-500">{row.min}만원~</td>
                    <td className="px-6 py-5 text-center text-gray-500">~{row.max}만원</td>
                    <td className="px-6 py-5 text-center font-bold text-gray-900">{row.avg}만원</td>
                    <td className="px-6 py-5 text-gray-400 text-xs">{row.schools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">※ 지역·학원에 따라 차이가 있을 수 있습니다. 무료 견적으로 정확한 금액을 확인하세요.</p>
          <div className="text-center mt-10">
            <Link href="/cost" title="미용입시 학원비용 구성 및 국비지원 자세히 보기"
              className="inline-block bg-white border border-gray-200 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-sm shadow-sm">
              자세한 비용 가이드 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 전공 바로가기 ─── */}
      <section aria-labelledby="major-heading" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="major-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              전공별 미용입시 정보
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">미용대학 입시는 전공마다 실기 출제 유형, 준비 기간, 자격증 연계 여부가 크게 다릅니다. 헤어·메이크업·네일·피부 전공별 입시 특성과 평균 학원비, 주요 합격 대학 정보를 확인하고 나에게 맞는 전공을 선택해 보세요.</p>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
            {MAJORS.map((m) => (
              <li key={m.id}>
                <Link href={`/major/${m.id}`}
                  className="block p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all text-center group">
                  <div className="w-16 h-16 mx-auto bg-[#FAF9F7] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <p className="text-3xl">
                      {m.id === 'hair' ? '💇' : m.id === 'makeup' ? '💄' : m.id === 'nail' ? '💅' : '✨'}
                    </p>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">{m.label}</p>
                  <p className="text-sm text-gray-400 mt-2">평균 {m.avg}만원</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── 3대 고민 ─── */}
      <section aria-labelledby="concerns-heading" className="py-24 bg-[#FDFCFB] border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="concerns-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              미용입시 준비, 이런 고민 있으신가요?
            </h2>
            <p className="text-gray-500 text-lg">학원비 비교 플랫폼에서 한 번에 해결하세요</p>
          </div>
          <ul className="grid md:grid-cols-3 gap-6" role="list">
            {CONCERNS.map((c) => (
              <li key={c.title} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
                <div className="w-12 h-12 bg-[#FAF9F7] rounded-full flex items-center justify-center text-2xl mb-6">
                  <span role="img" aria-label={c.title}>{c.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-500 leading-relaxed">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── 진행 3단계 ─── */}
      <section aria-labelledby="steps-heading" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="steps-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              이용 방법, 딱 3단계
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">복잡한 학원 탐색 없이 지역·전공 정보만 입력하면 올댓뷰티 멘토가 직접 제휴 학원 견적을 비교해 드립니다. 평균 영업일 1일 이내에 연락이 오며, 상담부터 최종 결정까지 100% 무료입니다.</p>
          </div>
          <ol className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '무료 상담 신청', desc: '이름·지역·전공만 입력하면 됩니다. 별도 회원가입 없이 1분 안에 신청이 완료되며, 올댓뷰티 전문 멘토가 영업일 1일 이내에 직접 연락드립니다.' },
              { step: '02', title: '맞춤 학원 매칭', desc: '멘토가 조건에 맞는 제휴 학원 최대 3곳을 선별해 수업 시수·재료비 포함 여부·국비지원 가능 여부를 포함한 실제 견적을 비교 정리해 드립니다.' },
              { step: '03', title: '학원 비교 후 결정', desc: '여러 학원의 학원비와 커리큘럼을 나란히 비교한 뒤 가장 적합한 학원을 선택하세요. 결정 이후에도 등록 전까지 멘토 상담은 계속 무료로 제공됩니다.' },
            ].map((s) => (
              <li key={s.step} className="relative">
                <div className="bg-[#FAF9F7] rounded-[2rem] p-8 h-full">
                  <span className="text-5xl font-black text-gray-200 block mb-6">{s.step}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <Link href="/compare"
              className="inline-block bg-gray-900 text-white font-bold px-10 py-5 rounded-full hover:bg-black transition-all shadow-premium text-lg hover:scale-105">
              올댓뷰티 멘토 상담 신청
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 합격 후기 슬라이더 ─── */}
      <section aria-labelledby="reviews-heading" className="py-24 bg-[#FDFCFB] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-4">
            실제 합격생 후기
          </h2>
          <p className="text-gray-500 text-lg text-center mb-16">올댓뷰티 멘토와 함께 이뤄낸 합격의 순간들</p>
          
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]" role="list">
            {/* 1. 서경대 로고 카드 (Col 1) */}
            <li className="col-span-1 bg-[#F4F3F0] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group">
              <p className="text-3xl font-black text-gray-900 tracking-tighter group-hover:scale-105 transition-transform">서경대</p>
              <p className="text-sm font-medium text-gray-500 mt-2">합격 배출</p>
            </li>
            
            {/* 2. 학생 인물 사진 (Col 1) */}
            <li className="col-span-1 rounded-[2rem] relative overflow-hidden shadow-sm group">
              <img src="/portrait_female.png" alt="미용입시 합격생 김지연 메이크업 전공" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-lg flex items-center gap-2"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">J</span> 김지연</p>
                <p className="text-sm text-white/80">메이크업 전공</p>
              </div>
            </li>

            {/* 3. 와이드 풍경 카드 1 (Col 2) */}
            <li className="col-span-1 md:col-span-2 rounded-[2rem] relative overflow-hidden shadow-sm group">
              <img src="/sunset_clouds.png" alt="미용입시 합격생 이수진 건국대 합격 후기" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-x-8 bottom-8 text-white">
                <p className="text-sm font-semibold text-white/80 mb-2">이수진 · 건국대 합격</p>
                <p className="text-xl md:text-2xl font-medium leading-snug">"막막했던 미용입시, 전문 멘토님의 1:1 맞춤 로드맵 덕분에 학원비 부담을 줄이고 합격까지 성공했습니다."</p>
              </div>
            </li>

            {/* 4. 와이드 풍경 카드 2 (Col 2) */}
            <li className="col-span-1 md:col-span-2 rounded-[2rem] relative overflow-hidden shadow-sm group">
              <img src="/green_meadow.png" alt="미용입시 합격생 박민수 서경대 합격 후기" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute inset-x-8 bottom-8 text-white">
                <p className="text-sm font-semibold text-white/80 mb-2">박민수 · 서경대 합격</p>
                <p className="text-xl md:text-2xl font-medium leading-snug">"학원마다 천차만별인 학원비, 한 눈에 비교하고 저에게 딱 맞는 국비지원 학원을 찾아 효율적으로 준비했어요."</p>
              </div>
            </li>

            {/* 5. 다크 모드 텍스트 카드 (Col 1) */}
            <li className="col-span-1 bg-[#1C1B1A] rounded-[2rem] p-8 flex flex-col justify-end shadow-sm">
              <p className="text-3xl font-bold text-white mb-2">2,400+</p>
              <p className="text-gray-400 font-medium text-sm">누적 합격생 데이터</p>
            </li>

            {/* 6. 학생 인물 사진 2 (Col 1) */}
            <li className="col-span-1 rounded-[2rem] relative overflow-hidden shadow-sm group">
              <img src="/portrait_male.png" alt="미용입시 합격생 최준호 헤어디자인 전공" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-lg flex items-center gap-2"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">M</span> 최준호</p>
                <p className="text-sm text-white/80">헤어디자인 전공</p>
              </div>
            </li>
          </ul>
          <div className="text-center mt-12">
            <Link href="/review" title="미용입시 합격생 후기 더보기" className="inline-block bg-white border border-gray-200 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-sm shadow-sm">
              합격 후기 더보기
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section aria-labelledby="faq-heading" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">미용입시를 처음 준비하는 학생·학부모에게 가장 많이 들어온 질문을 정리했습니다. 학원비 구성 방식부터 준비 시작 시기, 국비지원 조건, 상담 절차까지 실제 사례를 바탕으로 답변합니다.</p>
          </div>
          <dl className="space-y-6">
            {[
              { q: '미용입시 학원비는 얼마나 드나요?', a: '전공·지역·학원에 따라 다르지만 평균 150~400만원 수준입니다. 헤어가 가장 높고 네일이 가장 낮은 편이며, 국비지원 활용 시 실 부담금을 크게 줄일 수 있습니다.' },
              { q: '미용입시 준비는 언제부터 시작해야 하나요?', a: '고2 2학기부터 시작하는 것이 일반적입니다. 실기 준비에 최소 6개월이 필요하므로 늦어도 고3 1학기 내에 시작하세요. 가이드 페이지에서 학년별 로드맵을 확인하실 수 있습니다.' },
              { q: '미용입시 학원비 비교사이트는 무료인가요?', a: '네, 전액 무료입니다! 올댓뷰티 전문 멘토의 비교 서비스 및 1:1 맞춤 상담은 100% 무료로 제공됩니다. 학원 소개비나 수수료 없이 학생과 학부모에게 중립적인 비교 정보를 제공합니다.' },
              { q: '여러 학원 견적을 동시에 받을 수 있나요?', a: '네, 한 번 신청으로 조건에 맞는 최대 3개 제휴 학원에서 견적을 받아보실 수 있습니다.' },
            ].map((item) => (
              <div key={item.q} className="border border-gray-100 bg-[#FAF9F7] rounded-[2rem] p-8">
                <dt className="font-bold text-gray-900 text-lg mb-3">Q. {item.q}</dt>
                <dd className="text-gray-500 leading-relaxed">A. {item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── 하단 CTA + 폼 ─── */}
      <section aria-labelledby="cta-heading" className="py-24 bg-gray-900 rounded-[3rem] mx-4 my-8 relative overflow-hidden">
        {/* 장식 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            지금 바로 학원비를 비교하세요
          </h2>
          <p className="text-gray-400 text-lg mb-12">올댓뷰티 전문 멘토가 무료로 상담해드립니다</p>
          <div className="bg-white rounded-3xl p-6 max-w-2xl mx-auto text-left shadow-2xl">
            <LeadForm sourcePage="main_bottom" variant="hero" />
          </div>
        </div>
      </section>

      {/* ─── B2B 학원 제휴 ─── */}
      <section aria-label="학원 제휴 안내" className="py-12 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-500 font-medium mb-4">미용입시 학원 원장님이신가요?</p>
          <Link href="/partner"
            className="inline-block border border-gray-200 text-gray-600 font-medium px-8 py-3 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors text-sm">
            제휴 학원 등록 문의
          </Link>
        </div>
      </section>
    </>
  )
}
