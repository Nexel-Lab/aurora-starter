'use client'

import { useInsertionEffect } from 'react'
import { useUiState } from '@/store'

/** This is Initialize when app start (below is set darkmode) **/

const Theme = () => {
  const [_dark, _setDark] = useUiState((st) => [st.dark, st.setDark])

  useInsertionEffect(() => {
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

  useInsertionEffect(() => {
    if (_dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [_dark])

  return null
}

export default Theme
