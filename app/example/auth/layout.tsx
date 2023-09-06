import { getSession } from '@server/auth'
import { SignInButton } from './layout.signin'

const Layout = async (p: { children: React.ReactNode }) => {
  /**
   * getSever session by import { getSession } from '@server/auth'
   **/
  const session = await getSession()

  if (!session) {
    return (
      <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
        <h4 className='pb-3 text-xl font-light uppercase md:text-2xl xl:text-4xl'>
          You're <span className='font-bold'>not</span> login
        </h4>
        <SignInButton />
      </main>
    )
  }

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      {p.children}
    </div>
  )
}

export default Layout
