// EXTERNAL IMPORTS
import React, { ReactNode, FunctionComponent, Fragment, memo } from 'react';

// LOCAL IMPORTS
import { Navbar, Main, Footer } from './components';

// Types
type PropsType = { children?: ReactNode };

// Component
const Layout: FunctionComponent<PropsType> = (props: PropsType) => (
  <Fragment>
    <Navbar />
    <Main children={props.children} />
    <Footer />
  </Fragment>
);

// Display Name
Layout.displayName = Layout.name;

export default memo(Layout);
