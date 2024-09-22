import React, { Suspense } from "react"
import { Form, FormProps } from "src/app/components/Form"
import { LabeledTextField } from "src/app/components/LabeledTextField"

import { z } from "zod"
export { FORM_ERROR } from "src/app/components/Form"

export function RecipeForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S> {...props}>
      <LabeledTextField
        name="description"
        label="Description"
        placeholder="Description"
        type="text"
      />
      <LabeledTextField name="title" label="Title" placeholder="Title" type="text" />
      <LabeledTextField name="ingredient" label="Ingredient" placeholder="Ingredient" type="text" />
      <LabeledTextField name="step" label="Step" placeholder="Step" type="text" />
      <LabeledTextField name="rating" label="Rating" placeholder="Rating" type="number" />
      <LabeledTextField name="image" label="Image" placeholder="Image" type="text" />
      {/* template: <__component__ name="__fieldName__" label="__Field_Name__" placeholder="__Field_Name__"  type="__inputType__" /> */}
    </Form>
  )
}
