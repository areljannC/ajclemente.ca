// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading, Text, Link, Icon } from '@chakra-ui/react';
import ReactPortableText from 'react-portable-text';
import { BiLinkExternal } from 'react-icons/bi';

// Types
type PropsType = { content?: any };

// Component
const PortableText: FunctionComponent<PropsType> = (props: PropsType) => (
  <ReactPortableText
    content={props.content}
    serializers={{
      h1: (props: any) => (
        <Heading
          as='h1'
          marginBottom={4}
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          {...props}
        />
      ),
      normal: (props: any) => (
        <Text as='p' marginBottom={2} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} {...props} />
      ),
      link: (props: any) => (
        <Link
          as='a'
          marginBottom={2}
          href={props.href}
          isExternal={true}
          children={
            <Flex
              width='fit-content'
              height='fit-content'
              display='inline-flex'
              alignItems='center'
            >
              <Text
                as='span'
                marginRight={1}
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                fontWeight='bold'
                children={props.children}
              />
              <Icon as={BiLinkExternal} />
            </Flex>
          }
        />
      )
    }}
  />
);

// Display Name
PortableText.displayName = 'PortableText';

export default memo(PortableText);
