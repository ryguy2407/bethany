module.exports = {
  purge: [],
  theme: {
    height: {
      700: '700px',
      270: '270px',
      full: '100%'
    },
    colors: {
      white: '#FFFFFF',
      textPrimary: '#12284B',
      calloutBg: '#F5DEDA',
      'navy': {
        100: '#E7E8EB',
        200: '#C2C6CD',
        300: '#9DA4AF',
        400: '#545F74',
        500: '#0A1B38',
        600: '#091832',
        700: '#061022',
        800: '#050C19',
        900: '#030811',
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
      }
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
}
