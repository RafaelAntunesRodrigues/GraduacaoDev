import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Aluno from '../views/Aluno.vue'
import Colaborador from '../views/Colaborador.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/Aluno',
      name: 'Aluno',
      component: Aluno
    },
    {
      path: '/Colaborador',
      name: 'Colaborador',
      component: Colaborador
    }
  ]
})


  
export default router
