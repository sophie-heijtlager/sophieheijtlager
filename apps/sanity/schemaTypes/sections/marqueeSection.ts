import { defineField } from "sanity";
import {ListIcon} from '@sanity/icons';

export const marqueeSection = {
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
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'marqueeItem'}]
    })
  ],
}