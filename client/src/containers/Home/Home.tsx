// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading, Text, Link, Icon } from '@chakra-ui/react';
import PortableText from 'react-portable-text';
import { BiLinkExternal } from 'react-icons/bi';


// SHARED IMPORTS
import { useBoxShadowStyle } from '@shared/hooks';

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
      padding={{ base: 4, md: 6, lg: 8 }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxShadow={boxShadowStyle}
    >
      <PortableText
        className=''
        content={props.splash}
        serializers={{
          h1: (props) => (
            <Heading
              as='h1'
              marginBottom={4}
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              {...props}
            />
          ),
          normal: (props) => (
            <Text marginBottom={2} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} {...props} />
          ),
          link: (props) => (
            <Link
              href={props.href}
              isExternal={true}
              children={
                <Flex width='fit-content' height='fit-content' display='inline-flex' alignItems='center'>
                  <Heading
                    as='h2'
                    marginRight={1}
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    children={props.children}
                  />
                  <Icon as={BiLinkExternal} />
                </Flex>
              }
            />
          )
        }}
      />
    </Flex>
  );
};

// Display Name
Home.displayName = Home.name;

export default memo(Home);
