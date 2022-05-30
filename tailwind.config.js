module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/App.vue",
  ],
  theme: {
    extend: {
      "colors": {
        "red": {
          "jazzNpop": "#FF0000",
        },
      },
      "fontFamily": {
        "abril-fatface": ["'Abril Fatface'", "sansserif"], // POUR LES TITRES 
        "raleway": ["Raleway", "sansserif"]
      },
      backgroundImage: {
        'concert1': "url('src/assets/concerts/concert1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

  },
  plugins: [],
}
