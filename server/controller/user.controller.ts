import type { getUsernameInput } from '@server/schema/user.schema'
import type { Context } from '@server/trpc/trpc.context'

export const getUserByUsername = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: getUsernameInput
}) => {
  const user = await ctx.prisma.user.findUnique({
    where: {
      username: input.username,
    },
  })
  if (!user)
    return {
      success: false,
      message: 'No username that requested',
    }
  return {
    success: true,
    user,
  }
}
