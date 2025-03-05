"use client";

import React from "react";
import { products } from "./data";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductsSection = () => {
  const similarProducts = products.filter((p) => p.category === "similar");
  const recommendedProducts = products.filter(
    (p) => p.category === "recommendation"
  );

  return (
    <div className="md:px-20 px-5 py-10">
      <h2 className="text-[20px] font-bold mb-4">Similar Products</h2>
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="sm:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
        >
          {similarProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h2 className="text-[20px] font-bold mt-8 mb-4">Our Recommendations</h2>
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="sm:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="mySwiper"
        >
          {recommendedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSection;
