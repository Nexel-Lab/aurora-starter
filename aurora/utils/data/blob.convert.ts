const toBase64 = (data: any[] | []) => {
  const blob = new Blob(data, { type: 'mime/type' })
  const reader = new FileReader()

  let base64String

  reader.onload = () => {
    base64String =
      reader.result &&
      typeof reader.result === 'string' &&
      reader.result.split(',')[1]
    // Use base64String
  }
  reader.readAsDataURL(blob)
  return base64String
}

export { toBase64 }
