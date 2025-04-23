import { Outlet } from "react-router-dom"
import Header from '../../ul/Header'
import Footer from '../../ul/Footer'

 const AppLayout  = () => {



    return  (

        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
     
}
export default AppLayout