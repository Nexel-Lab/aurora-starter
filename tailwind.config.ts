import { theme } from './global/config/config.theme'
import { TailwindDefaultConfig } from './aurora/view/theme/default'
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...TailwindDefaultConfig.Extend([nextui()]),
} as Config

export default TailwindConfig
