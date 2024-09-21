import { initTRPC, inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'
import { createTRPCContext } from './trpc.context'
import type { AppRouter } from '../controllers'

export const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createTRPCRouter = t.router

export type Inputs = inferRouterInputs<AppRouter>
export type Outputs = inferRouterOutputs<AppRouter>
