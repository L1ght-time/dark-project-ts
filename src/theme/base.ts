import light from './lightTheme';
import dark from './darkTheme';
import { ThemeKeys } from './types';

const themes: ThemeKeys = {
  light,
  dark,
};

export const getTheme = (theme: string): ThemeKeys[string] => themes[theme];
