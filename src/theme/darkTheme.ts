import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccc',
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
