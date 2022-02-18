// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading, Link, Icon, Text, Tag, useColorMode } from '@chakra-ui/react';
import PortableText from 'react-portable-text';
import { BiLinkExternal } from 'react-icons/bi';
import { format } from 'date-fns';

// SHARED IMPORTS
import { useBoxShadowStyle } from '@shared/hooks';
import { COLOR_MODE, COLORS } from '@shared/constants';

// Types
type PropsType = {
  project: {
    title?: string;
    description?: any;
    link?: string;
    tags?: Array<string>;
    duration?: {
      startDate?: string;
      endDate?: string;
      present?: boolean;
    };
    coverImage?: string;
  };
};

// Component
const Project: FunctionComponent<PropsType> = (props: PropsType) => {
  const boxShadowStyle = useBoxShadowStyle();
  const { colorMode } = useColorMode();

  return (
    <Flex
      width='100%'
      height='100%'
      margin='auto'
      padding={{ base: '16px', lg: '32px' }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxShadow={boxShadowStyle}
    >
      <Flex
        width='100%'
        height='fit-content'
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <Link
          href={props.project.link}
          isExternal={true}
          children={
            <Flex width='fit-content' height='fit-content' alignItems='center'>
              <Heading
                as='h2'
                marginRight={1}
                fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                children={props.project.title}
              />
              <Icon as={BiLinkExternal} />
            </Flex>
          }
        />
        <Flex width='fit-content' height='fit-content' flexWrap='wrap'>
          {props.project.tags.map((tag, index: number) => (
            <Tag
              key={index}
              marginY={{ base: 2, md: 0 }}
              marginRight={2}
              size='sm'
              backgroundColor={colorMode === COLOR_MODE.DARK ? COLORS.WHITE : COLORS.BLACK}
              color={colorMode === COLOR_MODE.DARK ? COLORS.BLACK : COLORS.WHITE}
              children={tag}
            />
          ))}
        </Flex>
      </Flex>
      <Flex
        width='100%'
        height='fit-content'
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <Text
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          children={`${format(new Date(props.project.duration.startDate), 'MMM d, y')} - ${
            props.project.duration.present
              ? 'Present'
              : format(new Date(props.project.duration.endDate), 'MMM d, y')
          }`}
        />
      </Flex>
      {props.project.description && (
        <Flex
          width='100%'
          height='fit-content'
          marginTop={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <PortableText
            className=''
            content={props.project.description}
            serializers={{
              normal: (props) => (
                <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} marginBottom='1' {...props} />
              )
            }}
          />
        </Flex>
      )}
    </Flex>
  );
};

// Display Name
Project.displayName = Project.name;

export default memo(Project);
