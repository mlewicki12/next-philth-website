
import SlugInput from 'sanity-plugin-better-slug';
import { reviewPath, slugLength } from './constants';

export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'album',
      title: 'Album Info',
      type: 'album'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      inputComponent: SlugInput,
      options: {
        source: 'title',
        basePath: reviewPath,
        maxLength: slugLength,
        source: doc => `${doc.album.artist}-${doc.album.title}`,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blurb'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'album.art',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
