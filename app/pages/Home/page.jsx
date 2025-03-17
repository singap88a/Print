import Bannar_icon from "@/app/components/Home/Bannar_icon";
import Bannar_marketing from "@/app/components/Home/Bannar_marketing";
import Hero from "@/app/components/Home/Hero";
import Marketing_Card from "@/app/components/Home/Marketing_Card";
import Printing_services from "@/app/components/Home/printing_services";
import TOP_Selling_products from "@/app/components/Home/TOP_Selling_products";
import RecommendedProducts from "@/app/components/Product_Details/Products/RecommendedProducts";
import React from "react";

function Home_page() {
  return (
    <div>
      <Hero />
      <Printing_services />
      <Marketing_Card />
      <div className="py-10 md:px-20 3xl:px-40 px-[16px]">
        <RecommendedProducts />
      </div>
      <Bannar_marketing/>
      <TOP_Selling_products/>
      <Bannar_icon/>
      <div className="py-10 md:px-20 3xl:px-40 px-[16px]">
        <RecommendedProducts />
      </div>
    </div>
  );
}

export default Home_page;
