/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef } from 'react'

function useUpdate(callback: Function, dependencies: any[]) {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    return callback()
  }, dependencies)
}

export { useUpdate }
