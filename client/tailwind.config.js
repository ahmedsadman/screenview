module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '0': '0vh',
       '1/4': '25vh',
       '1/2': '50vh',
       '3/4': '75vh',
       'full': '100vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


