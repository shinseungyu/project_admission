import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 올댓뷰티',
  robots: { index: false, follow: false },
}

const S = {
  section: { marginBottom: '32px' } as React.CSSProperties,
  h2: { fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', borderBottom: '2px solid #ede9fe', paddingBottom: '8px', color: '#1c1917' } as React.CSSProperties,
  p: { marginBottom: '8px', lineHeight: '1.9' } as React.CSSProperties,
  ul: { paddingLeft: '20px', marginTop: '8px', lineHeight: '1.9' } as React.CSSProperties,
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginTop: '12px' } as React.CSSProperties,
  th: { background: '#ede9fe', padding: '10px 12px', textAlign: 'left', fontWeight: 700, border: '1px solid #ddd6fe' } as React.CSSProperties,
  td: { padding: '10px 12px', border: '1px solid #e5e7eb', verticalAlign: 'top', lineHeight: '1.7' } as React.CSSProperties,
  highlight: { background: '#fef9c3', borderLeft: '4px solid #eab308', padding: '12px 16px', borderRadius: '8px', fontSize: '0.9rem', lineHeight: '1.8' } as React.CSSProperties,
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#374151', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px', color: '#1c1917' }}>개인정보처리방침</h1>
      <p style={{ color: '#9ca3af', marginBottom: '40px' }}>시행일: 2026년 1월 1일 &nbsp;|&nbsp; 최종 업데이트: 2026년 6월 20일</p>

      <div style={S.highlight}>
        올댓뷰티(이하 &quot;회사&quot;)는 「개인정보보호법」 및 관련 법령을 준수하며, 이용자의 개인정보를 안전하게 처리합니다.
        본 방침은 회사가 운영하는 미용입시 학원비 비교 서비스에 적용됩니다.
      </div>

      <br />

      <section style={S.section}>
        <h2 style={S.h2}>제1조 수집하는 개인정보 항목 및 수집 방법</h2>
        <p style={S.p}>회사는 상담 신청 서비스 제공을 위해 다음 개인정보를 수집합니다.</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>구분</th>
              <th style={S.th}>수집 항목</th>
              <th style={S.th}>필수 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>기본 정보</td>
              <td style={S.td}>이름, 생년월일, 성별, 휴대폰 번호</td>
              <td style={S.td}>필수</td>
            </tr>
            <tr>
              <td style={S.td}>상담 관련</td>
              <td style={S.td}>거주 지역, 전공, 예산 범위, 목표 학교</td>
              <td style={S.td}>선택</td>
            </tr>
            <tr>
              <td style={S.td}>만 14세 미만 추가</td>
              <td style={S.td}>법정대리인 성명, 법정대리인 연락처</td>
              <td style={S.td}>필수 (해당자)</td>
            </tr>
            <tr>
              <td style={S.td}>자동 수집</td>
              <td style={S.td}>접속 IP, 브라우저 종류, 방문 일시, 쿠키</td>
              <td style={S.td}>자동 수집</td>
            </tr>
          </tbody>
        </table>
        <p style={{ ...S.p, marginTop: '10px', fontSize: '0.875rem', color: '#6b7280' }}>
          수집 방법: 홈페이지 상담 신청 폼을 통한 이용자 직접 입력
        </p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제2조 개인정보 수집·이용 목적</h2>
        <ul style={S.ul}>
          <li>미용입시 학원비 비교 견적 제공</li>
          <li>올댓뷰티 전문 멘토와의 1:1 상담 연결</li>
          <li>제휴 미용입시학원과의 견적 안내 연결</li>
          <li>서비스 품질 개선 및 이용 통계 분석</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제3조 개인정보 보유·이용 기간</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>보유 근거</th>
              <th style={S.th}>보유 항목</th>
              <th style={S.th}>보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>이용자 동의</td>
              <td style={S.td}>상담 신청 시 수집한 모든 정보</td>
              <td style={S.td}>수집일로부터 1년 (동의 철회 시 즉시 파기)</td>
            </tr>
            <tr>
              <td style={S.td}>전자상거래법</td>
              <td style={S.td}>계약·청약 철회 기록</td>
              <td style={S.td}>5년</td>
            </tr>
            <tr>
              <td style={S.td}>통신비밀보호법</td>
              <td style={S.td}>서비스 이용 로그</td>
              <td style={S.td}>3개월</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제4조 개인정보의 제3자 제공</h2>
        <p style={S.p}>회사는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 이용자가 동의한 경우 아래와 같이 제공합니다.</p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>제공받는 자</th>
              <th style={S.th}>제공 목적</th>
              <th style={S.th}>제공 항목</th>
              <th style={S.th}>보유·이용 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}>제휴 미용입시학원</td>
              <td style={S.td}>학원비 견적 제공 및 입시 상담</td>
              <td style={S.td}>이름, 연락처, 지역, 전공, 예산</td>
              <td style={S.td}>상담 목적 달성 후 즉시 파기</td>
            </tr>
            <tr>
              <td style={S.td}>올댓뷰티 소속 멘토</td>
              <td style={S.td}>1:1 전문 멘토 상담 진행</td>
              <td style={S.td}>이름, 연락처, 지역, 전공</td>
              <td style={S.td}>상담 완료 후 즉시 파기</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제5조 만 14세 미만 아동의 개인정보 처리</h2>
        <div style={{ ...S.highlight, borderColor: '#6d28d9', background: '#f5f3ff' }}>
          개인정보보호법 제22조 제6항에 따라 <strong>만 14세 미만 아동</strong>의 개인정보를 수집·이용하는 경우,
          반드시 법정대리인(부모님 또는 법적 보호자)의 동의를 받아야 합니다.
        </div>
        <ul style={{ ...S.ul, marginTop: '12px' }}>
          <li>만 14세 미만 이용자가 서비스를 신청하는 경우, 법정대리인의 성명과 연락처를 추가로 수집합니다.</li>
          <li>법정대리인이 아동의 개인정보 수집·이용·제공에 동의하여야 서비스 이용이 가능합니다.</li>
          <li>법정대리인은 언제든지 아동의 개인정보 열람, 정정, 삭제를 요청할 수 있습니다.</li>
          <li>법정대리인의 요청이 있는 경우 해당 개인정보는 지체 없이 파기합니다.</li>
          <li>문의: shinsy711@gmail.com</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제6조 개인정보의 파기</h2>
        <p style={S.p}>보유 기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 파기합니다.</p>
        <ul style={S.ul}>
          <li><strong>전자적 파일:</strong> 복구 불가능한 방법으로 영구 삭제</li>
          <li><strong>종이 서류:</strong> 파쇄 또는 소각</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제7조 이용자의 권리·의무</h2>
        <p style={S.p}>이용자(및 법정대리인)는 언제든지 다음 권리를 행사할 수 있습니다.</p>
        <ul style={S.ul}>
          <li>개인정보 열람 요청</li>
          <li>오류 정정 및 삭제 요청</li>
          <li>처리 정지 요청</li>
          <li>동의 철회 요청</li>
        </ul>
        <p style={{ ...S.p, marginTop: '10px' }}>권리 행사는 <strong>shinsy711@gmail.com</strong>으로 서면, 이메일 등을 통해 요청할 수 있으며 회사는 10일 이내에 처리합니다.</p>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제8조 쿠키(Cookie) 사용</h2>
        <p style={S.p}>회사는 서비스 향상 및 이용 통계 분석을 위해 쿠키를 사용합니다. 이용자는 브라우저 설정에서 쿠키 저장을 거부할 수 있으나, 일부 서비스가 제한될 수 있습니다.</p>
        <ul style={S.ul}>
          <li><strong>Google Analytics:</strong> 방문자 통계 분석</li>
          <li><strong>Google AdSense:</strong> 맞춤형 광고 제공</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제9조 개인정보 보호 책임자</h2>
        <table style={S.table}>
          <tbody>
            <tr>
              <td style={{ ...S.td, fontWeight: 600, width: '30%' }}>책임자</td>
              <td style={S.td}>올댓뷰티 개인정보보호 담당자</td>
            </tr>
            <tr>
              <td style={{ ...S.td, fontWeight: 600 }}>이메일</td>
              <td style={S.td}>shinsy711@gmail.com</td>
            </tr>
            <tr>
              <td style={{ ...S.td, fontWeight: 600 }}>처리 시간</td>
              <td style={S.td}>영업일 기준 10일 이내 처리</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제10조 권익침해 구제 방법</h2>
        <p style={S.p}>개인정보 침해로 인한 구제를 받기 위해 아래 기관에 신청할 수 있습니다.</p>
        <ul style={S.ul}>
          <li>개인정보침해신고센터: privacy.kisa.or.kr / 국번없이 118</li>
          <li>개인정보분쟁조정위원회: www.kopico.go.kr / 1833-6972</li>
          <li>대검찰청 사이버수사과: www.spo.go.kr / 국번없이 1301</li>
          <li>경찰청 사이버수사국: ecrm.cyber.go.kr / 국번없이 182</li>
        </ul>
      </section>

      <section style={S.section}>
        <h2 style={S.h2}>제11조 방침의 변경</h2>
        <p style={S.p}>본 방침은 법령 및 서비스 변경에 따라 수정될 수 있습니다. 변경 시 시행일 7일 전 홈페이지를 통해 공지합니다.</p>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #e5e7eb', paddingTop: '20px', textAlign: 'center' as const, fontSize: '0.875rem' }}>
        <a href="/" style={{ color: '#6d28d9', marginRight: '16px' }}>홈으로</a>
        <a href="/terms" style={{ color: '#6d28d9' }}>이용약관</a>
      </div>
    </main>
  )
}
