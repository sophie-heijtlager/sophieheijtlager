import { defineField } from "sanity";

export const homePage = {
  name: 'homepage',
  title: "Homepage",
  type: 'document',
  validation: (Rule: any) => Rule.required(),
  fields: [
    defineField({
      name: 'title',
      title: "Title",
      type: 'string',
      hidden: true,
      initialValue: 'Homepage'
    }),
    defineField({
      name: "sections",
      title: 'Sections',
      type: 'array',
      of: [{type: 'about',}, {type: 'textReveal'}, {type: 'textPopup'}]
    })
  ]
}