export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Permanent Full-Time',
            value: 'Permanent Full-Time',
          },
          {
            title: 'Permanent Part-Time',
            value: 'Permanent Part-Time',
          },
          {
            title: 'Contract Full-Time',
            value: 'Contract Full-Time',
          },
          {
            title: 'Contract Part-Time',
            value: 'Contract Part-Time',
          },
          {
            title: 'Part-Time',
            value: 'Part-Time',
          },
          {
            title: 'Co-op',
            value: 'Co-op',
          },
          {
            title: 'Freelance',
            value: 'Freelance',
          },
          {
            title: 'Casual',
            value: 'Casual',
          },
        ],
      },
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
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    }
  ],
}
