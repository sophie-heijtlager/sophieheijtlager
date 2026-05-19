import { defineField } from "sanity";

export const textPopupSection = {
  name: "textPopup",
  title: "Text Popup",
  type: "document",
  fields: [
    defineField({
      name: "titles",
      title: "Titles",
      type: "array",
      of: [{type: 'text'}]
    }),
    defineField({
      name: 'labels',
      title: "Labels",
      type: "array",
      of: [{type: 'label'}]
    }),
  ]
}