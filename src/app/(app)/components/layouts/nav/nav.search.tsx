import { useUiState, MODAL } from '@/store'
import { Button } from '@components/ui/button'

import { IoSearch } from 'react-icons/io5'

export const NavSearch = () => {
  const _setModal = useUiState((st) => st.setModal)
  return (
    <>
      <div className='hidden items-center justify-center lg:flex'>
        <Button
          variant='outline'
          className='bg-black/10'
          onClick={() => _setModal(MODAL.search)}
        >
          <IoSearch className='h-4 w-4' />
          <p className='px-2'>Type to search . . .</p>
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
            <span className='text-xs'>⌘</span>K
          </kbd>
        </Button>
      </div>
    </>
  )
}
