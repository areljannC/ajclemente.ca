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
            value: 'permanentFullTime',
          },
          {
            title: 'Permanent Part-Time',
            value: 'permanentPartTime',
          },
          {
            title: 'Contract Full-Time',
            value: 'contractFullTime',
          },
          {
            title: 'Contract Part-Time',
            value: 'contractPartTime',
          },
          {
            title: 'Casual',
            value: 'casual',
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
