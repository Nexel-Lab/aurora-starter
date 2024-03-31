// import { cookies } from 'next/headers'
import { getSession } from '@server/auth'
import { PushToPortal } from './layout.client'

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()

  if (!session) {
    return <PushToPortal />
  }

  return <>{children}</>
}

export default AppLayout
