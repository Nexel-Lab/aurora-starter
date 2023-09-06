import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { type Session } from 'next-auth'
import { prisma } from '@aurora/libs/database/prisma'
import { s3 } from '@aurora/libs/s3'

/** tRPC Context **/

type CreateContextOptions = {
  session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
    s3,
  }
}

export const createTRPCContext =
  async (/*opts: FetchCreateContextFnOptions*/) => {
    const session = await getServerSession(authOptions)

    return createInnerTRPCContext({
      session,
    })
  }

export type Context = AsyncReturnType<typeof createTRPCContext>
