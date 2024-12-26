import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BrandProductFilter from "../components/BrandProductFilter";
import Product from "../components/Product";
import DataObj from "../context/DataObject";
import AllProductSlider from "../components/AllProductSlider";

const BrandProducts = () => {
  const { brand } = useParams();

  const findData = (() =>{
    if(brand == 'all'){
      return DataObj
    }else{
      return DataObj.filter((elm) => {
        return elm.brand === brand;
      });
    }
  })()

  const productFilterRef = useRef();
  const [productFilter, setproductFilter] = useState(false);

  useGSAP(() => {
    if (productFilter) {
      gsap.to(productFilterRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(productFilterRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [productFilter]);

  return (
    <div className="max-w-7xl mx-auto h-fit relative overflow-auto my-5 flex items-start justify-center gap-3">

  {/* Side Bar */}
      {/* Desktop Bar 1 */}
      <div
        ref={productFilterRef}
        className="w-1/6 min-w-56 h-fit rounded bg-slate-20 overflow-auto hidden md:block "
      >
        <BrandProductFilter />
      </div>
      {/* Mobail Bar 2 */}
      <div
        ref={productFilterRef}
        className="w-full min-w-56 h-96 rounded fixed bottom-14 left-0 translate-y-full bg-slate-200 overflow-hidden md:w-1/6 md:static z-10 md:hidden"
      >
        {/* Filter Close */}
        <div className="w-full bg-slate-100 py-1 flex items-center justify-center">
          <i
            onClick={() => setproductFilter(!productFilter)}
            className="text-2xl text-slate-600 ri-arrow-down-wide-line"
          ></i>
        </div>

        <div className="w-full h-[90%] overflow-auto">
          <BrandProductFilter />
        </div>
      </div>

  {/* Products Box */}
      <div className="w-full h-fit  rounded overflow-auto md:w-5/6">
        
        {/* BramdProduct Slider */}
        <div className={`w-full h-36 sm:h-60 bg-slate-500 rounded mb-2 md:mb-5 overflow-hidden ${brand == 'all' ? 'block' : 'hidden'}`}>
             <AllProductSlider/>
        </div>

        {/* Top Box */}
        <div className="py-2 px-3 mb-3 bg-white flex items-center justify-between">
          {/* Filter */}
          <div
            onClick={() => setproductFilter(!productFilter)}
            className="flex items-center justify-start cursor-pointer p-1 px-3 rounded w-fit bg-slate-100 md:hidden"
          >
            <i className="ri-equalizer-line"></i>
            Filter
          </div>
          {/* Sort By */}
          <div className="flex items-center justify-start p-2 px-3 rounded w-fit bg-slate-100">
            <p className="px-1 text-sm">Sort By: </p>
            <select className="text-sm w-20 bg-transparent">
              <option value="">Default</option>
              <option value="">Price{"(Low > High)"}</option>
              <option value="">Price{"(High > Low)"}</option>
            </select>
          </div>
        </div>

        {/* Main box */}
        <div className="w-full h-fit bg-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 overflow-auto p-1 md:gap-3 md:p-3">
          {findData
            ? findData.map((elm, index) => (
                <Product elm={elm} key={index} />
              ))
            : null}
        </div>

      </div>


    </div>
  );
};

export default BrandProducts;