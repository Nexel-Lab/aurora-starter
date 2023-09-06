const toBlob = (binaryData: any) => {
  const buffer = Buffer.from(binaryData)
  const blob = new Blob([buffer])
  return blob
}

const toBase64 = (binaryData: any) => {
  const buffer = Buffer.from(binaryData)
  return buffer.toString('base64')
}

export { toBlob, toBase64 }
