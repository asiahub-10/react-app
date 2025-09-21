import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'
import UseState from './components/UseState';
import Users from './components/Users';
import Home from './components/Home';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import UserProfile from './components/UserProfile';

const AppRoute = createBrowserRouter([
  {path:'/',element:<App/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/like',element:<UseState/>},
      {path:'/users',element:<Users/>},
      {path:'/user/:id',element:<UserProfile/>},
    ]
  },
  {path:'/login',element:<Login/>},
  {path:'*',element:<PageNotFound/>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={AppRoute} />
  </StrictMode>
)
