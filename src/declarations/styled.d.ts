import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string
      background: string
      primary: string
      secondary: string
      highlight: string
      purple: string
      muted: string
      gray: string
    }

    font: string
  }
}
