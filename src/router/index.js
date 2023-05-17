import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Students from '../views/Students/Students.vue'
import Teachers from '../views/Teachers/Teachers.vue'
import Error from '../views/Error/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/students',
          name: 'Students',
          component: Students
        },
        {
          path: '/teachers',
          name: 'Teachers',
          component: Teachers
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: Error
    }
  ]
})

export default router
