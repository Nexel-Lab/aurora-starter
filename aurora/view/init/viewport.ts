import type { Viewport } from 'next'

const viewport = (): Viewport => ({
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFC900' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1A1A' },
  ],
})

export default viewport
