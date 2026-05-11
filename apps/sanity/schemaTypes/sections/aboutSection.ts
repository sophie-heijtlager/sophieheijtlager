import { defineField } from "sanity";

export const aboutSection = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: 'labels',
      title: "Labels",
      type: "array",
      of: [{type: 'label'}]
    }),
    defineField({
      name: 'title',
      title: "Title",
      type: "string",
      initialValue: "About me"
    }),
    defineField({
      name: 'descriptions',
      title: "Descriptions",
      type: "array",
      of: [{type: 'text'}]
    }),
    defineField({
      name: 'images',
      title: "Images",
      type: "array",
      of: [{type: "image"}]
    })
  ]
}