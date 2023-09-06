import { z } from 'zod'

/** Specify your client-side environment variables schema here, prefix them with `NEXT_PUBLIC_`. **/

export const clientSchema = {
  NEXT_PUBLIC_APP_NAME: z.string(),
  NEXT_PUBLIC_GTM: z.string(),
}
