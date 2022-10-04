import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FineTutorPage from '../views/FineTutorPage.vue';
import TravelPage from '../views/TravelPage.vue';
import PodcastPage from '../views/PodcastPage.vue';
import MeeturePage from '../views/MeeturePage.vue';
import SireHealthPage from '../views/SireHealthPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import('../views/About.vue'),
  },
  {
    path: '/Meeture',
    name: 'Meeture',
    component: MeeturePage,
    props: { num: 2, name:'/PodcastProject' },
  },
  {
    path: '/PodcastProject',
    name: 'Podcast',
    component: PodcastPage,
    props: { num: 3, name:'/TravelBasedMultitasking' },
  },
  {
    path: '/TravelBasedMultitasking',
    name: 'Travel',
    component: TravelPage,
    props: { num: 1, name:'/Meeture' },
  },
  // {
  //   path: '/FineTutor',
  //   name: 'FineTutorPage',
  //   component: FineTutorPage,
  //   props: { num: 3, name:'' },
  // },
  // {
  //   path: '/SireHealth',
  //   name: 'SireHealthPage',
  //   component: SireHealthPage,
  //   props: { num: 4, name:'' },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || './'),
  routes,
});

export default router;
