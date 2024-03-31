import { z } from 'zod'

export const signinSchema = z.object({
  email: z.string(),
  password: z.string(),
})
export type signinInput = z.input<typeof signinSchema>

export const signupSchema = z.object({
  email: z.string(),
  password: z.string(),
})
export type signupInput = z.input<typeof signupSchema>
