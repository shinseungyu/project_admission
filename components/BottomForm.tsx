'use client'

import { useEffect, useRef, useState } from 'react'
import { isUnder14, parsePhone, validateLead } from '@/lib/validate'
import { MAJORS, REGIONS } from '@/data/constants'

type Status = 'idle' | 'sending' | 'done' | 'error'

/**
 * 화면 하단 고정 상담 바텀폼.
 *
 * - 본문 폼(components/LeadForm.tsx)이 사용자에게 입력받는 항목을 전부(이름·성별·생년월일·
 *   연락처·지역·전공, 만 14세 미만이면 보호자 성함/연락처/보호자 동의) 동일하게 받는다.
 *   본문 폼에 없는 항목은 새로 만들지 않는다.
 * - 선택 목록(REGIONS/MAJORS)과 검증 규칙(lib/validate.ts)은 본문 폼과 같은 소스를 쓴다.
 * - 모든 입력칸은 처음부터 노출한다(접기/펼치기 없음). 보호자 항목만 본문 폼과 같은 조건
 *   (만 14세 미만)에서 나타난다.
 * - 바 높이를 --bottom-form-h CSS 변수로 노출해 body 하단 여백과 기존 모바일 하단 바
 *   (.mobile-bottom-bar, bottom: var(--bottom-form-h)) 위치를 맞춘다.
 */

const EMPTY_FORM = {
  customer_name: '',
  customer_birth: '',
  mobile1: '010',
  mobile2: '',
  customer_sex: '2',
  major: '',
  region: '',
  guardian_name: '',
  guardian_phone: '',
}

