// EXTERNAL IMPORTS
import React, { ReactNode, FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';

// SHARED IMPORTS
import { MAIN_HEIGHT, PAGE_PADDING_X } from '@constants';

// Types
type PropsType = { children?: ReactNode };

// Component
const Main: FunctionComponent<PropsType> = (props: PropsType) => (
  <Flex
    as='main'
    width='100%'
    height='fit-content'
    minHeight={MAIN_HEIGHT}
    paddingX={PAGE_PADDING_X}
    flexDirection='column'
    children={props.children}
  />
);

// Display Name
Main.displayName = 'Main';

export default memo(Main);
