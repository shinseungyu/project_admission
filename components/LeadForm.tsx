"use client"

import { useState } from "react"
import { parsePhone } from "@/lib/validate"
import { REGIONS, MAJORS } from "@/data/constants"

import PrivacyModal from "./PrivacyModal"

type Props = {
  sourcePage?: string
  variant?: "hero" | "inline"
}

function isUnder14(birth: string): boolean {
  if (!/^\d{6}$/.test(birth)) return false
  const yy = parseInt(birth.slice(0, 2))
  const mm = parseInt(birth.slice(2, 4))
  const dd = parseInt(birth.slice(4, 6))
  const fullYear = yy > 26 ? 1900 + yy : 2000 + yy
  const today = new Date()
  let age = today.getFullYear() - fullYear
  if (today.getMonth() + 1 < mm || (today.getMonth() + 1 === mm && today.getDate() < dd)) age--
  return age < 14
}

export default function LeadForm({ sourcePage = "main", variant = "hero" }: Props) {
  const [form, setForm] = useState({
    customer_name: "",
    customer_birth: "",
    mobile1: "010",
    mobile2: "",
    customer_sex: "2",
    major: "",
    region: "",
    target_school: "",
    guardian_name: "",
    guardian_phone: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const formId = `lead-form-${sourcePage}`
  const set = (key: string, value: string | boolean) =>
    setForm((p) => ({ ...p, [key]: value }))

  const minor = isUnder14(form.customer_birth)

  const handleSubmitClick = () => {
    const SPECIAL_CHAR_REG = /[ \{\}\[\]\/.,;:|\)*~`^\-_+┼<>\%\'\"\\\(\=]/i
    if (!form.customer_name) { alert("이름을 입력해 주세요."); return }
    if (SPECIAL_CHAR_REG.test(form.customer_name)) { alert("이름에 특수문자는 입력할 수 없습니다."); return }
    if (!form.mobile2) { alert("전화번호를 입력해 주세요."); return }
    if (!form.region) { alert("지역을 선택해 주세요."); return }
    if (!form.major) { alert("전공을 선택해 주세요."); return }
    if (minor && !form.guardian_name) { alert("만 14세 미만은 보호자 성함을 입력해 주세요."); return }
    if (minor && !form.guardian_phone) { alert("만 14세 미만은 보호자 연락처를 입력해 주세요."); return }
    setShowModal(true)
  }

  const handleConfirm = async () => {
    const phoneResult = parsePhone(form.mobile1, form.mobile2)
    if (typeof phoneResult === "string") { alert(phoneResult); return }

    const majorLabel = MAJORS.find(m => m.id === form.major)?.label ?? form.major
    const payload = {
      ...form,
      major: majorLabel,
      interest_field: majorLabel,
      category: majorLabel,
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      source_page: sourcePage,
      consent_privacy: true,
      consent_third_party: true,
      ...(minor ? { consent_guardian: true } : {}),
    }

    setSubmitted(true)
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) { alert("전송에 실패했습니다."); setSubmitted(false); return }
      alert("신청이 완료되었습니다. 곧 올댓뷰티 멘토가 연락드립니다.")
      setForm({ customer_name: "", customer_birth: "", mobile1: "010", mobile2: "", customer_sex: "2", major: "", region: "", target_school: "", guardian_name: "", guardian_phone: "" })
    } catch {
      alert("네트워크 오류가 발생했습니다.")
    }
    setSubmitted(false)
  }

  const inputClass = "w-full bg-white rounded-full px-5 py-3 text-[15px] font-medium text-stone-800 placeholder-stone-400 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand/30"
  const selectClass = `${inputClass} appearance-none`

  return (
    <>
      {showModal && (
        <PrivacyModal
          onConfirm={handleConfirm}
          onClose={() => setShowModal(false)}
          isMinor={minor}
        />
      )}

      <div className={variant === "hero" ? "w-full bg-brand-gradient rounded-[2rem] p-5 shadow-form" : "w-full"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3" role="group" aria-label="올댓뷰티 멘토 상담 신청 폼">

          {/* 이름 + 성별 */}
          <fieldset className="md:col-span-2 flex bg-white rounded-full pl-5 pr-2 py-2 border border-stone-200 items-center">
            <legend className="sr-only">이름 및 성별</legend>
            <label htmlFor={`${formId}-name`} className="sr-only">이름</label>
            <input
              id={`${formId}-name`}
              type="text"
              value={form.customer_name}
              onChange={(e) => set("customer_name", e.target.value)}
              maxLength={8}
              placeholder="이름"
              autoComplete="name"
              aria-required="true"
              className="flex-1 bg-transparent text-[15px] font-medium text-stone-800 placeholder-stone-400 focus:outline-none"
            />
            <div className="flex items-center gap-1.5 ml-2 pl-3 border-l border-stone-100 shrink-0" role="group" aria-label="성별 선택">
              {[{ v: "1", label: "남" }, { v: "2", label: "여" }].map(({ v, label }) => (
                <button key={v} type="button" onClick={() => set("customer_sex", v)}
                  aria-pressed={form.customer_sex === v}
                  aria-label={`성별 ${label}`}
                  className={`w-9 h-9 rounded-full text-[14px] font-bold transition-all ${form.customer_sex === v ? "bg-brand text-white" : "bg-stone-50 text-stone-400 hover:bg-stone-100"}`}>
                  {label}
                </button>
              ))}
            </div>
          </fieldset>

          {/* 생년월일 */}
          <div className="md:col-span-2 relative">
            <label htmlFor={`${formId}-birth`} className="sr-only">생년월일 6자리</label>
            <input
              id={`${formId}-birth`}
              type="text"
              inputMode="numeric"
              value={form.customer_birth}
              onChange={(e) => set("customer_birth", e.target.value.replace(/\D/g, ""))}
              maxLength={6}
              placeholder="생년월일 (예: 060101)"
              autoComplete="bday"
              aria-required="true"
              className={inputClass}
            />
          </div>

          {/* 전화번호 */}
          <fieldset className="md:col-span-2 flex gap-2">
            <legend className="sr-only">전화번호</legend>
            <div className="relative shrink-0 w-[100px]">
              <label htmlFor={`${formId}-mobile1`} className="sr-only">전화번호 앞자리</label>
              <select
                id={`${formId}-mobile1`}
                value={form.mobile1}
                onChange={(e) => set("mobile1", e.target.value)}
                className="w-full bg-white rounded-full pl-4 pr-7 py-3 text-[15px] font-medium border border-stone-200 appearance-none focus:outline-none">
                {["010","011","016","017","019"].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-xs pointer-events-none" aria-hidden="true">▼</span>
            </div>
            <div className="flex-1">
              <label htmlFor={`${formId}-mobile2`} className="sr-only">전화번호 나머지</label>
              <input
                id={`${formId}-mobile2`}
                type="tel"
                inputMode="numeric"
                value={form.mobile2}
                onChange={(e) => set("mobile2", e.target.value.replace(/\D/g, ""))}
                maxLength={8}
                placeholder="'-' 없이 입력"
                autoComplete="tel-local"
                aria-required="true"
                className={`${inputClass} flex-1`}
              />
            </div>
          </fieldset>

          {/* 지역 */}
          <div className="md:col-span-2 relative">
            <label htmlFor={`${formId}-region`} className="sr-only">거주 지역</label>
            <select
              id={`${formId}-region`}
              value={form.region}
              onChange={(e) => set("region", e.target.value)}
              aria-required="true"
              className={`${selectClass} pr-9 ${!form.region ? "text-stone-400" : ""}`}>
              <option value="" disabled hidden>거주 지역 선택</option>
              {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-400 text-xs pointer-events-none" aria-hidden="true">▼</span>
          </div>

          {/* 전공 */}
          <div className="md:col-span-2 relative">
            <label htmlFor={`${formId}-major`} className="sr-only">관심 전공</label>
            <select
              id={`${formId}-major`}
              value={form.major}
              onChange={(e) => set("major", e.target.value)}
              aria-required="true"
              className={`${selectClass} pr-9 ${!form.major ? "text-stone-400" : ""}`}>
              <option value="" disabled hidden>전공 선택</option>
              {MAJORS.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
            </select>
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-stone-400 text-xs pointer-events-none" aria-hidden="true">▼</span>
          </div>

          {/* 만 14세 미만 보호자 정보 */}
          {minor && (
            <>
              <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-3 text-sm text-amber-800 font-medium">
                만 14세 미만으로 확인됩니다. 아래에 보호자(부모님) 정보를 입력해 주세요.
              </div>
              <div className="relative">
                <label htmlFor={`${formId}-guardian-name`} className="sr-only">보호자 성함</label>
                <input
                  id={`${formId}-guardian-name`}
                  type="text"
                  value={form.guardian_name}
                  onChange={(e) => set("guardian_name", e.target.value)}
                  maxLength={8}
                  placeholder="보호자(부모님) 성함"
                  autoComplete="name"
                  aria-required="true"
                  className={inputClass}
                />
              </div>
              <div className="relative">
                <label htmlFor={`${formId}-guardian-phone`} className="sr-only">보호자 연락처</label>
                <input
                  id={`${formId}-guardian-phone`}
                  type="tel"
                  inputMode="numeric"
                  value={form.guardian_phone}
                  onChange={(e) => set("guardian_phone", e.target.value.replace(/\D/g, ""))}
                  maxLength={11}
                  placeholder="보호자 연락처 (숫자만)"
                  autoComplete="tel"
                  aria-required="true"
                  className={inputClass}
                />
              </div>
            </>
          )}

          {/* 신청 버튼 */}
          <button type="button" onClick={handleSubmitClick} disabled={submitted}
            aria-label="올댓뷰티 멘토 상담 신청하기"
            className="md:col-span-2 w-full bg-stone-900 text-white rounded-full text-[16px] font-bold py-4 hover:bg-stone-800 active:scale-[0.98] transition-all disabled:opacity-50">
            {submitted ? "전송 중..." : "올댓뷰티 멘토 상담 신청 →"}
          </button>

        </div>
        <p className="text-center text-xs text-white/60 mt-3" aria-live="polite">
          올댓뷰티 전문 멘토가 무료로 상담해드립니다
        </p>
      </div>
    </>
  )
}
