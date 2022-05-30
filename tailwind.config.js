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
        'acj1': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/melody_gardot.jpg');",
        'acj2': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/asaf_avidan.jpg');",
        'acj3': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/daida.jpg');",
        'acj4': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/jean_michel_blais.jpg');",
        'acj5': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/peter_cincotti.jpg');",
        'acj6': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/stacey_ryan.jpg');",
        'acj7': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/jazz/trio_viret.jpg');",
      
        'acp1': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/alan_walker.jpg');",
        'acp2': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/alicia_moffet.jpg');",
        'acp3': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/bastille.jpg');",
        'acp4': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/coldplay.jpg');",
        'acp5': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/james_blunt.jpg');",
        'acp6': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/kungs.jpg');",
        'acp7': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('src/assets/artistes/pop/woodkid.jpg');",
  
      },
    },

  },
  plugins: [],
}
