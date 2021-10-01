import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#43D6D1',
    },
    secondary: {
      main: '#0ABAB5',
    },
    pengu: {
        main: '#66F3ED',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;