/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-rose': '0 0 24px -6px rgba(244, 63, 94, 0.35)',
        'glow-fuchsia': '0 0 28px -8px rgba(217, 70, 239, 0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.75s ease-out forwards',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 12s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(1.5%, -1%)' },
        },
      },
      backgroundSize: {
        300: '300% 300%',
      },
    },
  },
  plugins: [],
}
