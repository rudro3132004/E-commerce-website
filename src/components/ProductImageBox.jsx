import React from 'react'

const ProductImageBox = ({ popProduct, setPopProduct, swithImage, setSwithImage, imgarry }) => {
  return (
    <div className="w-full flex items-center justify-center border">
        {/* Products image */}
        <div className="w-full p-3">

            {/* main image */}
            <div className="w-full bg-white duration-300 rounded relative">
                <img className='w-72 mx-auto object-cover xl:w-full md:w-full' src={swithImage} alt="" />
                <span className='absolute right-0 bottom-0 p-2 text-xl hover:text-2xl duration-100 cursor-pointer'>
                    <i onClick={()=> setPopProduct(!popProduct)} className="ri-fullscreen-line"></i>
                </span>
            </div>
            {/* Products image arrry */}
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

        </div>
    </div>
  )
}

export default ProductImageBox
