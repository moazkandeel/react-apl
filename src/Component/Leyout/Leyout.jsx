import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbare'



export default function Leyout() {
  return (
    <>
    <Navbar/>
    
    <Outlet></Outlet>
    
    <Footer/>
   
      
    </>
  )
}

