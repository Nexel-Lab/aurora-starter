'use client'

import { useUiState } from '@/store'
import { Icon } from '@aurora/assets'

const NavClient = () => {
  const _showNav = useUiState((st) => st.showNav)
  return <>{_showNav && <Navbar />}</>
}

const Navbar = () => {
  const [_dark, _setDark] = useUiState((st) => [st.dark, st.setDark])
  return (
    <>
      <div
        className='Anim fixed right-4 top-4 z-100 h-10 w-10 cursor-pointer rounded-md bg-white fill-gray-800 p-2 shadow-sm hover:scale-110'
        onClick={() => _setDark(!_dark)}
      >
        <Icon.Dark />
      </div>
    </>
  )
}

export { NavClient }
