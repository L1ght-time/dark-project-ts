import React, { useState } from 'react';
import { Box } from '@mui/material';
import classnames from 'classnames';

import Header from '../components/Header';
import { SideBar } from '../components/SideBar';

import { LayoutProps } from './type';
import { useStyles } from './styles';

export function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();
  const [isSideBar, setSideBar] = useState<boolean>(false);

  return (
    <Box>
      <SideBar isOpen={isSideBar} setOpen={setSideBar} />
      <Header isSideBar={isSideBar} setSideBar={setSideBar} />
      <Box p={4}>
        <Box className={classnames(classes.mainContentWr, { [classes.contentWithSideBar]: isSideBar })}>{children}</Box>
      </Box>
    </Box>
  );
}
