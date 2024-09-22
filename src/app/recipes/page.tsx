import { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { RecipesList } from "./components/RecipesList"

export const metadata: Metadata = {
  title: "Recipes",
  description: "List of recipes",
}

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/recipes/new"}>Create Recipe</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <RecipesList />
      </Suspense>
    </div>
  )
}
