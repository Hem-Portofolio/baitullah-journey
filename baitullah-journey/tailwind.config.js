/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5ee',
          100: '#c5e6d4',
          200: '#9dd5b7',
          300: '#6ec49a',
          400: '#4ab783',
          500: '#1B6B45',
          600: '#155936',
          700: '#0f4729',
          800: '#09351d',
          900: '#042310',
        },
        secondary: {
          50: '#faf3e0',
          100: '#f3e0b3',
          200: '#eccc80',
          300: '#e5b84d',
          400: '#dfa926',
          500: '#C9963A',
          600: '#a87a2f',
          700: '#875e24',
          800: '#664219',
          900: '#45260e',
        },
        neutral: {
          dark: '#2C1810',
          light: '#F8F3EC',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Lato', 'Source Sans Pro', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
