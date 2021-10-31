import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    // typography: {},
    // spacing: {},
    // breakpoints,
    // zIndex,
    // transitions,
    // components,
  },
});

export default responsiveFontSizes(theme);
