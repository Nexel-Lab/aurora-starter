'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast as t } from 'react-toastify'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { toast } from 'react-toastify'
import { formHandler } from '../functions'
import { trpc } from '@server/trpc/client'

const SignInEmail = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const { mutateAsync } = trpc.user.portal.signin.useMutation({
    onSuccess(data) {
      if (data && !data.success && data.message) {
        t.error('Error: ' + data.message)
        return
      }
      t.success('Sign in complete')
      router.refresh()
      router.push('/app/dashboard')
    },
    onError: () => {
      t.error(`Error: Connection failed`)
      return
    },
  })

  const { handleChange, executeForm } = formHandler()
  const handleSubmit = async (e: any) =>
    executeForm(
      e,
      async (f: { email: string; password: string }, t: typeof toast) => {
        try {
          setIsLoading(true)
          await mutateAsync(f)
        } catch (e) {
          t.error("Error: Can't set session")
          throw new Error('AUTH: Set session failed')
        }
      },
    )

  return (
    <>
      <motion.div
        className='relative'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
      >
        <h6 className='font-semibold uppercase'>Login</h6>
        <form className='flex flex-col space-y-2 pt-4' onSubmit={handleSubmit}>
          <input
            className={clsx(
              'rounded-sm bg-black/5 px-2 py-1 dark:bg-white/10',
              isLoading && 'opacity-40',
            )}
            type='email'
            name='email'
            placeholder='Email'
            required={true}
            onChange={handleChange}
            disabled={isLoading}
          />
          <input
            className={clsx(
              'rounded-sm bg-black/5 px-2 py-1 dark:bg-white/10',
              isLoading && 'opacity-40',
            )}
            type='password'
            name='password'
            placeholder='Password'
            required={true}
            onChange={handleChange}
            disabled={isLoading}
          />
          <button
            className={clsx(
              'Anim AnimOpacity-60 mt-5 rounded-md bg-white/60 py-1 hover:bg-white/100 dark:bg-slate-800/80 dark:hover:bg-slate-600/100',
              isLoading && 'opacity-40',
            )}
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'loading...' : 'Login'}
          </button>
          <div className='flex pt-3'>
            <input type='checkbox' className='Form-white-checkbox mr-2' />
            <label className='flex'>
              <p className='-mt-px text-xs'>Remember me</p>
            </label>
          </div>
        </form>
      </motion.div>
    </>
  )
}

export { SignInEmail }
