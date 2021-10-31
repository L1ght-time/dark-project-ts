import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
  },
});

export default responsiveFontSizes(theme);
