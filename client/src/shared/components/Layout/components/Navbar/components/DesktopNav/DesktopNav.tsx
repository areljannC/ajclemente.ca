// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { HStack, Link, Text } from '@chakra-ui/react';

// SHARED IMPORTS
import { NAV_LINKS } from '@shared/constants';

// LOCAL IMPORTS
import { ThemeToggler } from '../';

// Component
const DesktopNav: FunctionComponent = () => {
  const router = useRouter();

  return (
    <HStack spacing={8} display={{ base: 'none', lg: 'flex' }}>
      {NAV_LINKS.map((navLink) => (
        <NextLink key={navLink.name} href={navLink.route} passHref>
          <Link _hover={{ textDecoration: 'none' }}>
            <Text
              color={navLink.route === router.pathname ? 'gray' : 'inherit'}
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              fontFamily='body'
              textTransform='uppercase'
              children={navLink.title}
            />
          </Link>
        </NextLink>
      ))}
      <ThemeToggler />
    </HStack>
  );
};

// Display Name
DesktopNav.displayName = DesktopNav.name;

export default memo(DesktopNav);
