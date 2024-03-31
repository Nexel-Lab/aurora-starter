import { Client } from './page.client'
import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'

const Page = async () => {
  const providers = await getProviders()
  const session = await getServerSession(authOptions)

  return (
    <>
      <Client providers={providers} session={session} />
    </>
  )
}

export default Page
