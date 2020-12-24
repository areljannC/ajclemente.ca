import React, { FC, memo } from 'react'
import { Home } from '../containers'

// Component
const Index: FC = () => <Home />

// Display Names
Index.displayName = `Index`

export default memo(Index)