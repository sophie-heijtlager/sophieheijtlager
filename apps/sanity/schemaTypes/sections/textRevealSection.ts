import { defineField } from "sanity";

export const textRevealSection = {
  name: "textReveal",
  title: "Text Reveal",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      initialValue: "Always focused on growing, and learning more about development, design and the people I'm building for."
    })
  ]
}