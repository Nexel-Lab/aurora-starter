import { theme } from './global/config/defineConfig'
import { TailwindDefaultConfig } from './aurora/view/theme/default'
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...TailwindDefaultConfig.Extend(theme.color, [nextui()]),
} as Config

export default TailwindConfig
