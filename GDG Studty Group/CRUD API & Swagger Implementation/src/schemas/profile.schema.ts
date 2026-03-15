import { z } from "zod"

export const profileSchema = z.object({
  bio: z.string().min(5).max(512),
  authorId: z.number().int().positive()
})

export const updateProfileSchema = profileSchema.partial()