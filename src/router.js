import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
    routes: [
    
    { path: '/', component: '/trainers' },
    { path: '/trainers', component: null },
    {path: '/trainers/:id', component: null, children: [
              { path: 'contact', component: null}, // /coaches/coachID/contact
          ]},
    { path: '/register', component: null },
    { path: '/requests', component: null },
    {path: '/:notFound(.*), component: null'}
  ],
});

export default router;