/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        backgroundImage: theme => ({
        'heropattern': "url('./images/1.jpg')"
    })
    },
  },
  plugins: [],
}