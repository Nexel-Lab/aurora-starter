import type { DefaultSession } from 'next-auth'

import { app } from '@config'
import {
  authOptions as authOptionsJwt,
  getSession as getSessionJwt,
} from './aurora.jwt'
import {
  authOptions as authOptionsServer,
  getSession as getSessionServer,
} from './aurora.server'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
      plane: 'FREE' | 'PLUS' | 'PRO' | 'ELITE'
      balance: number
      metadata: any
    } & DefaultSession['user']
  }
}

export const authOptions =
  app.Auth.sessionType === 'server' ? authOptionsServer : authOptionsJwt
export const getSession =
  app.Auth.sessionType === 'server' ? getSessionServer : getSessionJwt
