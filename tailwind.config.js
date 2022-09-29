import aspectRation from '@tailwindcss/aspect-ratio';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        podcastCover: "url('/src/assets/Podcast/PodcastCover.png')",
      },
      screens: {
        navsm: { max: '640px' },
        // => @media (max-width: 1535px) { ... }
      },
    },
  },
  plugins: [aspectRation],
  // prefix: 'tw-',
};
