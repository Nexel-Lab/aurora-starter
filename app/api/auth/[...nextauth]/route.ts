import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import { authOptions } from '@server/auth'

const handler = NextAuth(authOptions as NextAuthOptions & { adapter: any })
export { handler as GET, handler as POST }
