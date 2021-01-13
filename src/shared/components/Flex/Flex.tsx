import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Types
type FlexPropsType = {
  children?: ReactNode
  width?: string
  height?: string
  flexDirection?: string
  flexWrap?: string
  justifyContent?: string
  alignItems?: string
}

type FlexWrapperPropsType = {
  width?: string
  height?: string
  flexDirection?: string
  flexWrap?: string
  justifyContent?: string
  alignItems?: string
}

// Component
const Flex: FC<FlexPropsType> = ({
  children,
  width = '100%',
  height = '100%',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'center',
  alignItems = 'center'
}) => (
  <FlexWrapper
    width={width}
    height={height}
    flexDirection={flexDirection}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </FlexWrapper>
)

// Styles
const FlexWrapper = styled.div<FlexWrapperPropsType>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`

// Display Names
Flex.displayName = `Flex`
FlexWrapper.displayName = `FlexWrapper`

export default memo<FlexPropsType>(Flex)