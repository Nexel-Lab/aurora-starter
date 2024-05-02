'use client'

import { trpc } from '@server/trpc/client'
import type { Session } from 'next-auth'

function Client(p: { session: Session | null }): JSX.Element {
  /**
   * Here is calling tRPC from Client Components
   **/
  const hello = trpc.example.hello.useQuery({ text: 'tRPC' })

  const { data: secretMessage } = trpc.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: p.session?.user !== undefined },
  )

  if (hello.data === undefined) {
    console.log('name.data undefined')
    return (
      <>
        <p>did not work</p>
      </>
    )
  }

  return (
    <>
      <p>{hello.data!.greeting} from client</p>
      <p>
        {secretMessage ? <span>{secretMessage}</span> : <span>No secret</span>}
      </p>
    </>
  )
}

export { Client }
