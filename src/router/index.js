// Composables
import { createRouter, createWebHistory } from 'vue-router'
import pla from '@/components/details.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('@/views/Auth/Login.vue'),
          
          },
          {
            path: '/Signup',
            name: 'Signup',
            component: () => import('@/views/Auth/Signup.vue'),
              
              },

      {
        path: '/Today',
        name: 'Today',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/today.vue'),
        children:[{path:"/:id",name:"details",component:{pla}}]
      },
      {
    path: '/Calendar',
    name: 'Calendar',
    component: () => import('@/views/calendar.vue'),
      
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue'),
          
          },
          {
            path: '/Stickwall',
            name: 'Stickwall',
            component: () => import('@/views/Stickwall.vue'),
              
              },
                  
           
    ],
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router


