import {createRouter,createWebHistory} from 'vue-router'
const routes = [
    {
        path:'/about',
        name:'About',
        component:()=> import('./views/About.vue')
    },
    {
        path:'/',
        name:'Home',
        component:()=>import('./views/App.vue')
    }
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router