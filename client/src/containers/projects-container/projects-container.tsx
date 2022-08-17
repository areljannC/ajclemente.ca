// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import dynamic from 'next/dynamic';
import { VStack } from '@chakra-ui/react';

// SHARED IMPORTS
import { ProjectType } from '@types';

// LOCAL IMPORTS
import { Project } from './components';

// Types
type PropsType = { projects?: Array<ProjectType> };

// Component
const ProjectsContainer: FunctionComponent<PropsType> = (props: PropsType) => (
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
ProjectsContainer.displayName = 'ProjectsContainer';

export default dynamic(() => Promise.resolve(memo(ProjectsContainer)), { ssr: false });
