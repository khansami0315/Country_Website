import { Outlet } from "react-router-dom"
import { Footer } from "../../ul/Footer"
import { Header } from "../../ul/Header"

export const AppLayout  = () => {



    return  (

        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
     
}