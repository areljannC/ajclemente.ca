// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

// SHARED IMPORTS
import { useBoxShadowStyle } from '@hooks';
import { PortableText } from '@components';

// Types
type PropsType = { splash?: any };

// Component
const HomeContainer: FunctionComponent<PropsType> = (props: PropsType) => {
  const boxShadowStyle = useBoxShadowStyle();

  return (
    <Flex
      width='fit-content'
      height='100%'
      margin='auto'
      padding={{ base: 4, md: 6, lg: 8 }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxShadow={boxShadowStyle}
    >
      <PortableText content={props.splash} />
    </Flex>
  );
};

// Display Name
HomeContainer.displayName = 'HomeContainer';

export default dynamic(() => Promise.resolve(memo(HomeContainer)), { ssr: false });
