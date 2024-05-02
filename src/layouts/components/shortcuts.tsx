'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUiState, MODAL } from '@/store'

export const Shortcuts = () => {
  const [_modal, _setModal] = useUiState((st) => [st.modal, st.setModal])
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // 'Search'
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        _setModal(_modal === MODAL.search ? undefined : MODAL.search)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [_modal, _setModal, router])
  return null
}
