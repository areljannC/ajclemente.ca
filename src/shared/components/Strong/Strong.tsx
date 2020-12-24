import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Type
type StrongProps = {
  children: ReactNode
}

// Component
const Strong: FC<StrongProps> = ({ children }) => <StrongWrapper>{children}</StrongWrapper>

// Style
const StrongWrapper = styled.strong`
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

// Display Name
Strong.displayName = `Strong`
StrongWrapper.displayName = `StrongWrapper`

export default memo<StrongProps>(Strong)
