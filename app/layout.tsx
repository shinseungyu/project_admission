import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

const SITE_NAME = '미용입시 학원비 비교'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://beautyip.kr'
const TITLE = '미용입시 학원비 비교 | 헤어·메이크업·네일·피부 미용학원 견적 총정리 2026'
const DESC = '미용입시 학원비를 한 번에 비교하세요. 헤어·메이크업·네일·피부 전공별, 지역별 미용입시학원 학원비와 국비지원 정보를 100% 무료로 제공합니다.'

export const metadata: Metadata = {
  title: { default: TITLE, template: `%s | ${SITE_NAME}` },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  keywords: [
    '미용입시 학원비 비교', '미용입시학원', '미용학원비용', '미용학원비 비교',
    '헤어디자인학원', '메이크업학원', '네일아트학원', '피부미용학원',
    '미용입시 준비', '미용대학 입시', '서경대미용학과', '미용학과 입시',
    '미용입시 국비지원', '내일배움카드 미용', '미용사자격증',
    '미용입시 학원비', '미용학원비', '미용대학입시학원',
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: '/',
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: `${SITE_URL}/thumb.webp`, width: 1200, height: 630, alt: '미용입시 학원비 비교 사이트' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, date: false, address: false, email: false },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
    NaverBot: 'all', Yeti: 'all', googlebot: 'all',
    subject: SITE_NAME, publisher: SITE_NAME, author: SITE_NAME,
    location: 'South Korea', distribution: 'global', rating: 'general',
    'format-detection': 'telephone=no, date=no, address=no, email=no',
    'itemprop:name': TITLE, 'itemprop:description': DESC,
    'itemprop:image': `${SITE_URL}/thumb.webp`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: 'ko-KR',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/compare?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: '올댓뷰티',
        alternateName: SITE_NAME,
        url: `${SITE_URL}/`,
        description: '미용입시 학원비용·전공별·지역별 비교 정보를 제공하는 중립 정보 플랫폼입니다.',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'shinsy711@gmail.com',
          contactType: 'customer support',
          areaServed: 'KR',
          availableLanguage: 'Korean',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: TITLE,
        inLanguage: 'ko-KR',
        description: DESC,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: ['미용입시 학원비', '헤어디자인학원', '메이크업학원', '미용대학 입시', '국비지원 미용학원'],
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: '미용입시 학원비는 얼마나 되나요?',
            acceptedAnswer: { '@type': 'Answer', text: '전공·지역·학원에 따라 다르지만 평균적으로 헤어 250~350만원, 메이크업 200~300만원, 네일 150~230만원, 피부 280~380만원 수준입니다. 국비지원을 활용하면 실 부담금을 크게 줄일 수 있습니다.' },
          },
          {
            '@type': 'Question',
            name: '미용입시 준비는 언제부터 시작해야 하나요?',
            acceptedAnswer: { '@type': 'Answer', text: '고2 2학기부터 시작하는 것이 일반적입니다. 실기 준비에 최소 6개월이 필요하므로 고3 3월 이전에 시작하는 것을 권장합니다. 늦어도 고3 1학기 내에는 학원 등록을 마치세요.' },
          },
          {
            '@type': 'Question',
            name: '미용입시 학원 국비지원을 받을 수 있나요?',
            acceptedAnswer: { '@type': 'Answer', text: '내일배움카드를 통해 미용 관련 직업훈련 과정을 수강할 수 있습니다. 단, 입시 전문 과정은 국비지원 대상이 아닐 수 있으므로 학원별로 확인이 필요합니다.' },
          },
          {
            '@type': 'Question',
            name: '올댓뷰티 멘토 상담은 무료인가요?',
            acceptedAnswer: { '@type': 'Answer', text: '네, 올댓뷰티 전문 멘토의 상담은 100% 무료입니다. 학원 소개비·수수료 없이 학생과 학부모에게 중립적인 비교 정보를 제공합니다.' },
          },
        ],
      },
    ],
  }

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script id="json-ld" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive" />
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta itemProp="image" content={`${SITE_URL}/thumb.webp`} />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
        <Script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous" strategy="afterInteractive" />
        <style dangerouslySetInnerHTML={{ __html: `
          .nav-container { background: white; border-bottom: 1px solid #e5e7eb; position: sticky; top: 0; z-index: 50; padding: 0 1rem; }
          .nav-content { max-width: 1200px; margin: 0 auto; display: flex; height: 4rem; align-items: center; justify-content: space-between; }
          .nav-logo { font-weight: 800; font-size: 1rem; text-decoration: none; color: #1C1B1A; }
          .nav-links { display: flex; gap: 1.5rem; align-items: center; list-style: none; padding: 0; margin: 0; }
          .nav-links li { display: flex; align-items: center; }
          .nav-link { text-decoration: none; color: #6b7280; font-size: 0.875rem; font-weight: 500; transition: color 0.2s; }
          .nav-link:hover { color: #1C1B1A; }
          .nav-cta { background: #1C1B1A; color: white !important; padding: 0.4rem 1rem; border-radius: 999px; font-size: 0.8rem; font-weight: 700; transition: background 0.2s; }
          .nav-cta:hover { background: #000000; }
          @media (max-width: 640px) { .nav-links { gap: 0.6rem; } .nav-link { font-size: 0.75rem; } .nav-desktop { display: none; } }
          .mobile-bottom-bar { display: none; }
          @media (max-width: 640px) { .mobile-bottom-bar { display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 40; background: white; border-top: 1px solid #e5e7eb; padding: 0.75rem 1rem; gap: 0.5rem; } }
        ` }} />
      </head>
      <body className={`${geist.variable} font-sans`}>
        <nav className="nav-container" aria-label="메인 메뉴">
          <div className="nav-content">
            <a href="/" className="nav-logo" aria-label="미용입시 학원비 비교 홈">
              미용입시 학원비 비교
            </a>
            <ul className="nav-links">
              <li><a href="/compare" className="nav-link nav-desktop" title="미용입시 학원비 무료 견적 비교">견적 비교</a></li>
              <li><a href="/cost" className="nav-link nav-desktop" title="미용입시 학원비용 및 국비지원 안내">비용/국비</a></li>
              <li><a href="/guide" className="nav-link nav-desktop" title="미용입시 준비 타이밍·자격증·대학 가이드">가이드</a></li>
              <li><a href="/review" className="nav-link nav-desktop" title="미용입시 합격생 실제 후기">후기</a></li>
              <li><a href="/compare" className="nav-link nav-cta" title="올댓뷰티 전문 멘토 상담 신청">멘토 상담받기</a></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <Footer />
        {/* 모바일 하단 바 */}
        <div className="mobile-bottom-bar">
          <div className="flex-1 flex flex-col items-center">
            <a href="tel:0000000000" className="w-full py-2.5 text-center rounded-xl border border-gray-200 text-gray-700 font-bold text-sm">📞 전화</a>
            <p className="text-[10px] text-gray-400 mt-0.5">월~토 10:00~19:00</p>
          </div>
          <a href="https://open.kakao.com" className="flex-1 py-3 text-center rounded-xl bg-[#FEE500] text-[#191919] font-bold text-sm">💬 카톡</a>
          <a href="/compare" className="flex-2 flex-grow-[2] py-3 text-center rounded-xl bg-gray-900 text-white font-bold text-sm">멘토 상담받기</a>
        </div>
      </body>
    </html>
  )
}
