import { createRouter, createWebHistory } from 'vue-router'
import { useHeaderStore } from '/src/stores/header/header.js'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home/Home.vue'
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
          path: '/',
          name: 'Dashboard',
          component: Home
        },
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

router.beforeEach((to, from, next) => {
  const headStore = useHeaderStore()
  headStore.CHANGE_TITLE(to.name)
  console.log(to.name)
  next()
})

export default router
