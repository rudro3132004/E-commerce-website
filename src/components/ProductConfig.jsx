import React, { useState } from 'react'

const ProductConfig = ({ findData }) => {
    const [ productCount, setProductCount ] = useState(1); 
    const { name, brand, price, discount, model, upcoming, availability  } = findData[0]
  return (
    <div className='w-full'>
      
      <h3 className='font-semibold mb-3'> {brand} </h3>
      <h2 className='text-xl font-medium mb-2'> {name} </h2>
      <h5 className='text-3xl text-green-600 font-bold flex items-start mb-4'>$.  {price - discount} 
        <del className='text-lg text-orange-500 pl-2'>Tk. {discount} </del>
      </h5>
{/* Status and model */}
      <div className="flex flex-wrap items-center justify-start gap-3 mb-5">
         <a className='text-[12px] p-2 px-3 rounded-md bg-slate-200'>Model: {model} </a>
         { 
             (()=>{
                 if(upcoming){
                    return <span> Upcoming product </span>
                 }else if(availability == true){
                    return <a className='text-[12px] p-2 px-3 rounded-md bg-slate-200'>Status: In Stock </a>
                 } else if(availability == false){
                   return <a className='text-[12px] p-2 px-3 rounded-md bg-slate-200'>Status: Out of Stock </a>
                 }else{
                  return <a className='text-[12px] p-2 px-3 rounded-md bg-slate-200'>Status: Upcoming product </a>
                 }
             })()
           }
      </div>
{/* Product color */}
      <div className="w-fit flex flex-wrap gap-3 mb-3 p-3 border rounded-md">
        <h3 className='w-full'>Color:</h3>
         <div className="w-8 h-8 rounded-full bg-purple-500 active:border"></div>
         <div className="w-8 h-8 rounded-full bg-indigo-500 active:border"></div>
         <div className="w-8 h-8 rounded-full bg-slate-200 active:border"></div>
         <div className="w-8 h-8 rounded-full bg-slate-800 active:border"></div>
      </div>
{/* Storeg variant */}
      <div className="w-fit flex flex-wrap gap-3 mb-3 p-3 border rounded-md">
        <h2 className='w-full'> Storage: </h2>
        <a className='text-[12px] p-1 text-base font-medium px-5 rounded-md cursor-pointer bg-slate-200'> 6/128 </a>
        <a className='text-[12px] p-1 text-base font-medium px-5 rounded-md cursor-pointer bg-slate-200'> 8/128 </a>
        <a className='text-[12px] p-1 text-base font-medium px-5 rounded-md cursor-pointer bg-slate-200'> 8/256 </a>
      </div>
{/* product count */}
      <div className="w-fit flex gap-3 items-center justify-center mb-3 border-2 border-orange-500 rounded-md">
          <div onClick={()=>{
             if(productCount === 1){
                return null
             }else{
                setProductCount(productCount-1)
             }
          }} className="text-xl py-1 px-5"><i className="ri-subtract-line"></i></div>
          <div className='h-full py-1 px-5 border-2 border-orange-600'>{productCount}</div>
          <div onClick={()=> setProductCount(productCount+1)} className="text-xl py-1 px-5"><i class="ri-add-line"></i></div>
      </div>
{/* buy or cart button */}
      <div className="w-fit p-3 border flex flex-wrap items-center justify-start gap-3 rounded-md">
        <button className='px-5 py-2 rounded bg-sky-500 text-white font-semibold'> Add to cart </button>
        <button className='px-5 py-2 rounded bg-orange-500 text-white font-semibold'> Buy Now </button>
      </div>

    </div>
  )
}

export default ProductConfig
