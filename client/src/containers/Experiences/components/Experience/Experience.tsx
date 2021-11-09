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
      padding='8'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      boxShadow={boxShadowStyle}
    >
      <Flex width='100%' height='fit-content' justifyContent='space-between' alignItems='center'>
        <Heading as='h2' children={props.experience.role} />
        <Heading as='h3' fontSize='24px' children={props.experience.companyName} />
      </Flex>
      <Flex width='100%' height='fit-content' display={{ base: 'none', lg: 'flex' }} justifyContent='space-between' alignItems='center'>
        <Text fontSize='24px' children={props.experience.employmentType} />
        <Text
          fontSize='24px'
          children={`${format(new Date(props.experience.duration.startDate), 'MMM. d y')} - ${
            props.experience.duration.present
              ? 'Present'
              : format(new Date(props.experience.duration.endDate), 'MMM. d y')
          }`}
        />
      </Flex>
      <Flex width='100%' height='fit-content' display={{ base: 'none', lg: 'flex' }} justifyContent='flex-end' alignItems='center'>
        <Text fontSize='24px' children={props.experience.location} />
      </Flex>
      <Flex width='100%' height='fit-content' justifyContent='space-between' alignItems='center'>
        {props.experience.description && (
          <PortableText
            className=''
            content={props.experience.description}
            serializers={{
              normal: (props) => <Text fontSize='24px' marginBottom='1' {...props} />
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};

// Display Name
Experience.displayName = Experience.name;

export default memo(Experience);
