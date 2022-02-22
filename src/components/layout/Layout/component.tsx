import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import classnames from 'classnames';

import Header from '../../Header';
import { SideBar } from '../../SideBar';

import { LayoutProps } from './type';
import { useStyles } from './styles';

export function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();
  // eslint-disable-next-line react/jsx-no-useless-fragment

  const [isSideBar, setSideBar] = useState<boolean>(false);

  return (
    <Box>
      <SideBar isOpen={isSideBar} setOpen={setSideBar} />
      <Header isSideBar={isSideBar} setSideBar={setSideBar} />
      <Grid container spacing={4}>
        <Grid item className={classnames(classes.mainContentWr, { [classes.contentWithSideBar]: isSideBar })}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
