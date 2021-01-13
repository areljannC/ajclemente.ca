import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Type
type LinkProps = {
  children: ReactNode
  href?: string
  target?: string
  color?: 'link' | 'nonLink'
}

type LinkWrapperProps = {
  href?: string
  target?: string
}

// Component
const Link: FC<LinkProps> = ({ children, href, target, color = 'link' }) => (
  <LinkWrapper href={href} target={target} color={color}>
    {children}
  </LinkWrapper>
)

// Style
const LinkWrapper = styled.a<LinkWrapperProps>`
  color: ${({ color, theme }) => (color === 'link' ? theme.colors.primary : theme.colors.text)};
  text-decoration: none;
`

// Display Name
Link.displayName = `Link`
LinkWrapper.displayName = `LinkWrapper`

export default memo<LinkProps>(Link)
