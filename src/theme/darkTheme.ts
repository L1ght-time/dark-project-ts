import { createTheme, responsiveFontSizes } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#212121',
    },
  },
});

export default responsiveFontSizes(theme);
