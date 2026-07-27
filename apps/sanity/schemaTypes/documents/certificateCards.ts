import { defineField } from "sanity";

export const certificateCards = {
  name: 'certificateCards',
  title: 'Certificate cards',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image'
    }),
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string'
    }),
    defineField({
      name: 'certificate',
      title: 'Certificate',
      type: 'string'
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date'
    })
  ]
}