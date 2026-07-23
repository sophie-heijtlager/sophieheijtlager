import { defineField } from "sanity";

export const footer = {
  name: "Footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: "Title"
    })
  ]
}