// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

// SHARED IMPORTS
import { SEOType, ProjectType } from '@types';
import { SanityClient } from '@singletons';
import { SEO } from '@components';
import { ProjectsContainer } from '@containers';

// Types
type PropsType = {
  cmsData: {
    seo?: SEOType;
    projects?: Array<ProjectType>;
  };
};

// CMS Query
const query = groq`
  {
    'seo': *[_id == 'projectsPage'][0].seo,
    'projects': *[_type == 'projects'] | order(_createdAt desc)
  }
`;

// SSG
export const getStaticProps: GetStaticProps = async () => {
  const cmsData = await SanityClient.fetch(query);
  return { props: { cmsData } };
};

// Component
const ProjectsPage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Fragment>
    <SEO seo={props.cmsData.seo} />
    <ProjectsContainer projects={props.cmsData.projects} />
  </Fragment>
);

// Display Name
ProjectsPage.displayName = 'ProjectsPage';

export default memo(ProjectsPage);
