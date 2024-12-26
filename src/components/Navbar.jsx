import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Navigator from './Navigator';
import ButtomBar from './ButtomBar';

const Navbar = () => {
    
    const popupNavbarRef = useRef();
    const [popupNavbar, setPopupNavbar] = useState();
    
    useGSAP(()=>{
      if(popupNavbar){
         gsap.to(popupNavbarRef.current, {
            transform: 'translateX(0%)'
         })
      }else{
         gsap.to(popupNavbarRef.current, {
            transform: 'translateX(-100%)'
         })
      }
    }, [popupNavbar])

  //console.log(popupNavbar)  
  return (
    <div>
    {/* Main div */}
     <div className="w-full flex items-center justify-between py-3 bg-slate-200 px-2 z-50 relative xl:px-[10%]">

        {/* logo */}
         <Link to='/'><h2 className='text-2xl font-serif text-orange-600 pl-1 md:pl-6 xl:pl-16 '>Aproda</h2></Link>

        {/* Search Bar */}
        <div className="w-3/6 flex items-center justify-center rounded-md bg-white overflow-hidden md:w-2/6">
            <span className='text-xl px-2 border-r border-slate-300 cursor-pointer'> 
                <i className="ri-search-2-line"></i> 
            </span>
            <input className='w-full outline-none p-1 pl-2 md:p-2' type="text" />
        </div>

        {/* Nav Links */}
        <div className="w-9 h-9 bg-white flex justify-center items-center rounded-full md:hidden">
            {
                popupNavbar ? 
                <i onClick={()=> setPopupNavbar(!popupNavbar) } className=" text-xl ri-close-line"></i>
                 :
                <i onClick={()=> setPopupNavbar(!popupNavbar) } className=" text-xl ri-menu-line"></i>
            }
        </div>

        {/* Navbar Links */}
        <div ref={popupNavbarRef} className={`absolute w-5/6 z-10 top-[100%] left-0 translate-x-[-100%] mt-1 ${  popupNavbar ? 'block' : 'hidden' } md:hidden`}>
            <Navigator setPopupNavbar={setPopupNavbar}/>
        </div>
        

        {/* Buttom Bar */}
        <div className="w-full fixed bottom-0 left-0 bg-black z-30 md:static md:w-80 md:bg-transparent">
            <ButtomBar/>
        </div>

     </div>
     {/* Navbar Links */}
     <div className={`sticky w-full z-10 top-[94%] left-0 mt-1 hidden md:block`}>
            <Navigator setPopupNavbar={setPopupNavbar}/>
     </div>

    </div>
  )    
}

export default Navbar
