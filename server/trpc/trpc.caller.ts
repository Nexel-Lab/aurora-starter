import { getSession } from '@server/auth'
import { appRouter } from '@server/routers'
import { prisma } from '@aurora/libs/database/prisma'
import { s3 } from '@aurora/libs/s3'

/** This is for calling tRPC from React Server Component **/

const trpcCaller = async () => {
  const session = await getSession()
  return appRouter.createCaller({ session, prisma, s3 })
}

export { trpcCaller }
