/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans", serif'],
        'crimson': ['"Crimson Text", serif'],
        'cabin': ['"Cabin", serif']
      },

      colors: {
        'bg-primary': '#F7F2ED',
        'bg-footer': '#0F172A',
        'bg-btn': '#DCA54A',
        'bg-btn-hover': '#A97215'
      }
    },
  },
  plugins: [],
}

