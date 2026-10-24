/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        divine: {
          50: '#fdfbf7',
          100: '#fbf7ee',
          200: '#f5ecd5',
          300: '#ebd9b0',
          400: '#dfbf82',
          500: '#d4a457',
          600: '#c38b3f',
          700: '#a36c32',
          800: '#84542d',
          900: '#6c4428',
          950: '#3d2213',
        },
        sanctuary: {
          900: '#0b1120',
          950: '#070a14',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-short': 'bounce 0.6s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
