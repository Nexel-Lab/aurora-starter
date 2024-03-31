import { createTRPCRouter } from '../trpc'
import { exampleRouter } from './example'
import { userRouter } from './user'
import { contactRouter } from './contact'

/** Define your tRPC routes here */

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  contact: contactRouter,
})

export type AppRouter = typeof appRouter
