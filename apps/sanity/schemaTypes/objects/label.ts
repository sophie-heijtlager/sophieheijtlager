import { defineField } from "sanity";

export const label = {
  name: 'label',
  title: 'Label',
  type: 'object',
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string"
    }),
    defineField({
      name: "icon",
      title: "Icon name",
      type: "string"
    }),
    defineField({
      name: "border",
      initialValue: false,
      title: "Add border?",
      type: "boolean"
    }),
    defineField({
      name: "color",
      title: "Choose label color",
      type: "string",
      initialValue: 'primary',
      options: {
        list: [
          { title: 'primary', value: 'primary' },
          { title: 'secondary', value: 'secondary' },
          { title: 'tertiary', value: 'tertiary' },
        ]
      },
    })
  ]
}
