import React from 'react';
import { Box } from '@mui/material';

import Header from '../../Header';

import { LayoutProps } from './type';
import { useStyles } from './styles';

export function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <Box>
      <Header />
      <Box className={classes.mainContentWr}>{children}</Box>
    </Box>
  );
}
