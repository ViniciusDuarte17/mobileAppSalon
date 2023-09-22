import { extendTheme } from 'native-base'

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    blue: {
      500: '#C5E3ED',
      800: '#198EB6'
    },
    white: '#fff',
    black: '#000'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 18,
    lg: 20,
    xl: 26
  }
})