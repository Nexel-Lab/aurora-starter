/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import NProgress from 'nprogress'
import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'
import { Router } from 'next/router'

function CreateProgress({ children }: { children: React.ReactNode }) {
  // const Router = useRouter()
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)
    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return <>{children}</>
}

export default CreateProgress
