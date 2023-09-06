import { z } from 'zod'

export const usernameValidationSchema = z
  .string()
  .regex(
    /^[A-Za-z0-9_]*$/,
    'The "username" field can only contain letters, numbers, and _.',
  )

export const getUsernameSchema = z.object({
  username: usernameValidationSchema,
})
export type getUsernameInput = z.input<typeof getUsernameSchema>
