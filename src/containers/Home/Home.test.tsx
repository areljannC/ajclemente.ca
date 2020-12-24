import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'
import { ThemeContextProvider } from '../../shared/context'

describe('<Home />', () => {
  test(`should render a <div>`, () => {
    const { container } = render(
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    )
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  test(`should render "Hi, I'm AJ Clemente! 👋"`, () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    )
    expect(getByText(`Hi, I'm AJ Clemente! 👋`)).toBeInTheDocument()
  })
})
