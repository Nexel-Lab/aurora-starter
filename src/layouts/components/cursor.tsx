'use client'

import { useEffect, useRef } from 'react'
import { useUiState } from '@/store'
import { css } from '@emotion/css'

/** You can customize your cursor here
 * by default it turned of, you can turn on by
 * go to `/global/config/defineConfig.ts` and change `useCursor` to true **/

function Cursor() {
  const [_cursorType, _dark] = useUiState((st) => [st.cursor, st.dark])

  const cursor = useRef<HTMLDivElement | null>(null)
  const cursor2 = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    if (cursor.current) {
      cursor.current.style.left = `${clientX}px`
      cursor.current.style.top = `${clientY}px`
    }
    if (cursor2.current) {
      cursor2.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0px)`
    }
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      onMouseMove(event)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const MainCursor = css`
    position: fixed;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 0.1s ease-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    transform-origin: center;
    z-index: 500;
    // background-color: #fff;
    mix-blend-mode: normal;
    &.pointer {
      /* transform-origin: center; */
      /* transform: translate(-50%, -50%) scale(5); */
    }
    &.logo {
      height: 80px;
      width: 80px;
      background-color: #fff;
      mix-blend-mode: difference;
      transition-duration: 250ms;
    }
    &.expanse {
      height: 100px;
      width: 100px;
      background-color: #ffffff22;
      transition-duration: 250ms;
    }
    &.go {
      height: 57px;
      width: 57px;
      background: url(/layout/cursor/go.png);
      mix-blend-mode: normal;
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 1199.98px) {
      display: none;
    }
  `

  const CursorBig = css`
    top: -20px;
    left: -20px;

    border-radius: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 500;
    height: 40px;
    width: 40px;
    transition: all 0.3s ease-out;
    will-change: width, height, transform, border;
    background-color: ${_dark ? 'rgba(255,255,255,0.2)' : 'rgba(0, 0, 0, 0.2)'};
    border: 1px solid #fff;
    opacity: 0.7;
    transition-duration: 250ms;
    &.active {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    &.lens {
      top: calc(100vh / -8);
      left: calc(100vh / -8);
      height: calc(100vh / 4);
      width: calc(100vh / 4);
      background: no-repeat url(/layout/cursor/lens.png);
      background-size: cover;
      // background-color: red;
      mix-blend-mode: normal;
      border: 1px solid #ffffff88;
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
      transition: all 0.33s ease-out;
    }
    @media (max-width: 1199.98px) {
      display: none;
    }
  `

  return (
    <div>
      <div className={`${MainCursor} ${_cursorType}`} ref={cursor} />
      <div
        ref={cursor2}
        className={`${CursorBig} ${
          _cursorType
            ? typeof _cursorType === 'string' && _cursorType === 'lens'
              ? 'lens'
              : 'active'
            : ''
        }`}
      />
    </div>
  )
}

export default Cursor
