'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import { Layout } from './components'
import { Routes } from './routes'

export const PushToPortal = () => {
  const router = useRouter()
  router.push('/portal')
  return <></>
}

const LayoutClient = ({
  session,
  children,
}: {
  session: Session
  children: React.ReactNode
}) => {
  const reqPath = usePathname()
  const pathname = reqPath.split('/')[3]
  const [pageIndex, setPageIndex] = useState(99)

  useEffect(() => {
    setPageIndex(99)
    Routes.map((v, i) => {
      const path = v.path.split('/')[1]
      if (path === pathname) {
        setPageIndex(i)
      }
    })
    if (pathname === 'settings') {
      setPageIndex(80)
    }
  }, [pathname, reqPath])

  return (
    <>
      <div className='flex h-full w-full flex-col'>
        <Layout.Nav session={session} />
        <div className='flex w-full grow p-4'>
          <Layout.SideBar
            Routes={Routes}
            pageIndex={pageIndex}
            session={session}
          />
          <div className='h-full w-full rounded-md bg-white/20 shadow-[inset_6px_6px_12px_2px_rgb(0,0,0,0.05)] dark:bg-slate-900 dark:shadow-[inset_6px_6px_24px_2px_rgb(0,0,0,0.6)]'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export { LayoutClient }
