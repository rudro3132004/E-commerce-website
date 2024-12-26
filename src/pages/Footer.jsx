import React from "react";
import FooterContact from "../components/FooterContact";

const Footer = () => {
  return (
    <footer className="w-full pb-14 md:pb-0">
      <div className="pt-10 pb-5 md:pt-20 px-10 md:px-[10%] text-white bg-indigo-950 border-b border-slate-400  w-full grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 md:gap-5">
        <FooterContact />

        <div className="w-full">
          <h3 className="text-xl font-semibold mb-1 md:-3">About Us</h3>
          <ul className="p-2">
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i>Overview{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i>Our Brands{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i> Our Branches{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i> Company Policy{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i> Company Manegment{" "}
            </li>
          </ul>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold mb-1 md:mb-3">Company Policy</h3>
          <ul className="p-2">
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i>Cookie Policy
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i>Privacy Policy{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i>Warranty policy{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i>Terms & Conditions{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i>Refund & Return
              Policy{" "}
            </li>
          </ul>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold mb-1 md:mb-3">
            Payment & Security
          </h3>
          <ul className="p-2">
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i> Account Security{" "}
            </li>
            <li className="text-sm font-semibold cursor-pointer mb-2">
              {" "}
              <i className="pr-1 ri-arrow-right-s-fill"></i> Payment Security{" "}
            </li>
          </ul>

          <div className="w-full flex items-center justify-start gap-3 mt-8">
            <div className="w-16 h-10 bg-slate-500">
              <img
                className="w-full h-full cursor-pointer"
                src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2024/09/12/3ede081fe791711d1ebd24e5d5072e169ff089785d251345.jpg"
                alt=""
              />
            </div>
            <div className="w-16 h-10 bg-slate-500">
              <img
                className="w-full h-full cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwzdqgNUFDY-6BGMOeuWGKIjKMGL_AWQCXw&s"
                alt=""
              />
            </div>
            <div className="w-16 h-10 bg-slate-500">
              <img
                className="w-full h-full cursor-pointer"
                src="https://touchonline.net.bd/wp-content/uploads/2023/08/rocket.jpg"
                alt=""
              />
            </div>
            <div className="w-16 h-10 bg-slate-500">
              <img
                className="w-full h-full cursor-pointer"
                src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2021/04/21/upay.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center p-5 bg-indigo-950">
        <small className="text-slate-300 text-[12px] font-semibold">
          © 2024 Aproda Ltd | All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
