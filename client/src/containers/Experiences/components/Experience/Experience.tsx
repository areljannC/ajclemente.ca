// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import PortableText from 'react-portable-text';
import { format } from 'date-fns';

// SHARED IMPORTS
import { useBoxShadowStyle } from '@shared/hooks';

// Types
type PropsType = {
  experience: {
    role?: string;
    companyName?: string;
    employmentType?: string;
    location?: string;
    description?: any;
    duration?: {
      startDate?: string;
      endDate?: string;
      present?: boolean;
    };
  };
};

// Component
const Experience: FunctionComponent<PropsType> = (props: PropsType) => {
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
        <Heading
          as='h2'
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          children={props.experience.role}
        />
        <Text
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          children={props.experience.companyName}
        />
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
          children={props.experience.employmentType}
        />
        <Text
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          children={`${format(new Date(props.experience.duration.startDate), 'MMM. d y')} - ${
            props.experience.duration.present
              ? 'Present'
              : format(new Date(props.experience.duration.endDate), 'MMM. d y')
          }`}
        />
      </Flex>
      <Flex
        width='100%'
        height='fit-content'
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        alignItems='center'
      >
        <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} children={props.experience.location} />
      </Flex>
      {props.experience.description && (
        <Flex
          width='100%'
          height='fit-content'
          marginTop={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <PortableText
            className=''
            content={props.experience.description}
            serializers={{
              normal: (props) => <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}  marginBottom='1' {...props} />
            }}
          />
        </Flex>
      )}
    </Flex>
  );
};

// Display Name
Experience.displayName = Experience.name;

export default memo(Experience);
