import { z } from 'zod'

export const exampleSchema = z.object({ text: z.string() })

export type exampleInput = z.input<typeof exampleSchema>
