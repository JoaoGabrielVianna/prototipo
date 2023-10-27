import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './routes/AppScreen/App.jsx';
import Login from './routes/LoginScreen/Login.jsx';
import Faculdade from './routes/FaculdadeScreen/Faculdade.jsx';
import Destaques from './routes/DestaquesScreen/Destaques.jsx';
import Home from './routes/HomeScreen/Home.jsx';
import Eventos from './routes/EventosScreen/Eventos.jsx';
import Profile from './routes/ProfileScreen/Profile.jsx';
import Error from './routes/ErrorScreen/Error.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/faculdade",
        element: <Faculdade/>
      },
      {
        path: "/Destaques",
        element: <Destaques/>
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "Eventos",
        element: <Eventos/>
      },
      {
        path: "/Profile",
        element: <Profile/>
      },
      {
        path: "/",
        element: <Login/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
