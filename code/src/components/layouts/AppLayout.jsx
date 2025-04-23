import { Outlet } from "react-router-dom"
import { Footer } from "../../ul/Footer"
import { Header } from "../../ul/Header"

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