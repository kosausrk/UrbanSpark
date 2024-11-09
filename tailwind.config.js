const { default: daisyui } = require('daisyui');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ['light']
  },
  theme: {
    extend: {
      animation: {
        slowBreath: 'breath 6s ease-in-out infinite',
      },
      keyframes: {
        breath: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.35' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
