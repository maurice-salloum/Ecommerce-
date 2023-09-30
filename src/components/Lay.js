
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"


const Lay = () => {
  return (
    <>
        <Header  />
            
            <Outlet  />
        
        <Sidebar  />
        <Footer  />
    </>
  )
}

export default Lay