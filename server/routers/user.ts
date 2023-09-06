import { createTRPCRouter, p } from '@server/trpc'
import { getUsernameSchema } from '../schema/user.schema'
import { getUserByUsername } from '../controller/user.controller'

export const userRouter = createTRPCRouter({
  getUser: p.publicProcedure.input(getUsernameSchema).query(getUserByUsername),
})
