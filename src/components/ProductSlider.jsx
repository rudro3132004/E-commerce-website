import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import DataObj from '../context/DataObject';

const ProductSlider = () => {
    const slides = [
        {
          id: 1,
          image: 'https://i.pinimg.com/736x/0a/1c/b1/0a1cb106e6efba43b119e3f38f509874.jpg',
          model: 'Iphon 16 pro'
        },
        {
          id: 2,
          image: 'https://www.phoneshopkenya.co.ke/wp-content/uploads/2024/05/samsung-a55-fslider.jpg',
          model: 'Iphon 15 pro'
        },
        {
          id: 3,
          image: 'https://ecommerce.hashtagtribe.in/wp-content/uploads/2022/08/e-com-slider-3.jpg',
          model: 'Iphon 14 pro'
        },
        {
          id: 4,
          image: 'https://i.ytimg.com/vi/x9Ouw6m30gg/maxresdefault.jpg',
          model: 'Iphon 13 pro'
        },
        {
          id: 5,
          image: 'https://cdn.smartslider3.com/wp-content/uploads/2023/05/monolithBoxed_1200.jpg',
          model: 'Iphon 12 pro'
        },
      ];
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
  return (
    <div className='w-full overflow-hidden py-5'>

            <div className="w-full text-left md:text-center pl-2 py-6">
              <h3 className='text-2xl mb-2 text-slate-700 font-bold md:text-3xl'> Most Salling Products </h3>
              <p className='text-sm text-gray-600 font-medium md:text-base md:px-[10%]'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eveniet, dicta cumque rem aliquid est, expedita quisquam officiis recusandae mollitia modi sapiente magnam nam sunt, possimus aut quasi ea velit! </p>
            </div>
         
        <div className="w-full mx-auto slider-container py-5">
          <Slider {...settings}>
            {
              DataObj ? 
               DataObj.map((product, index)=>(
                    <div key={index} className="w-[30%] h-64 bg-slate-200 rounded overflow-hidden cursor-pointer">
                        <Link to={`/product-/${product.id}`} className="w-full block h-5/6 p-1">
                            <img className='w-full h-full object-cover' src={product.image} alt="" />
                        </Link>
                        <div className="text-center p-1">
                            <p>{product.name}</p>
                        </div>
                    </div> 
                )) : null
            }
          </Slider>
        </div>
        {/* View products */}
          <div className="pt-5 flex justify-center items-center">
                <Link to={'/brand-/all'} className='w-fit px-5 py-1 border-sky-500 text-slate-700 font-bold text-base rounded mb-1 border md:border-2'>View all products <i class="ri-arrow-right-up-line"></i></Link>
          </div>
        
    </div>
  )
}

export default ProductSlider
