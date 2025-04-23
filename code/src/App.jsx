import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
import { AppLayout } from './components/layouts/Applayout'
import { ErrorPage } from './ul/ErrorPage'
import { CountryDedtalis } from './components/layouts/CountryDedtalis';


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
        path: "/Contact",
        element: <Contact/>
      },

      {
        path: "/Country/:id",
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
