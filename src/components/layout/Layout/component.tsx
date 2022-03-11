import { Box } from '@mui/material';
import classnames from 'classnames';
import { Header } from 'components/layout/components/Header';
import { SideBar } from 'components/layout/components/SideBar';
import { useState } from 'react';

import { ILayoutProps } from './types';
import { useStyles } from './styles';

export function Layout({ children }: ILayoutProps): JSX.Element {
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
