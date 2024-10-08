import { createTRPCRouter, p } from '@server/trpc'
import { SERVICES, SCHEMA } from '@server/modules/example'

/** Using tRPC procedures by import { p } from '@server/trpc' */

export const exampleRouter = createTRPCRouter({
  hello: p.publicProcedure
    .input(SCHEMA.exampleSchema)
    .query(SERVICES.example),

  getSecretMessage: p.protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
})
