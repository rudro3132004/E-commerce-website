import React from 'react'
import { Link } from 'react-router-dom'

const ButtomBar = () => {
  return (
    <div className='flex items-center justify-between max-w-96 mx-auto px-6 py-2 md:py-0 '>

       <div className="text-white flex flex-col items-center justify-between cursor-pointer md:text-black">
         <i className="hover:text-orange-600 duration-200  text-xl ri-smartphone-line"></i>
         <p className='text-[10px]'>New Phone</p>
       </div>
       <div className="text-white flex flex-col items-center justify-between cursor-pointer md:text-black">
         <i className="hover:text-orange-600 duration-200  text-xl ri-gift-line"></i>
         <p className='text-[10px]'>Offers</p>
       </div>
       <div className="text-white flex flex-col items-center justify-between cursor-pointer md:text-black">
         <i className="hover:text-orange-600 duration-200  text-xl ri-shopping-cart-2-line"></i>
         <p className='text-[10px]'>Cart ( <span className='text-red-500'>00</span> )</p>
       </div>
       <Link to={'/login'} className="text-white flex flex-col items-center justify-between cursor-pointer md:text-black">
         <i className="hover:text-orange-600 duration-200  text-xl ri-user-3-line"></i>
         <p className='text-[10px]'>Account</p>
       </Link>

    </div>
  )
}

export default ButtomBar
