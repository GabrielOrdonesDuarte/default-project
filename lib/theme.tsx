import { createMuiTheme } from '@material-ui/core/styles';
import {} from './util/interfaces';

const theme = createMuiTheme({
  overrides: {
    // resolucao do bug de overflow no componente 'Grid'
    // MuiGrid: {
    //   container: {
    //     width: '100% !important',
    //     margin: '0 !important',
    //   },
    // },
    //
    MuiTypography: {
      h1: {
        color: 'pink',
      },
      h2: {
        color: 'purple',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 762,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    custom: {
      corLaranja: '#FFA500',
      corMarrom: '#DEB887',
    },
    text: {
      primary: 'rgb(45, 55, 72)',
      secondary: 'rgb(100, 110, 115)',
    },
  },
  typography: {
    fontSize: 15,
  },
  spacing: 4,
});

export default theme;
