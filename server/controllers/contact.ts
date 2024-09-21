import { createTRPCRouter, p } from '@server/trpc'
import { SERVICES, SCHEMA } from '@server/modules/contact'

export const contactRouter = createTRPCRouter({
  dropEmail: p.publicProcedure
    .input(SCHEMA.dropEmailSchema)
    .mutation(SERVICES.dropEmail),
})
