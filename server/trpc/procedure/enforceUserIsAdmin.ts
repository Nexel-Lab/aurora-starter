import { TRPCError } from '@trpc/server'
import { t } from '../trpc.init'

export const enforceUserIsAdmin = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  if (
    ctx.session.user.role !== 'ADMIN' &&
    ctx.session.user.role !== 'SUPER_ADMIN'
  ) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})
