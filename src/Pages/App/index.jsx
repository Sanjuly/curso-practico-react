import { useRoutes, BrowserRouter } from  'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../Signin';
import NavBar from '../../Components/NavBar';
import './App.css'

//las rutas de las paginas
const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '*', element: <NotFound />}
  ])
  return routes;
}

//se renderiza la aplicacion, encapsulando la App
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar /> 
    </BrowserRouter>
  )
}

export default App
