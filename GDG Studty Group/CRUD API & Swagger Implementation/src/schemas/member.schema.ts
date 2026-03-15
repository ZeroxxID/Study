import { z } from "zod"

export const createMemberSchema = z.object({
  name: z.string().min(3).max(64),
  email: z.string().email(),
  phone: z.string().regex(/^\+[0-9]+$/).optional(),
  address: z.string().max(512).optional()
})

export const updateMemberSchema = createMemberSchema.partial()