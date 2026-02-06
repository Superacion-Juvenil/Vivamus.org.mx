/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vivamus 2026 - Youth inspired palette
        vivamus: {
          sky: '#4CC9F0',      // Primary blue - vibrant sky
          pink: '#F72585',     // Primary pink - energetic magenta
          yellow: '#FFD166',   // Accent yellow - warm gold
          teal: '#00CCCC',     // Secondary teal
          orange: '#FF6600',   // Merco orange
          green: '#00CC00',    // Merco green
        },
        primary: {
          50: '#e6f7fb',
          100: '#ccf0f7',
          200: '#99e1ef',
          300: '#66d2e7',
          400: '#4CC9F0',
          500: '#4CC9F0',
          600: '#3BA8CC',
          700: '#2A87A8',
          800: '#1A6684',
          900: '#0A4560',
        },
        accent: {
          50: '#fce4ec',
          100: '#f8bbd9',
          200: '#f48fb1',
          300: '#f06292',
          400: '#F72585',
          500: '#F72585',
          600: '#D61F6F',
          700: '#B51859',
          800: '#941243',
          900: '#730C2D',
        },
        highlight: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#FFD166',
          500: '#FFD166',
          600: '#E6BC5C',
          700: '#CCA752',
          800: '#B39248',
          900: '#997D3E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'vivamus': '4px 4px 0 0 #000',
        'vivamus-lg': '6px 6px 0 0 #000',
        'vivamus-sm': '2px 2px 0 0 #000',
        'glow-pink': '0 0 20px rgba(247, 37, 133, 0.4)',
        'glow-sky': '0 0 20px rgba(76, 201, 240, 0.4)',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
