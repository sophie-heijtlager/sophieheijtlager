import { defineField } from "sanity"

export const socials = {
  name: 'socials',
  title: 'Socials',
  type: 'object',
  fields: [
    defineField({
      name: 'icon_name',
      type: 'string',
      title: 'Icon name'
    }),
    defineField({
      name: 'link',
      type: 'string',
      title: "Link to platform"
    })
  ]
}