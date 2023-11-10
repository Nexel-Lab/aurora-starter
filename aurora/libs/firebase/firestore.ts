import { getFirestore } from 'firebase/firestore'
import { app } from './initialize'

export const firestoreInstance = getFirestore(app)

export const firestore = {
  getInstance: firestoreInstance,
}
