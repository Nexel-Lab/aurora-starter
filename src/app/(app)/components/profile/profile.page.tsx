'use client'

import { CoverImage } from './profile.image.cover'
import { ProfileHeader } from './profile.header'

const UserProfilePage = ({ user }: { user: any }) => {
  const coverImg: string | undefined =
    user?.metadata?.profile?.image?.cover?.url ?? undefined

  return (
    <>
      <CoverImage
        Title={user.name as string}
        Img={coverImg ? coverImg : '/user/default/cover.png'}
      />
      <div className='flex w-dvw'>
        <div className='container px-4 xl:w-[1024px] xl:px-0'>
          <ProfileHeader user={user} />
        </div>
      </div>
    </>
  )
}

export { UserProfilePage }
