import { defineField } from "sanity";

export const header = {
  name: 'header',
  title: "Header",
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image'
    }),
    defineField({
      name: 'link_text',
      title: 'Link text',
      type: 'string'
    })
  ]
}