const toBlob = (
  dataStream: any,
  resolve: (value: Blob | MediaSource) => void,
  reject: (reason?: any) => void,
  option?: {
    type: string
  },
) => {
  const dataChunks: BlobPart[] | [] = []
  dataStream.on('data', (chunk: never) => dataChunks.push(chunk))
  dataStream.on('end', () => {
    const blob = new Blob(dataChunks, { type: option?.type ?? 'image/jpeg' })
    resolve(blob)
  })
  dataStream.on('error', (error: Error) => reject(error))
}

const toBase64 = (
  dataStream: any,
  resolve: (base64: string) => void,
  reject: (reason?: any) => void,
  option?: {
    type: string
  },
) => {
  const dataChunks: Uint8Array[] | [] = []
  dataStream.on('data', (chunk: never) => dataChunks.push(chunk))
  dataStream.on('end', () => {
    const base64Data: string = Buffer.concat(dataChunks).toString('base64')
    const imageData = `data:${
      option?.type ?? 'image/jpeg'
    };base64,${base64Data}`
    resolve(imageData)
  })
  dataStream.on('error', (error: Error) => reject(error))
}

export { toBlob, toBase64 }
