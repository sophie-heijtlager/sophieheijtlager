import { defineField } from "sanity";
import {TextIcon} from '@sanity/icons'

export const textPopupSection = {
  name: "textPopup",
  title: "Text Popup",
  type: "document",
  icon: TextIcon,
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