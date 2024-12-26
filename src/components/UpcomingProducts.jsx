import React from 'react'
import Product from './Product'
import dataObj from './../context/DataObject';
import { Link } from 'react-router-dom';

const UpcomingProducts = () => {

    const findProduct = dataObj.filter((elm)=>{
        return elm.availability === null;
    })
    const fixdProduct = findProduct.slice(0, 10)

  return (

    <div className="px-2 py-5 rounded">
          {/* titel */}
            <div className="w-full text-left md:text-center">
               <h3 className='text-2xl mb-2 text-slate-700 font-bold md:text-3xl'> Upcoming Products </h3>
               <p className='text-sm text-gray-600 font-medium md:text-base md:mb-8 md:px-[10%]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eveniet, dicta cumque rem aliquid est, expedita quisquam officiis recusandae mollitia modi sapiente magnam nam sunt, possimus aut quasi ea velit! </p>
            </div>
          {/* products */}
            <div className='w-full mx-auto py-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center sm:w-full'>
                {
                    fixdProduct ? fixdProduct.map((elm, index)=>(
                        <Product elm={elm} key={index}/> 
                    )) : null
                }
             
            </div>
            {/* View products */}
            <div className="pt-5 flex justify-center items-center">
                <Link to={'/brand-/all'} className='w-fit px-5 py-1 border-sky-500 text-slate-700 font-bold text-base rounded mb-1 border md:border-2'>View all products <i class="ri-arrow-right-up-line"></i></Link>
            </div>
    </div>

  )
}

export default UpcomingProducts
