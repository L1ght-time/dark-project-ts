import React from 'react';

import { LayoutProps } from './type';

export function Layout({ children }: LayoutProps): JSX.Element {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
