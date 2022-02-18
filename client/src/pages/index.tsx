// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

// SHARED IMPORTS
import { SanityClient } from '@shared/singletons';
import { SEO } from '@shared/components';
import Home from '@containers/Home';

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
    splash?: any;
  };
};

// Sanity Query
const query = groq`
  *[_id == 'homePage'][0]
`;

// Static Render
export const getStaticProps: GetStaticProps = async () => {
  const pageData = await SanityClient.fetch(query);
  return { props: { pageData } };
};

// Component
const HomePage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Fragment>
    <SEO seo={props.pageData.seo} />
    <Home splash={props.pageData.splash} />
  </Fragment>
);

// Display Name
HomePage.displayName = HomePage.name;

export default memo(HomePage);
