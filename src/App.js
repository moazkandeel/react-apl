import React from 'react'

import { RouterProvider,  createBrowserRouter } from 'react-router-dom';


import Navbar from './Component/Navbar/Navbare';
import Star from './Component/Star/Star';
import Leyout from './Component/Leyout/Leyout';
import Portfolio from './Component/Portfolio/Portfolio';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import NotFound from './Component/NotFound/NotFound';




let routers =createBrowserRouter([
  {path:'', element: <Leyout/> ,children:[
   
    {index:true ,element:<Star/>},
    {path:"about" ,element:<About/>} ,
    {path:"portfolio",element:<Portfolio/>},
    {path:"navbar" ,element:<Navbar/>} ,
    {path:"contaact" ,element:<Contact/>} ,
    {path:"contaact" ,element:<Footer/>} ,
    {path:"*" ,element:<NotFound/>} ,
  

    
    
  ]}

])
export default function App() {
  return (
    <>
    
      
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}
