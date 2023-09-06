import { useEffect, useRef } from 'react'

function useMemoCompare(next: any, compare: (p: any, n?: any) => boolean) {
  const previousRef = useRef()
  const previous = previousRef.current
  const isEqual = compare(previous, next)

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next
    }
  })

  return isEqual ? previous : next
}

export { useMemoCompare }
