/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'pale_purple': { DEFAULT: '#e8d7f1', 100: '#341843', 200: '#682f86', 300: '#994fc1', 400: '#c092d9', 500: '#e8d7f1', 600: '#ecdef3', 700: '#f1e6f6', 800: '#f5eef9', 900: '#faf7fc' },
      'thistle': { DEFAULT: '#d3bccc', 100: '#301f2b', 200: '#603f56', 300: '#905e81', 400: '#b38ba7', 500: '#d3bccc', 600: '#dcc9d6', 700: '#e4d6e0', 800: '#ede4ea', 900: '#f6f1f5' },
      'pomp_and_power': { DEFAULT: '#a167a5', 100: '#211422', 200: '#422844', 300: '#633c66', 400: '#845088', 500: '#a167a5', 600: '#b586b8', 700: '#c7a4ca', 800: '#dac3dc', 900: '#ece1ed' },
      'tekhelet': { DEFAULT: '#4a306d', 100: '#0f0a16', 200: '#1e132c', 300: '#2d1d42', 400: '#3c2758', 500: '#4a306d', 600: '#6c469f', 700: '#906cbf', 800: '#b59dd4', 900: '#daceea' },
      'prussian_blue': { DEFAULT: '#0e273c', 100: '#03080c', 200: '#061019', 300: '#091825', 400: '#0c2032', 500: '#0e273c', 600: '#1f5784', 700: '#2f85ca', 800: '#73aede', 900: '#b9d6ef' }
    }
  },
  plugins: [],
}

