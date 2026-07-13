import { defineField } from "sanity";
import {CaseIcon} from '@sanity/icons'

export const myCareerSection = {
  name: "myCareer",
  title: "My career",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "text"
    })
  ]
}