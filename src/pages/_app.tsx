import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeContextProvider } from '../shared/context'

// Component
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <link
        href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed&display=swap'
        rel='stylesheet'
      />
    </Head>
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  </Fragment>
)

// Display Names
App.displayName = `App`

export default memo<AppProps>(App)
