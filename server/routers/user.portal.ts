import { createTRPCRouter, p } from '@server/trpc'
import { CONTROLLER, SCHEMA } from '@server/modules/user/portal'

export const userPortalRouter = createTRPCRouter({
  signin: p.publicProcedure
    .input(SCHEMA.signinSchema)
    .mutation(CONTROLLER.signin),
  signup: p.publicProcedure
    .input(SCHEMA.signupSchema)
    .mutation(CONTROLLER.signup),
})
