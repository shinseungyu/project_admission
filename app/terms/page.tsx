import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | 올댓뷰티',
  robots: { index: false, follow: false },
}

const S = {
  section: { marginBottom: '32px' } as React.CSSProperties,
  h2: { fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', borderBottom: '2px solid #ede9fe', paddingBottom: '8px', color: '#1c1917' } as React.CSSProperties,
  p: { marginBottom: '8px', lineHeight: '1.9' } as React.CSSProperties,
  ul: { paddingLeft: '20px', marginTop: '8px', lineHeight: '1.9' } as React.CSSProperties,
  highlight: { background: '#f5f3ff', borderLeft: '4px solid #6d28d9', padding: '12px 16px', borderRadius: '8px', fontSize: '0.9rem', lineHeight: '1.8' } as React.CSSProperties,
}

export default function TermsPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#374151', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px', color: '#1c1917' }}>이용약관</h1>
      <p style={{ color: '#9ca3af', marginBottom: '40px' }}>시행일: 2026년 1월 1일 &nbsp;|&nbsp; 최종 업데이트: 2026년 6월 20일</p>

      <section style={S.section}>
        <h2 style={S.h2}>제1조 (목적)</h2>
        <p style={S.p}>
          본 약관은 올댓뷰티(이하 &quot;회사&quot;)가 운영하는 미용입시 학원비 비교 서비스(이하 &quot;서비스&quot;)의
          이용 조건 및 절차, 이용자와 회사 간의 권리·의무·책임사항을 규정하는 것을 목적으로 합니다.
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제2조 (정의)</h2>
        <ul style={S.ul}>
          <li><strong>&quot;서비스&quot;</strong>: 회사가 제공하는 미용입시 학원비 비교, 올댓뷰티 멘토 상담 신청 및 관련 정보 제공 서비스 일체</li>
          <li><strong>&quot;이용자&quot;</strong>: 본 약관에 동의하고 서비스를 이용하는 자</li>
          <li><strong>&quot;멘토&quot;</strong>: 올댓뷰티 소속 미용입시 전문 상담사</li>
          <li><strong>&quot;제휴 학원&quot;</strong>: 회사와 제휴한 미용입시학원</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제3조 (약관의 효력 및 변경)</h2>
        <ul style={S.ul}>
          <li>본 약관은 서비스 화면에 게시함으로써 효력이 발생합니다.</li>
          <li>회사는 관련 법령을 위반하지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전 공지합니다.</li>
          <li>이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하여야 합니다.</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제4조 (서비스 내용)</h2>
        <p style={S.p}>회사는 다음 서비스를 제공합니다.</p>
        <ul style={S.ul}>
          <li>미용입시 학원비 비교 정보 제공 (헤어·메이크업·네일·피부 전공)</li>
          <li>올댓뷰티 전문 멘토 1:1 상담 신청 연결</li>
          <li>제휴 미용입시학원 학원비 견적 제공</li>
          <li>미용입시 자격증·대학·국비지원 관련 정보 제공</li>
        </ul>
        <p style={S.p}>※ 본 서비스는 특정 학원의 광고·홍보 사이트가 아닌 중립적 정보 비교 플랫폼입니다.</p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제5조 (이용 요금)</h2>
        <p style={S.p}>이용자의 상담 신청 서비스는 무료입니다. 단, 제휴 학원과의 수강 계약은 이용자와 학원 간 직접 이루어지며 회사는 이에 관여하지 않습니다.</p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제6조 (미성년자 이용)</h2>
        <div style={{ ...S.highlight, marginBottom: '12px' }}>
          <strong>만 14세 미만 이용자</strong>는 법정대리인(부모님 또는 법적 보호자)의 동의를 받아야 서비스를 이용할 수 있습니다.
          (개인정보보호법 제22조 제6항)
        </div>
        <ul style={S.ul}>
          <li>만 14세 미만 이용자가 서비스 신청 시 법정대리인 성명·연락처를 반드시 입력하여야 합니다.</li>
          <li>법정대리인 동의 없이 제출된 개인정보는 법정대리인의 요청 시 지체 없이 삭제됩니다.</li>
          <li><strong>만 14세 이상 미성년자(만 14~18세)</strong>는 본인이 직접 동의할 수 있으나, 법적 계약(수강 계약 등)은 법정대리인의 동의가 필요합니다.</li>
          <li>법정대리인이 미성년자의 개인정보 처리에 동의하지 않는 경우, 개인정보 삭제를 요청할 수 있습니다.</li>
          <li>문의: shinsy711@gmail.com</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제7조 (이용자의 의무)</h2>
        <p style={S.p}>이용자는 다음 행위를 하여서는 안 됩니다.</p>
        <ul style={S.ul}>
          <li>허위 정보 입력 또는 타인의 정보를 도용하는 행위</li>
          <li>서비스를 불법적인 목적으로 이용하는 행위</li>
          <li>서비스 운영을 방해하거나 악용하는 행위</li>
          <li>사이트 콘텐츠를 무단으로 복제·배포·상업적으로 이용하는 행위</li>
          <li>자동화 수단(봇, 크롤러 등)을 이용한 과도한 요청 행위</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제8조 (정보의 정확성 및 면책)</h2>
        <ul style={S.ul}>
          <li>사이트에 게시된 학원비 정보는 <strong>참고용</strong>이며 실제 학원비와 다를 수 있습니다.</li>
          <li>올댓뷰티 멘토의 상담 내용은 참고용이며, 최종 수강 결정은 이용자 본인의 판단에 따릅니다.</li>
          <li>회사는 이용자와 제휴 학원 간의 계약에 대해 어떠한 책임도 지지 않습니다.</li>
          <li>천재지변, 서버 장애 등 불가항력적 사유로 인한 서비스 중단에 대해서는 책임을 지지 않습니다.</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제9조 (지적 재산권)</h2>
        <p style={S.p}>
          서비스 내 모든 콘텐츠(텍스트, 이미지, 로고, 데이터 등)의 저작권은 회사에 귀속됩니다.
          이용자는 회사의 사전 서면 동의 없이 콘텐츠를 무단으로 이용할 수 없습니다.
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제10조 (서비스 중단)</h2>
        <p style={S.p}>
          회사는 시스템 점검, 장비 교체, 서비스 개선 등의 사유로 서비스를 일시 중단할 수 있으며,
          사전에 공지합니다. 단, 긴급한 경우 사후 공지할 수 있습니다.
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제11조 (분쟁 해결 및 관할 법원)</h2>
        <ul style={S.ul}>
          <li>서비스 이용과 관련하여 분쟁이 발생한 경우 회사와 이용자는 성실히 협의합니다.</li>
          <li>협의가 이루어지지 않을 경우 대한민국 법률을 준거법으로 하며, 관할 법원은 민사소송법에 따릅니다.</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제12조 (문의)</h2>
        <p style={S.p}>이용약관에 대한 문의는 아래로 연락주세요.</p>
        <ul style={S.ul}>
          <li>이메일: shinsy711@gmail.com</li>
          <li>처리 시간: 영업일 기준 3일 이내</li>
        </ul>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #e5e7eb', paddingTop: '20px', textAlign: 'center' as const, fontSize: '0.875rem' }}>
        <a href="/" style={{ color: '#6d28d9', marginRight: '16px' }}>홈으로</a>
        <a href="/privacy" style={{ color: '#6d28d9' }}>개인정보처리방침</a>
      </div>
    </main>
  )
}
