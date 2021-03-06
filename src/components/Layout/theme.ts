import { createMuiTheme } from '@material-ui/core/styles';

const rawTheme = {
  palette: {
    background: {
      dark: '#d1d1d1',
      default: 'white',
    },
    primary: {
      main: '#7d89c1',
      contrastText: 'white',
    },
    secondary: {
      main: '#d1d1d1',
      contrastText: 'black',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Baskerville', serif",
    body1: {
      '& h2': {
        textAlign: 'center',
      },
      '& p': {
        textIndent: '2rem',
      },
    },
    h1: {
      fontFamily: "'Baskerville', cursive",
      fontSize: '3rem',
      fontStyle: 'italic',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
    },
  },
};

export default createMuiTheme(rawTheme);
