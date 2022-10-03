import aspectRation from '@tailwindcss/aspect-ratio';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        640: '40rem',
      },
      backgroundImage: {
        podcastCover: "url('/src/assets/Podcast/PodcastCover.png')",
      },
      screens: {
        maxsm: { max: '640px' },
        // => @media (max-width: 1535px) { ... }
      },
      fontFamily: {
        // poppins: ['Poppins'],
        // roboto: ['Roboto'],
        // montserrat: ['Montserrat'],
        raleway: ['Raleway', 'sans-serif'],
        // CenturyGothic: ['Century Gothic'],
      },
    },
  },
  plugins: [aspectRation],
  // prefix: 'tw-',
};
