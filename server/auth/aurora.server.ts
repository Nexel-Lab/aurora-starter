/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaAdapter } from '@auth/prisma-adapter'
import { getServerSession } from 'next-auth'
import type { NextAuthOptions, DefaultSession } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import { env } from '@global/env.mjs'
import { prisma } from '@aurora/libs/database'

/** Next-Auth Configs here **/

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
      plane: 'FREE' | 'PLUS' | 'PRO' | 'ELITE'
      metadata: any
    } & DefaultSession['user']
  }
}

const useSecureCookies = env.NODE_ENV === 'production'
const cookiePrefix = useSecureCookies ? '__Secure-' : ''
const hostName = new URL(env.NEXTAUTH_URL).hostname

export const authOptions: NextAuthOptions | { adapter: any } = {
  // pages: {
  //   signIn: '/',
  //   signOut: '/',
  //   error: '/',
  //   newUser: '/',
  // },
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: '.' + hostName,
        secure: useSecureCookies,
      },
    },
  },
  callbacks: {
    session: ({ session, user }: any) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role,
          plan: user.plan,
        },
      }
    },
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: env.AUTH_FB_APP_ID,
      clientSecret: env.AUTH_FB_APP_SECRET,
    }),
    GithubProvider({
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}

export const getSession = async () => await getServerSession(authOptions)
