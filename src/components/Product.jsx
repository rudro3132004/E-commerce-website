import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ elm }) => {
  return (

    <div className="w-full h-80 relative bg-slate-200 rounded overflow-hidden cursor-pointer mb-2 md:w-60 md:mx-auto md:h-[350px]">
        <div className={`absolute z-10 px-2 ${elm.availability == true ? 'bg-green-500' : 'bg-red-500' } ${elm.upcoming == true ? 'bg-orange-500' : '' } text-white font-semibold text-[11px]`}> 
           { 
             (()=>{
                 if(elm.upcoming){
                    return <span> Upcoming product </span>
                 }else if(elm.availability == true){
                    return <span> In Stock </span>
                 } else if(elm.availability == false){
                   return <span> Out of Stock </span>
                 }else{
                  return <span> Upcoming product </span>
                 }
             })()
           }
           </div>

        <Link to={`/product-/${elm.id}`} className="w-full block h-4/6 p-1 overflow-hidden">
            <img className='w-full h-full  bg-white object-cover hover:scale-105 duration-300 ' src={elm.image} alt="" />
        </Link>
        <div className="w-full h-2/6 p-1 flex flex-col justify-between border-t-2 md:px-2">
            <Link to={`/product-/${elm.id}`} className="w-full block">
              <h3 className='h-6 font-semibold pb-2'> {elm.name} </h3>
            </Link>  
              <p className='flex justify-start font-semibold text-base'> 
                  <span className='px-2 text-green-600'>$ {elm.price-elm.discount } </span> 
                  <del className='text-sm text-red-600'>$ {elm.discount+elm.price}</del> 
              </p>
            
            {
              elm.upcoming ? 
                <button className='w-full py-1 bg-sky-500 text-slate-50 text-sm font-semibold rounded mb-1 md:font-bold'> See Product</button>
                 :
                <button className='w-full py-1 bg-sky-500 text-slate-50 text-sm font-semibold rounded mb-1 md:font-bold'> Add to cart 
                   <i className="ml-2 ri-shopping-cart-fill"></i>
                </button>
            }
           
        </div>
    </div>

  )
}

export default Product