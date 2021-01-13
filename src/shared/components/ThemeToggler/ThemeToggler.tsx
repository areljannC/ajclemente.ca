import React, { FC, useContext, memo } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context'
import { DARK_THEME, LIGHT_THEME } from '../../constants'

// Component
const ThemeToggler: FC = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext)

  let themeName = ''

  switch (currentTheme) {
    case DARK_THEME:
      themeName = 'Dark'
      break
    case LIGHT_THEME:
    default:
      themeName = 'Light'
      break
  }

  return <ThemeTogglerWrapper onClick={toggleTheme}>{themeName}</ThemeTogglerWrapper>
}

// Style
const ThemeTogglerWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: ${({ theme }) => theme.space[2]};
  border: none;
  border-radius: ${({ theme }) => theme.space[1]};
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  cursor: pointer;
`

// Display Name
ThemeToggler.displayName = `ThemeToggler`
ThemeTogglerWrapper.displayName = `ThemeTogglerWrapper`

export default memo(ThemeToggler)
