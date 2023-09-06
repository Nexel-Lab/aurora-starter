/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import { theme } from '@global/config/defineConfig'

type PushStateInput = [
  data: any,
  unused: string,
  url?: string | URL | null | undefined,
]

export default function ProgressBar() {
  const height = 2 + 'px'
  const color = theme.color.primary[0]

  const styles = (
    <style>
      {`
        #nprogress {
          pointer-events: none;
          z-index: 999;
        }
        #nprogress .bar {
          background: ${color};
          position: fixed;
          z-index: 99999;
          top: 0;
          left: 0;
          width: 100%;
          height: ${typeof height === `string` ? height : `${height}px`};
        }
        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
          opacity: 1.0;
          -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
        }
    `}
    </style>
  )

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const handleAnchorClick = (event: MouseEvent) => {
      const targetUrl = (event.currentTarget as HTMLAnchorElement).href
      const currentUrl = location.href
      if (targetUrl !== currentUrl && !targetUrl.includes('mailto:')) {
        NProgress.start()
      }
    }

    const handleMutation: MutationCallback = () => {
      const anchorElements = document.querySelectorAll('a')
      anchorElements.forEach((anchor) =>
        anchor.addEventListener('click', handleAnchorClick),
      )
    }

    const mutationObserver = new MutationObserver(handleMutation)
    mutationObserver.observe(document, { childList: true, subtree: true })

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        NProgress.done()
        return target.apply(thisArg, argArray)
      },
    })
  })

  return styles
}