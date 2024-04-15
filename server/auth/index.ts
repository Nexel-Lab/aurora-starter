import { app } from '@global/config/config.app'
import {
  authOptions as authOptionsJwt,
  getSession as getSessionJwt,
} from './aurora.jwt'
import {
  authOptions as authOptionsServer,
  getSession as getSessionServer,
} from './aurora.server'

export const authOptions =
  app.Auth.sessionType === 'server' ? authOptionsServer : authOptionsJwt
export const getSession =
  app.Auth.sessionType === 'server' ? getSessionServer : getSessionJwt
