/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa6'
import { signIn } from 'next-auth/react'

const SignInProviders = ({ providers, session }: any) => {
  const router = useRouter()

  useEffect(() => {
    session && router.push('/app/dashboard')
  }, [session, router])

  return (
    <>
      <div className='my-8 flex flex-col justify-center space-y-2'>
        <div className='mb-2 flex w-full justify-center'>
          <div className=' my-auto h-px w-12 bg-black/30 dark:bg-white/30' />
          <p className='px-3 text-xs'>or Continue with</p>
          <div className=' my-auto h-px w-12 bg-black/30 dark:bg-white/30' />
        </div>
        <div
          className='Anim flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md bg-red-500/80 px-2 py-1 text-white dark:bg-white/20 dark:hover:bg-red-500'
          onClick={() => signIn(providers.google.id)}
        >
          <FaGoogle size='xs' className='w-4' />
          <p>Sign in with Google</p>
        </div>
        <div
          className='Anim flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md bg-blue-500/80 px-2 py-1 text-white dark:bg-white/20 dark:hover:bg-blue-500'
          onClick={() => signIn(providers.google.id)}
        >
          <FaFacebookF size='xs' className='w-2.5' />
          <p>Sign in with Facebook</p>
        </div>
        <div
          className='Anim flex w-full cursor-pointer items-center justify-center space-x-2 rounded-md bg-gray-800/80 px-2 py-1 text-white dark:bg-white/20 dark:hover:bg-gray-800'
          onClick={() => signIn(providers.github.id)}
        >
          <FaGithub size='xs' className='w-2.5' />
          <p>Sign in with Github</p>
        </div>
      </div>
    </>
  )
}

export { SignInProviders }
