// EXTERNAL IMPORTS
import { useColorMode } from '@chakra-ui/react';

// SHARED IMPORTS
import { COLOR_MODE, COLORS } from '@constants';

// Hook
const useBoxShadowStyle = (): string => {
  const { colorMode } = useColorMode();
  return `-2px 2px 0px 0px ${colorMode === COLOR_MODE.DARK ? COLORS.WHITE : COLORS.BLACK}`;
};

export default useBoxShadowStyle;
