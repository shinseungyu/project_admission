import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '미용입시 학원비 비교 견적 신청',
  description: '지역·전공·학년을 입력하면 제휴 미용입시 학원에서 맞춤 견적을 보내드립니다. 100% 무료.',
  alternates: { canonical: '/compare' },
}

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
