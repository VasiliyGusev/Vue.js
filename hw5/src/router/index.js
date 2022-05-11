 import Vue from "vue";
 import Router from "vue-router";

 import HomeView from '../views/HomeView'
 import AboutView from '../views/components/AboutView'
 import NotFound from '../components/NotFound'
 import AddCosts from '../components/AddCosts'

 Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: HomeView
        },
        // {
        //     path: '/:page',
        //     name: 'Dashboard',
        //     component: HomeView
        // },
        {
            path: '/costs*',
            name: 'Costs',
            component: AboutView
        },
        {
            path: '/notfound',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/add/:section/:category',
            name: 'AddCosts',
            component: AddCosts
        },
        {
            path: '*',
            redirect: {name: 'NotFound'}
        }
    ]
 })

 const userAuthExists = true;

 router.beforeEach((to, from, next) => {
     if (to.name !== 'NotFound' && !userAuthExists) {
         next({name: 'NotFound'})
     } else {
         next()
     }
 })

 router.beforeResolve((to, from, next) => {
     next()
 })

 const getTitleByRouteName = () => {
   return {
       'Dashboard': 'Take a look on your',
       'About': 'Anything about',
       'NotFound': 'Oops!'
   }
 }

 router.afterEach((to)=>{
     document.title = getTitleByRouteName(to.name)
 })

 export default router;