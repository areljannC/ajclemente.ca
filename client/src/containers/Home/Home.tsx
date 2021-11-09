// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import PortableText from 'react-portable-text';

// SHARED IMPORTS
import { useBoxShadowStyle } from '@shared/hooks'

// Types
type PropsType = { splash?: any };

// Component
const Home: FunctionComponent<PropsType> = (props: PropsType) => {
  const boxShadowStyle = useBoxShadowStyle();

  return (
    <Flex
      width='fit-content'
      height='100%'
      margin='auto'
      padding='8'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxShadow={boxShadowStyle}
    >
      <PortableText
        className=''
        content={props.splash}
        serializers={{
          h1: (props) => <Heading as='h1' marginBottom='8' {...props} />,
          normal: (props) => <Text marginBottom='1' {...props} />
        }}
      />
    </Flex>
  );
};

// Display Name
Home.displayName = Home.name;

export default memo(Home);
