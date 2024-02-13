import React from 'react';
import style from './Portfolioe.module.css'

export default function Portfolio() {
  return (
    <> 
    <section id="services" class="services-mf py-5 route  ">
    
    <div class="container p-4">
        <div class="row ">
        <div  className="text-center pt-4" >
        <h2  className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
        <div className={style.aft}>
                <div className={style.aft1}></div>
                
                <i  className="fa-solid fa-star"></i>
                <div className={style.aft3}></div>
            </div>
       
        </div>
           
        </div>
        <div className="row pt-5 g-4 text-center">
            <div className="col-lg-4">
            <div  className={style.mo}>
            
            <img src={require('../../Assets/imegs/poert1.png')} width={350} className=" " alt="" />
            <div  className={style.layer}>
            <i  className="text-white fa-solid fa-plus fa-6x"></i></div></div>
               
                  
            </div>
            <div className="col-lg-4">
               
                <img src={require('../../Assets/imegs/port2.png')} width={350}  alt="" />
            </div>
            <div className="col-lg-4">
            <img src={require('../../Assets/imegs/port3.png')} width={350}  alt="" />
            </div>
            <div className="col-lg-4">
            <img src={require('../../Assets/imegs/poert1.png')} width={350}  alt="" />
            </div>
            <div className="col-lg-4">
            <img src={require('../../Assets/imegs/port2.png')} width={350}  alt="" />
            </div>
            <div className="col-lg-4">
            <img src={require('../../Assets/imegs/port3.png')} width={350}  alt="" />
            </div>
        </div>
    </div>
</section>
      
    </>
  )
}
