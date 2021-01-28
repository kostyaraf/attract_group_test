import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  gray: '#d6d9e1',
  light: '#ffffff',
  black: '#33363e',
  accent: '#1cb8ff',
}

const theme = createMuiTheme({
  palette: {
    default: {
      main: colors.black,
    },
    primary: {
      main: colors.accent,
    },
    secondary: {
      main: colors.gray,
    },
    text: {
      default: colors.black,
      primary: colors.accent,
      secondary: colors.gray,
      light: colors.light,
    },
  },
  typography: {
    fontFamily: 'Raleway',
    fontSize: 14,
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      marginBottom: 24,
    }
  },
  select: {
    color: 'red',
    fontWeight: 800,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1226,
      xl: 1920,
    },
  },
  overrides: {
    select: {
      color: 'red',
      fontWeight: 800,
    },
  //   body1: {
  //     color: 'red !important',
  //   },
  //   body2: {
  //     color: 'red !important',
  //   },
  //   h5: {
  //     color: 'red !important',
  //   },
  //   Typography: {
  //     color: 'red !important',
  //   }, 
  //   typography: {
  //     color: 'red !important',
  //   }, 
  }
})

export default theme
