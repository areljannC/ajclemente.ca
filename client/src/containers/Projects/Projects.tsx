// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { VStack } from '@chakra-ui/react';

// LOCAL IMPORTS
import { Project } from './components';

// Types
type PropsType = {
  projects?: Array<{
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
  }>;
};

// Component
const Projects: FunctionComponent<PropsType> = (props: PropsType) => (
  <VStack
    width='100%'
    height='100%'
    margin='auto'
    spacing='8'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    {props.projects.map((project, index: number) => (
      <Project key={index} project={project} />
    ))}
  </VStack>
);

// Display Name
Projects.displayName = Projects.name;

export default memo(Projects);
