"use client"
import { FORM_ERROR, RecipeForm } from "./RecipeForm"
import { CreateRecipeSchema } from "../schemas"
import { useMutation } from "@blitzjs/rpc"
import createRecipe from "../mutations/createRecipe"
import { useRouter } from "next/navigation"

export function New__ModelName() {
  const [createRecipeMutation] = useMutation(createRecipe)
  const router = useRouter()
  return (
    <RecipeForm
      submitText="Create Recipe"
      schema={CreateRecipeSchema}
      onSubmit={async (values) => {
        try {
          const recipe = await createRecipeMutation(values)
          router.push(`/recipes/${recipe.id}`)
        } catch (error: any) {
          console.error(error)
          return {
            [FORM_ERROR]: error.toString(),
          }
        }
      }}
    />
  )
}
