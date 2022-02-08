import React from 'react';

import { GuestLayoutProps } from './types';

export function GuestLayout({ children }: GuestLayoutProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
