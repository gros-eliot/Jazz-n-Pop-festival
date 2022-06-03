import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import GuideDeStyle from '../views/GuideDeStyle.vue'

import ListeArtiste from '../views/artiste/ListeView.vue'
import PortraitArtiste from '../views/artiste/PortraitView.vue'
import CreateArtiste from '../views/artiste/CreateView.vue'
import CustomArtiste from '../views/artiste/CustomView.vue'
import DeleteArtiste from '../views/artiste/DeleteView.vue'

import ListeConcert from '../views/concert/ListeView.vue'
import ConcertView from '../views/concert/ConcertView.vue'
import CreateConcert from '../views/concert/CreateView.vue'
import CustomConcert from '../views/concert/CustomView.vue'
import DeleteConcert from '../views/concert/DeleteView.vue'

import AboutView from '../views/AboutView.vue'

import ContactView from '../views/ContactView.vue'
import MentionslegView from '../views/MentionslegView.vue'

import Page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/style-guide', name: 'GuideDeStyle', component: GuideDeStyle },

    { path: '/artistes', name: 'ListeArtiste', component: ListeArtiste },
    { path: '/artiste_view/:id', name: 'PortraitArtiste', component: PortraitArtiste },
    { path: '/artiste_create', name: 'CreateArtiste', component: CreateArtiste },
    { path: '/artiste_custom/:id', name: 'CustomArtiste', component: CustomArtiste },
    { path: '/artiste_delete/:id', name: 'DeleteArtiste', component: DeleteArtiste },

    
    { path: '/concerts', name: 'ListeConcert', component: ListeConcert },
    { path: '/concert_view/:id', name: 'ConcertView', component: ConcertView },

    { path: '/concert_create', name: 'CreateConcert', component: CreateConcert },
    { path: '/concert_custom/:id', name: 'CustomConcert', component: CustomConcert },
    { path: '/concert_delete/:id', name: 'DeleteConcert', component: DeleteConcert },


    { path: '/about', name: 'AboutView', component: AboutView },

    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/mentions_legales', name: 'MentionslegView', component: MentionslegView },

    { path: '/:pathMatch(.*)*', name: 'page404', component: Page404 },
    // ici les autre routes
  ]
})

export default router
