'use client'

import type { Session } from 'next-auth'
import { NavLogo } from './nav.logo'
import { NavSearch } from './nav.search'
import { NavUser } from './nav.user'

const Nav = ({ session }: { session: Session }) => {
  return (
    <>
      <div className='flex h-16 w-full justify-between bg-foreground/[0.07] p-4'>
        <div className='flex h-full'>
          <NavLogo />
          <NavSearch />
        </div>
        <div>
          <NavUser session={session} />
        </div>
      </div>
    </>
  )
}

export { Nav }
