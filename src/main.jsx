import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Contact } from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
    path: "/prueba-router/",
    element: <App />,
    children: [
      {
        path: "/prueba-router/",
        element: <Home />,
      },
      {
        path: "/prueba-router/contact",
        element: <Contact />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
