// EXTERNAL IMPORTS
import { FunctionComponent, useEffect, memo } from 'react';
import { useRouter } from 'next/router';

// Component
const PageNotFound: FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);

  return null;
};

// Display Name
PageNotFound.displayName = 'PageNotFound';

export default memo(PageNotFound);
