// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { useColorMode, IconButton, Icon } from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

// SHARED IMPORTS
import { COLOR_MODE } from '@shared/constants';

// Component
const ThemeToggler: FunctionComponent = () => {
  const theme = useColorMode();

  return (
    <IconButton
      onClick={theme.toggleColorMode}
      icon={
        <Icon
          as={theme.colorMode === COLOR_MODE.LIGHT ? MdDarkMode : MdLightMode}
          width={{ base: '24px', md: '28px' }}
          height={{ base: '24px', md: '28px' }}
        />
      }
      aria-label='Open Nav Menu'
      backgroundColor='transparent'
      border='none'
    />
  );
};

// Display Name
ThemeToggler.displayName = ThemeToggler.name;

export default memo(ThemeToggler);
