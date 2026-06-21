"use client"

import { useState } from "react"

type ModalType = "privacy" | "terms" | null

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl w-full max-w-[680px] max-h-[85dvh] flex flex-col overflow-hidden shadow-2xl">
        <div className="px-8 pt-8 pb-4 bg-white z-10 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-stone-100 text-stone-500 rounded-full hover:bg-stone-200 transition-colors"
            aria-label="닫기"
          >
            <CloseIcon />
          </button>
          <h2 className="text-xl font-extrabold text-stone-900">{title}</h2>
          <p className="text-xs text-stone-400 mt-1">시행일: 2026년 1월 1일 · 최종 업데이트: 2026년 6월 20일</p>
        </div>
        <div className="overflow-y-auto px-8 py-6 flex-1 text-sm text-stone-600 leading-relaxed space-y-6">
          {children}
        </div>
        <div className="px-8 py-4 border-t border-gray-100 bg-white">
          <button
            onClick={onClose}
            className="w-full py-3 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-colors"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="font-bold text-stone-900 mb-2 pb-2 border-b border-stone-100">{title}</h3>
      <div className="space-y-1">{children}</div>
    </section>
  )
}

function PrivacyContent() {
  return (
    <>
      <div className="bg-amber-50 border-l-4 border-amber-400 px-4 py-3 rounded-lg text-sm">
        와야미디어(이하 &quot;회사&quot;)는 「개인정보보호법」 및 관련 법령을 준수하며, 이용자의 개인정보를 안전하게 처리합니다.
        본 방침은 회사가 운영하는 미용입시 학원비 비교 서비스에 적용됩니다.
      </div>

      <Section title="제1조 수집하는 개인정보 항목 및 수집 방법">
        <p>회사는 상담 신청 서비스 제공을 위해 다음 개인정보를 수집합니다.</p>
        <table className="w-full text-xs border-collapse mt-2">
          <thead>
            <tr className="bg-stone-100">
              <th className="p-2 text-left border border-stone-200">구분</th>
              <th className="p-2 text-left border border-stone-200">수집 항목</th>
              <th className="p-2 text-left border border-stone-200">필수 여부</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["기본 정보", "이름, 생년월일, 성별, 휴대폰 번호", "필수"],
              ["상담 관련", "거주 지역, 전공, 예산 범위, 목표 학교", "선택"],
              ["만 14세 미만 추가", "법정대리인 성명, 법정대리인 연락처", "필수 (해당자)"],
              ["자동 수집", "접속 IP, 브라우저 종류, 방문 일시, 쿠키", "자동 수집"],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td className="p-2 border border-stone-200">{a}</td>
                <td className="p-2 border border-stone-200">{b}</td>
                <td className="p-2 border border-stone-200">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-stone-400 mt-1">수집 방법: 홈페이지 상담 신청 폼을 통한 이용자 직접 입력</p>
      </Section>

      <Section title="제2조 개인정보 수집·이용 목적">
        <ul className="list-disc pl-5 space-y-1">
          <li>미용입시 학원비 비교 견적 제공</li>
          <li>올댓뷰티 전문 멘토와의 1:1 상담 연결</li>
          <li>제휴 미용입시학원과의 견적 안내 연결</li>
          <li>서비스 품질 개선 및 이용 통계 분석</li>
        </ul>
      </Section>

      <Section title="제3조 개인정보 보유·이용 기간">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-stone-100">
              <th className="p-2 text-left border border-stone-200">보유 근거</th>
              <th className="p-2 text-left border border-stone-200">보유 항목</th>
              <th className="p-2 text-left border border-stone-200">보유 기간</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["이용자 동의", "상담 신청 시 수집한 모든 정보", "수집일로부터 1년 (동의 철회 시 즉시 파기)"],
              ["전자상거래법", "계약·청약 철회 기록", "5년"],
              ["통신비밀보호법", "서비스 이용 로그", "3개월"],
            ].map(([a, b, c]) => (
              <tr key={a}>
                <td className="p-2 border border-stone-200">{a}</td>
                <td className="p-2 border border-stone-200">{b}</td>
                <td className="p-2 border border-stone-200">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="제4조 개인정보의 제3자 제공">
        <p>회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 이용자가 동의한 경우 아래와 같이 제공합니다.</p>
        <table className="w-full text-xs border-collapse mt-2">
          <thead>
            <tr className="bg-stone-100">
              <th className="p-2 text-left border border-stone-200">제공받는 자</th>
              <th className="p-2 text-left border border-stone-200">제공 목적</th>
              <th className="p-2 text-left border border-stone-200">제공 항목</th>
              <th className="p-2 text-left border border-stone-200">보유·이용 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-stone-200">올댓뷰티 멘토</td>
              <td className="p-2 border border-stone-200">1:1 전문 멘토 상담 진행</td>
              <td className="p-2 border border-stone-200">이름, 연락처, 지역, 전공</td>
              <td className="p-2 border border-stone-200">상담 완료 후 즉시 파기</td>
            </tr>
            <tr>
              <td className="p-2 border border-stone-200">제휴 미용입시학원</td>
              <td className="p-2 border border-stone-200">학원비 견적 제공 및 입시 상담</td>
              <td className="p-2 border border-stone-200">이름, 연락처, 지역, 전공, 예산</td>
              <td className="p-2 border border-stone-200">상담 목적 달성 후 즉시 파기</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="제5조 만 14세 미만 아동의 개인정보 처리">
        <div className="bg-violet-50 border-l-4 border-violet-400 px-4 py-3 rounded-lg text-sm">
          개인정보보호법 제22조 제6항에 따라 <strong>만 14세 미만 아동</strong>의 개인정보를 수집·이용하는 경우,
          반드시 법정대리인(부모님 또는 법적 보호자)의 동의를 받아야 합니다.
        </div>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>만 14세 미만 이용자가 서비스를 신청하는 경우, 법정대리인의 성명과 연락처를 추가로 수집합니다.</li>
          <li>법정대리인이 아동의 개인정보 수집·이용·제공에 동의하여야 서비스 이용이 가능합니다.</li>
          <li>법정대리인은 언제든지 아동의 개인정보 열람, 정정, 삭제를 요청할 수 있습니다.</li>
          <li>문의: shinsy711@gmail.com</li>
        </ul>
      </Section>

      <Section title="제6조 개인정보의 파기">
        <p>보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 파기합니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>전자적 파일:</strong> 복구 불가능한 방법으로 영구 삭제</li>
          <li><strong>종이 서류:</strong> 파쇄 또는 소각</li>
        </ul>
      </Section>

      <Section title="제7조 이용자의 권리·의무">
        <p>이용자(및 법정대리인)는 언제든지 다음 권리를 행사할 수 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>개인정보 열람 요청</li>
          <li>오류 정정 및 삭제 요청</li>
          <li>처리 정지 요청</li>
          <li>동의 철회 요청</li>
        </ul>
        <p className="mt-1">권리 행사는 <strong>shinsy711@gmail.com</strong>으로 이메일 요청 시 10일 이내에 처리합니다.</p>
      </Section>

      <Section title="제8조 개인정보 보호 책임자">
        <table className="w-full text-xs border-collapse">
          <tbody>
            {[
              ["수집 주체", "와야미디어"],
              ["책임자", "개인정보보호 담당자"],
              ["이메일", "shinsy711@gmail.com"],
              ["처리 시간", "영업일 기준 10일 이내"],
            ].map(([k, v]) => (
              <tr key={k}>
                <td className="p-2 border border-stone-200 font-semibold w-1/3">{k}</td>
                <td className="p-2 border border-stone-200">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="제9조 권익침해 구제 방법">
        <ul className="list-disc pl-5 space-y-1">
          <li>개인정보침해신고센터: privacy.kisa.or.kr / 국번없이 118</li>
          <li>개인정보분쟁조정위원회: www.kopico.go.kr / 1833-6972</li>
          <li>대검찰청 사이버수사과: www.spo.go.kr / 국번없이 1301</li>
          <li>경찰청 사이버수사국: ecrm.cyber.go.kr / 국번없이 182</li>
        </ul>
      </Section>

      <Section title="제10조 방침의 변경">
        <p>본 방침은 법령 및 서비스 변경에 따라 수정될 수 있습니다. 변경 시 시행일 7일 전 홈페이지를 통해 공지합니다.</p>
      </Section>
    </>
  )
}

function TermsContent() {
  return (
    <>
      <Section title="제1조 목적">
        <p>
          본 약관은 와야미디어(이하 &quot;회사&quot;)가 운영하는 미용입시 학원비 비교 서비스(이하 &quot;서비스&quot;)의
          이용 조건 및 절차, 이용자와 회사 간의 권리·의무·책임사항을 규정하는 것을 목적으로 합니다.
        </p>
      </Section>

      <Section title="제2조 정의">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>&quot;서비스&quot;</strong>: 회사가 제공하는 미용입시 학원비 비교, 올댓뷰티 멘토 상담 신청 및 관련 정보 제공 서비스 일체</li>
          <li><strong>&quot;이용자&quot;</strong>: 본 약관에 동의하고 서비스를 이용하는 자</li>
          <li><strong>&quot;멘토&quot;</strong>: 올댓뷰티 소속 미용입시 전문 상담사</li>
          <li><strong>&quot;제휴 학원&quot;</strong>: 회사와 제휴한 미용입시학원</li>
        </ul>
      </Section>

      <Section title="제3조 약관의 효력 및 변경">
        <ul className="list-disc pl-5 space-y-1">
          <li>본 약관은 서비스 화면에 게시함으로써 효력이 발생합니다.</li>
          <li>회사는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전 공지합니다.</li>
          <li>이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하여야 합니다.</li>
        </ul>
      </Section>

      <Section title="제4조 서비스 내용">
        <ul className="list-disc pl-5 space-y-1">
          <li>미용입시 학원비 비교 정보 제공 (헤어·메이크업·네일·피부 전공)</li>
          <li>올댓뷰티 전문 멘토 1:1 상담 신청 연결</li>
          <li>제휴 미용입시학원 학원비 견적 제공</li>
          <li>미용입시 자격증·대학·국비지원 관련 정보 제공</li>
        </ul>
        <p className="text-stone-400 text-xs mt-2">※ 본 서비스는 특정 학원의 광고·홍보 사이트가 아닌 중립적 정보 비교 플랫폼입니다.</p>
      </Section>

      <Section title="제5조 이용 요금">
        <p>이용자의 상담 신청 서비스는 무료입니다. 단, 제휴 학원과의 수강 계약은 이용자와 학원 간 직접 이루어지며 회사는 이에 관여하지 않습니다.</p>
      </Section>

      <Section title="제6조 미성년자 이용">
        <div className="bg-violet-50 border-l-4 border-violet-400 px-4 py-3 rounded-lg text-sm">
          <strong>만 14세 미만 이용자</strong>는 법정대리인(부모님 또는 법적 보호자)의 동의를 받아야 서비스를 이용할 수 있습니다.
          (개인정보보호법 제22조 제6항)
        </div>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>만 14세 미만 이용자가 서비스 신청 시 법정대리인 성명·연락처를 반드시 입력하여야 합니다.</li>
          <li>법정대리인 동의 없이 제출된 개인정보는 요청 시 지체 없이 삭제됩니다.</li>
          <li><strong>만 14세 이상 미성년자(만 14~18세)</strong>는 본인이 직접 동의할 수 있으나, 법적 계약(수강 계약 등)은 법정대리인의 동의가 필요합니다.</li>
        </ul>
      </Section>

      <Section title="제7조 이용자의 의무">
        <ul className="list-disc pl-5 space-y-1">
          <li>허위 정보 입력 또는 타인의 정보를 도용하는 행위</li>
          <li>서비스를 불법적인 목적으로 이용하는 행위</li>
          <li>서비스 운영을 방해하거나 악용하는 행위</li>
          <li>사이트 콘텐츠를 무단으로 복제·배포·상업적으로 이용하는 행위</li>
          <li>자동화 수단(봇, 크롤러 등)을 이용한 과도한 요청 행위</li>
        </ul>
      </Section>

      <Section title="제8조 정보의 정확성 및 면책">
        <ul className="list-disc pl-5 space-y-1">
          <li>사이트에 게시된 학원비 정보는 <strong>참고용</strong>이며 실제 학원비와 다를 수 있습니다.</li>
          <li>올댓뷰티 멘토의 상담 내용은 참고용이며, 최종 수강 결정은 이용자 본인의 판단에 따릅니다.</li>
          <li>회사는 이용자와 제휴 학원 간의 계약에 대해 어떠한 책임도 지지 않습니다.</li>
          <li>천재지변, 서버 장애 등 불가항력적 사유로 인한 서비스 중단에 대해서는 책임을 지지 않습니다.</li>
        </ul>
      </Section>

      <Section title="제9조 지적 재산권">
        <p>서비스 내 모든 콘텐츠(텍스트, 이미지, 로고, 데이터 등)의 저작권은 회사에 귀속됩니다. 이용자는 회사의 사전 서면 동의 없이 콘텐츠를 무단으로 이용할 수 없습니다.</p>
      </Section>

      <Section title="제10조 서비스 중단">
        <p>회사는 시스템 점검, 장비 교체, 서비스 개선 등의 사유로 서비스를 일시 중단할 수 있으며, 사전에 공지합니다. 단, 긴급한 경우 사후 공지할 수 있습니다.</p>
      </Section>

      <Section title="제11조 분쟁 해결 및 관할 법원">
        <ul className="list-disc pl-5 space-y-1">
          <li>서비스 이용과 관련하여 분쟁이 발생한 경우 회사와 이용자는 성실히 협의합니다.</li>
          <li>협의가 이루어지지 않을 경우 대한민국 법률을 준거법으로 하며, 관할 법원은 민사소송법에 따릅니다.</li>
        </ul>
      </Section>

      <Section title="제12조 문의">
        <ul className="list-disc pl-5 space-y-1">
          <li>이메일: shinsy711@gmail.com</li>
          <li>처리 시간: 영업일 기준 3일 이내</li>
        </ul>
      </Section>
    </>
  )
}

export default function FooterLegal() {
  const [open, setOpen] = useState<ModalType>(null)

  return (
    <>
      <li>
        <button
          onClick={() => setOpen("privacy")}
          className="hover:text-white transition-colors text-left"
        >
          개인정보처리방침
        </button>
      </li>
      <li>
        <button
          onClick={() => setOpen("terms")}
          className="hover:text-white transition-colors text-left"
        >
          이용약관
        </button>
      </li>

      {open === "privacy" && (
        <Modal title="개인정보처리방침" onClose={() => setOpen(null)}>
          <PrivacyContent />
        </Modal>
      )}
      {open === "terms" && (
        <Modal title="이용약관" onClose={() => setOpen(null)}>
          <TermsContent />
        </Modal>
      )}
    </>
  )
}
