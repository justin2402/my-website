import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MoreInfoPage from "@/components/MoreInfoPage";
import LanguagesPage from "@/components/LanguagesPage";
import ProjectPage from "@/components/ProjectPage";
import HobbiesPage from "@/components/HobbiesPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path:'/more-info',
    name:'MoreInfo',
    component: MoreInfoPage
  },
  {
    path:'/my-skills',
    name:'More Info',
    component: LanguagesPage
  },
  {
    path:'/my-projects',
    name:'My Projects',
    component: ProjectPage
  },
  {
    path:'/my-hobbies',
    name:'My Hobbies',
    component: HobbiesPage
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
