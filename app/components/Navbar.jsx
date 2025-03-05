"use client";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState("Riyadh");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [cities] = useState(["Riyadh", "Jeddah", "Dammam", "Mecca"]);

  return (
    <nav className="bg-white bg-opacity-80 p-4 backdrop-blur-sm md:px-20 px-5 fixed w-full z-[500] border-b border-gray-400">
      <div className="container mx-auto flex items-center justify-between gap-10">
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl h-[24px] w-[24px]"
          >
            {isMenuOpen ? <FaTimes /> : <IoIosMenu />}
          </button>
          <Image src={logo} alt="Print Logo" className="h-[35px] w-[69px]" />
        </div>

        <div className="hidden lg:flex items-center">
          <Image src={logo} alt="Print Logo" className="w-[78px] h-[46px]" />
        </div>

        <div className="hidden lg:flex items-center border border-gray-300 px-4 py-2 w-[691px] h-[40px] rounded-[28px]">
          <FaSearch className="text-gray-500 cursor-pointer mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>

        <div className="hidden lg:block relative">
          <button
            className="flex items-center border border-gray-300 px-4 py-2 rounded-full w-full h-[36px]"
            onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
          >
            {selectedCity} <IoIosArrowDown className="ml-2" />
          </button>
          {isCityDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
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
          <div className="lg:flex items-center gap-2 hidden cursor-pointer">
            <CiUser className="text-xl" />
            <h1 className="text-[16px]">Login</h1>
          </div>
          <div className="md:flex hidden">ع</div>
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
        <div className="container mx-auto mt-2 lg:hidden flex items-center border border-gray-300 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
          <FaTimes
            className="text-gray-500 cursor-pointer ml-2"
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
        className={`container mx-auto mt-4 lg:flex justify-center gap-10 text-[#0F172A] text-[14px] text-center  ${
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
            className="block lg:inline-block cursor-pointer hover:text-black py-2"
          >
            {category}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
