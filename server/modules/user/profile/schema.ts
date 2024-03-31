import { z } from 'zod'
import { usernameValidationSchema } from '@server/validator'

export const usernameSchema = z.object({
  username: usernameValidationSchema,
})
export type usernameInput = z.input<typeof usernameSchema>

export const updateUserProfileSchema = z.object({
  name: z.string(),
  username: usernameValidationSchema,
  bio: z.string(),
  image: z.object({
    avatar: z.object({
      name: z.string(),
      imageId: z.string(),
      url: z.string(),
    }),
    cover: z.object({
      name: z.string(),
      imageId: z.string(),
      url: z.string(),
    }),
  }),
})
export type updateUserProfileInput = z.input<typeof updateUserProfileSchema>
