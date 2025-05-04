import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import About  from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
import { ErrorPage } from './ul/ErrorPage'
import AppLayout from "./components/layouts/AppLayout"
import CountryDedtalis  from './components/layouts/CountryDedtalis'
// Use 'router' here instead of 'route'
const router = createBrowserRouter([

  {
    path: "/",
    element:  <AppLayout/>,
    errorElement :<ErrorPage/>,
    children : [


      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />
      },
    
      {
        path: "/contact",
        element: <Contact/>
      },

      {
        path: "/country/:id",
        element: <CountryDedtalis/>
      },
    ]
  }
  
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
