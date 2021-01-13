import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Types
type ContainerProps = {
  children: ReactNode
  margin?: string
  padding?: string
}

type ContainerWrapperProps = {
  margin?: string
  padding?: string
}

// Component
const Container: FC<ContainerProps> = ({ children, margin = 'auto', padding = '0' }) => (
  <ContainerWrapper margin={margin} padding={padding}>
    {children}
  </ContainerWrapper>
)

// Style
const ContainerWrapper = styled.div<ContainerWrapperProps>`
  height: 100%;
  width: 265px;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 500px;
  }

  @media ${({ theme }) => theme.breakpoints.laptopLarge} {
    width: 600px;
  }
`

// Display Name
Container.displayName = `Container`
ContainerWrapper.displayName = `ContainerWrapper`

export default memo<ContainerProps>(Container)
