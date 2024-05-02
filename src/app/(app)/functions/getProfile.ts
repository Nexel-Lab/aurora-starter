import { trpcCaller } from '@server/trpc'

enum FETCH {
  SUCCESS,
  ERROR,
}

export const getProfileByUsername = async ({
  username,
}: {
  username: string
}) => {
  try {
    const trpc = await trpcCaller()
    const data = await trpc.user.profile.getProfileByUsername({
      username: username.toLowerCase(),
    })
    return { status: FETCH.SUCCESS, data }
  } catch (err: any) {
    throw new Error('TRPC Error: profile/username', err)
    // return { status: FETCH.ERROR, data: 'TRPC Error: profile/username' }
  }
}
