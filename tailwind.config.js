module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './store/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false or media or class https://www.tailwindcss.cn/docs/dark-mode#toggling-dark-mode-manually
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: { max: '475px' },
        md: { max: '768px' },
        tablet: '640px',
        xl: '1366px',
        '2xl': '1366px',
      },
      colors: {
        'cos-primary': '#1EDB8C',
      },
      backgroundImage: {
        'cos-gradient': 'linear-gradient(160deg, rgba(88,178,220,1) 0%, rgba(248,195,205,1) 100%)',
        'cos-gradient-dark': 'linear-gradient(160deg, rgba(28,28,28,1) 0%, rgba(55,60,56,1) 100%)',
      },
    },
  },
  plugins: [],
}
