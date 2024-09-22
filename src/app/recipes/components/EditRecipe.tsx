"use client"
import { Suspense } from "react"
import updateRecipe from "../mutations/updateRecipe"
import getRecipe from "../queries/getRecipe"
import { UpdateRecipeSchema } from "../schemas"
import { FORM_ERROR, RecipeForm } from "./RecipeForm"
import { useMutation, useQuery } from "@blitzjs/rpc"
import { useRouter } from "next/navigation"

export const EditRecipe = ({ recipeId }: { recipeId: number }) => {
  const [recipe, { setQueryData }] = useQuery(
    getRecipe,
    { id: recipeId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateRecipeMutation] = useMutation(updateRecipe)
  const router = useRouter()
  return (
    <>
      <div>
        <h1>Edit Recipe {recipe.id}</h1>
        <pre>{JSON.stringify(recipe, null, 2)}</pre>
        <Suspense fallback={<div>Loading...</div>}>
          <RecipeForm
            submitText="Update Recipe"
            schema={UpdateRecipeSchema}
            initialValues={recipe}
            onSubmit={async (values) => {
              try {
                const updated = await updateRecipeMutation({
                  ...values,
                  id: recipe.id,
                })
                await setQueryData(updated)
                router.refresh()
              } catch (error: any) {
                console.error(error)
                return {
                  [FORM_ERROR]: error.toString(),
                }
              }
            }}
          />
        </Suspense>
      </div>
    </>
  )
}
