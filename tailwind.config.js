/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bali: {
          // Paleta Bali.Design
          cream: '#f5ebe2',      // Fondo principal
          beige: '#f6ebe2',      // Fondo alternativo
          light: '#f4e9e3',     // Fondos alternativos
          mauve: '#c3b5b4',     // Separadores sutiles
          rose: '#b7a7a8',      // Detalles
          brown: '#91766d',     // Acentos/hover
          dark: '#463b37',      // Texto principal
          darker: '#463835',    // Títulos/destacados
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
