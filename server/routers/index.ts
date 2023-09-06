import { exampleRouter } from './example'
import { userRouter } from './user'
import { createTRPCRouter } from '../trpc'

/** Define your tRPC routes here */

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
})

export type AppRouter = typeof appRouter
