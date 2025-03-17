"use client";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { FaTruck } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState("Riyadh");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [cities] = useState(["Riyadh", "Jeddah", "Dammam", "Mecca"]);

  return (
    <div className="">
      <div className="flex items-center justify-center p-2   bg-[#F1F5F9]">
        <FaTruck className="mr-2 text-[#334155c3]" />
        <span className="text-[13px] font-[400] text-[#334155]  uppercase">
          Free shipping for orders over 50SAR
        </span>
      </div>
      {/* ////////////////////////////// */}
      <nav className="bg-white bg-opacity-80 p-4 backdrop-blur-sm md:px-20 px-[16px]  w-full z-[500] border-b border-[#E2E8F0]">
        <div className="container flex items-center justify-between gap-10 mx-auto">
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xl h-[24px] w-[24px]"
            >
              {isMenuOpen ? <FaTimes /> : <IoIosMenu />}
            </button>
            <Link href="/">
            
            <Image src={logo} alt="Print Logo" className="h-[35px] w-[69px]" />
            </Link>
            
          </div>

          <div className="items-center hidden lg:flex">
            <Image src={logo} alt="Print Logo" className="w-[78px] h-[46px]" />
          </div>

          <div className="hidden lg:flex items-center border border-gray-300 px-4 py-2 w-[691px] h-[40px] rounded-[28px]">
            <FaSearch className="mr-2 text-gray-500 cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>

          <div className="relative hidden lg:block">
            <button
              className="flex items-center border border-gray-300 px-4 py-2 rounded-full w-full h-[36px]"
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
            >
              {selectedCity} <IoIosArrowDown className="ml-2" />
            </button>
            {isCityDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSelectedCity(city);
                      setIsCityDropdownOpen(false);
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-10">
            
            <div className="items-center hidden gap-2 cursor-pointer lg:flex">
             
                <CiUser className="text-xl" />
               <Link href="/pages/Product_Details">
              <h1 className="text-[16px]">Login</h1>
              </Link>

            </div>
            <div className="hidden md:flex">ع</div>
            <div>
              <LuShoppingCart className="text-xl cursor-pointer" />
            </div>
            <FaSearch
              className="text-xl cursor-pointer lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>
        </div>

        {isSearchOpen && (
          <div className="container flex items-center px-4 py-2 mx-auto mt-2 border border-gray-300 rounded-full lg:hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
            <FaTimes
              className="ml-2 text-gray-500 cursor-pointer"
              onClick={() => setIsSearchOpen(false)}
            />
          </div>
        )}

        {isMenuOpen && (
          <div
            className="fixed   bg-[#fff] bg-opacity-50 "
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        <div
          className={`container mx-auto mt-4 lg:flex justify-center gap-7 text-[#0F172A] text-[14px] text-center  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {[
            "Office Supplies",
            "Clothing",
            "Albums",
            "Stationery",
            "Packaging & Labels",
            "Clothing & Fabrics",
            "Gifts",
            "Ink & Printers",
          ].map((category, index) => (
            <span
              key={index}
              className="block py-2 cursor-pointer lg:inline-block hover:text-black"
            >
              {category}
            </span>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
