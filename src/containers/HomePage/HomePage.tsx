import React, { FC, memo } from 'react'
import styled from 'styled-components'

// Component
const HomePage: FC = () => {
  return (
    <HomePageWrapper>
      <Heading>AJ Clemente</Heading>
    </HomePageWrapper>
  )
}

// Styles
const HomePageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
`

// Display Names
HomePage.displayName = `HomePage`
HomePageWrapper.displayName = `HomePageWrapper`

export default memo(HomePage)
