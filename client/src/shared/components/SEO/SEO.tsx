// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import Head from 'next/head';

// Types
type PropsType = {
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

// Component
const SEO: FunctionComponent<PropsType> = (props: PropsType) => (
  <Head>
    <title children={props.seo.title} />
    <meta name='description' content={props.seo.description} />
    <meta name='robots' content={props.seo.robots.join()} />
    <meta name='googlebot' content={props.seo.robots.join()} />
    <meta property='og:site_name' content={props.seo.og.siteName} />
    <meta property='og:title' content={props.seo.og.title} />
    <meta property='og:description' content={props.seo.og.description} />
    <meta property='og:url' content={props.seo.og.url} />
    <link rel='canonical' href={props.seo.og.url} />
  </Head>
);

// Display Name
SEO.displayName = SEO.name;

export default memo(SEO);
