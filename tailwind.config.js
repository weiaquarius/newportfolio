import aspectRation from '@tailwindcss/aspect-ratio';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        podcastCover: "url('/src/assets/Podcast/PodcastCover.png')",
      },
    },
  },
  plugins: [aspectRation],
  // prefix: 'tw-',
};
