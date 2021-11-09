import React, { FC, createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material';

import getTheme from '../base';
import CustomThemeProviderProps from './types';

interface ContextValueData {
  currentTheme: string;
  setTheme: (name: string) => {};
}

interface ProviderData extends ContextValueData {
  [key: string]: string | Function;
}

export const CustomThemeContext = createContext({
  currentTheme: 'light',
  setTheme: (name: string) => {},
});

export const CustomThemeProvider: FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const currentTheme = localStorage.getItem('appTheme') || 'light';

  const [themeName, _setThemeName] = useState<string>(currentTheme);

  const theme = getTheme(themeName);

  const setThemeName = (name: string) => {
    localStorage.setItem('appTheme', name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  console.log('theme', theme);

  return (
    <CustomThemeContext.Provider value={contextValue as ProviderData}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
