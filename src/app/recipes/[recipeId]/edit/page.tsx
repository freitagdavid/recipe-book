import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getRecipe from "../../queries/getRecipe"
import { EditRecipe } from "../../components/EditRecipe"

type EditRecipePageProps = {
  params: { recipeId: string }
}

export async function generateMetadata({ params }: EditRecipePageProps): Promise<Metadata> {
  const Recipe = await invoke(getRecipe, { id: Number(params.recipeId) })
  return {
    title: `Edit Recipe ${Recipe.id} - ${Recipe.name}`,
  }
}

export default async function Page({ params }: EditRecipePageProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditRecipe recipeId={Number(params.recipeId)} />
      </Suspense>
    </div>
  )
}
