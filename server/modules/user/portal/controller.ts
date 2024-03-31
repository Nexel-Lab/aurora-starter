import { uuidv7 } from 'uuidv7'
import { compare, hash } from 'bcryptjs'
import cookie from 'cookie'
import type { signinInput, signupInput } from './schema'
import type { Context } from '@server/trpc/trpc.context'
import { getErrorMessage } from '@aurora/utils/server/error'
import { env } from '@global/env.mjs'

export const signin = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: signinInput
}) => {
  try {
    const reqCredential = await ctx.prisma.credential.findUnique({
      where: {
        email: input.email,
      },
    })
    if (!reqCredential) {
      return { success: false, message: 'No credential that requested' }
    }
    if (
      reqCredential.password &&
      !(await compare(input.password, reqCredential.password))
    ) {
      return { success: false, message: 'Password not matched' }
    }

    const sessionToken = uuidv7()
    const sessionExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)

    const session = await ctx.prisma.session.create({
      data: {
        sessionToken: sessionToken,
        userId: reqCredential.id,
        expires: sessionExpiry,
      },
    })
    if (!session) {
      return {
        success: false,
        message: 'Create session failed',
      }
    }
    const useSecureCookies = env.NODE_ENV === 'production'
    const cookiePrefix = useSecureCookies ? '__Secure-' : ''

    ctx.resHeaders.append(
      'Set-Cookie',
      cookie.serialize(cookiePrefix + 'next-auth.session-token', sessionToken, {
        httpOnly: true,
        secure: useSecureCookies,
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      }),
    )

    return {
      success: true,
      session: { token: sessionToken },
      user: reqCredential,
    }
  } catch (e) {
    const message = getErrorMessage(e)
    throw new Error(message)
  }
}

export const signup = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: signupInput
}) => {
  try {
    const existingEmail = await ctx.prisma.user.findUnique({
      where: { email: input.email },
    })
    if (existingEmail) {
      return {
        success: false,
        message:
          'This email was signup, Please login with your email or your social account',
      }
    }

    const user = await ctx.prisma.user.create({
      data: {
        username: input.email.split('@')[0],
        name: input.email.split('@')[0],
        email: input.email,
        image: '/user/default/profile.png',
      },
    })
    if (!user) {
      return {
        success: false,
        message: 'Create user data failed',
      }
    }

    const hashedPassword = await hash(input.password, 10)
    const cred = await ctx.prisma.credential.create({
      data: {
        id: user.id,
        email: input.email,
        password: hashedPassword,
      },
    })
    if (!cred) {
      return {
        success: false,
        message: 'Create login info failed',
      }
    }

    await ctx.prisma.user.update({
      where: { email: input.email },
      data: {
        credential: {
          connect: { email: input.email },
        },
      },
      include: { credential: true },
    })

    return {
      success: true,
      user,
    }
  } catch (e) {
    const message = getErrorMessage(e)
    throw new Error(message)
  }
}
