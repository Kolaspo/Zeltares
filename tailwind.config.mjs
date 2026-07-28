/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', './src/**/*.astro'],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
