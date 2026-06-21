import FooterLegal from "./FooterLegal"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div>
            <p className="text-white font-bold text-base mb-2">미용입시 학원비 비교</p>
            <p className="text-sm leading-relaxed max-w-sm mb-3">
              미용입시 학원비를 공정하게 비교해 드리는 중립 정보 플랫폼입니다.
              광고·수수료 없이 학생·학부모에게 정확한 정보를 제공합니다.
            </p>
            <address className="not-italic text-xs text-gray-500 leading-relaxed space-y-1">
              <p>문의: <a href="mailto:shinsy711@gmail.com" className="hover:text-white transition-colors">shinsy711@gmail.com</a></p>
              <p>영업시간: 월~토 10:00 ~ 19:00 <span className="text-gray-600">(일요일·공휴일 휴무)</span></p>
            </address>
          </div>
          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li><a href="/compare" title="미용입시 학원비 무료 견적 비교" className="hover:text-white transition-colors">견적 비교</a></li>
              <li><a href="/cost" title="미용입시 학원비용 및 국비지원 안내" className="hover:text-white transition-colors">비용/국비</a></li>
              <li><a href="/guide" title="미용입시 준비 가이드" className="hover:text-white transition-colors">가이드</a></li>
              <li><a href="/review" title="미용입시 합격생 후기" className="hover:text-white transition-colors">합격 후기</a></li>
              <li><a href="/partner" title="미용입시학원 제휴 신청" className="hover:text-white transition-colors">학원 제휴</a></li>
              <FooterLegal />
            </ul>
          </nav>
        </div>
        <p className="text-xs text-gray-500 border-t border-gray-800 pt-6">
          © 2026 미용입시 학원비 비교. 본 사이트는 특정 학원의 광고 사이트가 아닌 중립 비교 정보 플랫폼입니다.
          개인정보처리방침에 따라 수집된 정보는 제휴 학원 견적 안내 목적으로만 사용됩니다.
        </p>
      </div>
    </footer>
  )
}
