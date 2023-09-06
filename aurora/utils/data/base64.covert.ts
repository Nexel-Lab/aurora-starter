const toBlob = (base64String: string) => {
  const blob = new Blob([
    Uint8Array.from(atob(base64String), (c) => c.charCodeAt(0)),
  ])
  return blob
}

const toBuffer = (base64String: string) => Buffer.from(base64String, 'base64')

export { toBlob, toBuffer }
