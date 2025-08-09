/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include app directory for App Router
    './pages/**/*.{js,ts,jsx,tsx}',   // Include pages directory for Pages Router
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',     // Include src if you use it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}