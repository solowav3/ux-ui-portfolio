module.exports = {
  purge: {
    mode: 'all',
    content: [
      './*.html',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Metro', 'sans-serif'],
      // heading: ['Bebas Neue Bold', 'sans-serif'],
    },

    fontSize: {

      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',

      '1': '1rem',
      '1.125': '1.125rem',
      '1.25': '1.25rem',
      '1.5': '1.5rem',
      '1.875': '1.875rem',
      '2.25': '2.25rem',
      '2.5': '2.5rem',
      '2.75': '2.75rem',
      '3': '3rem',
      '3.25': '3.25rem',
      '4': '4rem',
      '4.25': '4.25rem',
      '5': '5rem',
      '6': '6rem',
      '7': '7rem',
      
      },
    extend: {
      colors: {
        'sirius-grey': '#fafafa',
        'dark-choco': '#363636',

      },
      opacity:{
        '5': '0.05',
        '10': '0.1',
      }
    }
  },
  variants: {
  },
  plugins: [],
}