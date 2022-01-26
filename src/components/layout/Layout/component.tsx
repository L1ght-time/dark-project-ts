import React, { FunctionComponent, Fragment } from 'react';

import { LayoutProps } from './type';

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Fragment>{children}</Fragment>
);
