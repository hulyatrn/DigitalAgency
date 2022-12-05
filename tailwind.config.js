/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      colors: {
        'regal-blue': '#0A142F',
        'text-title': '#E0E5F3',
        'button-title': '#FFC93E',
        'text-scrool': '#F3F5F6',
        'bg-container':'#353F5B',
        'text-bluee':'#0C1430',
        'bg-categories':'#3A425A',
        'bg-footer':'#3B435A',
      },
      backgroundImage: {
        'hero-pattern': "url('../img/Ornament.png')",
      },
    },
  },
  plugins: [],
}
