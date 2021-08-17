
export default {
  type: 'object',
  name: 'album',
  options: {
    collapsible: true,
    collapsed: false
  },
  fields: [
    {
      title: 'Artist',
      name: 'artist',
      type: 'string',
      required: true,
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      required: true,
    },
    {
      title: 'Song',
      name: 'song',
      type: 'string',
    },
    {
      name: 'spotify',
      title: 'Spotify Link',
      type: 'string',
      required: true
    },
    {
      title: 'Art',
      name: 'art',
      type: 'image',
      required: true
    }
  ]
}