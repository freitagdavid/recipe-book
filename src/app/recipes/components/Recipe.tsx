"use client"
import { useMutation, useQuery } from "@blitzjs/rpc"
import Link from "next/link"
import { useRouter } from "next/navigation"
import deleteRecipe from "../mutations/deleteRecipe"
import getRecipe from "../queries/getRecipe"

export const Recipe = ({ recipeId }: { recipeId: number }) => {
  const router = useRouter()
  const [deleteRecipeMutation] = useMutation(deleteRecipe)
  const [recipe] = useQuery(getRecipe, { id: recipeId })

  return (
    <>
      <div>
        <h1>Project {recipe.id}</h1>
        <pre>{JSON.stringify(recipe, null, 2)}</pre>

        <Link href={`/recipes/${recipe.id}/edit`}>Edit</Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteRecipeMutation({ id: recipe.id })
              router.push("/recipes")
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}
