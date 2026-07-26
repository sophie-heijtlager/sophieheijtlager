import { defineField } from "sanity";

export const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: 'contact_title',
      type: 'string',
      title: "Contact title"
    }),
    defineField({
      name: 'contact_text',
      type: 'string',
      title: "Contact text"
    }),
    defineField({
      name: 'menu_items',
      type: 'array',
      title: "Menu items",
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'social_icons',
      type: 'array',
      title: "Social media icons",
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: "Logo",
    }),
  ]
}