import { useEffect, useState } from 'react'

function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? 'SSR' : navigator.userAgent
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
      ),
    )

    setMobile(mobile)
  }, [])

  return { isMobile }
}

export { useDeviceDetect }
