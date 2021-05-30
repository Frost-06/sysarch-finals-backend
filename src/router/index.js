import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import addCustomer from '../views/addCustomer.vue'
import addStock from '../views/addStock.vue'
import viewStock from '../views/viewStock.vue'
import Borrow from '../views/Borrow.vue'
import Stockflow from '../views/Stockflow.vue'
import HomeUser from '../views/HomeUser.vue'
import Modal from '../views/Modal.vue'
import GetData from '../views/GetData.vue'
import Public from '../views/Public.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Registration from '../views/Registration.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Public.vue',
    component: Public
  },
  {
    path: '/login',
    name: 'Login.vue',
    component: Login
  },
  {
    path: '/modal',
    name: 'Modal.vue',
    component: Modal
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/admin',
    name: 'Admin Dashboard',
    component: Admin
  },
  {
    path: '/addCustomer',
    name: 'Add Product',
    component: addCustomer
  },
  {
    path: '/addStock',
    name: 'Add Stock',
    component: addStock
  },
  {
    path: '/viewStock',
    name: 'View Stock',
    component: viewStock
  },
  {
    path: '/borrow',
    name: 'Borrow',
    component: Borrow
  },
  {
    path: '/stockflow',
    name: 'Stock flow',
    component: Stockflow
  },
  {
    path: '/homeUsers',
    name: 'Home User',
    component: HomeUser
  },
  {
    path: '/getData',
    name: 'Test',
    component: GetData
  },

  {
    path: '/admin-login',
    name: 'AdminLogin.vue',
    component: AdminLogin
  },

  {
    path: '/registration',
    name: 'Registration.vue',
    component: Registration
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
