import { z } from "zod"

export const CreateRecipeSchema = z.object({
  description: z.string(),
  title: z.string(),
  ingredient: z.string(),
  step: z.string(),
  rating: z.number(),
  image: z.string(),
  // template: __fieldName__: z.__zodType__(),
})
export const UpdateRecipeSchema = CreateRecipeSchema.merge(
  z.object({
    id: z.number(),
  })
)

export const DeleteRecipeSchema = z.object({
  id: z.number(),
})
