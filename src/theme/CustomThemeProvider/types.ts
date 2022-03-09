import { ReactNode } from 'react';

interface IContextValueData {
  currentTheme: string;
  setTheme: (name: string) => void;
}

export interface IProviderData extends IContextValueData {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [key: string]: string | Function;
}

export interface ICustomThemeProviderProps {
  children: ReactNode;
}
