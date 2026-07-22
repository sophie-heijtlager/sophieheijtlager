import { defineField } from "sanity";

export const heroSection = {
  name: "homeHero",
  title: "Home hero",
  type: "document",
  fields: [
    defineField({
      name: "titles",
      title: "Titles",
      type: "array",
      of: [{type: 'string'}]
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{type: 'image'}]
    }),
    defineField({
      name: "label",
      title: "label",
      type: "label",
    })
  ]
} 