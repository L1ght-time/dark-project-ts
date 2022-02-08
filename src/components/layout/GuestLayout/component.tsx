import React from 'react';

import { GuestLayoutProps } from './types';

export function GuestLayout({ children }: GuestLayoutProps): JSX.Element {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
