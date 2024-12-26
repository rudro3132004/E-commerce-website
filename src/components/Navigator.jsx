import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = ({setPopupNavbar}) => {
  return (
    <div className='w-full'>


      <nav className='py-3 bg-white border-slate-300 md:py-2 md:border-b-2'>

        {/* Home */}
         <div className="w-full mb-3 px-3 md:hidden">
           <i className="text-xl ri-home-2-line"></i>
           <span className='ml-2 text-[12px] text-slate-700 '> Home/product/oppo a1k </span>
         </div>
        {/* Nav Links */}
         <div className="w-full h-[600px] overflow-auto px-3 md:flex md:justify-center md:items-center md:gap-10 md:h-fit">

            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/all'} className='text-sm'>All products</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Apple'} className='text-sm'>Apple</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Samsung'} className='text-sm'>Samsang</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Google'} className='text-sm'>Google</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Oppo'} className='text-sm'>Oppo</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Vivo'} className='text-sm'>Vivo</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Xiaomi'} className='text-sm'>Xiaomi</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Realme'} className='text-sm'>Realme</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>
            <div className="flex items-center justify-between mb-3 border-b cursor-pointer hover:border-slate-400 duration-300 md:mb-0">
              <Link onClick={()=>setPopupNavbar(false)} to={'/brand-/Infinix'} className='text-sm'>Infinix</Link>
              <span className='md:hidden'> <i className="text-xl ri-add-line"></i> </span>
            </div>

         </div>

      </nav>


    </div>
  )
} 
               

export default Navigator