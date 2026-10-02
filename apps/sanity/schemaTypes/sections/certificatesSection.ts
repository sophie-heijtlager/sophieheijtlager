import {BlockElementIcon} from '@sanity/icons'
import { defineField } from 'sanity'

export const certificatesSection = {
  name: 'certificates',
  title: 'Certificates section',
  type: 'document',
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'string'
    }),
    defineField({
      name: 'certificate_items',
      title: 'Certificates',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'certificateCards'}]
        }
      ]
    })
  ],

}