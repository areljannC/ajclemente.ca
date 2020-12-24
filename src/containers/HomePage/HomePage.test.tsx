import React from 'react'
import { render } from '@testing-library/react'
import HomePage from './HomePage'
import { ThemeContextProvider } from '../../shared/context'

describe('<HomePage />', () => {
  test(`should render a <div>`, () => {
    const { container } = render(
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
    )
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  test(`should render 'AJ Clemente'`, () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
    )
    expect(getByText('AJ Clemente')).toBeInTheDocument()
  })
})
