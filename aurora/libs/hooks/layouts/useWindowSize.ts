import { useState, useMemo, useSyncExternalStore } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

interface WindowSize {
  width: number | undefined
  height: number | undefined
}

const useWindowSizeLegacy = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  useIsomorphicLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

const useWindowSize = (serverFallback: number[]): number[] => {
  const getServerSnapshot = () => serverFallback

  const [getSnapshot, subscribe] = useMemo(() => {
    return [
      () => [window.innerWidth, window.innerHeight],
      (notify: () => void) => {
        window.addEventListener('resize', notify)
        return () => {
          window.removeEventListener('resize', notify)
        }
      },
    ]
  }, [])

  return useSyncExternalStore(
    subscribe,
    typeof window !== 'undefined' ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  )
}

const InnerHeight = (serverFallback: number): number => {
  const getServerSnapshot = () => serverFallback

  const [getSnapshot, subscribe] = useMemo(() => {
    return [
      () => window.innerHeight,
      (notify: () => void) => {
        window.addEventListener('resize', notify)
        return () => {
          window.removeEventListener('resize', notify)
        }
      },
    ]
  }, [])

  return useSyncExternalStore(
    subscribe,
    typeof window !== 'undefined' ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  )
}

const InnerWidth = (serverFallback: number): number => {
  const getServerSnapshot = () => serverFallback

  const [getSnapshot, subscribe] = useMemo(() => {
    return [
      () => window.innerWidth,
      (notify: () => void) => {
        window.addEventListener('resize', notify)
        return () => {
          window.removeEventListener('resize', notify)
        }
      },
    ]
  }, [])

  return useSyncExternalStore(
    subscribe,
    typeof window !== 'undefined' ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  )
}

export { useWindowSizeLegacy, useWindowSize, InnerHeight, InnerWidth }
