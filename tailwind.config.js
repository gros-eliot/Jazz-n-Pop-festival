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
        'hero1': "linear-gradient(0deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('src/assets/concerts/concert2.jpg');",
        'hero2': "linear-gradient(0deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)),url('src/assets/artistes/pop/coldplay.jpg');",
        
        //bg image du hero de la vue "about"
        'about': "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('src/assets/festival/festival_hero.jpg');",

        //Images des card des concerts
        'concert1': "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 61.02%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)),url('src/assets/concerts/concert1.jpg')",
        'concert2': "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 61.02%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)),url('src/assets/concerts/concert2.jpg')",
        'concert3': "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 61.02%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)),url('src/assets/concerts/concert3.jpg')",
        
       //Images des card (jazz) des artistes
       'acj1': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/melody_gardot.jpg');",
       'acj1': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/melody_gardot.jpg');",
       'acj2': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/asaf_avidan.jpg');",
       'acj3': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/daida.jpg');",
       'acj4': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/jean_michel_blais.jpg');",
       'acj5': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/peter_cincotti.jpg');",
       'acj6': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/stacey_ryan.jpg');",
       'acj7': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/trio_viret.jpg');",
       
       //Images des card (pop) des artistes
        'acp1': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/alan_walker.jpg');",
        'acp2': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/alicia_moffet.jpg');",
        'acp3': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/bastille.jpg');",
        'acp4': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/coldplay.jpg');",
        'acp5': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/james_blunt.webp');",
        'acp6': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/kungs.jpg');",
        'acp7': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/woodkid.jpg');",
      },
      /* MARGES PREDEFINIES POUR LES PAGES (autre que celle d'accueil)*/
      padding: {
        'page': "1.25rem;",
        'ordinateur': "0rem 20rem 0rem 0rem;",
      },
      /* Grid (colonnes) pour la galerie de la page 'about'*/
      gridTemplateColumns: {
        'gallery': "repeat(2, minmax(150px,1fr));",
      },
      /* Grid (lignes) pour la galerie de la page 'about'*/
      gridTemplateRows: {
        'gallery': "repeat(2, minmax(150px,400px));",
      },
    },

  },
  plugins: [],
}
