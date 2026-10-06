'use client'

import { useEffect, useRef, useState } from 'react'
import { parsePhone } from '@/lib/validate'

type Status = 'idle' | 'sending' | 'done' | 'error'

/**
 * 화면 하단 고정 간편 상담 바텀폼.
 * - 휴대폰 번호 + 필수 동의만 받아 기존 폼(LeadForm / compare)과 동일한 경로·필드명으로 전송한다.
 * - 바 높이를 --bottom-form-h CSS 변수로 노출해 body 하단 여백과 모바일 하단바 위치를 맞춘다.
 */
export default function BottomForm() {
  const barRef = useRef<HTMLDivElement>(null)
  const [phone, setPhone] = useState('')
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return

    if (!phone) {
      setStatus('error')
      setMessage('전화번호를 입력해 주세요.')
      return
    }
    if (!agree) {
      setStatus('error')
      setMessage('필수 동의 항목에 동의해 주세요.')
      return
    }

    const phoneResult = parsePhone('010', phone)
    if (typeof phoneResult === 'string') {
      setStatus('error')
      setMessage(phoneResult)
      return
    }

    setStatus('sending')
    setMessage('전송 중입니다...')

    // 기존 폼(components/LeadForm.tsx, app/compare/page.tsx)과 동일한 필드명.
    // 번호만 받으므로 나머지 입력 항목은 빈 값으로 보낸다.
    const payload = {
      customer_name: '',
      customer_birth: '',
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      customer_sex: '',
      major: '',
      region: '',
      target_school: '',
      guardian_name: '',
      guardian_phone: '',
      interest_field: '',
      category: '미용입시',
      source_page: 'bottom_form',
      consent_privacy: true,
      consent_third_party: true,
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
      setPhone('')
      setAgree(false)
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

  return (
    <div
      ref={barRef}
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-stone-200 bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.18)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <form
        onSubmit={handleSubmit}
        aria-label="휴대폰 번호 간편 상담 신청"
        className="mx-auto w-full max-w-3xl px-3 py-2.5 sm:px-4"
      >
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="bottom-form-phone" className="sr-only">휴대폰 번호</label>
          <input
            id="bottom-form-phone"
            name="mobile2"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            maxLength={11}
            placeholder="휴대폰 번호 ('-' 없이)"
            aria-required="true"
            className="min-w-0 flex-1 basis-[130px] rounded-full border border-stone-200 bg-white px-4 py-2.5 text-[15px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="shrink-0 rounded-full bg-stone-900 px-4 py-2.5 text-[14px] font-bold text-white transition-all hover:bg-stone-800 active:scale-[0.98] disabled:opacity-50 sm:px-6 sm:text-[15px]"
          >
            {status === 'sending' ? '전송 중...' : '무료 상담 신청'}
          </button>
        </div>

        <div className="mt-1.5 text-[11px] leading-snug text-stone-500 sm:text-xs">
          <input
            id="bottom-form-agree"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            aria-required="true"
            className="mr-1.5 h-4 w-4 align-[-3px] accent-stone-900"
          />
          <label htmlFor="bottom-form-agree" className="cursor-pointer select-none">
            <span className="font-bold text-stone-700">(필수)</span> 개인정보 수집 및 이용 동의, 개인정보 제3자 제공 동의에 모두 동의합니다.
          </label>{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-stone-700 underline underline-offset-2 hover:text-stone-900"
          >
            상세
          </a>
        </div>

        <p aria-live="polite" className={`mt-1 min-h-[14px] text-[11px] leading-tight ${statusClass}`}>
          {message}
        </p>
      </form>
    </div>
  )
}
