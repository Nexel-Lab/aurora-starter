'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { State, MODAL } from '@global/store'

export const Shortcuts = () => {
  const _modal = State((state) => state.modal)
  const _setModal = State((state) => state.setModal)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // 'Search'
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        _setModal(_modal === MODAL.search ? undefined : MODAL.search)
      }
      // 'New task'
      if (e.key === 'b' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        _setModal(_modal === MODAL.task_new ? undefined : MODAL.task_new)
      }
      // 'View - Dashboard'
      if (e.key === 'q') {
        e.preventDefault()
        router.push('/app')
      }
      // 'View - Task'
      if (e.key === 'w') {
        e.preventDefault()
        router.push('/app/task')
      }
      // 'View - Calendar'
      if (e.key === 'e') {
        e.preventDefault()
        router.push('/app/calendar')
      }
      // 'View - Timeline'
      if (e.key === 'r') {
        e.preventDefault()
        router.push('/app/timeline')
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [_modal, _setModal, router])
  return null
}
