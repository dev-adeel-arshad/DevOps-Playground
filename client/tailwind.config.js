/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          'bg': '#0f172a',
          'card': '#1e293b',
          'border': '#334155',
        },
        'accent': {
          'blue': '#3b82f6',
          'green': '#10b981',
          'purple': '#8b5cf6',
          'pink': '#ec4899',
          'orange': '#f97316',
        }
      },
      backdropBlur: {
        'md': '12px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'flow': 'flow 4s ease-in-out infinite',
        'slideDown': 'slideDown 0.5s ease-out',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)',
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'flow': {
          '0%': { opacity: '0.5', transform: 'translateX(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5', transform: 'translateX(100%)' }
        },
        'slideDown': {
          'from': { transform: 'translateY(-20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        'fadeInUp': {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        }
      },
    },
  },
  plugins: [],
}
