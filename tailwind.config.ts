import { theme } from './global/config/defineConfig'
import { TailwindDefaultConfig } from './aurora/view/theme/default'
import DaisyUI from 'daisyui'
import type { Config } from 'tailwindcss'

const TailwindConfig = {
  ...TailwindDefaultConfig.Extend(theme.color, [DaisyUI]),
} as Config

export default TailwindConfig
