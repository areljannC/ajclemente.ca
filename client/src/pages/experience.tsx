// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

// SHARED IMPORTS
import { SanityClient } from '@shared/singletons';
import { SEO } from '@shared/components';

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
  };
};

// Sanity Query
const query = groq`
  *[_id == 'experiencePage'][0]
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
    <p>ExperiencePage</p>
  </Fragment>
);

// Display Name
ExperiencePage.displayName = ExperiencePage.name;

export default memo(ExperiencePage);
