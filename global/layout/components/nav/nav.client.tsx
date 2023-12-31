'use client'

import { State } from '@global/store'
import { Icon } from '@aurora/assets'

const NavClient = () => {
  const _dark = State((state) => state.dark)
  const _setDark = State((state) => state.setDark)

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
