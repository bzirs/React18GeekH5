import { lazy } from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

const Layout = lazy(() => import(/* webpackChunkName: "Goods" */ '../pages/Layout'))
const Login = lazy(() => import(/* webpackChunkName: "Goods" */ '../pages/Login'))

const routes: RouteObject[] = [
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
