// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { VStack } from '@chakra-ui/react';

// LOCAL IMPORTS
import { Experience } from './components';

// Types
type PropsType = {
  experiences?: Array<{
    role?: string;
    companyName?: string;
    employmentType?: string;
    location?: string;
    duration?: {
      startDate?: string;
      endDate?: string;
      present?: boolean;
    };
  }>;
};

// Component
const Experiences: FunctionComponent<PropsType> = (props: PropsType) => (
  <VStack
    width='100%'
    height='100%'
    margin='auto'
    spacing='16'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    {props.experiences.map((experience, index: number) => (
      <Experience key={index} experience={experience} />
    ))}
  </VStack>
);

// Display Name
Experiences.displayName = Experiences.name;

export default memo(Experiences);
