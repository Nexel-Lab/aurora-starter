import { app } from './initialize'
import { database } from './database'
import { storage } from './storage'
import { firestore } from './firestore'
import { auth } from './auth'

export const firebase = {
  app,
  database,
  storage,
  firestore,
  auth,
}
