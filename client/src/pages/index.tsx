// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import PortableText from 'react-portable-text';
import { Flex, Heading, Text } from '@chakra-ui/react';

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
    <Flex
      width='100%'
      height='100%'
      margin='auto'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <PortableText
        className=''
        content={props.pageData.splash}
        serializers={{
          h1: (props) => <Heading as='h1' marginBottom='8' {...props} />,
          normal: (props) => <Text marginBottom='1' {...props} />
        }}
      />
    </Flex>
  </Fragment>
);

// Display Name
HomePage.displayName = HomePage.name;

export default memo(HomePage);
