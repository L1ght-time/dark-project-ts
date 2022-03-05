import React, { useState } from 'react';
import { Box } from '@mui/material';
import classnames from 'classnames';

import Header from '../components/Header';
import { SideBar } from '../components/SideBar';

import { LayoutProps } from './type';
import { useStyles } from './styles';

export function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();
  const [isSidebar, setSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => setSidebar((prevState) => !prevState);

  return (
    <Box>
      <SideBar isOpen={isSidebar} onToggle={handleToggleSidebar} />
      <Header isSideBar={isSidebar} onToggle={handleToggleSidebar} />
      <Box p={4}>
        <Box className={classnames(classes.mainContentWr, { [classes.contentWithSideBar]: isSidebar })}>{children}</Box>
      </Box>
    </Box>
  );
}
