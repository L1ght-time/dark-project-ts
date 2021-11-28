import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#212121',
    },
    white: {
      main: '#fff',
    },
  },

  components: {},
});

export default responsiveFontSizes(theme);
