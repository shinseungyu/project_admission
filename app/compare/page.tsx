"use client"

import { useState } from 'react'
import { REGIONS, MAJORS } from '@/data/constants'

import { parsePhone } from '@/lib/validate'
import PrivacyModal from '@/components/PrivacyModal'

const STEPS = ['지역', '전공', '연락처']

type FormState = {
  region: string
  major: string
  customer_name: string
  customer_birth: string
  mobile1: string
  mobile2: string
  customer_sex: string
}

export default function ComparePage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>({
    region: '', major: '',
    customer_name: '', customer_birth: '', mobile1: '010', mobile2: '', customer_sex: '2',
  })
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [done, setDone] = useState(false)

  const set = (k: keyof FormState, v: string) => setForm(p => ({ ...p, [k]: v }))

  const next = () => {
    if (step === 0 && !form.region) { alert('지역을 선택해 주세요.'); return }
    if (step === 1 && !form.major) { alert('전공을 선택해 주세요.'); return }
    setStep(s => s + 1)
  }

  const handleFinalClick = () => {
    if (!form.customer_name) { alert('이름을 입력해 주세요.'); return }
    if (!form.mobile2) { alert('전화번호를 입력해 주세요.'); return }
    setShowModal(true)
  }

  const handleConfirm = async () => {
    const phoneResult = parsePhone(form.mobile1, form.mobile2)
    if (typeof phoneResult === 'string') { alert(phoneResult); return }
    const majorLabel = MAJORS.find(m => m.id === form.major)?.label ?? form.major
    const payload = { ...form, major: majorLabel, interest_field: majorLabel, category: majorLabel, mobile1: phoneResult.mobile1, mobile2: phoneResult.mobile2, source_page: 'compare', consent_privacy: true, consent_third_party: true }
    setSubmitted(true)
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      if (!res.ok) { alert('전송 실패'); setSubmitted(false); return }
      setDone(true)
    } catch { alert('네트워크 오류') }
    setSubmitted(false)
  }

  const chipClass = (selected: boolean) =>
    `px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all cursor-pointer ${selected ? 'border-brand bg-brand text-white' : 'border-gray-200 bg-white text-gray-700 hover:border-brand/50'}`

  if (done) return (
    <section className="min-h-screen flex items-center justify-center bg-premium-gradient px-4">
      <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-xl">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">신청 완료!</h1>
        <p className="text-gray-500 leading-relaxed mb-6">
          <strong className="text-brand">{form.region}</strong> 지역 <strong className="text-brand">{MAJORS.find(m => m.id === form.major)?.label}</strong> 제휴 학원에서<br />
          곧 연락드립니다. 보통 <strong>영업일 1일 이내</strong>에 연락이 옵니다.
        </p>
        <a href="/" className="inline-block bg-brand text-white font-bold px-8 py-3 rounded-full hover:bg-brand-dark transition-colors">
          홈으로 돌아가기
        </a>
      </div>
    </section>
  )

  return (
    <>
      {showModal && <PrivacyModal onConfirm={handleConfirm} onClose={() => setShowModal(false)} />}

      <section className="min-h-screen bg-premium-gradient py-16 px-4">
        <div className="max-w-xl mx-auto">
          {/* 헤더 */}
          <header className="text-center mb-10">
            <p className="text-brand text-sm font-bold mb-2">STEP {step + 1} / {STEPS.length}</p>
            <h1 className="text-3xl font-black text-gray-900">미용입시 학원비 비교 견적</h1>
            <p className="text-gray-500 mt-2 text-sm">올댓뷰티 전문 멘토가 무료로 상담해드립니다</p>
          </header>

          {/* 진행 바 */}
          <div className="flex gap-2 mb-10" role="progressbar" aria-valuenow={step + 1} aria-valuemax={STEPS.length}>
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1 h-2 rounded-full overflow-hidden bg-gray-200">
                <div className={`h-full bg-brand transition-all duration-500 ${i <= step ? 'w-full' : 'w-0'}`} />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">

            {/* STEP 0: 지역 */}
            {step === 0 && (
              <fieldset>
                <legend className="text-xl font-black text-gray-900 mb-2">어느 지역에서 다니실 건가요?</legend>
                <p className="text-sm text-gray-400 mb-6">학원을 다닐 지역을 선택하세요</p>
                <div className="flex flex-wrap gap-2">
                  {REGIONS.map(r => (
                    <button key={r} type="button" onClick={() => set('region', r)} className={chipClass(form.region === r)}>
                      {r}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* STEP 1: 전공 */}
            {step === 1 && (
              <fieldset>
                <legend className="text-xl font-black text-gray-900 mb-2">어떤 전공을 준비하시나요?</legend>
                <p className="text-sm text-gray-400 mb-6">관심 전공을 선택하세요</p>
                <div className="grid grid-cols-2 gap-3">
                  {MAJORS.map(m => (
                    <button key={m.id} type="button" onClick={() => set('major', m.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${form.major === m.id ? 'border-brand bg-brand/5' : 'border-gray-200 hover:border-brand/40'}`}>
                      <p className="text-xl mb-1">{m.id === 'hair' ? '💇' : m.id === 'makeup' ? '💄' : m.id === 'nail' ? '💅' : '✨'}</p>
                      <p className="font-bold text-sm text-gray-900">{m.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">평균 {m.avg}만원</p>
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* STEP 2: 연락처 */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-black text-gray-900 mb-1">마지막으로 연락처를 입력해 주세요</h2>
                <p className="text-sm text-gray-400 mb-6">제휴 학원에서 견적을 보내드립니다</p>

                {/* 이름 + 성별 */}
                <fieldset className="flex gap-3">
                  <legend className="sr-only">이름 및 성별</legend>
                  <div className="flex-1">
                    <label htmlFor="compare-name" className="sr-only">이름</label>
                    <input id="compare-name" type="text" value={form.customer_name} onChange={e => set('customer_name', e.target.value)}
                      maxLength={8} placeholder="이름" autoComplete="name" aria-required="true"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                  </div>
                  <div className="flex gap-1" role="group" aria-label="성별 선택">
                    {[{ v: '1', label: '남' }, { v: '2', label: '여' }].map(({ v, label }) => (
                      <button key={v} type="button" onClick={() => set('customer_sex', v)}
                        aria-pressed={form.customer_sex === v} aria-label={`성별 ${label}`}
                        className={`w-12 h-12 rounded-xl border-2 font-bold text-sm transition-all ${form.customer_sex === v ? 'border-brand bg-brand text-white' : 'border-gray-200 text-gray-600'}`}>
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* 생년월일 */}
                <div>
                  <label htmlFor="compare-birth" className="sr-only">생년월일 6자리</label>
                  <input id="compare-birth" type="text" inputMode="numeric" value={form.customer_birth}
                    onChange={e => set('customer_birth', e.target.value.replace(/\D/g, ''))}
                    maxLength={6} placeholder="생년월일 6자리 (예: 060101)" autoComplete="bday"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                </div>

                {/* 전화번호 */}
                <fieldset className="flex gap-2">
                  <legend className="sr-only">전화번호</legend>
                  <div>
                    <label htmlFor="compare-mobile1" className="sr-only">전화번호 앞자리</label>
                    <select id="compare-mobile1" value={form.mobile1} onChange={e => set('mobile1', e.target.value)}
                      className="border-2 border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-brand w-24">
                      {['010','011','016','017','019'].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="compare-mobile2" className="sr-only">전화번호 나머지</label>
                    <input id="compare-mobile2" type="tel" inputMode="numeric" value={form.mobile2}
                      onChange={e => set('mobile2', e.target.value.replace(/\D/g, ''))}
                      maxLength={8} placeholder="'-' 없이 숫자만 입력" autoComplete="tel-local" aria-required="true"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand" />
                  </div>
                </fieldset>

                {/* 요약 */}
                <div className="bg-brand/5 rounded-2xl p-4 text-sm space-y-1.5">
                  <p className="font-bold text-gray-800 mb-2">견적 요청 내용</p>
                  <p className="text-gray-600">📍 지역: <strong>{form.region}</strong></p>
                  <p className="text-gray-600">🎓 전공: <strong>{MAJORS.find(m => m.id === form.major)?.label}</strong></p>
                </div>
              </div>
            )}

            {/* 버튼 */}
            <div className="flex gap-3 mt-8">
              {step > 0 && (
                <button type="button" onClick={() => setStep(s => s - 1)}
                  className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                  이전
                </button>
              )}
              {step < STEPS.length - 1 ? (
                <button type="button" onClick={next}
                  className="flex-[2] py-4 rounded-2xl bg-brand text-white font-bold hover:bg-brand-dark transition-colors">
                  다음 →
                </button>
              ) : (
                <button type="button" onClick={handleFinalClick} disabled={submitted}
                  className="flex-[2] py-4 rounded-2xl bg-brand text-white font-bold hover:bg-brand-dark transition-colors disabled:opacity-50">
                  {submitted ? '전송 중...' : '견적 받기 →'}
                </button>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
