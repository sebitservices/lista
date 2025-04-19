import { createRouter, createWebHistory } from 'vue-router'
import { auth } from './firebase'

// Importar vistas
import HomePage from './views/HomePage.vue'
import AuthPage from './views/AuthPage.vue'
import DashboardPage from './views/DashboardPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guardia de navegación para rutas protegidas
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = auth.currentUser

  // Si requiere autenticación y no hay usuario, redirigir a login
  if (requiresAuth && !currentUser) {
    next('/auth')
  } else {
    next()
  }
})

export default router 