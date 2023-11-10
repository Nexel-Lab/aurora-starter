import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { app } from './initialize'

const storageInstance = getStorage(app)

const getFile = async (fileName: string | undefined, folderName?: string) => {
  const dbPath =
    fileName && folderName
      ? folderName + '/' + fileName
      : !folderName && fileName
      ? fileName
      : ''
  const storageRef = ref(storageInstance, dbPath)
  try {
    const imgUrl = await getDownloadURL(storageRef)
    if (!imgUrl) {
      return {
        success: false,
        message: 'no data',
      }
    }

    return {
      success: true,
      data: imgUrl,
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: 'database connection failed',
    }
  }
}

export const storage = {
  getInstance: storageInstance,
  getFile,
}
