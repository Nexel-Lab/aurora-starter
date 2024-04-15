/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import {
  email as emailValidator,
  password as passwordValidator,
} from '@aurora/utils/validator'
import { formHandler } from '../functions'
import { trpc } from '@server/trpc/client'

import { toast as t } from 'react-toastify'
import type { toast } from 'react-toastify'

const SignUpEmail = () => {
  const router = useRouter()
  const { mutateAsync, isLoading } = trpc.user.portal.signup.useMutation({
    onSuccess(data) {
      if (data && !data.success && data.message) {
        t.error('Error: ' + data.message)
        return
      }
      t.success('Sign up successfully, please login')
      // router.refresh()
      router.push('/portal')
    },
    onError: () => {
      t.error(`Error: Connection failed`)
      return
    },
  })

  const [confirmPassword, setConfirmPassword] = useState(null)

  const { handleChange, executeForm } = formHandler({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: any) =>
    executeForm(
      e,
      async (f: { email: string; password: string }, t: typeof toast) => {
        try {
          if (emailValidator(f.email) === null) {
            t.warn('Please enter a valid E-mail')
            return
          }

          if (f.password !== confirmPassword) {
            t.warn('Passwords need to match!')
            return
          }

          const IsValidPassword = passwordValidator.Func(f.password)

          if (IsValidPassword.error) {
            t.warn(IsValidPassword.msg)
            return
          }

          await mutateAsync(f)
        } catch (e) {
          t.error("Error: Can't sign up")
          throw new Error('AUTH: Sign up failed')
        }
      },
    )

  return (
    <motion.div
      className='relative'
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <h6 className='font-semibold uppercase'>Register</h6>
      <form className='flex flex-col space-y-2 pt-4' onSubmit={handleSubmit}>
        <label className={clsx('flex flex-col', isLoading && 'opacity-40')}>
          <input
            className={clsx(
              'rounded-sm bg-black/5 px-2 py-1 dark:bg-white/10',
              isLoading && 'opacity-40',
            )}
            type='email'
            name='email'
            placeholder='E-mail'
            autoCorrect='off'
            autoCapitalize='off'
            autoComplete='off'
            required={true}
            onChange={handleChange}
            disabled={isLoading}
          />
        </label>
        <label className={clsx('flex flex-col', isLoading && 'opacity-40')}>
          <input
            className={clsx(
              'rounded-sm bg-black/5 px-2 py-1 dark:bg-white/10',
              isLoading && 'opacity-40',
            )}
            type='password'
            name='password'
            placeholder='Password'
            autoCorrect='off'
            autoCapitalize='off'
            autoComplete='off'
            required={true}
            onChange={handleChange}
            disabled={isLoading}
          />
        </label>
        <label className={clsx('flex flex-col', isLoading && 'opacity-40')}>
          <input
            className={clsx(
              'rounded-sm bg-black/5 px-2 py-1 dark:bg-white/10',
              isLoading && 'opacity-40',
            )}
            type='password'
            name='confirm_password'
            placeholder='Confirm Password'
            autoCorrect='off'
            autoCapitalize='off'
            autoComplete='off'
            required={true}
            disabled={isLoading}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button
          className={clsx(
            'Anim AnimOpacity-60 mt-5 rounded-md bg-white/60 py-1 hover:bg-white/100 dark:bg-slate-800/80 dark:hover:bg-slate-600/100',
            isLoading && 'opacity-40',
          )}
          type='submit'
          disabled={isLoading}
        >
          Register
        </button>
      </form>
    </motion.div>
  )
}

export { SignUpEmail }
