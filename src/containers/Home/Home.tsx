import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Heading, Paragraph, Strong, Link } from '../../shared/components'

// Component
const Home: FC = () => (
  <Fragment>
    <Head>
      <title>AJ Clemente</title>
      <meta name='description' content='AJ Clemente | Software Developer from Canada.' />
    </Head>
    <HomeWrapper>
      <Content>
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
      </Content>
    </HomeWrapper>
  </Fragment>
)

// Styles
const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

const Content = styled.article`
  height: fit-content;
  width: 265px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 500px;
  }

  @media ${({ theme }) => theme.breakpoints.laptopLarge} {
    width: 600px;
  }
`

// Display Names
Home.displayName = `Home`
HomeWrapper.displayName = `HomeWrapper`
Content.displayName = `Content`

export default memo(Home)
