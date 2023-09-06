'use client'

import { signIn } from 'next-auth/react'

const SignInButton = () => {
  return (
    <>
      <button
        className='Anim cursor-pointer rounded-md border border-black bg-white/10 px-2 py-1 text-xs hover:bg-white/30 dark:border-white md:text-sm xl:text-base'
        onClick={() => signIn()}
      >
        LOG IN
      </button>
    </>
  )
}

export { SignInButton }
