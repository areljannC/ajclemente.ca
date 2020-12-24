import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Type
type LinkProps = {
  children: ReactNode
  href?: string
  target?: string
}

type LinkWrapperProps = {
  href?: string
  target?: string
}

// Component
const Link: FC<LinkProps> = ({ children, href, target }) => (
  <LinkWrapper href={href} target={target}>
    {children}
  </LinkWrapper>
)

// Style
const LinkWrapper = styled.a<LinkWrapperProps>`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`

// Display Name
Link.displayName = `Link`
LinkWrapper.displayName = `LinkWrapper`

export default memo<LinkProps>(Link)
