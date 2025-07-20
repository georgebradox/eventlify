// tailwind.config.js
module.exports = {
  darkMode: 'class', // Add this line
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed', // purple-600
        accent: '#fbbf24', // yellow-400
        secondary: '#f472b6', // pink-400
        dark: '#1e293b', // slate-800
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'cool': '0 4px 32px 0 rgba(124, 58, 237, 0.15)',
      },
    },
  },
  plugins: [],
}
