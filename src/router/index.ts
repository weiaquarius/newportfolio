import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FineTutorPage from '../views/FineTutorPage.vue';
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/Meeture',
    name: 'MeeturePage',
    component: MeeturePage,
    props: { projectLink: 1 },
  },
  {
    path: '/PodcastProject',
    name: 'PodcastPage',
    component: PodcastPage,
    props: { projectLink: 2 },
  },
  {
    path: '/FineTutor',
    name: 'FineTutorPage',
    component: FineTutorPage,
    props: { projectLink: 3 },
  },
  {
    path: '/SireHealth',
    name: 'SireHealthPage',
    component: SireHealthPage,
    props: { projectLink: 4 },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || './'),
  routes,
});

export default router;
