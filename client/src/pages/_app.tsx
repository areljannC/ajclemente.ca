// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

// SHARED IMPORTS
import { CHAKRA_THEME } from '@shared/constants';
import { Layout } from '@shared/components';

// Component
const App: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <Head>
      <meta charSet='UTF-8' />
      <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
      <meta content='width=device-width, initial-scale=1.0' name='viewport' />
      <meta property='og:type' content='website' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link
        href='https://fonts.googleapis.com/css2?family=PT+Mono&family=Roboto&display=swap'
        rel='stylesheet'
      />
    </Head>
    <ChakraProvider theme={CHAKRA_THEME}>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </ChakraProvider>
  </Fragment>
);

// Display Name
App.displayName = App.name;

export default memo(App);
