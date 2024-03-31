import { appRouter } from '@server/routers'
import { t } from '@server/trpc/trpc.init'
import { getSession } from '@server/auth'
import { prisma } from '@aurora/libs/database/prisma'
import { s3 } from '@aurora/libs/s3'

/** This is for calling tRPC from React Server Component **/

const trpcCaller = async (req: Request, res: Response) => {
  const session = await getSession()
  const createCaller = t.createCallerFactory(appRouter)
  return createCaller({
    req: req,
    resHeaders: res.headers,
    session,
    prisma,
    s3,
  })
}

export { trpcCaller }
