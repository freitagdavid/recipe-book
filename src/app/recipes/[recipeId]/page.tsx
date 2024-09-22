import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import getRecipe from "../queries/getRecipe"
import { Recipe } from "../components/Recipe"

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const Recipe = await invoke(getRecipe, { id: Number(params.recipeId) })
  return {
    title: `Recipe ${Recipe.id} - ${Recipe.name}`,
  }
}

type RecipePageProps = {
  params: { recipeId: string }
}

export default async function Page({ params }: RecipePageProps) {
  return (
    <div>
      <p>
        <Link href={"/recipes"}>Recipes</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Recipe recipeId={Number(params.recipeId)} />
      </Suspense>
    </div>
  )
}
