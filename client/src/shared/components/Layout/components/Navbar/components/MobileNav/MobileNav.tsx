// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  useDisclosure,
  IconButton,
  Icon,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  VStack,
  Link
} from '@chakra-ui/react';
import { RiMenuFill, RiCloseFill } from 'react-icons/ri';

// SHARED IMPORTS
import { NAV_LINKS } from '@shared/constants';

// LOCAL IMPORTS
import { ThemeToggler } from '../';

// Component
const MobileNav: FunctionComponent = () => {
  const router = useRouter();
  const disclosure = useDisclosure();

  return (
    <Fragment>
      <IconButton
        onClick={disclosure.onOpen}
        icon={
          <Icon
            as={RiMenuFill}
            width={{ base: '24px', md: '28px' }}
            height={{ base: '24px', md: '28px' }}
          />
        }
        aria-label='Open Nav Menu'
        display={{ lg: 'none' }}
        backgroundColor='transparent'
        border='none'
      />
      <Drawer isOpen={disclosure.isOpen} onClose={disclosure.onClose} placement='right'>
        <DrawerOverlay />
        <DrawerContent>
          <Flex flexDirection='column' alignItems='flex-start' padding='4'>
            <IconButton
              onClick={disclosure.onClose}
              icon={
                <Icon
                  as={RiCloseFill}
                  width={{ base: '24px', md: '28px' }}
                  height={{ base: '24px', md: '28px' }}
                />
              }
              aria-label='Close Nav Menu'
              width='fit-content'
              marginLeft='auto'
              backgroundColor='transparent'
              border='none'
            />
            <VStack width='100%' alignItems='flex-end' marginY='2' paddingLeft='2'>
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
            </VStack>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

// Display Name
MobileNav.displayName = MobileNav.name;

export default memo(MobileNav);
