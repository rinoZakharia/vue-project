import { createRouter, createWebHistory } from 'vue-router';
import viewBarang from '../components/ListBarang.vue';
import addBarang from '../components/addBarang.vue';
import updateBarang from '../components/updateBarang.vue';

const routes = [
  { path: '/', component: viewBarang },
  { path: '/add', component: addBarang },
  { path: '/edit/:id', component: updateBarang },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;