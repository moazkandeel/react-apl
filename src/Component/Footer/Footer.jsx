import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <>  <footer className='bg-dark bottom ' >


    <div class="container">
    <div class="row py-5">              
      <div class="col-md-4">
      <div  className=" text-center text-white">
    <h3 >LOCATION</h3>
    <p >2215 John Daniel Drive</p>
    <p >Clark, MO 65243</p>
    </div>
    </div>
      <div class="col-md-4">
      <div  className=" text-center text-white">
      <h3 >AROUND THE WEB</h3>
      <div  className="icons text-white py-4">
      <i  className="fa-brands fa-facebook mx-1 icon"></i>
      <i  className="fa-brands fa-twitter mx-1 icon"></i>
      <i  className="fa-brands fa-linkedin-in mx-1 icon"></i>
      <i  className="fa-solid fa-globe mx-1 icon"></i>
      </div>
      </div>
    </div>
      <div class="col-md-4 ">
      <div  className=" bg-dark">
      <div  className=" text-center text-white">
      <h3 >ABOUT FREELANCER</h3>
      <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
      </div>
      </div>
    </div>
    </div>
    </div>
    </footer>
 
    <div   className={`${style.footer} text-center text-white  py-3`}>
   
    <p >Copyright © Your Website 2021</p>
    </div>
      
    </>
  )
}
