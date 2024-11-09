const { default: daisyui } = require('daisyui');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ['light']
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
