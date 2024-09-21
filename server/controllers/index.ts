import { createTRPCRouter } from '../trpc'
import { exampleRouter } from './example'
import { userRouter } from './user'
import { contactRouter } from './contact'

/** Define your tRPC routes here */

const router = createTRPCRouter({
  example: exampleRouter,
  user: userRouter,
  contact: contactRouter,
})

export const AppController = { router }

export type AppRouter = typeof router
