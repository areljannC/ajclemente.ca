// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Text } from '@chakra-ui/react';

// Component
const Logo: FunctionComponent = () => (
  <Text fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} fontFamily='monospace' children='AJ' />
);

// Display Name
Logo.displayName = Logo.name;

export default memo(Logo);
