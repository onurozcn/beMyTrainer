import { createRouter, createWebHistory } from 'vue-router'

import TrainerDetail from './pages/trainers/TrainerDetail.vue'
import TrainersList from './pages/trainers/TrainersList.vue'
import TrainerRegistration from './pages/trainers/TrainerRegistration.vue'
import ContactTrainer from './pages/requests/ContactTrainer.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import NotFound from './pages/NotFound.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/trainers' },
    { path: '/trainers', component: TrainersList },
    {
      path: '/trainers/:id',
      component: TrainerDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactTrainer }, // /trainers/trainerID/contact
      ],
    },
    { path: '/register', component: TrainerRegistration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;