import { defineField } from "sanity";
import {TimelineIcon} from '@sanity/icons'

export const timelineCards = {
  name: "timelineCards",
  type: 'document',
  icon: TimelineIcon,
  title: 'Timeline Cards',
  fields: [
    defineField({
      name: "image",
      type: 'image',
      title: "Image",
    }),
    defineField({
      name: "labels",
      title: "Labels",
      type: "array",
      of: [{type: 'label'}]
    }),
    defineField({
      name: "years",
      title: "Years",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    })
  ]
}