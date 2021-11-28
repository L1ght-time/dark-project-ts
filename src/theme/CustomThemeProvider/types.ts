import { ReactNode } from 'react';

interface ContextValueData {
  currentTheme: string;
  setTheme: (name: string) => {};
}

export interface ProviderData extends ContextValueData {
  [key: string]: string | Function;
}

export interface CustomThemeProviderProps {
  children: ReactNode;
}
