import light from './lightTheme';
import dark from './darkTheme';
import { IThemeKeys } from './types';

const themes: IThemeKeys = {
  light,
  dark,
};

export const getTheme = (theme: string): IThemeKeys[string] => themes[theme];
