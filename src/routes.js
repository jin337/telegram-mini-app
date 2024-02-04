import { useRoutes } from 'react-router-dom'

import Home from './pages/Home'
import Order from './pages/Order'


const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/order',
    element: <Order />
  }
]

const Routes = () => {
  const routers = useRoutes(routes)
  return routers
}

export default Routes
