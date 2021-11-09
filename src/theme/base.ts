import light from './lightTheme';
import dark from './darkTheme';
import ThemeKeys from './types';

const themes: ThemeKeys = {
  light: light,
  dark: dark,
};

const getTheme = (theme: string) => themes[theme];

export default getTheme;
