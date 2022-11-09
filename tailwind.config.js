/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'faq.html', 'terms.html', 'login.html', 'register.html'],
  theme: {
    extend: {
      fontFamily: {
        Ibm: ['IBM Plex Mono', 'sans-serif'],
        Comfortaa: ['Comfortaa', 'sans-serif'],
      },
      screens: {
        xl: '1024px',
      },
    },
  },
  plugins: [],
};
