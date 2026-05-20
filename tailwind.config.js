/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#08386F',
          light:   '#0D52A0',
          dark:    '#04346D',
        },
        gold: {
          DEFAULT: '#C89B45',
          light:   '#D9B46A',
          dark:    '#A47C2E',
        },
        cream:  '#FCF7F3',
        sand:   '#F3EBE2',
        border: '#E8DECE',
        muted:  '#888888',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Montserrat', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16,1,0.3,1)',
        'spring':   'cubic-bezier(0.34,1.56,0.64,1)',
      },
      maxWidth: { container: '1180px' },
      borderRadius: { card: '10px' },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
