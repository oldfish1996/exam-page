import VueRouter from "vue-router"

const Home = () => import("../pages/home/index")
const Items = () => import("../pages/items/index")
const Score = () => import("../pages/score/index")

export default new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/items',
      component: Items
    },
    {
      path: '/score',
      component: Score
    }
  ]
})