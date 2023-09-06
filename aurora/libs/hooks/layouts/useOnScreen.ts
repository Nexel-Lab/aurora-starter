/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import type { RefObject } from 'react'

function useOnScreen(ref: RefObject<any>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      },
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref, rootMargin])
  return isIntersecting
}

export { useOnScreen }
