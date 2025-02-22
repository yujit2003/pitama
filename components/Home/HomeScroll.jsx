"use client"; // Ensures it runs on the client side

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import scrollHome from "../../images/home_scroll.jpg"; // Ensure correct path

const HomeScroll = () => {
  return (
    <div className="relative w-full md:h-[50vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds per slide
          disableOnInteraction: false, // Keeps autoplay running
        }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <Image
              width={1380}
              height={345}
              alt="Policy"
              src={scrollHome}
              className="w-full md:h-[48vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeScroll;
