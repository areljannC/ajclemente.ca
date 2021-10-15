// SHARED IMPORTS
import { NAVBAR_HEIGHT } from './navbarHeight';
import { FOOTER_HEIGHT } from './footerHeight';

export const MAIN_HEIGHT = {
  base: `calc(100vh - (${NAVBAR_HEIGHT.base}))`,
  md: `calc(100vh - (${NAVBAR_HEIGHT.md}))`,
  lg: `calc(100vh - (${NAVBAR_HEIGHT.lg}))`,
  xl: `calc(100vh - (${NAVBAR_HEIGHT.xl}))`
};
