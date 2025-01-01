
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./lib/**/*.{js,ts,jsx,tsx}', './lib/**/**/*.{js,ts,jsx,tsx}'],
  presets: [require('@troychaplin79/idc-tailwind-theme')],
};
