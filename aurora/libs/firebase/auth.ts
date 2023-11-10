import { getAuth } from 'firebase/auth'
import { app } from './initialize'
import { useAuth } from './authContext'

export const authInstance = getAuth(app)

export { AuthProvider } from './authProvider'
export const auth = {
  getInstance: authInstance,
  useAuth,
}
