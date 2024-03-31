import { app } from './config.app'
import { metadata as rawMetadata } from './config.metadata'
import { contacts as rawContacts } from './config.contacts'
import { theme } from './config.theme'

const config = {
  rawMetadata,
  rawContacts,
  app,
  theme,
}

export { rawMetadata, rawContacts, app, theme }
export default config
