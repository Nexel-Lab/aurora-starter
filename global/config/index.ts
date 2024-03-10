/* eslint-disable prettier/prettier */
import { Init } from '@aurora/view'
import defineConfig from './defineConfig'

export const app = { ...defineConfig.app }
export const metaData = Init.MetaData(defineConfig.metaData)
export const viewport = Init.Viewport()
export const contacts = Init.Contacts(defineConfig.contacts)

const Config = {
  app: { ...defineConfig.app },
  metaData: metaData,
  viewport: viewport,
  contacts: contacts,
}

export default Config
