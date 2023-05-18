/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'main-color': '#303972',
        'main-bg': '#4D44B5',
        'button-cl': '#344054',
        'main-light-bg': '#E5E5E5'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
