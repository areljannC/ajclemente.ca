// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading, Link, Icon, Text, Tag, useColorMode } from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { format } from 'date-fns';

// SHARED IMPORTS
import { ProjectType } from '@types';
import { COLOR_MODE, COLORS } from '@constants';
import { useBoxShadowStyle } from '@hooks';
import { PortableText } from '@components';

// Types
type PropsType = { project: ProjectType };

// Component
const Project: FunctionComponent<PropsType> = (props: PropsType) => {
  const { colorMode } = useColorMode();
  const boxShadowStyle = useBoxShadowStyle();

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
          as='span'
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
          <PortableText content={props.project.description} />
        </Flex>
      )}
    </Flex>
  );
};

// Display Name
Project.displayName = 'Project';

export default memo(Project);
