// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

// SHARED IMPORTS
import { SanityClient } from '@shared/singletons';
import { SEO } from '@shared/components';
import Experiences from '@containers/Experiences';

// Types
type PropsType = {
  pageData: {
    seo?: {
      title?: string;
      description?: string;
      keywords?: string[];
      robots?: string[];
      og?: {
        siteName?: string;
        title?: string;
        description?: string;
        url?: string;
      };
      canonical?: string;
    };
    experiences?: Array<{
      role?: string;
      companyName?: string;
      employmentType?: string;
      location?: string;
      description?: any;
      duration?: {
        startDate?: string;
        endDate?: string;
        present?: boolean;
      };
    }>;
  };
};

// Sanity Queries
const query = groq`
  {
    'seo': *[_id == 'experiencePage'][0].seo,
    'experiences': *[_type == 'experiences'] | order(_createdAt desc)
  }
`;

// Static Render
export const getStaticProps: GetStaticProps = async () => {
  const pageData = await SanityClient.fetch(query);
  return { props: { pageData } };
};

// Component
const ExperiencePage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Fragment>
    <SEO seo={props.pageData.seo} />
    <Experiences experiences={props.pageData.experiences} />
  </Fragment>
);

// Display Name
ExperiencePage.displayName = ExperiencePage.name;

export default memo(ExperiencePage);
