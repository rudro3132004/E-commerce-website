import React, { useState } from "react";
import CheckBox from "./CheckBox";

const BrandProductFilter = () => {
  const [filter, setFilter] = useState({
     Availability : undefined
  });

 const boxHandel =(e)=>{
   const name = e.target.name
   const value = e.target.value

   setFilter( [...filter],  )
 }

  const [range, setRange] = useState("");
  return (
    <div className="w-full px-[5%] my-2 overflow-hidden md:m-0">
      <div className="bg-white py-2 px-5 rounded">
        <p className="py-2 text-lg font-medium border-b-2 mb-2">
          {" "}
          Price Range{" "}
        </p>
        <input
          onChange={(e) => setRange(e.target.value)}
          className="w-full"
          type="range"
          max={"1000"}
        />
        <div className="flex items-center justify-around gap-3 my-3">
          <span className="w-20 border-2 text-center border-blue-400">0</span>
          <span className="w-20 border-2 text-center border-blue-400">
            {range ? range : "0"}
          </span>
        </div>
      </div>

      <div className="w-full ">
        <CheckBox titel={"Availability"} boxHandel={boxHandel} titelArry={Availabilitys} />
        <CheckBox titel={"Brand"} titelArry={Brands} />
      </div>
    </div>
  );
};

export default BrandProductFilter;

const Availabilitys = [
  { name: "Availability", value: true, option: "In Stock" },
  { name: "Availability", value: false, option: "Out Of Stock" },
  { name: "Availability", value: null, option: "Upcoming Products" },
];
const Brands = [
  { name: "Brand", value: "Apple", option: "Apple" },
  { name: "Brand", value: "Samsung", option: "Samsung" },
  { name: "Brand", value: "Google", option: "Google" },
  { name: "Brand", value: "OnePlus", option: "OnePlus" },
  { name: "Brand", value: "Realme", option: "Realme" },
  { name: "Brand", value: "Infinix", option: "Infinix" },
  { name: "Brand", value: "Oppo", option: "Oppo" },
];
