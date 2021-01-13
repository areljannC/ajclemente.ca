import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Navbar, Container, Heading, Paragraph, Strong, Link } from '../../shared/components'

// Component
const Home: FC = () => (
  <Fragment>
    <Head>
      <title>AJ Clemente</title>
      <meta name='description' content='AJ Clemente | Software Developer from Canada.' />
    </Head>
    <Navbar />
    <HomeWrapper>
      <Container>
        <Heading>Hi, I'm AJ Clemente! 👋</Heading>
        <Paragraph>
          I'm a <Strong>React.js Developer</Strong> from <Strong>Canada</Strong>.
        </Paragraph>
        <Paragraph>
          I currently work for <Strong>Ford Motor Company</Strong> with the{' '}
          <Strong>2021 Mustang Mach-E's SYNC 4</Strong> infotainment dash team.
        </Paragraph>
        <Paragraph>
          You can reach me on{' '}
          <Link href='https://www.linkedin.com/in/aj-clemente/' target='_blank'>
            LinkedIn
          </Link>{' '}
          and on{' '}
          <Link href='https://github.com/areljannC/' target='_blank'>
            GitHub
          </Link>
          .
        </Paragraph>
      </Container>
    </HomeWrapper>
  </Fragment>
)

// Styles
const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 65px);
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`

// Display Names
Home.displayName = `Home`
HomeWrapper.displayName = `HomeWrapper`
Container.displayName = `Container`

export default memo(Home)
