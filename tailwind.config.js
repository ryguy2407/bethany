module.exports = {
  purge: [
    './templates/**/*.twig',
    './templates/*.twig',
  ],
  theme: {
    height: {
      700: '700px',
      270: '270px',
      full: '100%',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
    colors: {
      white: '#FFFFFF',
      textPrimary: '#12284B',
      calloutBg: '#F5DEDA',
      'navy': {
        100: '#E7EAED',
        200: '#C4C9D2',
        300: '#A0A9B7',
        400: '#596981',
        500: '#12284B',
        600: '#102444',
        700: '#0B182D',
        800: '#081222',
        900: '#050C17',
      },
      'grey': {
        100: '#F7F7F7',
        200: '#ECECEC',
        300: '#E0E0E0',
        400: '#C8C8C8',
        500: '#B1B1B1',
        600: '#9F9F9F',
        700: '#6A6A6A',
        800: '#505050',
        900: '#353535',
      },
      'pink': {
        100: '#F7EFF3',
        200: '#EAD8E2',
        300: '#DDC1D0',
        400: '#C492AC',
        500: '#AA6389',
        600: '#99597B',
        700: '#663B52',
        800: '#4D2D3E',
        900: '#331E29',
      },
      'teal': {
        100: '#EBF9F7',
        200: '#CEEFEB',
        300: '#B1E5DE',
        400: '#76D2C6',
        500: '#3BBEAD',
        600: '#35AB9C',
        700: '#237268',
        800: '#1B564E',
        900: '#123934',
      },
      'orange': {
        100: '#FFF5F0',
        200: '#FFE7DA',
        300: '#FFD8C4',
        400: '#FFBA98',
        500: '#FF9D6C',
        600: '#E68D61',
        700: '#995E41',
        800: '#734731',
        900: '#4D2F20',
      },
    },
    fontFamily: {
      'sans': ['Red Hat Display', 'Arial', 'sans-serif'],
      'serif': ['Operetta', 'Georgia', 'serif'],
    },
    extend: {
      screens: {
        'xxl': {'raw': '(min-width: 1500px)'},
      },
      translate: {
        '1/4': '25%',
        '-1/4': '-25%'
      }
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
}
