/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./lib/**/*.{js,ts,jsx,tsx}', './lib/**/**/*.{js,ts,jsx,tsx}'],
  presets: [require('@troychaplin79/idc-tailwind-theme')],
  theme: {
    extend: {
      screens: {
        '4xl': '896px',
      },
    },
  },
};
