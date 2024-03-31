import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { LayoutClient } from './layout.client'

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  if (!session) return <></>

  return (
    <>
      <div className='h-dvh w-dvw bg-gradient-to-br from-backgroundLight-1 to-blue-200 dark:from-background-3 dark:to-background-0 sm:pt-0'>
        <LayoutClient session={session}>
          <ComingSoon />
          {/* {children} */}
        </LayoutClient>
      </div>
    </>
  )
}

const ComingSoon = () => (
  <>
    <div className='flex h-full w-full'>
      <div className='relative m-auto h-48 w-48 opacity-10 dark:invert lg:h-80 lg:w-80'>
        <Image
          src='/page/coming-soon.png'
          width={512}
          height={512}
          alt='Coming Soon'
        />
      </div>
    </div>
  </>
)

export default AppLayout
