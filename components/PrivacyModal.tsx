"use client"

import { useState } from "react"

type Props = {
  onConfirm: () => void
  onClose: () => void
  isMinor?: boolean
}

export default function PrivacyModal({ onConfirm, onClose, isMinor = false }: Props) {
  const [priAgree, setPriAgree] = useState(false)
  const [thirdAgree, setThirdAgree] = useState(false)
  const [guardianAgree, setGuardianAgree] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const allRequired = priAgree && thirdAgree && (!isMinor || guardianAgree)

  const handleAllAgree = () => {
    const next = !allRequired
    setPriAgree(next)
    setThirdAgree(next)
    if (isMinor) setGuardianAgree(next)
  }

  const handleConfirm = () => {
    if (!priAgree) { alert("개인정보 수집 및 이용에 동의해 주세요."); return }
    if (!thirdAgree) { alert("개인정보 제3자 제공에 동의해 주세요."); return }
    if (isMinor && !guardianAgree) { alert("만 14세 미만은 보호자 동의가 필요합니다."); return }
    onConfirm()
    onClose()
  }

  const handleClose = () => setShowAlert(true)
  const handleAlertDisagree = () => { setShowAlert(false); onClose() }
  const handleAlertAgree = () => { setShowAlert(false); handleConfirm() }

  return (
    <>
      <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="relative bg-white rounded-3xl w-full max-w-[600px] max-h-[85dvh] flex flex-col overflow-hidden shadow-2xl">

          <div className="px-8 pt-8 pb-4 bg-white z-10 relative">
            <button onClick={handleClose} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-stone-100 text-stone-500 rounded-full hover:bg-stone-200 transition-colors">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h2 className="text-2xl font-extrabold text-stone-900 mb-2">
              안전한 상담을 위한<br />
              <span className="text-brand">개인정보 동의</span>
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed">
              고객님의 소중한 정보는 상담 목적 외에는 절대 사용되지 않으며, 안전하게 보호됩니다.
            </p>
          </div>

          <div className="overflow-y-auto px-8 pb-[100px] flex-1">

            <button
              onClick={handleAllAgree}
              className={`flex items-center gap-3 w-full py-4 px-5 rounded-2xl mb-6 transition-all duration-300 border-2 ${
                allRequired
                  ? "bg-brand/5 border-brand text-brand"
                  : "bg-stone-50 border-stone-100 text-stone-600 hover:border-stone-200"
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${allRequired ? "bg-brand text-white" : "bg-stone-200 text-transparent"}`}>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold">약관 전체 동의하기</span>
            </button>

            <div className="space-y-4">
              <ContentBox checked={priAgree} onChange={setPriAgree} label="개인정보 수집 및 이용 동의" required>
                수집 주체 : 와야미디어<br />
                수집 목적 : 미용입시 학원비 비교 및 멘토 상담 안내<br />
                수집 항목 : 성명, 휴대폰 번호, 생년월일, 성별, 거주 지역, 전공, 예산<br />
                보유 기간 : 수집일로부터 1년 (또는 요청 시 즉시 파기)<br />
                동의 거부 권리 : 동의를 거부하실 권리가 있으나, 거부 시 상담 신청이 제한될 수 있습니다.
              </ContentBox>

              <ContentBox checked={thirdAgree} onChange={setThirdAgree} label="개인정보 제3자 제공 동의" required>
                제공받는 자 : 올댓뷰티 멘토 및 제휴 미용입시학원<br />
                제공 목적 : 학원비 견적 안내 및 1:1 멘토 상담 진행<br />
                제공 항목 : 성명, 휴대폰 번호, 생년월일, 성별, 거주 지역, 전공, 예산<br />
                보유 기간 : 상담 목적 달성 시 즉시 파기<br />
                동의 거부 권리 : 동의를 거부하실 권리가 있으나, 거부 시 상담 신청이 제한될 수 있습니다.
              </ContentBox>

              {isMinor && (
                <ContentBox checked={guardianAgree} onChange={setGuardianAgree} label="만 14세 미만 법정대리인(보호자) 동의" required>
                  개인정보보호법 제22조 제6항에 따라 만 14세 미만 아동의 개인정보 수집 시<br />
                  법정대리인(부모님 또는 법적 보호자)의 동의가 필요합니다.<br /><br />
                  본 동의에 체크하심으로써 법정대리인이 본 서비스 이용 및 개인정보 수집·제공에<br />
                  동의하였음을 확인합니다.<br /><br />
                  법정대리인은 언제든지 동의를 철회하고 개인정보 삭제를 요청할 수 있습니다.
                </ContentBox>
              )}
            </div>

            <div className="mt-6 text-[13px] text-stone-400 leading-relaxed space-y-1.5 bg-stone-50 p-4 rounded-xl">
              <p>• 입력하신 정보는 상담 응대를 위한 필수 항목이며, 동의를 거부하실 경우 상담이 제한될 수 있습니다.</p>
              <p>• 수집된 정보는 상담 목적 외 다른 용도로 사용되지 않습니다.</p>
              <p>• 정보 주체는 언제든지 동의를 철회할 수 있으며, 이 경우 수집된 개인정보는 지체 없이 파기됩니다.</p>
              {isMinor && <p>• 만 14세 미만인 경우 법정대리인이 동의를 대신하거나 확인해 주셔야 합니다.</p>}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/80 to-transparent pt-12 pointer-events-none">
            <button
              onClick={handleConfirm}
              className={`w-full py-4 text-lg font-bold rounded-2xl tracking-wide text-center transition-all pointer-events-auto ${
                allRequired
                  ? "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/20"
                  : "bg-stone-200 text-stone-400 shadow-none cursor-not-allowed"
              }`}
            >
              동의하고 상담 신청하기
            </button>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="relative bg-white rounded-3xl w-full max-w-[360px] p-8 text-center shadow-2xl">
            <div className="w-16 h-16 bg-rose-50 text-brand rounded-full flex items-center justify-center mx-auto mb-5">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            <h5 className="text-xl font-extrabold text-stone-900 mb-2">정말 나가시겠습니까?</h5>
            <p className="text-[15px] text-stone-500 leading-relaxed mb-8">
              지금 나가시면 작성하신 내용이<br />모두 사라집니다.
            </p>
            <div className="flex gap-3">
              <button onClick={handleAlertDisagree} className="flex-1 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-xl font-bold transition-colors">나가기</button>
              <button onClick={handleAlertAgree} className="flex-1 py-3.5 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold shadow-md shadow-brand/20 transition-colors">계속 쓰기</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ContentBox({
  checked, onChange, label, required, children
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
  required: boolean
  children: React.ReactNode
}) {
  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-brand/30">
      <div className="flex items-center p-4 cursor-pointer select-none bg-stone-50/50" onClick={() => onChange(!checked)}>
        <div className={`w-5 h-5 rounded-md flex items-center justify-center mr-3 transition-colors ${checked ? "bg-brand" : "bg-white border-2 border-stone-300"}`}>
          {checked && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="text-[15px] font-bold text-stone-800 flex-1">{label}</span>
        {required
          ? <span className="text-[13px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-full">필수</span>
          : <span className="text-[13px] font-medium text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">선택</span>
        }
      </div>
      <div className="p-4 pt-0">
        <div className="h-[80px] overflow-y-auto text-[13px] text-stone-500 leading-relaxed pr-2 border-t border-stone-100 pt-3">
          {children}
        </div>
      </div>
    </div>
  )
}
