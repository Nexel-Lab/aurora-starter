const toBuffer = async (readableStream: ReadableStream) => {
  const chunks = []

  const reader = readableStream.getReader()
  while (true as boolean) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
  }

  return Buffer.concat(chunks)
}

export { toBuffer }
