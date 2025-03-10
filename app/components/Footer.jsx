import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import footer_1 from "../../public/footer/footer_1.png";
import footer_2 from "../../public/footer/footer_2.png";
import footer_3 from "../../public/footer/footer_3.png";
import footer_4 from "../../public/footer/footer_4.png";
import footer_5 from "../../public/footer/footer_5.png";
import footer_6 from "../../public/footer/footer_6.png";

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] py-8 px-[16px] md:px-20 text-gray-700 3xl:px-40">
      <div className="container mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-6 py-6">
        <div>
          <Image src="/logo.png" alt="Print Plus" width={100} height={50} />
          <p className="mt-2 text-[15px] text-[#0F172A] font-[400]  ">
            Al-Sadhan Center, Mousa Bin Nasser <br /> Street, Al-Sulaimaniya
            District, Riyadh.
          </p>
          <p className="mt-1 text-[13px] text-[#000000] font-[500] ">
            +966 59 913 9318
          </p>
          <p className="mt-1 text-[13px] text-[#000000] font-[500]">
            support@print.sa
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-[#0F172A] text-[16px]">Help</h3>
            <ul className="mt-2 space-y-1 font-[400] text-[#0F172A]">
              <li>Track order</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#0F172A] text-[16px]">
              About Us
            </h3>
            <ul className="mt-2 space-y-1 font-[400] text-[#0F172A]">
              <li>About Us</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div>
          <Image src={footer_1} alt="VAT" className="w-[41px] h-[50px]" />
          <div className="flex space-x-3 mt-4 items-center">
            <Image src={footer_2} alt="Visa" className="w-[34px] h-[27px]" />
            <Image src={footer_3} alt="Mada" className="w-[41px] h-[13px]" />
            <Image src={footer_4} alt="Aramex" className="w-[43px] h-[14px]" />
            <Image src={footer_5} alt="Aramex" className="w-[69px] h-[11px]" />
            <Image src={footer_6} alt="Aramex" className="w-[27px] h-[27px]" />
          </div>
          <div className="flex space-x-4 mt-4 text-xl">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 border border-[#CBD5E1] rounded-full p-3"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-400 border border-[#CBD5E1] rounded-full p-3"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 border border-[#CBD5E1] rounded-full p-3"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 border border-[#CBD5E1] rounded-full p-3"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-between border-t pt-4 border-[#CBD5E1] md:flex-row flex-col-reverse  ">
        <div className="">
          <p className="mt-4 text-sm">&copy; 2025 Print Plus</p>
        </div>
        <div className="mt-4 text-sm flex   space-x-4">
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
