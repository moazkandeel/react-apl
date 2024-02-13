import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return (
    <><div className='container py-5'>
    <div  className="text-center pt-4" >
    <h2  className="text-uppercase mb-3 py-4 fs-1 fw-bolder">CONATCT SECTION</h2>
    <div className={style.aft}>
            <div className={style.aft1}></div>
            
            <i  className="fa-solid fa-star"></i>
            <div className={style.aft3}></div>
        </div>
   
    </div>
    <form  action="" className="w-50 py-5 mx-auto mt-5 ng-pristine ng-valid ng-touched">
    
    <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" fdprocessedid="iifua9"/>
   
    <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" fdprocessedid="klfbp"/>
    
    <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" fdprocessedid="5phrah"/>
  
    <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched" fdprocessedid="9n3nbd"/>
    <button className="btn btn-danger mt-4 text-white"  fdprocessedid="yf98hf"> send Message </button>
    </form>
   
      
    </div>
      
    </>
  )
}
