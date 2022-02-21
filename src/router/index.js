import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardComponent from '../views/DashboardComponent.vue'
import ProjectsComponent from '../views/ProjectsComponent.vue'
import TeamComponent from '../views/TeamComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'home',
    component: DashboardComponent
  },
  {
    path: '/projects',
    name: 'projects',
    
    component: ProjectsComponent
  },
  {
    path: '/team',
    name: 'team',
    component: TeamComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
