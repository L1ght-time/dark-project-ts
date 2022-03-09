import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/styles';

import { getTheme } from '../base';

import { ICustomThemeProviderProps, IProviderData } from './types';

export const CustomThemeContext = createContext({
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (name: string) => {},
});

export function CustomThemeProvider({ children }: ICustomThemeProviderProps): JSX.Element {
  const currentTheme = localStorage.getItem('appTheme') || 'light';

  const [themeName, _setThemeName] = useState<string>(currentTheme);

  const theme = getTheme(themeName);

  const setThemeName = (name: string) => {
    localStorage.setItem('appTheme', name);
    _setThemeName(name);
  };

  const contextValue = useMemo(
    () => ({
      currentTheme: themeName,
      setTheme: setThemeName,
    }),
    [themeName, setThemeName]
  );

  return (
    <CustomThemeContext.Provider value={contextValue as IProviderData}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
