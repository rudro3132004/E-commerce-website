import React from 'react'

const PopupProduct = ({ popProduct, setPopProduct, swithImage, setSwithImage, imgarry }) => {
  return (
    <div className={`w-full h-screen z-50 fixed top-0 left-0 bg-[#9f9a9ac9] flex items-center justify-center ${popProduct ? 'block' : 'hidden'}`}>

        <div className="w-full sm:w-5/12 bg-slate-50 p-3 rounded relative">
            <img className='w-full' src={swithImage} alt="" />

            <div className="w-full flex justify-center items-center gap-3 mt-5 border bg-white rounded p-2 overflow-auto">
                {
                    imgarry ? 
                    imgarry.map((elm, idx)=>(
                        <div key={idx} onClick={()=> setSwithImage(elm)} className="w-14 p-1 border cursor-pointer">
                        <img className='w-full' src={elm} alt="" />
                        </div>
                    )) : null
                }
            </div>

            <span className='absolute right-0 top-0 p-2 text-3xl hover:text-4xl duration-100 cursor-pointer'>
                <i onClick={()=> setPopProduct(!popProduct)} className="ri-fullscreen-line"></i>
            </span>

        </div>
    </div>
  )
}

export default PopupProduct
