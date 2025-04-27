/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ucla-blue': '#2774AE',
        'ucla-gold': '#FFD100',
        'coffee-light': '#E6D7C2',
        'coffee-medium': '#C8B6A6',
        'coffee-dark': '#8D7B68',
        'espresso': '#4A3933',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/pattern.svg')",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};