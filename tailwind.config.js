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
          "jazzNpop": "#FF0000", // Couleur rouge précise du site 
          "jazzNpopDark": "#491261", // Pour le header/footer + le gradient(homepage) en dark mode
        },
      },
      "fontFamily": {
        "abril-fatface": ["'Abril Fatface'", "sansserif"], // POUR LES TITRES 
        "raleway": ["Raleway", "sansserif"] // POUR LE SITE ENTIER 
      },
      backgroundImage: {
        //Images des redirections de page (artistes et concerts) de la page d'accueil
        'hero1': "linear-gradient(0deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('/concerts/concert2.jpg');",
        'hero2': `linear-gradient(0deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('/artistes/pop/coldplay.jpg');`,
        
        //bg image du hero de la vue "about"
        'about': "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/festival/festival_hero.jpg');",
      },
      /* MARGES PREDEFINIES POUR LES PAGES (autre que celle d'accueil)*/
      padding: {
        'page': "1.25rem;",
        'ordinateur': "0rem 20rem 0rem 0rem;",
      },
      /* Grid (colonnes) pour la galerie de la page 'about'*/
      gridTemplateColumns: {
        'gallery': "repeat(2, minmax(150px,1fr));",
        'artiste-international': "repeat(auto-fit,minmax(380px,1fr))",
        'artiste': "repeat(auto-fit,minmax(200px,1fr))",
        'artiste-v2': "repeat(auto-fit,minmax(500px,1fr))",
      },
      /* Grid (lignes) pour la galerie de la page 'about'*/
      gridTemplateRows: {
        'gallery': "repeat(2, minmax(150px,400px));",
      },
    },

  },
  plugins: [],
}
