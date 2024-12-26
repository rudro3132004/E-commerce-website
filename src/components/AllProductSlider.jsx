import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const AllProductSlider = () => {
    const slides = [
        {
          id: 1,
          image: 'https://i.pinimg.com/736x/0a/1c/b1/0a1cb106e6efba43b119e3f38f509874.jpg',
        },
        {
          id: 2,
          image: 'https://www.phoneshopkenya.co.ke/wp-content/uploads/2024/05/samsung-a55-fslider.jpg',
        },
        {
          id: 3,
          image: 'https://ecommerce.hashtagtribe.in/wp-content/uploads/2022/08/e-com-slider-3.jpg',
        },
        {
          id: 4,
          image: 'https://i.ytimg.com/vi/x9Ouw6m30gg/maxresdefault.jpg',
        },
        {
          id: 5,
          image: 'https://cdn.smartslider3.com/wp-content/uploads/2023/05/monolithBoxed_1200.jpg',
        },
      ];
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
    }

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
      {
              slides ? 
                slides.map((product, index)=>(
                      <div key={index} className="w-full h-full">
                          <img className="w-full h-full md:object-cover" src={product.image} />
                      </div>
                )) : null
            }
      </Slider>

    </div>
  )
}

export default AllProductSlider
