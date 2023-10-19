// Bismillah
import React from "react";
import GitHub from "@a/icons/GitHub.svg";
import Arrow from "@a/icons/arrow.svg";
import Search from "@a/icons/arrow.svg";

const Navbar = () => {
    return (
      <header className="bg-gray-900">
        <div className="container">
          <nav className="header-nav">
            <div className="flex gap-x-8 w-[40%]">
              <img src={GitHub.src} alt="logo" />
              <div className="flex gap-x-8 justify-between">
                <div className="flex items-center gap-x-[4]">
                  <p>Product</p>
                  <img src={Arrow.src} alt="Arrow icon" />
                </div>
                <div className="flex items-center gap-x-[4]">
                  <p>Solutions</p>
                  <img src={Arrow.src} alt="Arrow icon" />
                </div>
                <div className="flex items-center gap-x-[4]">
                  <p>Open Source</p>
                  <img src={Arrow.src} alt="Arrow icon" />
                </div>
                <div className="flex items-center gap-x-[4]">
                  <p>Pricing</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                className="p-1 border-2 border-gray-700 focus:border-black-300 w-[324px] text-[13px] pl-[10px] rounded-[8px] bg-gray-900"
                placeholder="Search or jump to..."
                img={Search.src} alt="search icon"
              />
            </div>
          </nav>
        </div>
      </header>
    );
};

export default Navbar;
