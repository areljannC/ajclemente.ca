// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';

// SHARED IMPORTS
import { SanityClient } from '@shared/singletons';
import { SEO } from '@shared/components';
import Projects from '@containers/Projects';

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
    projects?: Array<{
      title?: string;
      description?: any;
      link?: string;
      tags?: Array<string>;
      duration?: {
        startDate?: string;
        endDate?: string;
        present?: boolean;
      };
      coverImage?: string;
    }>;
  };
};

// Sanity Query
const query = groq`
  {
    'seo': *[_id == 'projectsPage'][0].seo,
    'projects': *[_type == 'projects'] | order(_createdAt desc)
  }
`;

// Static Render
export const getStaticProps: GetStaticProps = async () => {
  const pageData = await SanityClient.fetch(query);
  return { props: { pageData } };
};

// Component
const ProjectsPage: FunctionComponent<PropsType> = (props: PropsType) => (
  <Fragment>
    <SEO seo={props.pageData.seo} />
    <Projects projects={props.pageData.projects} />
  </Fragment>
);

// Display Name
ProjectsPage.displayName = ProjectsPage.name;

export default memo(ProjectsPage);
