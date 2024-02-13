import React from 'react'
import style from './Start.module.css';
import img from '../../Assets/imegs/2.jpg'

export default function Star() {
  return (
    <> <div className={`${style.zoz}  py-5`}>
   
   
    
    <picture className='d-flex align-content-center justify-content-center py-5'>
    <img src={img} width={350}  className='rounded-circle text-center   ' alt="port" />
    </picture>
    
    <div  className="text-center pt-4" >
    <h2  className=" mb-3 fs-1 fw-bolder">START FRAMEWORK</h2>
    <div className={style.aft}>
            <div className={style.aft1}></div>
            
            <i  className="fa-solid fa-star"></i>
            <div className={style.aft3}></div>
        </div>
   
    </div>
    <div className='d-flex align-content-center justify-content-center'>
    <p>
    Graphic Artist - Web Designer - Illustrator
    </p>
    </div>
    </div>


      
    </>
  )
}
