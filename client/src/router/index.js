import { createRouter, createWebHistory } from 'vue-router';
import PingComp from '../components/Ping.vue';

const routes = [
  {
    path: '/ping',
    name: 'Ping',
    component: PingComp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
