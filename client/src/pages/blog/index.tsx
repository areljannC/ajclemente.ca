// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

// SHARED IMPORTS
import { SEOType } from '@types';
import { SanityClient } from '@singletons';
import { SEO } from '@components';

// LOCAL IMPORTS
import { BlogContainer } from '@containers';

// Types
type PropsType = {
  cmsData: {
    seo?: SEOType;
    splash?: any;
  };
};

// CMS Query
const query = groq`
  *[_id == 'blogPage'][0]
`;

// SSG
export const getStaticProps: GetStaticProps = async () => {
  const cmsData = await SanityClient.fetch(query);
  return { props: { cmsData } };
};

// Component
const BlogPage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Fragment>
    <SEO seo={props.cmsData.seo} />
    <BlogContainer splash={props.cmsData.splash} />
  </Fragment>
);

// Display Name
BlogPage.displayName = 'BlogPage';

export default memo(BlogPage);
