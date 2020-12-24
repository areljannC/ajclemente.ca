import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Type
type ParagraphProps = {
  children: ReactNode
}

// Component
const Paragraph: FC<ParagraphProps> = ({ children }) => (
  <ParagraphWrapper>{children}</ParagraphWrapper>
)

// Style
const ParagraphWrapper = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.lineHeights.body};
  margin-bottom: ${({ theme }) => theme.space[3]};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[3]};
  }

  @media ${({ theme }) => theme.breakpoints.laptopLarge} {
    font-size: ${({ theme }) => theme.fontSizes[4]};
  }
`

// Display Name
Paragraph.displayName = `Paragraph`
ParagraphWrapper.displayName = `ParagraphWrapper`

export default memo<ParagraphProps>(Paragraph)
