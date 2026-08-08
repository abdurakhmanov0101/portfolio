/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4', // Vibrant Cyan
          light: '#67e8f9',
          dark: '#0891b2',
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Electric Violet
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        accent: {
          DEFAULT: '#10b981', // Emerald Green
          light: '#34d399',
          dark: '#059669',
        },
        darkBg: '#050914', // Deep OLED Blue
        lightBg: '#F6F8FA', // Pearl White
        darkCard: 'rgba(15, 23, 42, 0.4)', // Frosty dark
        lightCard: 'rgba(255, 255, 255, 0.7)',
        success: '#10b981',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255,255,255,0.05)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.07), inset 0 1px 1px rgba(255,255,255,0.4)',
        'neon-blue': '0 0 25px rgba(6, 182, 212, 0.4)',
        'neon-purple': '0 0 25px rgba(139, 92, 246, 0.4)',
        'neon-cyan': '0 0 25px rgba(16, 185, 129, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '24px',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-medium': 'floatMedium 6s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-2deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
