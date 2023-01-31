import { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const Layout = lazy(() => import(/* webpackChunkName: "Goods" */ '../pages/Layout'))
const Login = lazy(() => import(/* webpackChunkName: "Goods" */ '../pages/Login'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  },
  {
    path: '/home',
    element: <Layout />
  },
  {
    path: '/login',
    element: <Login />
  }
]

const Routes = () => useRoutes(routes)

export default Routes
