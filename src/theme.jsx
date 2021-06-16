import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8ba86484',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A100,
      dark:red.A700,
    },
    background: {
      default: '#fff',
    },
    info:{
      main:'#fff',
    },
    /* neatural:{
      main:" "
    } */
  },
});

export default theme;
