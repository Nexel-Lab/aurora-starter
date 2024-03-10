import { MetadataRoute } from 'next'
import { getBaseUrl } from '@app/functions/getBaseUrl'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/test/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    sitemap: getBaseUrl() + '/sitemap.xml',
  }
}
