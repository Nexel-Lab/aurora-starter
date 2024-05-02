'use client'

import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUiState, MODAL } from '@/store'
import { useOnClickOutside } from '@aurora/libs/hooks/events/useOnClickOutside'
import { SearchModal } from './modal.search'
import { SomethingModal } from './modal.something'

export const Modal = () => {
  const [_modal, _setModal] = useUiState((st) => [st.modal, st.setModal])
  const $modal = useRef(null)
  useOnClickOutside($modal, () => _setModal(undefined))

  return (
    <>
      <AnimatePresence>
        {_modal !== undefined && (
          <>
            <motion.div
              className='fixed z-100 flex h-dvh w-dvw items-center justify-center bg-background/60 backdrop-blur-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {_modal === MODAL.search && <SearchModal $ref={$modal} />}
              {_modal === MODAL.something && <SomethingModal $ref={$modal} />}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
