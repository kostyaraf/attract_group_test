import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  accent: '#1cb8ff',
  black: '#33363e',
  gray: '#d6d9e1',
  light: '#ffffff',
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
      light: colors.light,
      primary: colors.accent,
      secondary: colors.gray,
    },
    background: {
      light: colors.light,
    },
  },
  typography: {
    fontFamily: 'Raleway',
    fontSize: 14,
    body2: {
      fontFamily: 'Montserrat',
      fontSize: '0.8rem',
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '1.2rem',
      fontWeight: 800,
      marginBottom: 16,
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.4',
      marginBottom: 16,
    },
  },
  slider: {
    thumb: {
      color: 'red',
    },
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
    MuiSlider: {
      root: {
        height: 4,
      },
      track: {
        height: 4,
      },
      rail: {
        height: 4,
        color: colors.gray,
      },
      thumb: {
        backgroundColor: colors.light,
        border: '3px solid currentColor',
        height: 16,
        marginLeft: -9,
        marginTop: -6,
        width: 16,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        height: 35,
      },
      contained: {
        boxShadow: 'unset',
      },
      label: {
        color: colors.light,
      },
    },
    Mui: {
      focusVisible: {
        backgroundColor: colors.light,
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        backgroundColor: colors.light,
      },
    },
  },
})

export default theme
