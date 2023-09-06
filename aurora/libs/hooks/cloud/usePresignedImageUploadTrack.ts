import { useState } from 'react'

type tTrackedFile = {
  progress: number
  uploaded: number
  size: number
  speed: number
  timeRemaining: number
  status: 'pending' | 'error' | 'success' | 'uploading' | 'aborted' | 'blocked'
  abort: () => void
  id: string
  url: string
}

type tUploadResult = {
  id: string
}

type tUploadToS3 = (
  file: File,
  fileName: string,
  metadata?: Record<string, string>,
) => Promise<tUploadResult>

type tUseS3UploadTools = {
  uploadToS3: tUploadToS3
  files: tTrackedFile[]
  removeImage: (imageId: string) => void
  resetFiles: VoidFunction
}

const pendingTrackedFile = {
  progress: 0,
  uploaded: 0,
  size: 0,
  speed: 0,
  timeRemaining: 0,
  status: 'pending' as const,
  abort: () => undefined,
}

export const usePresignedImageUpload: () => tUseS3UploadTools = () => {
  const [files, setFiles] = useState<tTrackedFile[]>([])

  const resetFiles = () => {
    setFiles([])
  }

  const uploadToS3: tUploadToS3 = async (file, fileName, metadata = {}) => {
    const res = await fetch(`/api/test/presigned?name=${fileName}`)
    if (!res.ok) {
      throw new Error('Failed to get presigned upload url')
    }
    const data = await res.json()

    if ('error' in data) {
      console.error(data.error)
      throw data.error
    }

    const { id, url } = data

    const xhr = new XMLHttpRequest()
    setFiles((x) => [
      ...x,
      {
        ...pendingTrackedFile,
        abort: xhr.abort.bind(xhr),
        id,
        url,
      },
    ])

    function updateFile(trackedFile: Partial<TrackedFile>) {
      setFiles((x) =>
        x.map((y: any) => {
          if (y.file !== file) return y
          return { ...y, ...trackedFile } as TrackedFile
        }),
      )
    }

    await new Promise((resolve) => {
      let uploadStart = Date.now()
      xhr.upload.addEventListener('loadstart', () => {
        uploadStart = Date.now()
      })
      xhr.upload.addEventListener('progress', ({ loaded, total }) => {
        const uploaded = loaded ?? 0
        const size = total ?? 0

        if (uploaded) {
          const secondsElapsed = (Date.now() - uploadStart) / 1000
          const speed = uploaded / secondsElapsed
          const timeRemaining = (size - uploaded) / speed
          const progress = size ? (uploaded / size) * 100 : 0

          updateFile({
            uploaded,
            size,
            progress,
            timeRemaining,
            speed,
            status: 'uploading',
          })
        }
      })
      xhr.addEventListener('loadend', () => {
        const success = xhr.readyState === 4 && xhr.status === 200
        if (success) updateFile({ status: 'success' })
        resolve(success)
      })
      xhr.addEventListener('error', () => {
        updateFile({ status: 'error' })
        resolve(false)
      })
      xhr.addEventListener('abort', () => {
        updateFile({ status: 'aborted' })
        resolve(false)
      })
      xhr.open('PUT', url)
      xhr.setRequestHeader('Content-Type', 'application/octet-stream')
      xhr.send(file)
    })

    return { id }
  }

  const removeImage = (imageId: string) => {
    setFiles((current) => current.filter((x) => x.id !== imageId))
  }

  return {
    uploadToS3,
    files,
    resetFiles,
    removeImage,
  }
}
