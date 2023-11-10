import { getDatabase, ref, get } from 'firebase/database'
import { app } from './initialize'

const db = getDatabase(app)

const findOne = async (dbName: string | undefined, folderName?: string) => {
  const dbPath =
    dbName && folderName
      ? folderName + '/' + dbName
      : !folderName && dbName
      ? dbName
      : ''
  const playersRef = ref(db, dbPath)
  try {
    const allData = await get(playersRef)
    if (allData.exists()) {
      return { success: true, data: allData.val() }
    } else {
      return {
        success: false,
        message: 'no data',
      }
    }
  } catch (err) {
    console.error(err)
    return {
      success: false,
      message: 'database connection failed',
    }
  }
}

const findAll = async () => {
  return await findOne('')
}

export const database = {
  getInstance: db,
  findOne,
  findAll,
}
