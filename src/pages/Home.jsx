import React from "react";
import Navbar from "../components/Navbar";
import BannerSlider from "../components/BannerSlider";
import MobailBrands from "../components/MobailBrands";
import NewProducts from "../components/NewProducts";
import ProductSlider from "../components/ProductSlider";
import PopulerProducts from "../components/PopulerProducts";
import UpcomingProducts from "../components/UpcomingProducts";
import ShopDetaile from "../components/ShopDetaile";

const Home = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto h-fit overflow-auto px-1">
      {/* Navbar */}
      {/* <div className="relative">
           <Navbar/>
       </div> */}
      {/* Slider */}
      <div className="w-full">
        <BannerSlider />
      </div>
      {/* Shop Rulse */}
      <div className="p-1 bg-slate-200 flex items-center justify-center mb-5 md:mb-8">
        <marquee behavior="" direction="">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          qui incidunt iste minima ullam nihil modi ducimus consequuntur ut
          voluptatum, nemo, illum veniam sunt? Vitae ipsum ipsam doloribus eius
          eum!
        </marquee>
      </div>
      {/* Mobail Brands */}
      <div className="w-full my-10">
        <MobailBrands />
      </div>
      {/* Product Slider */}
      <div className="w-full bg-white px-2 rounded my-10 md:mt-16">
        <ProductSlider />
      </div>
      {/* New products */}
      <div className="w-full bg-white rounded px-2 my-10 md:mb-10">
        <NewProducts />
      </div>
      {/* Popular Products */}
      <div className="w-full bg-white rounded px-2 my-10 md:mb-10">
        <PopulerProducts />
      </div>
      {/* Popular Products */}
      <div className="w-full bg-white rounded px-2 my-10 md:mb-10">
        <UpcomingProducts />
      </div>
      {/* Shop Detail */}
      <div className="w-full bg-white rounded p-5 md:px-[8%] my-10 md:mb-10 md:mt-20">
        <ShopDetaile />
      </div>
    </div>
  );
};

export default Home;
