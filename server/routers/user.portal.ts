import { createTRPCRouter, p } from '@server/trpc'
import { SERVICE, SCHEMA } from '@server/modules/user/portal'

export const userPortalRouter = createTRPCRouter({
  signin: p.publicProcedure.input(SCHEMA.signinSchema).mutation(SERVICE.signin),
  signup: p.publicProcedure.input(SCHEMA.signupSchema).mutation(SERVICE.signup),
})
