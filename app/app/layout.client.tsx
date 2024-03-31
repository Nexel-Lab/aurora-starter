'use client'

import { useRouter } from 'next/navigation'

export const PushToPortal = () => {
  const router = useRouter()
  router.push('/portal')
  return <></>
}
