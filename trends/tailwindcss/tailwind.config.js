/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './TextAdventureGame/src/**/*.{html,js,ts,css,scss}',
  ],
  theme: {
    extend: {
      spacing: {
        'padding-01': '18rem',
        'padding-02': '21rem',
        'padding-03': '24rem',
      },
      colors: {
        primary: "#000000",
        sub: "#D9D9D9",
        status1: "#000000",
        status2: "#222222",
        errorCancel: "#FF0000",
        success: "#0038FF",
        safety: "#32BF00",
      }
    },
  },
  plugins: [],
}

