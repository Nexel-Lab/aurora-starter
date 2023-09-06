'use client'

import { useEffect } from 'react'
import { State } from '@global/store'
import { GlobalStyles } from '@aurora/view/theme/global.css'

/** This is Initialize when app start (below is set darkmode) **/

const Theme = () => {
  const _setDark = State((state) => state.setDark)
  const _dark = State((state) => state.dark)

  useEffect(() => {
    function InitState() {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        _setDark(true)
      } else {
        _setDark(false)
      }
    }
    InitState()
  }, [_setDark])

  useEffect(() => {
    if (_dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [_dark])

  return <>{GlobalStyles(_dark)}</>
}

export default Theme
