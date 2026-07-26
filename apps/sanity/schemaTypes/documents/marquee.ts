import { defineField } from "sanity";
import {ListIcon} from '@sanity/icons';

export const marquee = {
  name: "marquee",
  title: "Marquee",
  type: "document",
  icon: ListIcon,
  fields: [
    defineField({
      name: "color_scheme",
      type: "string",
      title: "Color scheme",
      options: {
        layout: "radio",
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'}
        ],
      },
      initialValue: 'dark'
    }),
    defineField({
      name: "rotation",
      title: "Rotation",
      type: "number",
      initialValue: -2
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'marqueeItem'}]
        }
      ]
    }),
    defineField({
      name: 'change_position',
      title: 'Change block position?',
      type: 'boolean',
      initialValue: false
    })
  ],
}