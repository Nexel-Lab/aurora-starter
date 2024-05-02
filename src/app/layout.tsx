/* eslint-disable prettier/prettier */
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Prompt } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import clsx from 'clsx'

import { env } from '@env'
import Config from '@config'
import { GlobalWrapper } from '@/layouts/wrapper'

import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'
import './globals.css'

export const metadata = { ...Config.metaData }
export const viewport = { ...Config.viewport }

const fInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const fPrompt = Prompt({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '600'],
  display: 'swap',
  variable: '--font-prompt',
})

type AppPropsWithLayout = AppProps & {
  children: React.ReactNode
}

const App = ({ children }: AppPropsWithLayout) => {
  return (
    <html
      lang='en'
      className={clsx(
        fInter.className,
        `${fInter.variable} ${fPrompt.variable}`,
      )}
    >
      <body suppressHydrationWarning={true}>
        <GlobalWrapper>{children}</GlobalWrapper>
        <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  )
}

export default App
