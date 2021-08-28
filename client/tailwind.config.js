module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        0: '0vh',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        full: '100vh',
      },

      maxWidth: {
        0: '0vw',
        '1/10': '10vw',
        '1/4': '25vw',
        '1/2': '50vw',
        '3/4': '60vw',
        '4/5': '80vw',
        full: '100vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
