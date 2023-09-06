import { useState, useEffect } from 'react'
import type { RefObject } from 'react'

function useElementPosition(el: RefObject<any>) {
  function getElement(x: number, y: number) {
    return {
      x: x,
      y: y,
    }
  }

  const [elementPosition, setElementPosition] =
    useState<typeof getElement>(getElement)

  useEffect(() => {
    function handlePosition() {
      const element = el.current
      const x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2
      const y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2
      setElementPosition(getElement(x, y) as any)
    }
    handlePosition()
  }, [el])

  return elementPosition
}

export { useElementPosition }
