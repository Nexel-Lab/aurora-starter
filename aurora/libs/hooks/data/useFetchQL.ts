const useFetchQL = async (
  endpointURL: string | undefined | null,
  ql: { query: string; variables?: any },
  revalidate: number,
  options?: { headers?: any; next?: any },
  callback?: () => void,
) => {
  if (!endpointURL) {
    throw 'no api endpoint that request'
  }

  const res = await fetch(endpointURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    body: JSON.stringify(ql),
    next: { revalidate: revalidate, ...options?.next },
  }).then((res) => res.json())

  if (callback) {
    callback()
  }

  if (!res.data) {
    throw res.errors[0]?.message
  }

  return res.data
}

export { useFetchQL }
