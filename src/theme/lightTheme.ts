import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    white: {
      main: '#fff',
    },
  },

  components: {},
});

export default responsiveFontSizes(theme);
