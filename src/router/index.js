import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import ReadMoreClearChokes from '../components/ReadMoreClearChokes.vue'
import NewInstallation from '../components/NewInstallation.vue'
import LeakingPipe from '../components/LeakingPipe.vue'
import Residentials from '../components/Residentials.vue'
import CompanyBio from '../components/CompanyBio.vue'
import OurTestimonials from '../components/OurTestimonials.vue'
import Body from '../components/Body.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/readmoreclear/:readmoreclearId',
    name:'ReadMoreClearChokes',
    component: ReadMoreClearChokes
  },
  {
    path:'/newinstallation/:newinstallationId',
    name:'NewInstallation',
    component: NewInstallation
  },
  {
    path:'/leakingpipe/:leakingpipeId',
    name:'LeakingPipe',
    component: LeakingPipe
  },
  {
    path:'/residentials/:residentialsId',
    name:'Residentials',
    component: Residentials
  },
  {
    path:'/companybio/:companybioId',
    name:'CompanyBio',
    component: CompanyBio
  },
  {
    path:'/ourtestimonials/:ourtestimonialsId',
    name:'OurTestimonials',
    component: OurTestimonials
  },
  {
    path:'/body/:bodyId',
    name:'Body',
    component: Body
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
