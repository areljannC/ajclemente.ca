// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

// SHARED IMPORTS
import { SEOType } from '@types';
import { SanityClient } from '@singletons';
import { SEO } from '@components';
import { HomeContainer } from '@containers';

// Types
type PropsType = {
  cmsData: {
    seo?: SEOType;
    splash?: any;
  };
};

// CMS Query
const query = groq`
  *[_id == 'homePage'][0]
`;

// SSG
export const getStaticProps: GetStaticProps = async () => {
  const cmsData = await SanityClient.fetch(query);
  return { props: { cmsData } };
};

// Component
const HomePage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Fragment>
    <SEO seo={props.cmsData.seo} />
    <HomeContainer splash={props.cmsData.splash} />
  </Fragment>
);

// Display Name
HomePage.displayName = 'HomePage';

export default memo(HomePage);
