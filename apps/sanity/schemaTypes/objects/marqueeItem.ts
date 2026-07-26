import { defineField } from "sanity";

export const marqueeItem = {
  name: "marqueeItem",
  title: "Marquee item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: 'string'
    }),
    defineField({
      name: "show_info",
      title: "Show info",
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'level',
      title: "Level",
      hidden: ({parent}) => parent?.show_info === false,
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'Level 1', value: 'level_01'},
          {title: 'Level 2', value: 'level_02'},
          {title: 'Level 3', value: 'level_03'}
        ]
      },
      initialValue: 'level_01'
    }),
  ]
}