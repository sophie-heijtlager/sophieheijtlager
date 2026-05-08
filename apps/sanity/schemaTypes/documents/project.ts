import {defineField} from 'sanity'

export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "labels",
      title: "Labels",
      type: "array",
      of: [{ type: 'label' }]
    })
  ],
}
