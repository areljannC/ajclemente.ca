// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Text } from '@chakra-ui/react';

// Component
const Logo: FunctionComponent = () => (
  <Text fontSize={{ base: '32px', lg: '48px' }} fontFamily='monospace' children='AJ' />
);

// Display Name
Logo.displayName = Logo.name;

export default memo(Logo);
