export default {
  name: 'blogPosts',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date'
    },
    {
      name: 'updated',
      title: 'Updated?',
      type: 'boolean',
    },
    {
      name: 'updateDate',
      title: 'Update Date',
      type: 'date',
      hidden: ({ parent, value }) => !value && !parent?.updated
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image'
    }
  ]
}