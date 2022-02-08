import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/styles';

import { getTheme } from '../base';

import { CustomThemeProviderProps, ProviderData } from './types';

export const CustomThemeContext = createContext({
  currentTheme: 'light',
  setTheme: (name: string) => {},
});

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
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

  return (
    <CustomThemeContext.Provider value={contextValue as ProviderData}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
