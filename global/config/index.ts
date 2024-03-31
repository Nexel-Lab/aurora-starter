/* eslint-disable prettier/prettier */
import { Init } from '@aurora/view'
import config from './config'

export * from './config'
export const metaData = Init.MetaData(config.rawMetadata)
export const viewport = Init.Viewport()
export const contacts = Init.Contacts(config.rawContacts)

const Config = {
  ...config,
  metaData,
  viewport,
  contacts,
}

export default Config
