export default {
  name: 'experiencePage',
  title: 'Experience Page',
  type: 'document',
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'robots',
          title: 'Robots',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'og',
          title: 'OG',
          type: 'object',
          fields: [
            {
              name: 'siteName',
              title: 'Site Name',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
        {
          name: 'canonical',
          title: 'Canonical',
          type: 'string',
        },
      ],
    }
  ],
}
