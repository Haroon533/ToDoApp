// Composables
import { createRouter, createWebHistory } from 'vue-router'
import pla from '@/components/details.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/ToDoApp',
        name: 'Login',
        component: () => import('@/views/Auth/Login.vue'),
          
          },
          {
            path: 'ToDoApp/Signup',
            name: 'Signup',
            component: () => import('@/views/Auth/Signup.vue'),
              
              },

      {
        path: 'ToDoApp/Today',
        name: 'Today',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/today.vue'),
        children:[{path:"/ToDoApp/:id",name:"details",component:{pla}}],
        beforeEnter:(to,from,next)=>{
          let isAuth =sessionStorage.getItem("login")
          return isAuth?next():next("/ToDoApp")
        },
      },
      {
    path: 'ToDoApp/Calendar',
    name: 'Calendar',
    component: () => import('@/views/calendar.vue'),
    beforeEnter:(to,from,next)=>{
      let isAuth =sessionStorage.getItem("login")
      return isAuth?next():next("/ToDoApp")
    },
      
      },
      {
        path: 'ToDoApp/about',
        name: 'about',
        component: () => import('@/views/about.vue'),
          
          },
          {
            path: 'ToDoApp/Stickwall',
            name: 'Stickwall',
            component: () => import('@/views/Stickwall.vue'),
            beforeEnter:(to,from,next)=>{
              let isAuth =sessionStorage.getItem("login")
              return isAuth?next():next("/ToDoApp")
            },
              },
                  
           
    ],
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router


