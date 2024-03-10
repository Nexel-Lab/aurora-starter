import type { Metadata } from 'next'

const Init = (metaData: {
  appName: string
  title: string
  url: string
  description: string
  coverImg: string
  author: string
  keywords: string | string[]
  twitterID: string
}): Metadata => ({
  metadataBase: new URL(metaData.url),
  title: {
    template: '%s | ' + metaData.appName,
    default: metaData.title,
  },
  description: metaData.description,
  applicationName: metaData.appName,
  keywords: metaData.keywords,
  authors: { name: metaData.author },
  creator: metaData.author,
  publisher: metaData.author,
  other: {
    designer: metaData.author,
    language: 'english',
    distribution: 'web',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: {
      template: '%s | ' + metaData.appName,
      default: metaData.title,
    },
    siteName: metaData.appName,
    description: metaData.description,
    images: [
      {
        url: metaData.coverImg,
        width: 1200,
        height: 627,
      },
    ],
    authors: [metaData.author],
    locale: 'en-US',
    // type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | ' + metaData.appName,
      default: metaData.title,
    },
    description: metaData.description,
    creator: metaData.twitterID,
    images: [metaData.coverImg],
  },
  icons: {
    icon: '/logo_white.svg',
    shortcut: '/logo_white.svg',
    apple: '/logo_white.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/logo_white.svg',
    },
  },
  appleWebApp: {
    title: metaData.appName,
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/app/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/app/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
})

export default Init
