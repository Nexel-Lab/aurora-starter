'use client'

import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SignInEmail, SignInProviders, SignUpEmail } from './components'
import { Session } from 'next-auth'

const Client = ({
  providers,
  session,
}: {
  providers: any
  session: Session | null
}) => {
  const credCase = useSearchParams().get('case')

  return (
    <>
      <div className='flex h-dvh w-dvw flex-col items-center justify-center bg-gradient-to-br from-slate-400 to-slate-500 dark:from-slate-800 dark:to-slate-600 '>
        <div className='absolute bottom-0 right-0 mb-8 h-full w-full opacity-5'>
          <Image
            alt='logo'
            src='/logo_white.svg'
            style={{ objectFit: 'contain' }}
            fill
          />
        </div>
        <div className='rounded-lg bg-white/60 p-6 backdrop-blur-lg dark:bg-black/20'>
          {credCase === 'signup' ? <SignUpEmail /> : <SignInEmail />}
          <SignInProviders providers={providers} session={session} />
          <Link
            href={credCase === 'signup' ? '/portal' : '/portal?case=signup'}
          >
            <p className='Anim AnimOpacity-40 mt-1 cursor-pointer text-center text-xs opacity-80 hover:opacity-100'>
              {credCase === 'signup'
                ? 'Already have an Account'
                : 'Not have an Account?'}
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

export { Client }
