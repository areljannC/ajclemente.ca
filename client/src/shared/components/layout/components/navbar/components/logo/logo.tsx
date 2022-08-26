// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Text } from '@chakra-ui/react';

// Component
const Logo: FunctionComponent = () => (
  <Text
    as='span'
    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
    fontFamily='monospace'
    children='AJ'
  />
);

// Display Name
Logo.displayName = 'Logo';

export default memo(Logo);
