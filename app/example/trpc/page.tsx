import { Client } from './page.client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { trpcCaller } from '@server/trpc'

const Page = async () => {
  const session = await getServerSession(authOptions)

  const caller = await trpcCaller()
  const result = await caller.example.hello({ text: 'tRPC' })

  return (
    <>
      <div className='m-container w-dvw flex flex-col items-center justify-center'>
        <h6 className='text-xl font-bold text-primaryShade-2'>Client:</h6>
        <Client session={session} />
        <h6 className='pt-6 text-xl font-bold text-primaryShade-2'>Server:</h6>
        {result ? (
          <p>{result.greeting} from Server</p>
        ) : (
          <p>Server not working</p>
        )}
      </div>
    </>
  )
}

export default Page
