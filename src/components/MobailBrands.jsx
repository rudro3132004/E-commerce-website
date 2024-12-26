import React from 'react'
import { Link } from 'react-router-dom'

const MobailBrands = () => {
   const brands = [
      { brand: 'Apple', img: 'https://w7.pngwing.com/pngs/817/1000/png-transparent-iphone-6-apple-logo-apple-heart-logo-computer-wallpaper.png' },
      { brand: 'Samsung', img: 'https://logodix.com/logo/28409.jpg' },
      { brand: 'Google', img: 'https://www.scc.com/wp-content/uploads/2024/09/Google-pixel-logo.png' },
      { brand: 'Xiaomi', img: 'https://i.pinimg.com/236x/68/ab/1e/68ab1e35d6558b90c67f7a3c2c9e90aa.jpg' },
      { brand: 'OnePlus', img: 'https://www.gizchina.com/wp-content/uploads/images/oneplus-logo.jpg' },
      { brand: 'Motorola', img: 'https://e7.pngegg.com/pngimages/34/276/png-clipart-logo-motorola-brand-mobile-phones-font-motorola-blue-text-thumbnail.png' },
      { brand: 'Poco', img: 'https://assets.gadgets360cdn.com/pricee/assets/brand/og-poco-logo.png' },
      { brand: 'Realme', img: 'https://i.pinimg.com/736x/04/cb/27/04cb27739eb8732d17e838c16b5b2287.jpg' },
      { brand: 'Vivo', img: 'https://cdn.logoeps.net/wp-content/uploads/2018/04/vivo-logo_logoeps.net_.png' },
      { brand: 'Oppo', img: 'https://i0.wp.com/fastmobile.pk/wp-content/uploads/2021/08/Oppo.png?fit=300%2C169&ssl=1' },
      { brand: 'Infinix', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqQPHifXxtVy0jKiuU3kF9vlvbPjdIAtZtw&s' },
      { brand: 'Redmi', img: 'https://download.logo.wine/logo/Redmi/Redmi-Logo.wine.png' },
   ]
  return (
    <div className='w-full grid grid-cols-2 gap-3 px-1 md:grid-cols-4 md:gap-6'>

      {
         brands ? 
         brands.map((elm, idx)=>(
          <Link to={`brand-/${elm.brand}`} key={idx} className="h-12 w-full flex items-center justify-start p-2 bg-slate-200 rounded cursor-pointer md:h-16 md:p-4">
              <img className='w-10 mr-2 md:w-14' src={elm.img} alt="" />
              <h4 className='font-medium'>{elm.brand}</h4>
         </Link>
         )) : null
      }

    </div>
  )
}

export default MobailBrands