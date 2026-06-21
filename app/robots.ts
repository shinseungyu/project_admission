import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://beautyip.kr'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/privacy', '/terms'] },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Yeti', allow: '/' },
      { userAgent: 'NaverBot', allow: '/' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
