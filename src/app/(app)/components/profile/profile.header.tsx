import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Edit as EditIcon } from '@aurora/assets/icons'

const ProfileHeader = ({ user }: any) => {
  const avatarImg: string | undefined =
    user?.metadata?.profile?.image?.avatar?.url ?? undefined

  return (
    <>
      <div className='-mt-24 flex flex-col items-center xl:-mt-32 xl:flex-row xl:items-end'>
        <motion.div className='relative flex h-32 w-32 items-center justify-center rounded-full md:h-48 md:w-48 xl:rounded-xl'>
          <div className='relative z-20 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] overflow-hidden rounded-full xl:h-[calc(100%-1rem)] xl:w-[calc(100%-1rem)] xl:rounded-xl'>
            <Image
              src={avatarImg ? avatarImg : user.image}
              alt={user.name + ' profile'}
              fill
              objectFit='cover'
              quality={80}
              placeholder='blur'
              blurDataURL={
                'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
              }
            />
          </div>
          <div className='absolute left-0 top-0 z-10 h-full w-full rounded-full  bg-black/20 backdrop-blur-xl dark:bg-white/20 xl:rounded-xl' />
          <Link
            className='Anim AnimOpacity-40 absolute bottom-2 right-3 z-20 h-6 w-6 cursor-pointer rounded-full bg-white/60 p-1.5 backdrop-blur-sm md:right-4 md:h-8 md:w-8 xl:hidden'
            href='/app/profile/edit'
          >
            <EditIcon />
          </Link>
        </motion.div>
        <div className='z-10 flex flex-col items-center pt-4 xl:items-start xl:pl-6 xl:pt-0'>
          <motion.h1
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='relative mb-2 text-3xl font-bold md:mt-0 md:text-7xl xxl:text-8xl'
          >
            {user?.name}
            <Link
              className='Anim AnimOpacity-40 absolute -right-8 bottom-2 hidden h-6 w-6 cursor-pointer rounded-full bg-white p-1 xl:block'
              href='/app/profile/edit'
            >
              <EditIcon />
            </Link>
          </motion.h1>
          <p className='text-xs opacity-80 md:text-lg xl:text-xl'>
            {user?.metadata?.profile?.bio ?? `Hi, I'm ${user.name}`}
          </p>
        </div>
      </div>
    </>
  )
}

export { ProfileHeader }
