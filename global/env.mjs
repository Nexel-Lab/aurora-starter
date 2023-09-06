import { createEnv } from '@t3-oss/env-nextjs'
import * as e from './env/index.mjs'

export const env = createEnv({
  server: e.serverSchema,
  client: e.clientSchema,
  runtimeEnv: e.runtimeEnv,
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
