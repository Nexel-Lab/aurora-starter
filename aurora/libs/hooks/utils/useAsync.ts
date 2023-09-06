import { useState, useEffect, useCallback } from 'react'

const useAsync = (asyncFunction: () => Promise<any>, immediate = true) => {
  type statusState = 'idle' | 'pending' | 'success' | 'error'
  const [status, setStatus] = useState<statusState>('idle')
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback(() => {
    setStatus('pending')
    setValue(null)
    setError(null)

    return asyncFunction()
      .then((response: any) => {
        setValue(response)
        setStatus('success')
      })
      .catch((error: any) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}

export { useAsync }
