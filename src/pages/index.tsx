import React, { FC, memo } from 'react'
import { HomePage } from '../containers'

// Component
const Index: FC = () => <HomePage />

// Display Names
Index.displayName = `Index`

export default memo(Index)