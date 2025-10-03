import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Registration from '../views/Registration.vue'
import Aboutindia from '../views/Aboutindia.vue'
import Aboutraipur from '../views/Aboutraipur.vue'
import Callpapers from '../views/Callpapers.vue'
import ConferenceVenue from '../views/ConferenceVenue.vue'
import Downloads from '../views/Downloads.vue'
import Event_schedule from '../views/Event_schedule.vue'
import Keynote_Speakers from '../views/Keynote_Speakers.vue'
import Partners from '../views/Partners.vue'
import Workshops from '../views/Workshops.vue'
import Trackstopics from '../views/TracksTopics.vue'
import Special from '../views/Special.vue'
import Advisory_Committee from '../views/Advisory_Committee.vue'
import Organising_Committee from '../views/Organising_Committee.vue'
import Technical_Committee from '../views/Technical_Committee.vue'
import TouristAttraction from '../views/Tourist_Attraction.vue'
import Accomodation from '../views/Accomodation.vue'
import CameraReadySubmission from '../views/CameraReadySubmission.vue'
import SUC from '../views/Under-Construction.vue'
import Pptguidelines from '../views/Pptguidelines.vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/pptguidelines',
    name: 'Pptguidelines',
    component: Pptguidelines
  },
  {
    path: '/india',
    name: 'Aboutindia',
    component: Aboutindia
  },
  {
    path: '/raipur',
    name: 'Aboutraipur',
    component: Aboutraipur
  },
  {
    path: '/call-for-papers',
    name: 'Callpapers',
    component: Callpapers
  },
  {
    path: '/advisory',
    name: 'Advisory_Committee',
    component: Advisory_Committee
  },
  {
    path: '/organising',
    name: 'Organising_Committee',
    component: Organising_Committee
  },
  {
    path: '/technical',
    name: 'Technical_Committee',
    component: Technical_Committee
  },
  {
    path: '/venue',
    name: 'ConferenceVenue',
    component: ConferenceVenue
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component: Downloads
  },
  {
    path: '/schedule',
    name: 'Event_schedule',
    component: Event_schedule
  },
  {
    path: '/speakers',
    name: 'Keynote_Speakers',
    component: Keynote_Speakers
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/workshops',
    name: 'Workshops',
    component: Workshops
  },
  {
    path: '/tracks',
    name: 'Trackstopics',
    component: Trackstopics
  },
  {
    path: '/Special',
    name: 'Special',
    component: Special
  },
  {
    path: '/tourist',
    name: 'Tours and Travel',
    component: TouristAttraction
  },
  
  {
    path: '/accomodation',
    name: 'Accomodation',
    component: Accomodation
  },
  {
    path: '/camerareadysubmission',
    name: 'CameraReadySubmission',
    component: CameraReadySubmission
  },
  { path: "*", component: SUC,
    meta: {
      layout: "another-layout"
    }
  }

]
/* eslint-disable */
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 250 })
      }, 500)
    })
  }
})

export default router
