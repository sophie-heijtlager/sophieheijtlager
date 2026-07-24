import { defineField } from "sanity";

export const footer = {
  name: "footer",
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