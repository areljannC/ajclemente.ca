// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';

// SHARED IMPORTS
import { NAVBAR_HEIGHT, PAGE_PADDING_X } from '@constants';

// LOCAL IMPORTS
import { Logo, DesktopNav, MobileNav } from './components';

// Component
const Navbar: FunctionComponent = () => (
  <Flex
    as='nav'
    width='100%'
    height={NAVBAR_HEIGHT}
    paddingX={PAGE_PADDING_X}
    position='sticky'
    justifyContent='space-between'
    alignItems='center'
    zIndex={10}
  >
    <Logo />
    <DesktopNav />
    <MobileNav />
  </Flex>
);

// Display Name
Navbar.displayName = 'Navbar';

export default memo(Navbar);
