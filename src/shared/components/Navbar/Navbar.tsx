import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Container, Flex, ThemeToggler } from '../'

// Component
const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <Container>
        <Flex justifyContent='flex-end'>
          <ThemeToggler />
        </Flex>
      </Container>
    </NavbarWrapper>
  )
}

// Style
const NavbarWrapper = styled.header`
  width: 100%;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.background};
`

// Display Name
Navbar.displayName = `Navbar`
NavbarWrapper.displayName = `NavbarWrapper`

export default memo(Navbar)
