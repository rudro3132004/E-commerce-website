import React from 'react'

const FooterContact = () => {
  return (
    <div className="w-full">
        <h3 className='text-xl font-semibold mb-1 md:mb-3'>Contact Info</h3>
            <ul className='p-2'>
                <li className='text-sm font-semibold mb-2'> <i className="pr-2 ri-mail-line"></i> aproda@gmail.com </li>
                <li className='text-sm font-semibold mb-2'> <i className="pr-2 ri-map-pin-2-line"></i> Upper Jessore Rd, Khulna 9100 </li>
                <li className='text-sm font-semibold mb-2'> <i className="pr-2 ri-store-line"></i> Jessore, Nuapada, Fultala, khulna </li>
            </ul>
            <div className="w-full flex gap-3 items-center justify-start p-2 mt-5">
                <div className="w-10 h-10 rounded-full bg-purple-600 hover:bg-indigo-700 duration-300 cursor-pointer flex items-center justify-center">
                    <i className="text-2xl ri-facebook-circle-fill"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-600 hover:bg-indigo-700 duration-300 cursor-pointer flex items-center justify-center">
                    <i className="text-2xl ri-instagram-line"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-600 hover:bg-indigo-700 duration-300 cursor-pointer flex items-center justify-center">
                    <i className="text-2xl ri-youtube-line"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-600 hover:bg-indigo-700 duration-300 cursor-pointer flex items-center justify-center">
                    <i className="text-2xl ri-tiktok-fill"></i>
                </div>
            </div>

    </div>
  )
}

export default FooterContact
