import { createRouter, createWebHistory } from 'vue-router'

import TrainerDetail from './pages/trainers/TrainerDetail.vue'
import TrainersList from './pages/trainers/TrainersList.vue'
import TrainerRegistration from './pages/trainers/TrainerRegistration.vue'
import ContactTrainer from './pages/contact/ContactTrainer.vue'
import RequestsRecived from './pages/requsts/RequstsRecived.vue'
import NotFound from './pages/NotFound.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: '/trainers' },
    { path: '/trainers', component: TrainersList },
    {
      path: '/trainers/:id',
      component: TrainerDetail,
      children: [
        { path: 'contact', component: ContactTrainer }, // /coaches/coachID/contact
      ],
    },
    { path: '/register', component: TrainerRegistration },
    { path: '/requests', component: RequestsRecived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;