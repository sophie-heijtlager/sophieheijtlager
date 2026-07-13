import { defineField } from "sanity";
import {ListIcon} from '@sanity/icons';

export const marqueeSection = {
  name: "marqueeSection",
  title: "Marquee",
  type: "document",
  icon: ListIcon,
  fields: [
    defineField({
      name: 'marquees',
      title: 'Marquees',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'marquee'}]
        }
      ]
    })
  ],
}