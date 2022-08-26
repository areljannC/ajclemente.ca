export default {
  name: 'projects',
  title: 'Projects',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'object',
      fields: [
        {
          name: 'startDate',
          title: 'Start Date',
          type: 'date',
        },
        {
          name: 'endDate',
          title: 'End Date',
          type: 'date',
          hidden: ({ parent, value }) => !value && parent?.present
        },
        {
          name: 'present',
          title: 'Present',
          type: 'boolean',
        },
      ],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image'
    }
  ]
}