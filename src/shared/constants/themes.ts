import { breakpointWidths } from './'

export const DARK_THEME = 'DARK_THEME'
export const LIGHT_THEME = 'LIGHT_THEME'

const font = `'Roboto', sans-serif`

const fontSizes: ['12px', '14px', '16px', '20px', '24px', '32px', '48px'] = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '48px'
]

const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700
}

const lineHeights = {
  body: 1.6,
  heading: 1.125
}

const space: ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'] = [
  '0px',
  '4px',
  '8px',
  '16px',
  '32px',
  '64px',
  '128px',
  '256px',
  '512px'
]

// Breakpoints are based on this article:
// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
const breakpoints = {
  mobileSmall: `(min-width: ${breakpointWidths.mobileSmall}px)`,
  mobileMedium: `(min-width: ${breakpointWidths.mobileMedium}px)`,
  mobileLarge: `(min-width: ${breakpointWidths.mobileLarge}px)`,
  tablet: `(min-width: ${breakpointWidths.tablet}px)`,
  laptop: `(min-width: ${breakpointWidths.laptop}px)`,
  laptopLarge: `(min-width: ${breakpointWidths.laptopLarge}px)`,
  desktop: `(min-width: ${breakpointWidths.desktop}px)`,
  desktopLarge: `(min-width: ${breakpointWidths.desktopLarge}px)`
}

const baseTheme = {
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  breakpoints
}

export const darkTheme = {
  ...baseTheme,
  colors: {
    white: '#fff',
    black: '#060606',
    text: '#fff',
    background: '#060606',
    primary: '#3cf',
    secondary: '#e0f',
    muted: '#191919',
    highlight: '#29112c',
    gray: '#999',
    purple: '#c0f'
  }
}

export const lightTheme = {
  ...baseTheme,
  colors: {
    white: '#fff',
    black: '#060606',
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    highlight: '#29112c',
    gray: '#999',
    purple: '#c0f'
  }
}
