// import { env } from '@global/env.mjs'
import firebase from 'firebase/app'
import 'firebase/auth'

const env = process.env

const Firebase = firebase.initializeApp({
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DATABASE_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
})

export { Firebase }
export const auth = Firebase.auth()
