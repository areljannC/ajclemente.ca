// EXTERNAL IMPORTS
import React, { FunctionComponent, memo } from 'react';
import { Flex, Text } from '@chakra-ui/react';

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
const Blog: FunctionComponent<PropsType> = (props: PropsType) => (
  <Flex width='fit-content' height='100%' margin='auto' justifyContent='center' alignItems='center'>
    <Text textAlign='center'>I currently have no blog posts, yet. Please come back at a later time.</Text>
  </Flex>
);

// Display Name
Blog.displayName = Blog.name;

export default memo(Blog);
