
import SlugInput from 'sanity-plugin-better-slug';
import { articlePath, slugLength } from './constants';

export default {
  name: 'highlightImage',
  title: 'Highlight Images',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date taken',
      type: 'datetime',
    },
    {
      name: 'active',
      title: 'Display?',
      type: 'boolean'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      active: 'active'
    },
    prepare(selection) {
      const { active } = selection
      return Object.assign({}, selection, {
        subtitle: active && 'Currently active',
      })
    },
  },
}
