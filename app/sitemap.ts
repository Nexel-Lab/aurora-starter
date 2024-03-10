/* eslint-disable react-hooks/rules-of-hooks */
import { MetadataRoute } from 'next'
import { getBaseUrl } from '@app/functions/getBaseUrl'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: getBaseUrl(),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}
