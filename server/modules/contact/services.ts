import type { dropEmailInput } from './schema'
import type { Context } from '@server/trpc/trpc.context'

export const dropEmail = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: dropEmailInput
}) => {
  try {
    const subscribeList: any = await ctx.prisma.app.findUnique({
      where: { title: 'newsletter' },
    })

    if (subscribeList) {
      if (subscribeList.content) {
        await ctx.prisma.app.update({
          where: { title: 'newsletter' },
          data: {
            content: {
              users: [...subscribeList.content['users'], input],
            },
          },
        })
      }
      return {
        success: true,
      }
    } else {
      await ctx.prisma.app.create({
        data: {
          title: 'newsletter',
          content: {
            users: [input],
          },
        },
      })
      return {
        success: true,
      }
    }
  } catch (e) {
    throw new Error("Database/Aurora/Newsletter: Can't add user email")
  }
}
