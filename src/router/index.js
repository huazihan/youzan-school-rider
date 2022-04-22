import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/HomeView";
import IndexView from "@/views/home/IndexView";
import OrderView from "@/views/home/OrderView";
import OrderDetail from "@/views/OrderDetail";
import AccountView from "@/views/home/AccountView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: IndexView
      },
      {
        path: 'order',
        name: 'order',
        component: OrderView
      },
      {
        path: 'account',
        name: 'account',
        component: AccountView
      }
    ]
  },
  {
    path: '/order-detail',
    name: 'OrderDetail',
    component: OrderDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
