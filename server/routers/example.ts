import { z } from 'zod'
import { createTRPCRouter, p } from '@server/trpc'

/** Using tRPC procedures by import { p } from '@server/trpc' */

export const exampleRouter = createTRPCRouter({
  hello: p.publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello, I'm ${input.text}`,
      }
    }),

  getAll: p.publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany()
  }),

  getSecretMessage: p.protectedProcedure.query(() => {
    return 'you can now see this secret message!'
  }),
})
