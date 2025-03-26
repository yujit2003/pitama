"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const BestSellers = () => {
  const products = [
    { name: "SONA MASOORI RICE", quantity: "20 lb bag", price: 24.99, imageSrc: "/SONA MASOORI RICE.jpg" },
    { name: "PONNI BOILED RICE", quantity: "20KG BAG", price: 43.5, imageSrc: "/PONNI BOILED RICE.jpg" },
    { name: "JEERAKASALA RICE", quantity: "20kg bag", price: 75, imageSrc: "/JEERAKASALA RICE.webp" },
    { name: "Blanched Peanut", quantity: "50 LB", price: 120, imageSrc: "/Blanched Peanut.jpg" },
    { name: "Jaggery Bulk", quantity: "1 kg x 12", price: 55, imageSrc: "/Jaggery Bulk.webp" },
    { name: "Idli Rava", quantity: "4lb x 10", price: 50, imageSrc: "/Idli Rava.webp" },
  ];

  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl md:text-4xl font-serif font-bold text-center mb-8 text-[#374151]">
        Best Sellers
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-md mb-4 object-cover h-[30vh]"
              />
              <h3 className="text-lg font-semibold text-[#374151] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.quantity}</p>
              <p className="text-xl font-bold text-[#374151] mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-6">
        <a href="/products">
          <button className="bg-[#374151] text-white hover:bg-[#a8b2b8] hover:text-[#374151] transition-all duration-300 py-3 px-6 text-lg font-semibold rounded-md shadow-md">
            Browse All Products
          </button>
        </a>
      </div>
    </div>
  );
};

export default BestSellers;