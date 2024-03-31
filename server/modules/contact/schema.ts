import { z } from 'zod'

export const dropEmailSchema = z
  .string()
  .regex(/^\S+@\S+\.\S+$/, 'Please enter a valid email address')

export type dropEmailInput = z.input<typeof dropEmailSchema>
