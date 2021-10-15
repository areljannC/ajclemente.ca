// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

// SHARED IMPORTS
import { FOOTER_HEIGHT, PAGE_PADDING_X } from '@shared/constants';

// Component
const Footer: FunctionComponent = () => (
  <Flex
    as='footer'
    width='100%'
    height={FOOTER_HEIGHT}
    paddingX={PAGE_PADDING_X}
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    zIndex={10}
  >
    <Text fontSize='12px' fontFamily='body' textAlign='center'>
      Made using{' '}
      <Link href='https://nextjs.org/' isExternal>
        Next.js
      </Link>
      ,{' '}
      <Link href='https://chakra-ui.com/' isExternal>
        Chakra UI
      </Link>{' '}
      and{' '}
      <Link href='https://www.sanity.io/' isExternal>
        Sanity.io
      </Link>
      .
    </Text>
    <Text marginBottom={{ base: '2', lg: '4' }}  fontSize='12px' fontFamily='body' textAlign='center'>
      Hosted on{' '}
      <Link href='https://vercel.com/' isExternal>
        Vercel
      </Link>
      .
    </Text>
    <Text fontSize='12px' fontFamily='body' textAlign='center'>© 2021–present AJ Clemente.</Text>
  </Flex>
);

// Display Name
Footer.displayName = Footer.name;

export default memo(Footer);
