import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface HeaderProps {
  isSideBar: boolean;
  setSideBar: (value: boolean) => void;
}
