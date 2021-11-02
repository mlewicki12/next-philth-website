
export default {
  type: 'object',
  name: 'audio',
  title: 'Audio',
  fields: [
    {
      name: 'file',
      title: 'File',
      type: 'file',
      required: true,
      options: {
        accept: 'audio/*'
      }
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
      required: true
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      required: 'true'
    }
  ],
  options: {
    hotspot: true,
  },
}