import { defineField } from "sanity";
import {EyeOpenIcon} from '@sanity/icons'

export const textRevealSection = {
  name: "textReveal",
  title: "Text Reveal",
  type: "document",
  icon: EyeOpenIcon,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      initialValue: "Always focused on growing, and learning more about development, design and the people I'm building for."
    })
  ]
}