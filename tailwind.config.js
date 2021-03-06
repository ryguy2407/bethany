module.exports = {
  purge: [
    './templates/**/*.twig',
    './templates/*.twig',
  ],
  theme: {

    margin: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '-4': '-1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '-8': '-2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '86': '24rem',
      'auto': 'auto'
    },

    boxShadow: {
      md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      inner: 'inset 0 40px 50px 0 rgba(0, 0, 0, 0.07)',
      innerSmall: 'inset 0 10px 25px 0 rgba(0,0,0,.07)',
    },
    height: {
      700: '700px',
      270: '270px',
      full: '100%',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '86': '24rem'
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
      'serif': ['Inria Serif', 'Georgia', 'serif'],
    },
    extend: {
      screens: {
        'xxl': {'raw': '(min-width: 1400px)'},
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
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
  plugins: [
      require('@tailwindcss/typography')
  ],
}
