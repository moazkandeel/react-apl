import React from 'react'
import img from '../../Assets/imegs/404.jpg'

export default function NotFound() {
  return (
    <>
      <div>
      <img src={img} className='w-100' alt="Error" />
      </div>
    </>
  )
}
