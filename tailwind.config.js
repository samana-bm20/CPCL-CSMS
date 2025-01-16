/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    colors: {
        'primary': {
          DEFAULT: '#2E3192',
          light: '#CDD5EF',
          bg: '#e3e9f9'
        },
        'secondary': {
          DEFAULT: '#ED1C24',
          light: '#FCE5E5',
          bg: '#ffeded',
        },
        'contrast': '#333',
        'white': '#fff',
        'red': '#C62828'
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        xxxl: '2560px',
      },
      fontFamily: {
        inter: ['Inter', 'Open Sans'],
        poppins: ['Poppins', 'sans-serif'],
        lobster: ['Lobster', 'cursive'], 
        sans: ['Open Sans', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        customPurple: 'rgba(46, 49, 146, 0.6) 0px 0px 2px 0.5px, rgba(10, 37, 64, 0.35) 0px -1px 2px 0px inset',
        customPink: 'rgba(236, 31, 39, 0.6) 0px 0px 2px 0.5px, rgba(10, 37, 64, 0.35) 0px -1px 2px 0px inset',
        card: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
      },
      height: {
        'calc-dvh-4rem': 'calc(100vh - 4rem)',
        'calc-dvh-7.5rem': 'calc(100vh - 7.5rem)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), 
  ],
}


// sm: min-width: 640px
// md: min-width: 768px
// lg: min-width: 1024px
// xl: min-width: 1280px
// 2xl: min-width: 1536px
