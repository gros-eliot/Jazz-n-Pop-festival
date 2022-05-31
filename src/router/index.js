import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import GuideDeStyle from '../views/GuideDeStyle.vue'

import ListeArtiste from '../views/artiste/ListeView.vue'
import PortraitArtiste from '../views/artiste/PortraitView.vue'

import ListeConcert from '../views/concert/ListeView.vue'
import ConcertView from '../views/concert/ConcertView.vue'

import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/style-guide', name: 'GuideDeStyle', component: GuideDeStyle },

    { path: '/artistes', name: 'ListeArtiste', component: ListeArtiste },
    { path: '/artiste_view', name: 'PortraitArtiste', component: PortraitArtiste },

    { path: '/concerts', name: 'ListeConcert', component: ListeConcert },
    { path: '/concert_view', name: 'ConcertView', component: ConcertView },

    { path: '/about', name: 'AboutView', component: AboutView },
    // ici les autre routes
  ]
})

export default router
