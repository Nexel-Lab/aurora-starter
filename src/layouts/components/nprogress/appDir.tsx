/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import { theme } from '@config'

import './patch.css'

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

        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 24px;
          height: 24px;
          box-sizing: border-box;

          border: solid 3px transparent;
          border-top-color: #fff;
          border-left-color: #fff;
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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

  // return null
  return styles
}
