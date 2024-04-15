'use client'

import Image from 'next/image'
import { State } from '@global/store'

export const NavLogo = () => {
  const _dark = State((state) => state.dark)
  return (
    <>
      <div className='mr-4 flex items-center'>
        <div className='relative flex h-full w-16'>
          <Image
            alt='logo'
            src={`/logo_${_dark ? 'white' : 'black'}.svg`}
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
        <h1 className='pl-1 text-xl font-bold'>AURORA</h1>
      </div>
    </>
  )
}
