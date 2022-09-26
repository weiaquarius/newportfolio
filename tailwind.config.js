import aspectRation from '@tailwindcss/aspect-ratio';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [aspectRation],
  // prefix: 'tw-',
};
