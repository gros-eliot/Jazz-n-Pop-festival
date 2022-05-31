import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import GuideDeStyle from '../views/GuideDeStyle.vue'
import ListeArtiste from '../views/artiste/ListeView.vue'
import PortraitArtiste from '../views/artiste/PortraitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/style-guide', name: 'GuideDeStyle', component: GuideDeStyle },
    { path: '/artistes', name: 'ListeArtiste', component: ListeArtiste },
    { path: '/artiste_view', name: 'PortraitArtiste', component: PortraitArtiste },
    // ici les autre routes
  ]
})

export default router
