import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import Success from '@/components/Success'
import Login from '@/components/Login'
import Register from '@/components/Register'
import TermsOfService from '@/components/TermsOfService'
import Forget from '@/components/Forget'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading	
    },
    {
      path: '/error',
      name: 'Error',
      component: Error	
    },
    {
      path: '/success',
      name: 'Success',
      component: Success	
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfService',
      component: TermsOfService
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
