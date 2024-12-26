import React, { useState } from 'react'

const CheckBox = ({ titel, titelArry, boxHandel }) => {

  const [ popUp, setPopUp ] = useState(true);


  return (
    <div className='w-full bg-white px-5 py-2 my-2 rounded'>

        <div className="flex items-center justify-between py-2 border-b-2 mb-2">
           <p className='text-lg font-medium'> {titel} </p>
           <i onClick={(e)=> setPopUp(!popUp) } className="text-xl cursor-pointer ri-arrow-down-wide-line"></i>
        </div>

        <div className={` w-full max-h-52 overflow-auto grid transition-all duration-500 ease-in-out ${ popUp ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 h-0' } duration-300`}>
            
            {
                titelArry ?
                titelArry.map((elm, idx) =>(

                   <div key={idx} className="flex p-1 ">
                       <input onClick={(e)=> boxHandel(e) } name={elm.name} value={elm.value} className='mr-3' type="checkbox" />
                       <p className='text-sm font-semibold'> {elm.option} </p>
                    </div>

                )) : null
            }
            

        </div>
 
    </div>
  )
}

export default CheckBox