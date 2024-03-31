import type { usernameInput, updateUserProfileInput } from './schema'
import type { Context } from '@server/trpc/trpc.context'

export const getProfileByUsername = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: usernameInput
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

export const updateUserProfile = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: updateUserProfileInput
}) => {
  const existingUsername = await ctx.prisma.user.findUnique({
    where: {
      username: input.username,
    },
  })

  const _id = ctx.session?.user.id

  if (existingUsername && existingUsername.id !== _id) {
    return { success: false, message: 'This user already exists' }
  }

  try {
    await ctx.prisma.user.update({
      where: {
        id: _id,
      },
      data: {
        name: input.name,
        username: input.username.toLowerCase(),
        metadata: {
          profile: {
            bio: input.bio,
            image: {
              avatar: {
                name: input.image.avatar.name,
                imageId: input.image.avatar.imageId,
                url: input.image.avatar.url,
              },
              cover: {
                name: input.image.cover.name,
                imageId: input.image.cover.imageId,
                url: input.image.cover.url,
              },
            },
          },
        },
      },
    })
    return {
      success: true,
      message: 'Profile update completed',
    }
  } catch {
    throw new Error('Update user failed')
  }
}