export default function BottomForm() {
  const barRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [agree, setAgree] = useState(false)
  const [guardianAgree, setGuardianAgree] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  const set = (key: keyof typeof EMPTY_FORM, value: string) =>
    setForm((p) => ({ ...p, [key]: value }))

  // 본문 폼과 완전히 동일한 조건(lib/validate.ts 의 isUnder14)으로 보호자 항목을 노출한다.
  const minor = isUnder14(form.customer_birth)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    // 기존 모바일 하단 바는 PC 에서 display:none → offsetHeight 0 이 되므로 별도 분기가 필요 없다.
    const mobileBar = document.querySelector<HTMLElement>('.mobile-bottom-bar')
    const apply = () => {
      const root = document.documentElement.style
      root.setProperty('--bottom-form-h', `${el.offsetHeight}px`)
      root.setProperty('--mobile-bar-h', `${mobileBar?.offsetHeight ?? 0}px`)
    }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    if (mobileBar) ro.observe(mobileBar)
    window.addEventListener('resize', apply)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', apply)
    }
  }, [])

  const fail = (msg: string) => {
    setStatus('error')
    setMessage(msg)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return

    // 1) 공용 규칙(lib/validate.ts): 이름·특수문자·생년월일·성별·번호 자릿수.
    //    동의는 바텀폼 자체 문구로 마지막에 검사하므로 여기서는 통과시킨다.
    const fieldError = validateLead({ ...form, consent_privacy: true, consent_third_party: true })
    if (fieldError) return fail(fieldError)

    // 2) 본문 폼(LeadForm)과 동일한 선택/보호자 항목 검사.
    if (!form.region) return fail('지역을 선택해 주세요.')
    if (!form.major) return fail('전공을 선택해 주세요.')
    if (minor && !form.guardian_name) return fail('만 14세 미만은 보호자 성함을 입력해 주세요.')
    if (minor && !form.guardian_phone) return fail('만 14세 미만은 보호자 연락처를 입력해 주세요.')

    // 3) 번호 형식 검증은 동의 검증보다 먼저 한다.
    //    동의를 먼저 막으면 잘못된 번호를 넣어도 번호 안내 문구가 가려진다.
    const phoneResult = parsePhone(form.mobile1, form.mobile2)
    if (typeof phoneResult === 'string') return fail(phoneResult)

    // 4) 동의.
    if (!agree) return fail('필수 동의 항목에 동의해 주세요.')
    if (minor && !guardianAgree) return fail('만 14세 미만은 보호자 동의가 필요합니다.')

    setStatus('sending')
    setMessage('전송 중입니다...')

    // 본문 폼(components/LeadForm.tsx)과 동일한 키·값 규칙.
    // major/interest_field/category 는 모두 선택한 전공의 라벨을 보낸다.
    const majorLabel = MAJORS.find((m) => m.id === form.major)?.label ?? form.major
    const payload = {
      ...form,
      major: majorLabel,
      interest_field: majorLabel,
      category: majorLabel,
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      // 본문 폼에 입력칸이 없어 항상 빈 값인 항목. 키를 맞추기 위해서만 보낸다.
      target_school: '',
      source_page: 'bottom_form',
      consent_privacy: true,
      consent_third_party: true,
      ...(minor ? { consent_guardian: true } : {}),
    }

    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        setStatus('error')
        setMessage('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.')
        return
      }
      setStatus('done')
      setMessage('신청이 완료되었습니다. 곧 올댓뷰티 멘토가 연락드립니다.')
      setForm(EMPTY_FORM)
      setAgree(false)
      setGuardianAgree(false)
    } catch {
      setStatus('error')
      setMessage('네트워크 오류가 발생했습니다.')
    }
  }

  const statusClass =
    status === 'error'
      ? 'text-rose-600'
      : status === 'done'
        ? 'text-stone-800 font-bold'
        : 'text-stone-400'

  const field =
    'h-9 w-full rounded-full border border-stone-200 bg-white px-3 text-[13px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand/30 lg:h-10 lg:text-[14px]'
  const select = `${field} appearance-none pr-7`
  const arrow =
    'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-stone-400'

  return (
    <div
      ref={barRef}
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-stone-200 bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.18)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <form
        onSubmit={handleSubmit}
        aria-label="올댓뷰티 멘토 무료 상담 신청"
        className="mx-auto w-full max-w-6xl px-3 py-1.5 sm:px-4 sm:py-2"
      >
        <div className="grid grid-cols-2 gap-1.5 lg:grid-cols-[repeat(20,minmax(0,1fr))] lg:items-center lg:gap-2">

          {/* 이름 */}
          <div className="min-w-0 lg:col-span-2">
            <label htmlFor="bf-name" className="sr-only">이름</label>
            <input
              id="bf-name"
              type="text"
              value={form.customer_name}
              onChange={(e) => set('customer_name', e.target.value)}
              maxLength={8}
              placeholder="예) 홍길동"
              autoComplete="name"
              aria-required="true"
              className={field}
            />
          </div>

          {/* 성별 */}
          <fieldset className="min-w-0 lg:col-span-2">
            <legend className="sr-only">성별</legend>
            <div className="flex h-9 gap-1 lg:h-10">
              {[{ v: '1', label: '남' }, { v: '2', label: '여' }].map(({ v, label }) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => set('customer_sex', v)}
                  aria-pressed={form.customer_sex === v}
                  aria-label={`성별 ${label}`}
                  className={`h-full flex-1 rounded-full text-[13px] font-bold transition-all lg:text-[14px] ${
                    form.customer_sex === v
                      ? 'bg-brand text-white'
                      : 'border border-stone-200 bg-stone-50 text-stone-400 hover:bg-stone-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* 생년월일 */}
          <div className="min-w-0 lg:col-span-3">
            <label htmlFor="bf-birth" className="sr-only">생년월일 6자리</label>
            <input
              id="bf-birth"
              type="text"
              inputMode="numeric"
              value={form.customer_birth}
              onChange={(e) => set('customer_birth', e.target.value.replace(/\D/g, ''))}
              maxLength={6}
              placeholder="예) 060101"
              autoComplete="bday"
              aria-required="true"
              className={field}
            />
          </div>

          {/* 연락처 */}
          <fieldset className="min-w-0 lg:col-span-4">
            <legend className="sr-only">연락처</legend>
            <div className="flex gap-1">
              <div className="relative w-[64px] shrink-0 lg:w-[76px]">
                <label htmlFor="bf-mobile1" className="sr-only">연락처 앞자리</label>
                <select
                  id="bf-mobile1"
                  value={form.mobile1}
                  onChange={(e) => set('mobile1', e.target.value)}
                  className={`${field} appearance-none px-2 pr-5`}
                >
                  {['010', '011', '016', '017', '019'].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
                <span className={arrow} aria-hidden="true">▼</span>
              </div>
              <div className="min-w-0 flex-1">
                <label htmlFor="bf-mobile2" className="sr-only">연락처 뒷자리</label>
                <input
                  id="bf-mobile2"
                  type="tel"
                  inputMode="numeric"
                  value={form.mobile2}
                  onChange={(e) => set('mobile2', e.target.value.replace(/\D/g, ''))}
                  maxLength={8}
                  placeholder="'-' 없이"
                  autoComplete="tel-local"
                  aria-required="true"
                  className={field}
                />
              </div>
            </div>
          </fieldset>

          {/* 지역 */}
          <div className="relative min-w-0 lg:col-span-3">
            <label htmlFor="bf-region" className="sr-only">거주 지역</label>
            <select
              id="bf-region"
              value={form.region}
              onChange={(e) => set('region', e.target.value)}
              aria-required="true"
              className={`${select} ${!form.region ? 'text-stone-400' : ''}`}
            >
              <option value="" disabled hidden>지역 선택</option>
              {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
            <span className={arrow} aria-hidden="true">▼</span>
          </div>

          {/* 전공 */}
          <div className="relative min-w-0 lg:col-span-3">
            <label htmlFor="bf-major" className="sr-only">관심 전공</label>
            <select
              id="bf-major"
              value={form.major}
              onChange={(e) => set('major', e.target.value)}
              aria-required="true"
              className={`${select} ${!form.major ? 'text-stone-400' : ''}`}
            >
              <option value="" disabled hidden>전공 선택</option>
              {MAJORS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
            </select>
            <span className={arrow} aria-hidden="true">▼</span>
          </div>

          {/* 만 14세 미만 보호자 정보 (본문 폼과 동일 조건) */}
          {minor && (
            <>
              <div className="min-w-0 lg:col-span-8">
                <label htmlFor="bf-guardian-name" className="sr-only">보호자 성함</label>
                <input
                  id="bf-guardian-name"
                  type="text"
                  value={form.guardian_name}
                  onChange={(e) => set('guardian_name', e.target.value)}
                  maxLength={8}
                  placeholder="보호자 성함"
                  autoComplete="name"
                  aria-required="true"
                  className={field}
                />
              </div>
              <div className="min-w-0 lg:col-span-9">
                <label htmlFor="bf-guardian-phone" className="sr-only">보호자 연락처</label>
                <input
                  id="bf-guardian-phone"
                  type="tel"
                  inputMode="numeric"
                  value={form.guardian_phone}
                  onChange={(e) => set('guardian_phone', e.target.value.replace(/\D/g, ''))}
                  maxLength={11}
                  placeholder="보호자 연락처"
                  autoComplete="tel"
                  aria-required="true"
                  className={field}
                />
              </div>
            </>
          )}

          {/* 신청 버튼 */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="col-span-2 h-9 w-full rounded-full bg-stone-900 text-[14px] font-bold text-white transition-all hover:bg-stone-800 active:scale-[0.98] disabled:opacity-50 lg:col-span-3 lg:h-10 lg:text-[15px]"
          >
            {status === 'sending' ? '전송 중...' : '무료 상담 신청'}
          </button>
        </div>

        {/* 동의 + 상태 문구 */}
        <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <div className="flex items-center gap-1.5">
              <input
                id="bottom-form-agree"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                aria-required="true"
                className="h-3.5 w-3.5 shrink-0 accent-stone-900"
              />
              <label
                htmlFor="bottom-form-agree"
                className="cursor-pointer select-none whitespace-nowrap text-[11px] text-stone-600 sm:text-xs"
              >
                <span className="font-bold text-stone-800">[필수]</span> 개인정보 동의
              </label>
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-[11px] font-bold text-stone-500 underline underline-offset-2 hover:text-stone-900 sm:text-xs"
              >
                상세
              </a>
            </div>

            {minor && (
              <div className="flex items-center gap-1.5">
                <input
                  id="bottom-form-guardian-agree"
                  type="checkbox"
                  checked={guardianAgree}
                  onChange={(e) => setGuardianAgree(e.target.checked)}
                  aria-required="true"
                  className="h-3.5 w-3.5 shrink-0 accent-stone-900"
                />
                <label
                  htmlFor="bottom-form-guardian-agree"
                  className="cursor-pointer select-none whitespace-nowrap text-[11px] text-stone-600 sm:text-xs"
                >
                  <span className="font-bold text-amber-700">[필수]</span> 보호자 동의
                </label>
              </div>
            )}
          </div>

          <p
            aria-live="polite"
            className={`min-h-[14px] text-[11px] leading-tight ${statusClass}`}
          >
            {message}
          </p>
        </div>
      </form>
    </div>
  )
}
