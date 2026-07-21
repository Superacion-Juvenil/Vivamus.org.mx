/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: '#33B9E5',
        pink: '#F72585',
        yellow: '#FFD700',
        teal: '#009B9B',
        'merco-red': '#DD2200',
        'merco-green': '#44AA44',
        ink: '#0B1220',
        'ink-soft': '#1E293B',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neo': '4px 4px 0 0 #000',
        'neo-lg': '6px 6px 0 0 #000',
        'neo-xl': '8px 8px 0 0 #000',
        'neo-sm': '2px 2px 0 0 #000',
        'neo-pink': '4px 4px 0 0 #F72585',
        'neo-sky': '4px 4px 0 0 #33B9E5',
        'card': '0 2px 8px -2px rgba(15,23,42,0.08), 0 8px 24px -6px rgba(15,23,42,0.10)',
        'card-lg': '0 8px 16px -4px rgba(15,23,42,0.10), 0 20px 40px -12px rgba(15,23,42,0.16)',
        'card-hover': '0 10px 20px -6px rgba(15,23,42,0.14), 0 24px 48px -14px rgba(15,23,42,0.20)',
        'inset-line': 'inset 0 1px 0 0 rgba(255,255,255,0.4)',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-med': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};
